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
        $this->middleware('admin');
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function boneyard()
    {
        $events = Event::onlyTrashed()->whereNotNull('name')->limit(10)->get();
        return view('adminArea.boneyard', compact('events'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function fetch(Request $request)
    {
        return Event::all()->where('status','p')->take($request->paginate);
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

        Event::where('id', $event)
                ->update([
                    'status' => 'd',
                ]);
    }
}
