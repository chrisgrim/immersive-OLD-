<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::GET('events', 'EventController@get');

//Nav Bar
// IS USED Users entered data into the navbar
Route::GET('search/navbar/content', 'SearchController@searchNav');


//Event Searchs
// IS USED On Map move send new latlng/ if category that is attached and if dates that is attached 
Route::POST('search/mapboundary', 'SearchController@searchMapBoundary');

// IS USED
Route::GET('search/location', 'SearchController@searchLocation');

//IS USED Searches remote events
Route::POST('search/remote', 'SearchController@searchRemote');


//Admin Section
//IS USED On Organizer Create Page this searches all organizers and returns based on users selection
Route::GET('search/organizer', 'SearchController@searchOrganizer');

// IS USED On admin page returns user list for editing users
Route::GET('search/user/list', 'SearchController@searchUsers');

// IS USED Admin get list of events
Route::GET('admin/search/events', 'SearchController@searchEvents');

// IS USED Admin get list of events
Route::GET('admin/search/boneyard', 'SearchController@searchBoneyard');




//On admin page returns user list for editing users
Route::GET('search/event/list', 'SearchController@searchEvents');


Route::POST('index/filter', 'SearchController@filterIndex');
