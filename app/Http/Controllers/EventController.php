<?php

namespace App\Http\Controllers;

use App\Event;
use App\Region;
use App\CityList;
use App\Category;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Requests\TitleUpdateRequest;
use Illuminate\Support\LazyCollection;

class EventController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->except('index','get','show');
        $this->middleware('can:update,event')
        ->except(['index','get','create','show','editEvents','store']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Event $event)
    {
        $events = Event::search('*')
            ->where('closingDate', '>=', 'now/d')
            ->take(6)
            ->get();
        return view('events.index',compact('events'));
    }


    public function get(Request $request)
    {
        $events = Event::search('*')
            // ->where('closingDate', '<=', 'now/d')
            ->take(6)
            ->get();

        return $events;
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('create.initial');
    }

    /**
     * Store a newly created resource in storage. When I first create event I create a location and expectation at the same time. Depending on if the store came from axios or a form I send the data back as a object or a redirect.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $event = Event::newEvent();
        if ($request->type == 'axios') { return $event; };
        return redirect('/create-event/'. $event->slug . '/organizer');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        $event->load('category', 'organizer', 'location');
        return view('events.show', compact('event'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function edit(Event $event)
    {
        $event->load('organizer');
        return view('create.organizer',compact('event'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Event $event)
    {
        $event->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function destroy(Event $event)
    {
        $event->delete();
        $events = auth()->user()->events;
        return $events;
    }

    /**
     * Loads the users created events
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function editEvents(Event $event)
    {
        $events = auth()->user()->events;
        return view('events.edit', compact('events'));
    }

    public function createCategory(Event $event)
    {
        $event->load('category');
        $categories = Category::all();

        return view('create.category', compact('event','categories'));
    }
    
    public function updateCategory(Request $request, Event $event)
    {
        $event->update([ 'category_id' => request('id') ]);
    }
    public function updateTitle(TitleUpdateRequest $request, Event $event)
    {
        $event->update([ 'name' => request('name') ]);
    }
    public function title(Event $event)
    {
        return view('create.title', compact('event'));
    }
    public function thanks(Event $event)
    {
        $website = $event->organizer->website;
        
        if ($event->websiteUrl == null) {
            $event->update([ 'websiteUrl' => $website ]);
        }
        if ($event->ticketUrl == null) {
            $event->update([ 'ticketUrl' => $website ]);
        }
        $event->update([
            'approval_process' => 'ready',
        ]);
        return view('create.thanks');
    }
}
