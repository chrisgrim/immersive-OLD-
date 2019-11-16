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
     * Show the form for creating a new resource. I Load expectation with event, then I load the contact levels associated with the event alread (if there are any) and name it pivots. Finally I add all the contact level options as the variable contactlevels
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Event $event)
    {
        $this->authorize('update', $event);
        $event->load('expectation');
        $pivots = $event->contactlevels()->get();
        $contactLevels = ContactLevel::all();

        return view('create.expect', compact('event','contactLevels','pivots'));
    }

    /**
     * Store a newly created resource in storage. First I update the event with the submitted data. Then I sync the contact levels associated with the event. Finally I update the event with the expectation_id of the expection table (only used for the checklist)
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ExpectationStoreRequest $request, Event $event)
    {
        $this->authorize('update', $event);
        $event->expectation->update($request->except(['contactLevel']));
        $event->contactlevels()->sync(request('contactLevel'));
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
