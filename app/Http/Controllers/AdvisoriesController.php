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
        $this->middleware(['auth', 'verified']);
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
        return response()->json(array(
            'advisories' => $event->advisories()->first(),
            'contactPivots' => $event->contactlevels()->get(),
            'contactLevels' => ContactLevel::all(),
            'contentPivots' => $event->contentadvisories()->get(),
            'contentAdvisories' => ContentAdvisory::where('admin', true)->orWhere('user_id', auth()->user()->id)->get(),
            'mobilityPivots' => $event->mobilityadvisories()->get(),
            'mobilityAdvisories' => MobilityAdvisory::where('admin', true)->orWhere('user_id', auth()->user()->id)->get(),
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
}
