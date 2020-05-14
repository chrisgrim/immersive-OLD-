<?php

namespace App\Http\Controllers;

use App\Location;
use App\Event;
use App\Region;
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
        return $data = [
            'location' => $event->location()->first(),
            'pivots' => $event->remotelocations()->get(),
            'remoteLocations' => RemoteLocation::where('admin', true)->orWhere('user_id', auth()->user()->id)->get()
        ];
        // return response()->json(array(
        //     'location' => $event->location()->first(),
        // ));
    }

    /**
     * Send to Location Model
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LocationStoreRequest $request, Event $event)
    {
        if($request->noLocation) {
            if ($request->has('remoteLocation')) {
                foreach ($request['remoteLocation'] as $loc) {
                    RemoteLocation::firstOrCreate([
                        'location' => strtolower($loc)
                    ],
                    [
                        'user_id' => auth()->user()->id,
                    ]);
                };
                $newSync = RemoteLocation::all()->whereIn('location',  array_map('strtolower', $request['remoteLocation']));
                $event->remotelocations()->sync($newSync);
            };

            return $event->update([
                'hasLocation' => false,
                'location_latlon' => null,
        ]);}

        Location::storeEventLocation($request, $event);
    }
}
