<?php

namespace App\Http\Controllers;

use App\Event;
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
        $this->middleware('auth')->except('index','get');
        // $this->middleware('admin');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Event $event)
    {
        $events = Event::search('*')
            // ->where('closingDate', '<=', 'now/d')
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
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //create a new blank event with a random slug.

        $event = Event::create([
            'user_id' => auth()->id(),
            'slug' => rand()
        ]);
        $event->location()->Create();
        $event->expectation()->Create();
        
        return redirect('/create-event/'. $event->slug . '/location');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show(Event $event)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function edit(Event $event)
    {
        //
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
        //
    }

    public function createCategory(Event $event)
    {
        $event->load('category');

        $categories = Category::all();

        return view('create.category', compact('event','categories'));
    }
    
    public function updateCategory(Request $request, Event $event)
    {
        $event->update([
            'category_id' => request('id')
        ]);

    }
    public function updateTitle(TitleUpdateRequest $request, Event $event)
    {
        $event->update([
            'name' => request('name'),
            'slug' => str_slug(request('name'))
        ]);
        
        return response()->json(compact('event'));

    }
    public function title(Event $event)
    {
        return view('create.title', compact('event'));
    }
}
