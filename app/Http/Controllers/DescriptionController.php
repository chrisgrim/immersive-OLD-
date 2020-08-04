<?php

namespace App\Http\Controllers;

use App\Genre;
use App\Event;
use Illuminate\Http\Request;
use App\Http\Requests\DescriptionStoreRequest;

class DescriptionController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
        $this->middleware('can:update,event');
    }

    /**
     * Show the form for creating a new resource. $Pivots gets the genres assigned to the event
     $genres gets all the genres in the list.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Event $event)
    {
        // if ($event->status < 5) { abort(403); }
        $event->load('genres');
        $tags = Genre::where('admin', true)->orWhere('user_id', auth()->user()->id)->get();
        return view('create.description', compact('event', 'tags'));
    }

     /**
     * Show the form for creating a new resource. $Pivots gets the genres assigned to the event
     $genres gets all the genres in the list.
     *
     * @return \Illuminate\Http\Response
     */
    public function fetch(Event $event)
    {
        return response()->json(array(
            'event' => $event,
            'genres' => $event->genres()->get(),
        ));
    }

    /**
     * Store Description
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DescriptionStoreRequest $request, Event $event)
    {  
        $event->storeDescription($request, $event);
        $event = $event->fresh();
        $event->searchable();

        //Checks to see if description has been sgored then updates status to 6
        if ( $event->status < 7 && $event->isInProgress() && $event->genres()->exists() && $event->description ) {
            $event->update([ 'status' => '6' ]);
        }
    }
}
