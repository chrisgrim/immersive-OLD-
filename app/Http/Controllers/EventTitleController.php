<?php

namespace App\Http\Controllers;

use App\Event;
use Illuminate\Http\Request;

class EventTitleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
        $this->middleware('can:update,event');
    }

    /**
     * Returns Title Page in Creation Process
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function title(Event $event)
    {
        return view('create.title', compact('event'));
    }

    /**
     * Fetches the current Event Title for the creation process. This involves the timestamp process
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function fetchTitle(Event $event)
    {
        return $event;
    }

    /**
     * Updates the Event Title and resubmit if they change the title
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function updateTitle(Request $request, Event $event)
    {
        $this->authorize('update', $event);

        $event->update([ 
            'name' => $request->name,
            'tag_line' => $request->tagLine
        ]);
        
        if($request->reSubmitEvent){
            $event->update([
                'status' => 'd',
                'approved' => false
            ]);
        };
    }
}
