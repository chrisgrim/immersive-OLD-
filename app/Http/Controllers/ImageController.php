<?php

namespace App\Http\Controllers;

use App\Event;
use App\EventImage;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

class ImageController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
        $this->middleware('can:update,event');
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

        if ($event->status == 'd') {
            EventImage::saveNewImage($request, $event, 1280, 720);
        } else {
            EventImage::updateImage($request, $event, 1280, 720);
        }

    }
}
