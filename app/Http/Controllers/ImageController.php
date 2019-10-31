<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class ImageController extends Controller
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
        return view('create.image', compact('event'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Event $event)
    {
        if ($request->hasFile('image')) {
            
            //Create File Info
            $title = $event->slug;
            $extension = $request->file('image')->getClientOriginalExtension();
            $filename= $title.'.'.$extension;
            $imagePath = "event-large-images/$filename";
            $thumbnailPath = "event-thumb-images/thumb-$filename";

            //Store File
            $request->file('image')->storeAs('/public/event-large-images', $filename);

            //Resize File   
            Image::make(storage_path()."/app/public/event-large-images/$filename")->fit(1200, 800)->save(storage_path("/app/public/$imagePath"))->fit(600, 400)->save(storage_path("/app/public/$thumbnailPath"));

            //Update Image Paths
            $event->update([
                    'largeImagePath' => $imagePath,
                    'thumbImagePath' => $thumbnailPath,
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function show(Image $image)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function edit(Image $image)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Image $image)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Image  $image
     * @return \Illuminate\Http\Response
     */
    public function destroy(Image $image)
    {
        //
    }
}
