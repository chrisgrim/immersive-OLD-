<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Event;
use App\Show;
use App\ShowOnGoing;
use App\Ticket;
use Carbon\Carbon;
use App\Http\Requests\TicketStoreRequest;

class TicketsController extends Controller
{
    /**
     * Create a new Tickets Controller validation .
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
        // if ($event->status < 4) { abort(403); }
        $event->load('showOnGoing','shows.tickets');
        return view('create.ticket', compact('event'));
    }

    /**
     * Store a newly created resource in storage.
     * 
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TicketStoreRequest $request, Event $event)
    {
        // goes through each show attached to the event
        foreach( $event->shows as $show) {

            //  gets a list of all submitted tickets
            foreach ($request->tickets as $ticket) {
                $ticketname[] = $ticket['name'];
            };

            //  checks name of tickets against any tickets already assigned to show and deletes any that aren't there
            $show->tickets()->whereNotIn('name', $ticketname)->delete();

            //  goes through and updates or creates new tickets for each show 

            foreach ($request->tickets as $ticket) {
                 $show->tickets()->updateOrCreate([
                    'name' => $ticket['name'],
                ],
                [
                    'description' => $ticket['description'],
                    'ticket_price' => str_replace('$', '', $ticket['ticket_price']),
                    'type' => $ticket['type']['type']
                ]);
            }
        };

        //  Delete previous price ranges
        $event->priceranges()->delete();

        //  Create new Price ranges based off request tickets and create an array from them
        foreach ($request->tickets as $ticket) {
            $event->priceranges()->Create([
                'price' => $ticket['ticket_price']
            ]);
            $array[] = $ticket['ticket_price'];
            $name[] = $ticket['name'];
            $types[] = $ticket['type']['type'];
        }

        $pricerange = Ticket::getPriceRange($array, $types);


        // Add price range string to event
        $event->update([
            'price_range' => $pricerange,
            'ticketUrl' => $request->ticketUrl,
            'call_to_action' => $request->callAction,
        ]);

        //Checks to see if category has been selected then updates status to 3
        if ( $event->status < 6 && $event->isInProgress() && $event->price_range && $event->ticketUrl ) {
            $event->update([ 'status' => '5' ]);
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
        return response()->json(array(
            'tickets' => $event->shows()->with('tickets')->get(),
            'ticketUrl' => $event->ticketUrl,
        ));
    }
}
