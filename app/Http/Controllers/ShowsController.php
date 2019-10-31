<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Event;
use App\Ticket;
use App\Show;
use Carbon\Carbon;
use Redis;
use App\Http\Requests\ShowStoreRequest;

class ShowsController extends Controller
{
    /**
     * Create a new ShowsController instance.
     */
    public function __construct()
    {
        $this->middleware('auth');
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
        $event->shows()->delete();

        foreach( $request->dates as $date) {

            $show = Show::create([
                'date' => $date,
                'event_id' => $event->id
            ]);

            foreach ($request->tickets as $ticket) {
                Ticket::create([
                    'show_id' => $show->id,
                    'name' => $ticket['name'],
                    'ticket_price' => str_replace('$', '', $ticket['price'])
                ]);
            }
        };
        
        $lastDate = $event->shows()->orderBy('date', 'DESC')->first();

        $event->update([
            'closingDate' => $lastDate->date
        ]);


        Redis::del($event->id);
    }
    public function tempStore(Event $event, Request $request)
    {

        // Session::put('test', $request->all());
        Redis::set($event->id, json_encode($request->all()));
    }
    public function getTempStore(Event $event)
    {
        // return Session::get('test');
        return Redis::get($event->id);
    }
    public function loadDatabase(Event $event)
    {
        return $event->shows()->all();
     
    }
    public function loadShows(Event $event)
    {
        return $event->shows()->pluck('date');
    }
}
