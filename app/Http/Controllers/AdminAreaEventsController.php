<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;

class AdminAreaEventsController extends Controller
{
    /**
     * Checks for admin before allowing controller access
     *
     * @return \Illuminate\Http\__construct
     */
    public function __construct()
    {
        $this->middleware('moderator');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('adminArea.events');
    }

    /**
     * Display a listing of the resource in Boneyard.
     *
     * @return \Illuminate\Http\Response
     */
    public function boneyard()
    {
        $events = Event::onlyTrashed()
                ->whereNotNull('name')
                ->orderByDESC('created_at')
                ->limit(10)
                ->get();
        return view('adminArea.boneyard', compact('events'));
    }

/**
     * Display a listing of the resource in Purgatory.
     *
     * @return \Illuminate\Http\Response
     */
    public function purgatory()
    {
        $events = Event::where('status', '!=', 'p')
                ->where('status', '!=', 'e')
                ->whereNotNull('name')
                ->orderByDESC('created_at')
                ->limit(10)
                ->get();
        return view('adminArea.purgatory', compact('events'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function fetch(Request $request)
    {
        return Event::where('status','p')->take($request->paginate)->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function boneyardFetch(Request $request)
    {
        return Event::onlyTrashed()
                ->whereNotNull('name')
                ->orderByDESC('created_at')
                ->paginate(10);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function purgatoryFetch(Request $request)
    {
        return Event::where('status', '!=', 'p')
                ->where('status', '!=', 'e')
                ->whereNotNull('name')
                ->orderByDESC('created_at')
                ->paginate(10);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function resurrect($event)
    {
        $eventrestore = Event::withTrashed()
                ->where('id', $event)
                ->restore();

        if (false) {
            Event::where('id', $event)->update(['status' => '8']);
        }
    }
}
