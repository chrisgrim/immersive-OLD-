<?php

namespace App\Http\Controllers;

use App\ReviewEvent;
use Illuminate\Http\Request;

class ReviewEventsController extends Controller
{
    /**
     * Checks for admin before allowing controller access
     *
     * @return \Illuminate\Http\__construct
     */
    public function __construct()
    {
        $this->middleware('moderator')->except('show');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return ReviewEvent::orderBy('created_at', 'desc')->with('event')->get();
    }

     /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function fetch()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function create()
    {
        return view('adminArea.createreview');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $review = ReviewEvent::create([
            'user_id' => auth()->id(),
            'event_id' => $request->event['id'],
            'organizer_id' => $request->event['organizer_id'],
            'reviewer_name' => $request->reviewername,
            'url' => $request->url,
            'review' => $request->review,
            'image_path' => $request->image_path,
        ]);

        // if(auth()->user()->type == 'a'){$review->update(['rank' => $request->rank]);}; 

    
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\EventReview  $eventReview
     * @return \Illuminate\Http\Response
     */
    public function show(EventReview $eventReview)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\EventReview  $eventReview
     * @return \Illuminate\Http\Response
     */
    public function edit(ReviewEvent $ReviewEvent)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\EventReview  $eventReview
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ReviewEvent $reviewevent)
    {
        $reviewevent->update($request->all());
        return $reviewevent;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\EventReview  $eventReview
     * @return \Illuminate\Http\Response
     */
    public function destroy(ReviewEvent $reviewevent)
    {
        $reviewevent->delete();
    }
}
