<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Event;
use App\Show;
use App\Timezone;
use App\ShowOnGoing;
use Carbon\Carbon;
use App\Http\Requests\ShowStoreRequest;
use Illuminate\Support\Facades\Log;

class ShowsController extends Controller
{
    /**
     * Create a new ShowsController instance.
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
        $this->middleware('can:update,event');
    }
    /**
     * Show the form for creating a new resource and passing the event variable
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Event $event)
    {
        // if ($event->status < 3) { abort(403); }
        $event->load('showOnGoing','shows.tickets','timezone');
        $timezones = Timezone::all()->sortBy('offset')->values();
        return view('create.show', compact('event', 'timezones'));
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Event $event)
    {

        if($request->onGoing) {
            ShowOnGoing::saveNewShowOnGoing($request, $event, $request->start_date);
            Show::saveNewShows($request, $event);
        }

        if ($request->always) {
            Show::saveAlwaysShow($request, $event);
        }

        if ($request->shows) {
            Show::saveNewShows($request, $event);
        }

        Show::updateEvent($request, $event);

        //Checks to see if dates have been added then updates status to 4
        if ($event->status < 5 && !$event->isLive() && $event->closingDate && $event->show_times && $event->showtype && $event->closingDate) {
            $event->update([ 'status' => '4' ]);
        }

        $event = $event->fresh();
        $event->searchable();
    }

    /**
     * Fetch the stored shows and tickets
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function fetch(Event $event)
    {
        if ($event->showtype == 's' ) {
            return response()->json(array(
                'dates' => $event->shows()->pluck('date'),
                'tickets' => $event->shows()->with('tickets')->get(),
                'showTimes' => $showTimes = $event->show_times,
                'embargo_date' => $event->embargo_date,
            ));
        }
        if($event->showtype == 'o') {
            return response()->json(array(
                'week' => $event->showOnGoing()->first(),
                'tickets' => $event->shows()->with('tickets')->get(),
                'showTimes' => $showTimes = $event->show_times,
                'embargo_date' => $event->embargo_date,
            ));
        }
        if($event->showtype == 'a') {
            return response()->json(array(
                'week' => $event->showOnGoing()->first(),
                'tickets' => $event->showOnGoing()->with('tickets')->get(),
                'showTimes' => $showTimes = $event->show_times,
                'embargo_date' => $event->embargo_date,
            ));
        }
    }
}
