<?php

namespace App\Http\Controllers;

use App\Event;
use App\User;
use App\Favorite;
use Illuminate\Http\Request;

class FavoritesController extends Controller
{

	public function __construct()
	{
		$this->middleware(['auth', 'verified']);
	}

    /**
     * Show the favorites
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(User $user)
    {   
        $favorites = Favorite::select('favorited_id', 'favorited_type')
            ->with('favorited')
            ->get();
        return view('favorites.index', compact('favorites'));
    }
    
    public function store(Event $event)
    {
        $event->favorite();
    }
    public function destroy(Event $event)
    {
        $event->unfavorite();
    }
    public function loginToFavorite()
    {
        return back();
    }

}
