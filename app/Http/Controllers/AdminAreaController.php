<?php

namespace App\Http\Controllers;

use App\AdminArea;
use App\Event;
use App\Category;
use App\User;
use App\ModeratorComment;
use App\Mail\ModeratorComments;
use Illuminate\Support\Facades\Mail;


use Illuminate\Http\Request;

class AdminAreaController extends Controller
{
    /**
     * Checks for admin before allowing controller access
     *
     * @return \Illuminate\Http\__construct
     */
    public function __construct()
    {
        $this->middleware('admin');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('adminArea.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
     * @param  \App\AdminArea  $adminArea
     * @return \Illuminate\Http\Response
     */
    public function show(AdminArea $adminArea)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\AdminArea  $adminArea
     * @return \Illuminate\Http\Response
     */
    public function edit(AdminArea $adminArea)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\AdminArea  $adminArea
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AdminArea $adminArea)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\AdminArea  $adminArea
     * @return \Illuminate\Http\Response
     */
    public function destroy(AdminArea $adminArea)
    {
        //
    }

    /**
     * Approval Page
     *
     * @param  \App\AdminArea  $adminArea
     * @return \Illuminate\Http\Response
     */
    public function approval()
    {
        $events = Event::where('approval_process', 'ready')->get();
        return view('adminArea.approval',compact('events'));
    }

    /**
     * Individual events on approval pages
     *
     * @param  \App\AdminArea  $adminArea
     * @return \Illuminate\Http\Response
     */
    public function showApproval(Event $event)
    {
        $event->load('category', 'organizer', 'location');
        return view('adminArea.showapproval',compact('event'));
    }

     /**
     * Approve Event
     *
     * @param  \App\AdminArea  $adminArea
     * @return \Illuminate\Http\Response
     */
    public function success(Event $event)
    {
        $event->update([
            'approval_process' => 'approved',
            'approved' => true,
            'slug' => str_slug($event->name),
        ]);
        return redirect('/finish/events');
    }

    /**
     * Fail Event Creates a new moderator comment in the table, then emails the user that comment. Finally it assigns a value of hasIssues to the event database table.
     *
     * @param  \App\AdminArea  $adminArea
     * @return \Illuminate\Http\Response
     */
    public function fail(Request $request, Event $event)
    {
        $ModeratorComment = ModeratorComment::updateOrCreate(
            [
                'event_id' => $event->id,
            ],
            [
                'comments' => $request->comments,
            ]
        );
        
        Mail::to($event->user)->send(new ModeratorComments($ModeratorComment));

        $event->update([
            'approval_process' => 'hasIssues',
        ]);
    }


}
