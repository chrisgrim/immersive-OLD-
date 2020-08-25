<?php

namespace App\Http\Controllers;

use App\Event;
use Response;
use Illuminate\Http\Request;
use App\Http\Requests\TitleStoreRequest;

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
    public function updateTitle(TitleStoreRequest $request, Event $event)
    {
        $eventExists = Event::where('slug', str_slug($request->name))->where('user_id', auth()->id())->first();
        if ($eventExists && $eventExists->id != $event->id) {
            return Response::json(['errors' => (object)array('name' => 'same name')], 404); 
        }

        $event->update([ 
            'name' => $request->name,
            'tag_line' => $request->tagLine,
        ]);

        //Checks to see if category has been selected then updates status to 3
        if ($event->status < 2 && $event->isInProgress() && $event->name) {
            $event->update([ 'status' => '1' ]);
        }
        
        if($request->reSubmitEvent){
            $event->update([
                'status' => '8',
                'approved' => false
            ]);
        };


    }
}
