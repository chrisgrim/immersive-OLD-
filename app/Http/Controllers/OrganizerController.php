<?php

namespace App\Http\Controllers;

use App\Organizer;
use App\Event;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\OrganizerStoreRequest;
use App\Http\Requests\OrganizerUpdateRequest;
use Redirect;

class OrganizerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
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
     * Show the form for creating a new resource and Eager load organizer with event and get organizers
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
     Create a new organizer model and store details.
     Create details for image naming then store it
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OrganizerStoreRequest $request, Event $event)
    {
        $organizer = Organizer::Create($request->except(['imagePath', 'user_id']) + ['user_id' => auth()->id()]);

        $extension = $request->file('imagePath')->getClientOriginalExtension();
        $filename= $request->slug . '-' . 'organization' . '_' . rand(1,50000) .'.'.$extension;
        $path = "organizer-images/$filename";
        $request->file('imagePath')->storeAs('/public/organizer-images', $filename);
        Image::make(storage_path()."/app/public/organizer-images/$filename")->fit(1200, 800)->save(storage_path("/app/public/$path"));
        $organizer->update([ 'imagePath' => $path ]);
        $event->update([ 'organizer_id' => $organizer->id ]);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Organizer  $organizer
     * @return \Illuminate\Http\Response
     */
    public function show(Organizer $organizer)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Organizer  $organizer
     * @return \Illuminate\Http\Response
     */
    public function edit(Organizer $organizer)
    {
        //
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
    public function update(OrganizerUpdateRequest $request, Event $event, Organizer $organizer)
    {
        $event->update(['organizer_id' => $organizer->id]);

        if ($organizer->user_id !== auth()->id()) { return response()->json(array(['Not_Owner' => 'Organization was not changed as you were not the owner'])); };

        $organizer->update($request->except(['imagePath']));
        
        if ($request->hasFile('imagePath')) {

            Storage::delete('public/' . $organizer->imagePath);

            $extension = $request->file('imagePath')->getClientOriginalExtension();
            $filename= $request->slug . '-' . 'organization' . '_' . rand(1,50000) .'.'.$extension;
            $path = "organizer-images/$filename";
            $request->file('imagePath')->storeAs('/public/organizer-images', $filename); 
            Image::make(storage_path()."/app/public/organizer-images/$filename")->fit(1200, 800)->save(storage_path("/app/public/$path"));
            $organizer->update([ 'imagePath' => $path ]);
        }

       
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
}
