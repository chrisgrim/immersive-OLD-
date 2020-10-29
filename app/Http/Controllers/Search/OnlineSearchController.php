<?php

namespace App\Http\Controllers\Search;

use App\Http\Controllers\Controller;
use App\Event;
use App\Genre;
use App\Category;
use App\EventRemoteSearchRule;
use Illuminate\Http\Request;

class OnlineSearchController extends Controller
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
        $maxprice = ceil(Event::getMostExpensive());
        $categories = Category::all();
        $tags = Genre::where('admin', 1)->orderBy('rank', 'desc')->get();

        if ($request->price || $request->category || $request->tag || $request->dates ) {
            $onlineevents = Event::search('a')
            ->rule(EventRemoteSearchRule::class)
            ->where('hasLocation', false)
            ->with(['organizer','category', 'genres'])
            ->orderBy('published_at', 'desc')
            ->paginate(12);
        } else {
            $onlineevents =  Event::where('hasLocation', false)
            ->with(['organizer','category', 'genres'])
            ->whereDate('closingDate', '>=', date("Y-m-d"))
            ->orderByDesc('rank')
            ->paginate(12);
        }

        return view('events.searchonline',compact('onlineevents', 'categories', 'maxprice', 'tags'));
    }

    public function fetch(Request $request)
    {
        if ($request->price[1] >= 100) {
            $low = $request->price[0];
            $request->request->add(['price' => [$low, 9999]]);
        }
        if ($request->lat) { $showNumber = 6; } else {$showNumber = 12;}
        if ($request->price || $request->category || $request->tag || $request->dates ) {
            return  Event::search('a')
            ->rule(EventRemoteSearchRule::class)
            ->with(['organizer','category', 'genres'])
            ->orderBy('published_at', 'desc')
            ->paginate($showNumber);
        } else {
            return Event::where('hasLocation', false)
            ->with(['organizer','category', 'genres'])
            ->whereDate('closingDate', '>=', date("Y-m-d"))
            ->orderByDesc('rank')
            ->paginate($showNumber);
        }
    }
}
