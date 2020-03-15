<?php

namespace App\Http\Controllers;

use App\Organizer;
use App\Conversation;
use App\Event;
use App\Message;
use App\User;
use DB;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\OrganizerStoreRequest;
use App\Http\Requests\OrganizerUpdateRequest;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactUser;
use Redirect;

class OrganizerController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified'])->except(['show', 'message']);
        $this->middleware('can:update,organizer')->except(['store','show','create', 'message']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource and Eager load organizer with event and get organizers Check if user has auth
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Event $event)
    {
        $event->load('organizer');
        return view('create.organizer',compact('event'));
    }

    /**
     * Store a newly created resource in storage.
     Check if user has auth
     Create a new organizer model and store details.
     Create details for image naming then store it
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OrganizerUpdateRequest $request)
    {
        $validated = $request->validated();
        $organizer = Organizer::Create($request->except(['imagePath', 'user_id']) + ['user_id' => auth()->id()]);
        Organizer::saveFile($organizer, $request);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Organizer  $organizer
     * @return \Illuminate\Http\Response
     */
    public function show(Organizer $organizer)
    {
        return view('organizers.show', compact('organizer'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Organizer  $organizer
     * @return \Illuminate\Http\Response
     */
    public function edit(Organizer $organizer)
    {
        return view('organizers.edit', compact('organizer'));
    }

    /**
     * Update the specified resource in storage. 
        Update event with the correct organization.
        First Check to make sure user can edit the organizer. If not, then redirect back with error.

     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Organizer  $organizer
     * @return \Illuminate\Http\Response
     */
    public function update(OrganizerUpdateRequest $request, Organizer $organizer)
    {   
        $validated = $request->validated();

        // $request->imagePath ? $temp = Organizer::tempSave($request) : null;
        $organizer = Organizer::updateOrCreate(
            [
                'id' => $request->id,
            ],
            [
                'name' => $request->name,
                'slug' => $request->slug,
                'description' => $request->description,
                'website' => $request->website,
                'email' => $request->email,
                'twitterHandle' => $request->twitterHandle,
                'facebookHandle' => $request->facebookHandle,
                'instagramHandle' => $request->instagramHandle,
            ]
        );
        $request->imagePath ? Organizer::saveFile($organizer, $request) : null;
        // $request->imagePath ? Storage::delete('public/organizer-images/' . $temp) : null;
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Organizer  $organizer
     * @return \Illuminate\Http\Response
     */
    public function destroy(Organizer $organizer)
    {
        //
    }

    public function message(Request $request, Organizer $organizer, User $user)
    {
        
        $conversation = DB::table('conversation_user as a')
                ->join('conversation_user as b', 'a.id', '<','b.id')
                ->where(function($q) use ($user, $organizer){
                $q->where([['a.user_id','=',$user->id],['b.user_id','=',$organizer->user->id]])
                ->orWhere([['a.user_id','=',$organizer->user->id],['b.user_id','=',$user->id]]);
            })
            ->whereColumn('a.conversation_id','b.conversation_id')
            ->first();
            
        if($conversation) {
            Message::create([
                'conversation_id' => $conversation->conversation_id,
                'user_id' => $user->id,
                'message' => $request->message
            ]);
        } else {
            $ids = [$user->id, $organizer->user->id];
            $conversation = Conversation::create();
            $conversation->users()->sync($ids);
            Message::create([
                'conversation_id' => $conversation->id,
                'user_id' => $user->id,
                'message' => $request->message
            ]);
        }

        $organizer->user->update([
            'has_unread' => true
        ]);

        $attributes = [
            'email' => $user->email,
            'body' => $request->message,
            'username' => $user->name,
        ];

        $organizer->email ? $dest = $organizer->email : $dest = $organizer->user->email;
        Mail::to($dest)->send(new ContactUser($attributes));
    }
}
