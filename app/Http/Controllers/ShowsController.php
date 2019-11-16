<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Event;
use App\Ticket;
use App\Show;
use Carbon\Carbon;
use Redis;
use Session;
use App\Http\Requests\ShowStoreRequest;

class ShowsController extends Controller
{
    /**
     * Create a new ShowsController instance.
     */
    public function __construct()
    {
        $this->middleware('auth');
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
    public function store(ShowStoreRequest $request, Event $event)
    {
        $showDelete = $event->shows()->whereNotIn('date', $request->dates)->get();

        foreach($showDelete as $show){
            $show->tickets()->delete();
        }
        $event->shows()->whereNotIn('date', $request->dates)->delete();


        foreach( $request->dates as $date) {

            $show = Show::updateOrCreate([
                'date' => $date,
                'event_id' => $event->id
            ]);


            foreach ($request->tickets as $ticket) {
                $ticketname[] = $ticket['name'];
            };

            $show->tickets()->whereNotIn('name', $ticketname)->delete();

            foreach ($request->tickets as $ticket) {
                Ticket::updateOrCreate([
                    'show_id' => $show->id,
                    'name' => $ticket['name'],
                ],
                [
                    'ticket_price' => str_replace('$', '', $ticket['ticket_price'])
                ]);
            }
        };
        
        $lastDate = $event->shows()->orderBy('date', 'DESC')->first();

        $event->update([
            'closingDate' => $lastDate->date,
            'show_times' => $request->showtimes,
        ]);

        Session::forget($event->id .'dates');   
    }
    public function tempStore(Event $event, Request $request)
    {
        Session::put($event->id . 'dates', $request->all());   
    }
    public function getTempStore(Event $event)
    {
        return Session::get($event->id . 'dates');
    }
    public function loadDatabase(Event $event)
    {
        return $event->shows()->all();
    }
    public function loadShows(Event $event)
    {
        $tickets = $event->shows()->with('tickets')->get();
        $dates =  $event->shows()->pluck('date');
        $showTimes = $event->show_times;
        return response()->json(array(
            'dates' => $dates,
            'tickets' => $tickets,
            'showTimes' => $showTimes
        ));
    }
}
