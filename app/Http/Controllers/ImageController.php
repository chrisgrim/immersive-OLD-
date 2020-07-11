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
        // if ($event->status < 7) { abort(403); }
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
        if (!$event->isLive()) {
            MakeImage::saveNewImage($request, $event, 1280, 720, 'event');
        } else {
            MakeImage::updateImage($request, $event, 1280, 720, 'event');
        }

        //Checks to see if category has been selected then updates status to 3
        if (!$event->isLive() && $event->largeImagePath) {
            $event->update([ 'status' => '8' ]);
        }

        return $event;

    }
}
