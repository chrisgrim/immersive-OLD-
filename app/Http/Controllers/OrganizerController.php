<?php

namespace App\Http\Controllers;

use App\Organizer;
use App\Event;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\OrganizerStoreRequest;
use App\Http\Requests\OrganizerUpdateRequest;

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
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Event $event)
    {
        //eager load organizer with $event variable
        $event->load('organizer');
        
        //load all the organizer into the $organizers variable
        $organizers = Organizer::limit(30)->get();
        
        return view('create.organizer',compact('event','organizers'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OrganizerStoreRequest $request, Event $event)
    {

        $organizer = Organizer::Create($request->except(['imagePath']) + ['user_id' => auth()->id()]);

        if ($request->hasFile('imagePath')) {
            
            //Create File Info
            $extension = $request->file('imagePath')->getClientOriginalExtension();
            $filename= $request->slug . '-' . 'organization' . '_' . rand(1,50000) .'.'.$extension;
            $path = "organizer-images/$filename";


            //Store File
            $request->file('imagePath')->storeAs('/public/organizer-images', $filename);

            //Resize File   
            Image::make(storage_path()."/app/public/organizer-images/$filename")->fit(1200, 800)->save(storage_path("/app/public/$path"));

            //Update Image Paths
            $organizer->update([
                    'imagePath' => $path
            ]);
 
        }

        $event->update([
            'organizer_id' => $organizer->id
        ]);
        
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
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Organizer  $organizer
     * @return \Illuminate\Http\Response
     */
    public function update(OrganizerUpdateRequest $request, Event $event, Organizer $organizer)
    {



        $organizer->update($request->except(['imagePath']));

        
        if ($request->hasFile('imagePath')) {
            
            Storage::delete('public/' . $organizer->imagePath);
            //Create File Info
            $extension = $request->file('imagePath')->getClientOriginalExtension();
            $filename= $request->slug . '-' . 'organization' . '_' . rand(1,50000) .'.'.$extension;
            $path = "organizer-images/$filename";

            //Store File
            $request->file('imagePath')->storeAs('/public/organizer-images', $filename);

            //Resize File   
            Image::make(storage_path()."/app/public/organizer-images/$filename")->fit(1200, 800)->save(storage_path("/app/public/$path"));

            //Update Image Paths
            $organizer->update([
                    'imagePath' => $path
            ]);
        }

        $event->update(['organizer_id' => $organizer->id]);

       
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
