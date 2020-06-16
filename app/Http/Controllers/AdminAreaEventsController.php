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
        return view('adminArea.boneyard');
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
        return Event::onlyTrashed()->take($request->paginate)->get();
    }
}
