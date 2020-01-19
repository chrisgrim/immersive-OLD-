<?php

namespace App\Http\Controllers;

use App\EventReview;
use Illuminate\Http\Request;

class EventReviewController extends Controller
{
    /**
     * Checks for admin before allowing controller access
     *
     * @return \Illuminate\Http\__construct
     */
    public function __construct()
    {
        $this->middleware('admin')->except('show');
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
        //
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
    public function edit(EventReview $eventReview)
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
    public function update(Request $request, EventReview $eventReview)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\EventReview  $eventReview
     * @return \Illuminate\Http\Response
     */
    public function destroy(EventReview $eventReview)
    {
        //
    }
}
