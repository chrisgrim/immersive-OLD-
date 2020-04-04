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
        if ($request->onGoing) {
            foreach ($event->shows()->get() as $show) {
                $show->tickets()->delete();
            }
            $event->shows()->delete();
            ShowOnGoing::saveNewShowOnGoing($request, $event);
        }
        if ($request->shows) {
            if ($event->showOnGoing()->exists()) {
                $event->showOnGoing()->first()->tickets()->delete();
                $event->showOnGoing()->first()->delete();
            }
            Show::deleteOld($request, $event);
            Show::saveNewShows($request, $event);
        }

        Show::updateEvent($request, $event);
    }

    /**
     * Fetch the stored shows and tickets
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function fetch(Event $event)
    {
        if ($event->showtype == 's') {
            return response()->json(array(
                'dates' => $event->shows()->pluck('date'),
                'tickets' => $event->shows()->with('tickets')->get(),
                'showTimes' => $showTimes = $event->show_times
            ));
        }
        if($event->showtype == 'o' || $event->showtype == 'a') {
            return response()->json(array(
                'week' => $event->showOnGoing()->first(),
                'tickets' => $event->showOnGoing()->with('tickets')->get(),
                'showTimes' => $showTimes = $event->show_times
            ));
        }
    }
}
