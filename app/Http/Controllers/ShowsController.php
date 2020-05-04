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
        return view('create.show', compact('event'));
    }

    public function getMondays()
    {
        new \DatePeriod(
            Carbon::parse("first monday of this month"),
            CarbonInterval::week(),
            Carbon::parse("first monday of next month")
        );
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

        }
        Show::deleteOld($request, $event);
        Show::saveNewShows($request, $event);

        // if ($request->onGoing) {
        //     foreach ($event->shows()->get() as $show) {
        //         $show->tickets()->delete();
        //     }
        //     $event->shows()->delete();
        //     ShowOnGoing::saveNewShowOnGoing($request, $event);
        // }
        // if ($request->shows) {
        //     if ($event->showOnGoing()->exists()) {
        //         $event->showOnGoing()->first()->tickets()->delete();
        //         $event->showOnGoing()->first()->delete();
        //     }
        //     Show::deleteOld($request, $event);
        //     Show::saveNewShows($request, $event);
        // }

        Show::updateEvent($request, $event);
        //updates scout for elastic search
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
                'showTimes' => $showTimes = $event->show_times
            ));
        }
        if($event->showtype == 'o') {
            return response()->json(array(
                'week' => $event->showOnGoing()->first(),
                'tickets' => $event->shows()->with('tickets')->get(),
                'showTimes' => $showTimes = $event->show_times
            ));
        }
        if($event->showtype == 'a') {
            return response()->json(array(
                'week' => $event->showOnGoing()->first(),
                'tickets' => $event->showOnGoing()->with('tickets')->get(),
                'showTimes' => $showTimes = $event->show_times
            ));
        }
    }
}
