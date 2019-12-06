<?php

namespace App\Http\Controllers;

use App\Event;
use App\Genre;
use App\Date;
use App\Organizer;
use App\CityList;
use App\OrganizerSearchRule;
use App\CityListSearchRule;
use App\EventSearchRule;
use App\GenreSearchRule;
use App\DateSearchRule;
use Carbon\Carbon;
use Session;


use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index()
    {
        $searchedevents = Session::get('searchDataStore');
        $name = json_encode($searchedevents['name']);
        $lat = trim(json_encode($searchedevents['latitude']), '"');
        $lng = trim(json_encode($searchedevents['longitude']), '"');
        $searchedevents = array (
            "latitude" => $lat,
            "longitude" => $lng,
            "name" => $name
        );
        return view('events.search',compact('searchedevents'));
    }

    public function filterIndex(Request $request)
    {

        //parse the inputted dates into the correct format
        $start = Carbon::parse($request->start)->startOfDay()->format('Y-m-d H:i:s');
        $end = Carbon::parse($request->end)->startOfDay()->format('Y-m-d H:i:s');

   
        $events = Event::search('*')
            ->where('closingDate', '>=', 'now/d')
            ->when($request->category_id, function($query) use ($request) {
                $query->where('category_id', $request->category_id);
            })
            ->when($request->longitude, function($query) use ($request) {
                $query->whereGeoDistance('location_latlon', [floatval($request->longitude), floatval($request->latitude)], '100km');
            })
            ->when($request->start, function($query) use ($start, $end) {
                $query->whereBetween('dates.date', [$start,$end]);
            })
            ->get(); 



        return response()->json($events);

    }

	public function searchOrganizer(Request $request)
    {
        if($request->keywords) {
            $ajaxOrganizers = Organizer::search($request->keywords)
		    ->rule(OrganizerSearchRule::class)
		    ->get();
        } else { $ajaxOrganizers = null; };

        return response()->json($ajaxOrganizers);
    }

    /**
     * Get List of Genres as user types in name
     *
     * @param  \App\Genre  $genre
     * @return \Illuminate\Http\Response
     */
    public function searchGenre(Request $request)
    {   
        if($request->keywords) {
            $ajaxGenre = Genre::search($request->keywords)
            ->rule(GenreSearchRule::class)
            ->get();
        } else { $ajaxGenre = null; };
        return response()->json($ajaxGenre);
    }

    public function searchNav(Request $request)
    {
        if ($request->keywords) {

            $ajaxCity = CityList::search($request->keywords)
            ->rule(CityListSearchRule::class)
            ->orderBy('population', 'desc')
            ->get();

        } else {

            $ajaxCity = CityList::search('*')
            ->orderBy('population', 'desc')
            ->take(20)
            ->get();

        }

        if($ajaxCity->count()) {

            return response()->json($ajaxCity);

        } else {

            $ajaxEvents = Event::search($request->keywords)
            ->rule(EventSearchRule::class)
            ->get();

            if ($ajaxEvents->count()) {

                return response()->json($ajaxEvents);

            } else {

                $ajaxOrganizers = Organizer::search($request->keywords)
                ->rule(OrganizerSearchRule::class)
                ->get();

                return response()->json($ajaxOrganizers);
            }
        };
    }
    public function searchDatastore(Request $request)
    {
        Session::put('searchDataStore', $request->all());        
    }

    public function searchMapBoundary(Request $request)
    {

             $events = Event::search('*')
            ->where('closingDate', '>=', 'now/d')
            ->when($request->category_id, function($query) use ($request) {
                $query->where('category_id', $request->category_id);
            })
            ->when($request->latitude, function($query) use ($request) {
                $query->whereGeoBoundingBox('location_latlon', ['top_right' => [floatval($request->latitude['_northEast']['lng']), floatval($request->latitude['_northEast']['lat'])], 'bottom_left' => [floatval($request->latitude['_southWest']['lng']), floatval($request->latitude['_southWest']['lat'])]]);
            })
            ->get(); 
            return $events;
    }

    
}
