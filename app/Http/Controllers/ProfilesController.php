<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Cache;

class ProfilesController extends Controller
{
    public function index(User $user)
    {
        return view('profiles.index', compact('user'));
    }
    public function storeUserGeolocation(User $user)
    {
    	Cache::put('key', 'value', 10);
    }
}
