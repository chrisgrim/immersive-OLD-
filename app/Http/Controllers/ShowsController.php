<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Event;
use App\Show;
use App\ShowOnGoing;
use App\Http\Requests\ShowStoreRequest;

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
        $event->load('showOnGoing','shows.tickets');
        return view('create.show', compact('event'));
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
            ShowOnGoing::saveNewShowOnGoing($request, $event);
            Show::deleteOld($request, $event);
            Show::saveNewShows($request, $event);
        }

        if ($request->always) {
            Show::saveAlwaysShow($request, $event);
        }

        if ($request->shows) {
            Show::deleteOld($request, $event);
            Show::saveNewShows($request, $event);
        }

        Show::updateEvent($request, $event);
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
