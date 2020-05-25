<?php

namespace App\Http\Controllers;

use App\Location;
use App\Event;
use App\RemoteLocation;
use Illuminate\Http\Request;
use App\Http\Requests\LocationStoreRequest;


class LocationController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
        $this->middleware('can:update,event');
    }

    /**
     * Show the form for creating a new resource. Eager Load location with event. Load the pivot table that shows which regions are assigned to this event
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Event $event)
    {
        $event->load('location', 'remotelocations');
        $remote = RemoteLocation::where('admin', true)->orWhere('user_id', auth()->user()->id)->get();
        return view('create.location', compact('event', 'remote'));
    }

    /**
     * Show the form for creating a new resource. Eager Load location with event. Load the pivot table that shows which regions are assigned to this event
     *
     * @return \Illuminate\Http\Response
     */
    public function fetch(Event $event)
    {
        return $data = [
            'location' => $event->location()->first(),
            'pivots' => $event->remotelocations()->get(),
        ];
    }

    /**
     * Send to Location Model
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LocationStoreRequest $request, Event $event)
    {
        if($request->remote) {
            Location::storeRemoteLocation($request, $event);
        } else {
            Location::storeEventLocation($request, $event);
        }

    }
}
