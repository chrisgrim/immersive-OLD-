<?php

namespace App\Http\Controllers\Create;
use App\Http\Controllers\Controller;
use App\Event;
use App\CityList;
use App\Category;
use App\Organizer;
use App\StaffPick;
use Session;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Http\Requests\TitleUpdateRequest;
use Illuminate\Support\LazyCollection;

class EventController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }

    /**
     * Loads the users created events
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $organizers = Organizer::getOrganizerEvents();

        return view('events.edit', compact('organizers'));
    }

    /**
     * Fetch the users created events
     *
     * @param  \App\Event  $event
     * @return \Illuminate\Http\Response
     */
    public function fetch(Request $request, Organizer $organizer)
    {
        if ($request->state === 'past') {
            return $organizer->pastEvents()->paginate(7);
        }
        if ($request->state === 'current') {
            return $organizer->inProgressEvents()->paginate(7);
        }
    }

}
