<?php

namespace App\Http\Controllers;

use App\Event;
use App\Genre;
use App\Category;
use App\Date;
use App\User;
use App\Organizer;
use App\CityList;
use App\RemoteLocation;
use App\OrganizerSearchRule;
use App\CityListSearchRule;
use App\EventSearchRule;
use App\GenreSearchRule;
use App\DateSearchRule;
use App\UserSearchRule;
use App\EventMapSearchRule;
use App\EventRemoteSearchRule;
use App\CategorySearchRule;
use App\RemoteLocationSearchRule;
use DB;
use Carbon\Carbon;
use Session;


use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index(Request $request)
    {

        $searchedevents = Event::search('*')
            ->where('closingDate', '>=', 'now/d')
            ->whereGeoDistance('location_latlon', [floatval($request->lng), floatval($request->lat)], '40km')
            ->with(['location', 'organizer'])
            ->get(); 

        $categories = Category::all();

        return view('events.search',compact('searchedevents', 'categories'));
    }

    public function onlinesearch(Request $request)
    {

        $searchedevents = Event::search('*')
            ->where('closingDate', '>=', 'now/d')
            ->with(['location', 'organizer'])
            ->get(); 

        $categories = Category::all();
        return view('events.searchonline',compact('searchedevents', 'categories'));
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
            ->with(['location', 'organizer'])
            ->get(); 

        return response()->json($events);

    }

	public function searchOrganizer(Request $request)
    {
        if($request->keywords) {
            $organizers = Organizer::search($request->keywords)
		    ->rule(OrganizerSearchRule::class)
		    ->get();
            return $organizers;
        };
    }


    public function searchNav(Request $request)
    {
        if ($request->keywords) {
            $category = Category::search($request->keywords)
            ->rule(CategorySearchRule::class)
            ->take(10)
            ->get();
        } else {
            $category = Category::search('*')
            ->take(10)
            ->get();
        }
        if ($category->count()) {
            return [
                'data' => $category,
                'type' => 'category'
            ];
        }

        if ($request->keywords) {
            $remote = RemoteLocation::search($request->keywords)
            ->rule(RemoteLocationSearchRule::class)
            ->take(10)
            ->get();
        } else {
            $remote = RemoteLocation::search('*')
            ->take(10)
            ->get();
        }
        if ($remote->count()) {
            return [
                'data' => $remote,
                'type' => 'remote'
            ];
        }
        
        if ($request->keywords) {
            $tag = Genre::search($request->keywords)
            ->rule(GenreSearchRule::class)
            ->take(10)
            ->get();
        } else {
            $tag = Genre::search('*')
            ->take(10)
            ->get();
        }
        if ($tag->count()) {
            return [
                'data' => $tag,
                'type' => 'tag'
            ];
        }

        if ($request->keywords) {
            $event = Event::search($request->keywords)
                ->rule(EventSearchRule::class)
                ->take(10)
                ->get();
        } else {
            $event = Event::search('*')
            ->take(10)
            ->get();
        }

        if ($event->count()) {
            return [
                'data' => $event,
                'type' => 'event'
            ];
        }

        if ($request->keywords) {
            $organizer = Organizer::search($request->keywords)
                ->rule(OrganizerSearchRule::class)
                ->take(10)
                ->get();
        } else {
            $organizer = Organizer::search('*')
            ->take(10)
            ->get();
        }

        if ($organizer->count()) {
            return [
                'data' => $organizer,
                'type' => 'organizer'
            ];
        }

        if ($request->keywords) {
            $city = CityList::search($request->keywords)
            ->rule(CityListSearchRule::class)
            ->orderBy('population', 'desc')
            ->get();
        } else {
            $city = CityList::search('*')
            ->orderBy('population', 'desc')
            ->take(10)
            ->get();
        }

        if ($city->count()) {
            return [
                'data' => $city,
                'type' => 'city'
            ];
        }


        // if($ajaxType->count()) {
        //     return response()->json($ajaxType);
        // } else {
        //     if($ajaxCity->count()) {
        //         return response()->json($ajaxCity);
        //     } else {
        //         $ajaxEvents = Event::search($request->keywords)
        //         ->rule(EventSearchRule::class)
        //         ->get();
        //         if ($ajaxEvents->count()) {
        //             return response()->json($ajaxEvents);
        //         } else {
        //             $ajaxOrganizers = Organizer::search($request->keywords)
        //             ->rule(OrganizerSearchRule::class)
        //             ->get();
        //             return response()->json($ajaxOrganizers);
        //         }
        //     }
        // };
    }
    public function searchDatastore(Request $request)
    {
        Session::put('searchDataStore', $request->all());        
    }

    public function searchUsers(Request $request)
    {
        if ($request->keywords) {
            return  User::search($request->keywords)
                    ->rule(UserSearchRule::class)
                    ->take(10)
                    ->get();
        }
        return User::all();
    }

    public function searchEvents(Request $request)
    {
        $events = Event::search($request->keywords)
                ->rule(EventSearchRule::class)
                ->get();
        return $users;  
    }

    public function searchMapBoundary(Request $request)
    {   
        return $events =  Event::search('a')
            ->rule(EventMapSearchRule::class)
            ->with(['location', 'organizer'])
            ->take($request->results)
            ->get();
    }

    public function searchRemote(Request $request)
    {
        return $events =  Event::search('a')
            ->rule(EventRemoteSearchRule::class)
            ->with(['location', 'organizer'])
            ->take($request->results)
            ->get();
    }

    
}
