<?php

namespace App\Http\Controllers;

use App\Expect;
use App\Event;
use App\ContactLevel;
use App\ContentAdvisory;
use Illuminate\Http\Request;
use App\Http\Requests\ExpectationStoreRequest;

class ExpectController extends Controller
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
     * Show the form for creating a new resource. I Load expectation with event, then I load the contact levels associated with the event alread (if there are any) and name it pivots. Finally I add all the contact level options as the variable contactlevels
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Event $event)
    {
        $event->load('expectation');
        $pivots = $event->contactlevels()->get();
        $contentpivots = $event->contentadvisories()->get();
        $contactLevels = ContactLevel::all();
        $contentAdvisories = ContentAdvisory::where('admin', true)
                            ->orWhere('user_id', auth()->user()->id)
                            ->get();

        return view('create.advisories', compact('event','contactLevels','pivots', 'contentpivots', 'contentAdvisories'));
    }

    /**
     * Store a newly created resource in storage. First I update the event with the submitted data. Then I sync the contact levels associated with the event. Finally I update the event with the expectation_id of the expection table (only used for the checklist)
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ExpectationStoreRequest $request, Event $event)
    {
        $event->expectation->update($request->except(['contactLevel', 'contentAdvisory']));
        $event->contactlevels()->sync(request('contactLevel'));
        if ($request->has('contentAdvisory')) {
            foreach ($request['contentAdvisory'] as $content) {
                ContentAdvisory::firstOrCreate([
                    'advisories' => $content
                ],
                [
                    'user_id' => auth()->user()->id,
                ]);
            };
            $newSync = ContentAdvisory::all()->whereIn('advisories', $request['contentAdvisory']);
            $event->contentadvisories()->sync($newSync);
        };
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
