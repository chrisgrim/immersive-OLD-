<?php

namespace App\Http\Controllers;

use App\Event;
use App\MakeImage;
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
            MakeImage::saveNewImage($request, $event, 1280, 720, 'event');
        } else {
            MakeImage::updateImage($request, $event, 1280, 720, 'event');
        }

    }
}
