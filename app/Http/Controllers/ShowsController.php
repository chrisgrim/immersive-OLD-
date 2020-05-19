<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Event;
use App\Show;
use App\ShowOnGoing;
use Carbon\CarbonPeriod;
use Carbon\CarbonInterval;
use Carbon\Carbon;
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
            $dates=[];
            $period = CarbonPeriod::create(Carbon::now()->startOfDay(), Carbon::now()->startOfDay()->addMonths(6));
            foreach ($period as $date) {
                if ($date->isMonday() && $request->week['mon']) {$dates[]=$date->format('Y-m-d H:i:s');}
                if ($date->isTuesday() && $request->week['tue']) {$dates[]=$date->format('Y-m-d H:i:s');}
                if ($date->isWednesday() && $request->week['wed']) {$dates[]=$date->format('Y-m-d H:i:s');}
                if ($date->isThursday() && $request->week['thu']) {$dates[]=$date->format('Y-m-d H:i:s');}
                if ($date->isFriday() && $request->week['fri']) {$dates[]=$date->format('Y-m-d H:i:s');}
                if ($date->isSaturday() && $request->week['sat']) {$dates[]=$date->format('Y-m-d H:i:s');}
                if ($date->isSunday() && $request->week['sun']) {$dates[]=$date->format('Y-m-d H:i:s');}
            }
            $request->request->add(['dates' => $dates]);
            Show::deleteOld($request, $event);
            Show::saveNewShows($request, $event);
        }

        if ($request->always) {
            $event->shows()->delete();
            $event->showOnGoing()->update([
                'mon' => true,
                'tue' => true,
                'wed' => true,
                'thu' => true,
                'fri' => true,
                'sat' => true,
                'sun' => true,
            ]);
            $show = $event->shows()->create([
                'date' => Carbon::now()->addMonths(6)->format('Y-m-d H:i:s'),
            ]);
            foreach ($request->tickets as $ticket) {
                 $show->tickets()->updateOrCreate([
                    'name' => $ticket['name'],
                ],
                [
                    'ticket_price' => str_replace('$', '', $ticket['ticket_price'])
                ]);
            }
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
