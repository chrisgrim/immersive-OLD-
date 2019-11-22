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
        $this->middleware('auth');
        $this->middleware('can:update,event');
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
     * Show the form for creating a new resource. Eager Load location with event. Load all of the regions. Load the pivot table that shows which regions are assigned to this event
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Event $event)
    {

        $event->load('location');
        $regions = Region::all();
        $pivots = $event->regions()->get();

        return view('create.location', compact('event','regions','pivots'));
    }

    /**
     * Store a newly created resource in storage. I update the location table with the request except token and region.
     I then sync the regions of the event to the request. Finally I add the lat and lon to the event model for easy searching
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LocationStoreRequest $request, Event $event)
    {
        $event->location->update($request->all());
        $event->regions()->sync(request('Region'));
        $event->update([
            'location_latlon' => [
                'lat' => $request->latitude,
                'lon' => $request->longitude,
            ],
        ]);
        

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function show(Location $location)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function edit(Location $location)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Location $location)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function destroy(Location $location)
    {
        //
    }
}
