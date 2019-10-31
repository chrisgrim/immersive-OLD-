<?php

namespace App\Http\Controllers;

use App\Event;
use App\Date;
use App\Organizer;
use App\CityList;
use App\OrganizerSearchRule;
use App\CityListSearchRule;
use App\EventSearchRule;
use App\DateSearchRule;
use Carbon\Carbon;
use Cookie;

use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index()
    {
        $searchedevents = request()->cookie('search');
        return view('searches.search',compact('searchedevents'));
    }

    public function loadIndex(Request $request)
    {

        $events = Event::search('*')
            ->where('closingDate', '<=', 'now/d')
            ->take(100)
            ->get();

        return response()->json($events);
	}
    public function filterIndex(Request $request)
    {

        //parse the inputted dates into the correct format
        $start = Carbon::parse($request->start)->startOfDay()->format('Y-m-d H:i:s');
        $end = Carbon::parse($request->end)->startOfDay()->format('Y-m-d H:i:s');

   
        $events = Event::search('*')
            // ->where('closingDate', '<=', 'now/d')
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

        $ajaxOrganizers = Organizer::search($request->keywords)
		    ->rule(OrganizerSearchRule::class)
		    ->get();

        // return $ajaxOrganizers;
        return response()->json($ajaxOrganizers);
    }

    public function searchLocation(Request $request)
    {   
        // dd([floatval($request->longitude), floatval($request->latitude)]);


        $radiusResults = Event::search('*')
            ->whereGeoDistance('location_latlon', [floatval($request->longitude), floatval($request->latitude)], '100km')
            ->get();

        return response()->json($radiusResults);
    }

    public function searchNav(Request $request)
    {
        if ($request->keywords) {

            $ajaxCity = CityList::search($request->keywords)
            ->rule(CityListSearchRule::class)
            ->get();

        } else {

            $ajaxCity = CityList::search('*')
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

        // Cookie::queue(cookie('search', json_encode($request->all()), $minute = 10));
        return response()->withCookie('search', json_encode($request->all()), 10);


    }

    
}
