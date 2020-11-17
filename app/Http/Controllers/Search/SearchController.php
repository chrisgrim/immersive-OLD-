<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use App\Models\Event;
use App\Models\Genre;
use App\Models\Category;
use App\Models\Date;
use App\Models\User;
use App\Models\Organizer;
use App\Models\CityList;
use App\Models\SearchData;
use App\Models\RemoteLocation;
use App\Models\OrganizerSearchRule;
use App\Models\CityListSearchRule;
use App\Models\EventSearchRule;
use App\Models\GenreSearchRule;
use App\Models\DateSearchRule;
use App\Models\UserSearchRule;
use App\Models\EventMapSearchRule;
use App\Models\EventRemoteSearchRule;
use App\Models\CategorySearchRule;
use App\Models\RemoteLocationSearchRule;
use DB;
use Carbon\Carbon;
use Session;

use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function index(Request $request)
    {
        if ($request->price0) {$request->request->add(['price' => [$request->price0,$request->price1 ]]);}
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

    public function searchEvents(Request $request)
    {
        if ($request->keywords) {
            $events = Event::search($request->keywords)
                ->rule(EventSearchRule::class)
                ->get();
             if ($events->count()) {
                return $events;  
            }
        }
        return Event::where('status','p')->take(10)->get();
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
