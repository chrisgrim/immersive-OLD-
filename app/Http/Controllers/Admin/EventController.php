<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Organizer;
use App\Event;

use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Checks for admin before allowing controller access
     *
     * @return \Illuminate\Http\__construct
     */
    public function __construct()
    {
        $this->middleware('moderator');
    }

    /**
     * Changes the organizer of a specific event
     *
     * @return \Illuminate\Http\__construct
     */
    public function changeOrganizer(Request $request, Event $event)
    {
        $event->update([
            'user_id' => $request->user_id,
            'organizer_id' => $request->id
        ]);
    }

}
