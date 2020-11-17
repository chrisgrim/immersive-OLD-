<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Nav Bar
// IS USED Users entered data into the navbar
Route::GET('search/navbar/content', 'SearchController@searchNav');


//Event Searchs
// IS USED On Map move send new latlng/ if category that is attached and if dates that is attached 
Route::POST('search/mapboundary', 'SearchController@searchMapBoundary');

// IS USED
Route::GET('search/location', 'SearchController@searchLocation');

//IS USED Searches remote events
Route::POST('search/online', 'Search\OnlineSearchController@fetch');



//Admin Section
//IS USED On Organizer Create Page this searches all organizers and returns based on users selection
Route::GET('search/organizer', 'SearchController@searchOrganizer');


// IS USED Admin get list of events
Route::GET('admin/event/deleted/search', 'Admin\SearchController@deletedEvents');
Route::GET('admin/organizer/search', 'Admin\SearchController@organizers');
Route::GET('admin/genres/search', 'Admin\SearchController@genres');
Route::GET('admin/events/search', 'Admin\SearchController@events');
Route::GET('admin/purgatory/search', 'Admin\SearchController@purgatory');
Route::GET('admin/users/search', 'SearchController@searchUsers');




//On admin page returns user list for editing users
Route::GET('search/event/list', 'SearchController@searchEvents');


Route::POST('index/filter', 'SearchController@filterIndex');