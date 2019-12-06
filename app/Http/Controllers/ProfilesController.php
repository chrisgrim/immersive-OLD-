<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Cache;
use Illuminate\Support\Facades\Auth;

class ProfilesController extends Controller
{
    /**
    * Checks for admin before allowing controller access
    *
    * @return \Illuminate\Http\Response
    */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(User $user)
    {
        return view('profiles.index', compact('user'));
    }
        public function show(User $user)
    {
        $fav = $user->favorites()->get();
        return view('profiles.index', compact('user', 'fav'));
    }

    /**
     * Store a newly created resource in storage. 
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
    	if($request->image) {
			User::saveFile($request, $user);
    	} else {
    		$user->update([ 'name' => $request->name ]);
    	}
    	
    }

    public function storeUserGeolocation(User $user)
    {
    	Cache::put('key', 'value', 10);
    }
}
