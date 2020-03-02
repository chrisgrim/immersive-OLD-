<?php

namespace App\Http\Controllers;

use App\StaffPick;
use App\Event;
use App\EventSearchRule;
use Illuminate\Http\Request;

class StaffPicksController extends Controller
{
    /**
    * Checks for admin before allowing controller access
    *
    * @return \Illuminate\Http\Response
    */
    public function __construct()
    {
        $this->middleware('admin')->except('fetch');
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return StaffPick::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('adminArea.staffpicks');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function fetch(Request $request)
    {
        if($request->keywords) {
            return $events = Event::search($request->keywords)
                ->rule(EventSearchRule::class)
                ->get();
        }
        return Event::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        StaffPick::updateOrCreate(
            [
            'event_id' => $request->event,
            ],
            [
            'user_id' => auth()->id(),
            'rank' => $request->rank ? $request->rank : 5,
            'start_date' => $request->dates[0],
            'end_date' => $request->dates[1]
            ]
    );
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\StaffPick  $staffPick
     * @return \Illuminate\Http\Response
     */
    public function show(StaffPick $staffPick)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\StaffPick  $staffPick
     * @return \Illuminate\Http\Response
     */
    public function edit(StaffPick $staffPick)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\StaffPick  $staffPick
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $staffPick)
    {
        return $staffPick;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\StaffPick  $staffPick
     * @return \Illuminate\Http\Response
     */
    public function destroy(StaffPick $staffPick)
    {
        //
    }
}
