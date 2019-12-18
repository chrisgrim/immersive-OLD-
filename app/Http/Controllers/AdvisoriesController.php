<?php

namespace App\Http\Controllers;

use App\Advisory;
use App\Event;
use App\ContactLevel;
use App\ContentAdvisory;
use App\MobilityAdvisory;
use Illuminate\Http\Request;
use App\Http\Requests\AdvisoryStoreRequest;

class AdvisoriesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('can:update,event');
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
     * Show the form for creating a new resource. I just am loading event
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Event $event)
    {
        return view('create.advisories', compact('event'));
    }

    /**
     * Show the form for creating a new resource. Here I load all of the details of the advisories
     *
     * @return \Illuminate\Http\Response
     */
    public function fetch(Event $event)
    {
        $advisories = $event->advisories()->first();
        $contactPivots = $event->contactlevels()->get();
        $contactLevels = ContactLevel::all();
        $contentPivots = $event->contentadvisories()->get();
        $contentAdvisories = ContentAdvisory::where('admin', true)
                            ->orWhere('user_id', auth()->user()->id)
                            ->get();
        $mobilityPivots = $event->mobilityadvisories()->get();
        $mobilityAdvisories = MobilityAdvisory::where('admin', true)
                            ->orWhere('user_id', auth()->user()->id)
                            ->get();
        return response()->json(array(
            'advisories' => $advisories,
            'contactPivots' => $contactPivots,
            'contactLevels' => $contactLevels,
            'contentPivots' => $contentPivots,
            'contentAdvisories' => $contentAdvisories,
            'mobilityPivots' => $mobilityPivots,
            'mobilityAdvisories' => $mobilityAdvisories,
        ));

    }

    /**
     * Store a newly created resource in storage. First I update the event with the submitted data. Then I sync the contact levels associated with the event. Finally I update the event with the expectation_id of the expection table (only used for the checklist)
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AdvisoryStoreRequest $request, Event $event)
    {
        $event->advisories->update($request->except(['contactLevel', 'contentAdvisory', 'mobilityAdvisory']));
        $event->contactlevels()->sync(request('contactLevel'));
        MobilityAdvisory::saveAdvisories($event, $request);
        ContentAdvisory::saveAdvisories($event, $request);
        $event->update(['advisories_id' => $event->advisories->id]);

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
