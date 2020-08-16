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
        $maxprice = Event::getMostExpensive();
        $categories = Category::all();
        $tags = Genre::where('admin', 1)->orderBy('rank', 'desc')->get();

        $searchedevents =  Event::search('a')
            ->rule(EventMapSearchRule::class)
            ->with(['location', 'organizer'])
            ->take(10)
            ->get();

        return view('events.search',compact('searchedevents', 'categories', 'maxprice', 'tags'));
    }

    public function onlinesearch(Request $request)
    {
        $maxprice = Event::getMostExpensive();
        $categories = Category::all();
        $tags = Genre::where('admin', 1)->orderBy('rank', 'desc')->get();

        $searchedevents = Event::limit(12)
                        ->where('status', 'p')
                        ->with(['location', 'organizer'])
                        ->get();

        return view('events.searchonline',compact('searchedevents', 'categories', 'maxprice', 'tags'));
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

        $remote = RemoteLocation::search($request->keywords)
        ->rule(RemoteLocationSearchRule::class)
        ->take(5)
        ->get();
        
        $event = Event::search($request->keywords)
            ->rule(EventSearchRule::class)
            ->take(5)
            ->get();

        $organizer = Organizer::search($request->keywords)
            ->rule(OrganizerSearchRule::class)
            ->take(5)
            ->get();

        $concatdata = $category->concat($tag)->concat($remote)->concat($event)->concat($organizer);

        if ($concatdata->count() > 8) {
            return [
                'data' => $concatdata,
            ];
        }

        $city = CityList::search($request->keywords)
        ->rule(CityListSearchRule::class)
        ->orderBy('population', 'desc')
        ->get();

        return [
            'data' => $concatdata->concat($city),
        ];
    }

    public function searchLocation(Request $request)
    {
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
        if ($request->category) {
             SearchData::create([
                'search_term' => Category::find($request->category)->name,
                'search_type' => 'category'
            ]);
        }
        if ($request->tag) {
            SearchData::create([
                'search_term' => $request->tag,
                'search_type' => 'tag'
            ]);
        }

        if ($request->category || $request->dates || $request->price || $request->tag ) {
            return $events = Event::search('a')
            ->rule(EventRemoteSearchRule::class)
            ->with(['location', 'organizer'])
            ->orderBy('published_at', 'desc')
            ->paginate(12);
        } else {
            return $events = Event::where('status', 'p')
                ->with(['location', 'organizer'])
                ->paginate(12);
        }
    }    
}
