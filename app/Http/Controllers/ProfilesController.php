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
        $this->middleware(['auth', 'verified'])->except('show');
    }

    public function index(User $user)
    {
        return view('profiles.index', compact('user'));
    }

    public function show(User $user)
    {

        $events = $user->favouritedEvents()->get();
        $loc = $user->location()->get();
        return view('profiles.index', compact('user', 'events', 'loc'));
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
    	}
        if ($request->name) {
            $user->update([ 'name' => $request->name ]);
        }
        if ($request->location) {
            $user->location()->updateOrCreate(
                [
                    'user_id' => $user->id
                ],
                [
                    'home' => $request->location['home'],
                    'postal_code' => $request->location['postal_code'],
                    'street' => $request->location['street'],
                    'region' => $request->location['region'],
                    'city' => $request->location['city'],
                    'country' => $request->location['country'],
                    'latitude' => $request->location['latitude'],
                    'longitude' => $request->location['longitude']
                ]
            );
        }
    }

    public function storeUserGeolocation(User $user)
    {
    	Cache::put('key', 'value', 10);
    }
}
