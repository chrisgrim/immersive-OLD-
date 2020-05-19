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
     /**
     * Add middleware to entire controller
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
        $this->middleware('can:update,event');
    }

    /**
     * Show the form for creating a new resource. I just am loading event
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Event $event)
    {
        $event->load('contentAdvisories', 'contactLevels', 'mobilityAdvisories', 'advisories');
        $contactAdvisories = ContactLevel::all();
        $contentAdvisories = ContentAdvisory::where('admin', true)->orWhere('user_id', auth()->user()->id)->get();
        $mobilityAdvisories = MobilityAdvisory::where('admin', true)->orWhere('user_id', auth()->user()->id)->get();
        return view('create.advisories', compact('event', 'contactAdvisories', 'contentAdvisories', 'mobilityAdvisories'));
    }

    /**
     * Store a newly created resource in storage. First I update the event with the submitted data. Then I sync the contact levels associated with the event. Finally I update the event with the expectation_id of the expection table (only used for the checklist)
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Event $event)
    {
        $event->advisories->update($request->advisories);
        $event->contactlevels()->sync(request('contactAdvisory'));
        MobilityAdvisory::saveAdvisories($event, $request);
        ContentAdvisory::saveAdvisories($event, $request);
        $event->update(['advisories_id' => $event->advisories->id]);
    }
}
