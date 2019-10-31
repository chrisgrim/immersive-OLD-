<?php

namespace App\Http\Controllers;

use App\Expect;
use App\Event;
use App\ContactLevel;
use Illuminate\Http\Request;
use App\Http\Requests\ExpectationStoreRequest;

class ExpectController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Event $event)
    {
        //load expectation model with the Event model
        $event->load('expectation');

        //load all contactlevels connected with this event
        $pivots = $event->contactlevels()->get();

        //load all of the contact levels
        $contactLevels = ContactLevel::all();

        return view('create.expect', compact('event','contactLevels','pivots'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ExpectationStoreRequest $request, Event $event)
    {

        //update the expect table with information
        $event->expectation->update($request->except(['contactLevel']));

        //update the pivot table with the selected contactLevels for this event
        $event->contactlevels()->sync(request('contactLevel'));

        //update event with the id of the expect table
        $event->update(['expectation_id' => $event->expectation->id]);

 
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Expect  $expect
     * @return \Illuminate\Http\Response
     */
    public function show(Expect $expect)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Expect  $expect
     * @return \Illuminate\Http\Response
     */
    public function edit(Expect $expect)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Expect  $expect
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Expect $expect)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Expect  $expect
     * @return \Illuminate\Http\Response
     */
    public function destroy(Expect $expect)
    {
        //
    }
}
