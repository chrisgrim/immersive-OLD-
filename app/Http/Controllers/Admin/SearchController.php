<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\OrganizerSearchRule;
use App\Organizer;
use App\Event;
use App\Genre;
use App\GenreSearchRule;
use App\EventSearchRule;

use Illuminate\Http\Request;

class SearchController extends Controller
{
    /**
     * Return list of Organizers.
     *
     * @return \Illuminate\Http\Response
     */
    public function organizers(Request $request)
    {
        if (! $request->keywords) return Organizer::take(10)->get();

        return Organizer::search($request->keywords)
        ->rule(OrganizerSearchRule::class)
        ->get();
    }

    /**
     * Returned filtered Genres.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function genres(Request $request)
    {
        if (! $request->keywords) return Genre::orderBy('name')->paginate(40);

        return Genre::search($request->keywords)
            ->rule(GenreSearchRule::class)
            ->paginate(10);
    }

     /**
     * Returned filtered Events.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function events(Request $request)
    {
        if (! $request->keywords) return Event::where('status','p')->take(10)->get();

        return Event::search($request->keywords)
            ->rule(EventSearchRule::class)
            ->get();
    }

     /**
     * Returned filtered Events.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function purgatory(Request $request)
    {
        if (! $request->keywords) {
            return Event::where('status', '!=', 'p')
            ->where('status', '!=', 'e')
            ->whereNotNull('name')
            ->orderByDESC('created_at')
            ->paginate(10);
        }

        return Event::where('name', '=', $request->keywords)
                ->where('status', '!=', 'p')
                ->where('status', '!=', 'e')
                ->whereNotNull('name')
                ->orderByDESC('created_at')
                ->paginate(10);
    }

    public function deletedEvents(Request $request)
    {
        return Event::onlyTrashed()->where('name', 'like', '%' . $request->keywords . '%')->get();
        return Event::onlyTrashed()->take(10)->get();
    }

}
