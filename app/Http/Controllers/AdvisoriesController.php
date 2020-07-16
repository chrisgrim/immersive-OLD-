<?php

namespace App\Http\Controllers;

use App\Advisory;
use App\Event;
use DB;
use App\ContactLevel;
use App\InteractiveLevel;
use App\ContentAdvisory;
use App\MobilityAdvisory;
use App\AgeLimit;
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
        // if ($event->status < 6) { abort(403); }
        $event->load('contentAdvisories', 'contactLevels', 'mobilityAdvisories', 'advisories', 'interactive_level');
        $contactAdvisories = ContactLevel::all();
        $contentAdvisories = ContentAdvisory::where('admin', true)->orWhere('user_id', auth()->user()->id)->get();
        $mobilityAdvisories = MobilityAdvisory::where('admin', true)->orWhere('user_id', auth()->user()->id)->get();
        $interactiveLevels = InteractiveLevel::get();
        $agelimit = AgeLimit::all();
        return view('create.advisories', compact('event', 'contactAdvisories', 'contentAdvisories', 'mobilityAdvisories', 'interactiveLevels', 'agelimit'));
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
        $event->contactlevels()->sync($request->contactAdvisory);
        MobilityAdvisory::saveAdvisories($event, $request);
        ContentAdvisory::saveAdvisories($event, $request);
        $event->update([
            'advisories_id' => $event->advisories->id,
            'interactive_level_id' => $request->interactiveLevel['id'],
            'age_limits_id' => $request->age['id'],
        ]);

        //Checks to see if advisories has been selected then updates status to 7
        if ( $event->status < 8 && $event->isInProgress() && $event->contactlevels()->exists() && $event->interactive_level()->exists() && $event->contentadvisories()->exists() && $event->mobilityadvisories()->exists() && $event->advisories_id ) {
            $event->update([ 'status' => '7' ]);
        }

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
            'contentPivots' => $event->contentadvisories()->get(),
            'mobilityPivots' => $event->mobilityadvisories()->get(),
            'interactivePivots' => $event->interactive_level()->first(),
            'age' => $event->age_limits()->first(),
        ));
    }
}
