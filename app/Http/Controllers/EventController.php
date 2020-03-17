<?php

namespace App\Http\Controllers;

use App\Event;
use App\Region;
use App\CityList;
use App\Category;
use App\Organizer;
use App\StaffPick;
use Session;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Requests\TitleUpdateRequest;
use Illuminate\Support\LazyCollection;

class EventController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified'])->except('index','show');
        $this->middleware('can:update,event')
        ->except(['index','create','show','editEvents','store','fetchEditEvents']);
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
        $categories = Category::all();
        $staffpicks = StaffPick::whereDate('end_date','>=', Carbon::now())
            ->whereDate('start_date', '<=', Carbon::now())
            ->orderBy('rank', 'ASC')
            ->get();
        return view('events.index',compact('events', 'categories','staffpicks'));
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
     * Loads the users created events
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function editEvents()
    {
        return view('events.edit');
    }

    /**
     * Loads the users created events
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function fetchEditEvents()
    {
        return Organizer::getOrganizerEvents();
    }

    /**
     * Store a newly created resource in storage. When I first create event I create a location and expectation at the same time. Depending on if the store came from axios or a form I send the data back as a object or a redirect.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $event = Event::newEvent($request);
        return $event;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        if(!$event->approved) { return redirect('/');}
        $event->load('category', 'organizer', 'location', 'contentAdvisories', 'contactLevels', 'mobilityAdvisories', 'eventreviews', 'staffpick');
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
        $event->deleteEvent($event);
        return auth()->user()->events;
    }

    /**
     * Returns Title Page in Creation Process
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function title(Event $event)
    {
        return view('create.title', compact('event'));
    }

    /**
     * Fetches the current Event Title for the creation process. This involves the timestamp process
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function fetchTitle(Event $event)
    {
        return $event;
    }

    public function updateTitle(Request $request, Event $event)
    {
        $event->update([ 
            'name' => request('name'),
            'tag_line' => request('tagline')
        ]);
    }

    /**
     * Returns Review Page in Creation Process
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function review(Event $event)
    {
        $event->load('category', 'organizer', 'location', 'contentAdvisories', 'contactLevels', 'mobilityAdvisories');
        return view('create.review', compact('event'));
    }

    public function submitEvent(Event $event) 
    {
        $event->finalizeEvent($event);
    }

    public function thanks(Event $event)
    {
        return redirect('create-event/edit')->with('message', 'Thanks for submitting your event.');
    }
}
