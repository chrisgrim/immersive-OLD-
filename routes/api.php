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

//Users entered data into the navbar
Route::GET('search/navbar/content', 'SearchController@searchNav');

//Add Dates to Show Controller

Route::POST('location/search', 'SearchController@searchLocation');

Route::GET('searchedEvents', 'SearchController@get');

Route::GET('index/load', 'SearchController@loadIndex');

Route::POST('index/filter', 'SearchController@filterIndex');

Route::GET('search/navbar/content', 'SearchController@searchNav');

Route::GET('organizer/search', 'SearchController@searchOrganizer');

//browser geocache
Route::GET('geo/cache', 'ProfilesController@storeUserGeolocation');