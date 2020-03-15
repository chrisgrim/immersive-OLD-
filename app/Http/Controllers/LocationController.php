<?php

namespace App\Http\Controllers;

use App\Location;
use App\Event;
use App\Region;
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
     * Show the form for creating a new resource. Eager Load location with event. Load all of the regions. Load the pivot table that shows which regions are assigned to this event
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Event $event)
    {
        return view('create.location', compact('event'));
    }

    /**
     * Show the form for creating a new resource. Eager Load location with event. Load all of the regions. Load the pivot table that shows which regions are assigned to this event
     *
     * @return \Illuminate\Http\Response
     */
    public function fetch(Event $event)
    {
        return response()->json(array(
            'location' => $event->location()->first(),
        ));
    }

    /**
     * Send to Location Model
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LocationStoreRequest $request, Event $event)
    {
        Location::storeEventLocation($request, $event);
    }
}
