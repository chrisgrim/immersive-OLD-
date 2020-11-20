<?php

namespace App\Http\Controllers;

use App\Event;
use App\Genre;
use App\Category;
use App\Date;
use App\User;
use App\Organizer;
use App\CityList;
use App\SearchData;
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
        if ($request->price0) {
            if ($request->price1 >= 100) {
                $request->request->add(['price' => [$request->price0, 9999]]);
            } else {
                $request->request->add(['price' => [$request->price0,$request->price1 ]]);
            }
        }
        if ($request->start) {$request->request->add(['dates' => [$request->start, $request->end]]);}
        if ($request->mapsearch) {$request->request->add([
            'mapboundary' => [
                '_northEast' => 
                [
                    'lat' => $request->NElat,
                    'lng' => $request->NElng,
                ],
                '_southWest' => 
                [
                    'lat' => $request->SWlat,
                    'lng' => $request->SWlng,
                ],
            ]
        ]);}

        $maxprice = ceil(Event::getMostExpensive());

        $categories = Category::all();

        $tags = Genre::where('admin', 1)->orderBy('rank', 'desc')->get();

        $searchedevents = Event::search('a')
            ->rule(EventMapSearchRule::class)
            ->with(['location', 'organizer', 'category', 'genres'])
            ->paginate(20);

        if ($request->lat) { $showNumber = 6; } else {$showNumber = 8;}

        if ($request->price || $request->category || $request->tag || $request->dates ) {
            $onlineevents = Event::search('a')
            ->rule(EventRemoteSearchRule::class)
            ->where('hasLocation', false)
            ->with(['organizer','category', 'genres'])
            ->orderBy('published_at', 'desc')
            ->paginate($showNumber);
        } else {
            $onlineevents =  Event::where('hasLocation', false)
            ->with(['organizer','category', 'genres'])
            ->whereDate('closingDate', '>=', date("Y-m-d"))
            ->orderByDesc('rank')
            ->paginate($showNumber);
        }

        return view('events.search',compact('searchedevents', 'onlineevents', 'categories', 'maxprice', 'tags'));
    }

     public function searchMapBoundary(Request $request)
    {
        if ($request->price && $request->price[1] >= 100) {
            $low = $request->price[0];
            $request->request->add(['price' => [$low, 9999]]);
        }
        return Event::search('a')
            ->rule(EventMapSearchRule::class)
            ->with(['location', 'organizer','category', 'genres'])
            ->paginate(20);
    }

    public function allsearch(Request $request)
    {
        $maxprice = ceil(Event::getMostExpensive());
        $categories = Category::all();
        $tags = Genre::where('admin', 1)->orderBy('rank', 'desc')->get();

        if ($request->price || $request->category || $request->tag || $request->dates ) {
            $onlineevents = Event::search('a')
            ->rule(EventRemoteSearchRule::class)
            ->where('hasLocation', false)
            ->with(['organizer','category', 'genres'])
            ->orderBy('published_at', 'desc')
            ->paginate(8);
        } else {
            $onlineevents =  Event::where('hasLocation', false)
            ->with(['organizer','category', 'genres'])
            ->whereDate('closingDate', '>=', date("Y-m-d"))
            ->orderByDesc('rank')
            ->paginate(8);
        }

        return view('events.searchonline',compact('onlineevents', 'categories', 'maxprice', 'tags'));
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


    public function searchNav(Request $request)
    {
        if ($request->type == 'category') {
            if (!$request->keywords) {
                $category = Category::search('*')->orderBy('rank', 'desc')->take(5)->get();
                $tag = Genre::search('*')->where('admin', 1)->orderBy('rank', 'desc')->take(10)->get();
                $remote = RemoteLocation::search('*')->take(5)->get();
                return [
                    'data' => $category->concat($tag)->concat($remote),
                ];
            }

            $category = Category::search($request->keywords)
            ->rule(CategorySearchRule::class)
            ->orderBy('rank', 'desc')
            ->take(5)
            ->get();

            $tag = Genre::search($request->keywords)
            ->rule(GenreSearchRule::class)
            ->where('admin', 1)
            ->orderBy('rank', 'desc')
            ->take(10)
            ->get();

            $concatdata = $category->concat($tag);
            return [
                'data' => $concatdata,
            ];
        }
        
        if ($request->type == 'event') {
            if (!$request->keywords) {
                $event = Event::where('status', 'p')->orderByDesc('rank')->take(5)->get();
                $organizer = Organizer::where('status', 'p')->orderByDesc('rating')->take(5)->get();
                return [
                    'data' => $event->concat($organizer),
                ];
            }
            $event = Event::search($request->keywords)
            ->rule(EventSearchRule::class)
            ->take(5)
            ->get();

            // $organizer = Organizer::search($request->keywords)
            // ->rule(OrganizerSearchRule::class)
            // ->take(5)
            // ->get();
            $concatdata = $event;
            return ['data' => $concatdata];
        }

        if ($request->keywords) {
            $city = CityList::search($request->keywords)
            ->rule(CityListSearchRule::class)
            ->orderBy('rank', 'desc')
            ->orderBy('population', 'desc')
            ->get();
        } else {
            $city = CityList::search('*')
            ->orderBy('rank', 'desc')
            ->orderBy('population', 'desc')
            ->take(10)
            ->get();
        }
        return [
            'data' => $city,
        ];
    }

    public function searchLocation(Request $request)
    {
        if ($request->keywords) {
            $city = CityList::search($request->keywords)
            ->rule(CityListSearchRule::class)
            ->orderBy('rank', 'desc')
            ->orderBy('population', 'desc')
            ->get();
        } else {
            $city = CityList::search('*')
            ->orderBy('rank', 'desc')
            ->orderBy('population', 'desc')
            ->take(10)
            ->get();
        }

        if ($city->count()) {
            return [
                'data' => $city,
            ];
        }
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

    public function searchBoneyard(Request $request)
    {
        return Event::onlyTrashed()->where('name', 'like', '%' . $request->keywords . '%')->get();
        return Event::onlyTrashed()->take(10)->get();
    }
    public function searchOrganizer(Request $request)
    {
        if($request->keywords) {
            $organizers = Organizer::search($request->keywords)
            ->rule(OrganizerSearchRule::class)
            ->with(['user'])
            ->get();
            return $organizers;
        };
    }    
}
