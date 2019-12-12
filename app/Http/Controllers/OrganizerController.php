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
        $this->middleware('auth')->except(['show']);
        $this->middleware('can:update,organizer')->except(['store','show','create']);
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
    public function store(OrganizerStoreRequest $request, Event $event)
    {
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
        
        if ($organizer->user_id == auth()->id()) {
            $event->update(['organizer_id' => $organizer->id]);
            $organizer->update($request->except(['imagePath', 'newImageUpload']));
            if ($request->hasFile('imagePath') && $request->newImageUpload == true) {
                Organizer::saveFile($organizer, $request);
            };
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
