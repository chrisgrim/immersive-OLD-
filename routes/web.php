<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::GET('/', 'EventController@index')->name('home');

Auth::routes();

Route::RESOURCE('events', 'EventController');
Route::RESOURCE('categories', 'CategoryController');
Route::RESOURCE('regions', 'RegionsController');
Route::RESOURCE('contactlevels', 'ContactLevelsController');
Route::RESOURCE('contentadvisories', 'ContentAdvisoriesController');
Route::RESOURCE('genres', 'GenresController');

// ----------   Search Page -------
// Adds Top Search to Session
Route::POST('/search/storedata', 'SearchController@searchDatastore');
// Loads Search Page with Session variable
Route::GET('/index/search', 'SearchController@index');
// This is the search for vuex
Route::POST('/vuex/search', 'SearchController@filterIndex');

//Admin Area
Route::GET('/admin/dashboard', 'AdminAreaController@index');
Route::GET('/approve/events', 'AdminAreaController@approve');
Route::GET('/approve/events/{event}', 'AdminAreaController@showApproval');
Route::POST('/approve/{event}', 'AdminAreaController@success');
Route::POST('/unapprove/{event}', 'AdminAreaController@fail');

//User Profile Pages
Route::RESOURCE('users', 'ProfilesController');


// favorites Button
Route::GET('myFavorites/{user}', 'FavoritesController@index');
Route::POST('favorite/{event}/favorites', 'FavoritesController@store');
Route::DELETE('favorite/{event}/favorites', 'FavoritesController@destroy');
Route::GET('favorite/{event}/login', 'FavoritesController@loginToFavorite');

//event list
Route::GET('/create-event/edit', 'EventController@editEvents');

// Create Paths
Route::GET('/create-event/{event}/organizer', 'OrganizerController@create');
Route::POST('/create-event/{event}/organizer', 'OrganizerController@store');
Route::POST('/create-event/{event}/{organizer}/organizer', 'OrganizerController@update');

Route::GET('/create-event/{event}/title', 'EventController@title');
Route::PATCH('/create-event/{event}/title ', 'EventController@updateTitle');

Route::GET('/create-event/{event}/location', 'LocationController@create');
Route::PATCH('/create-event/{event}/location', 'LocationController@store');

Route::GET('/create-event/{event}/category', 'EventController@createCategory');
Route::PATCH('/create-event/{event}/category', 'EventController@updateCategory');

Route::GET('/create-event/{event}/shows', 'ShowsController@create');
Route::POST('/create-event/{event}/shows/tmp', 'ShowsController@tempStore');
Route::GET('/create-event/{event}/shows/gettmp', 'ShowsController@getTempStore');
Route::GET('/create-event/{event}/shows/loadshows', 'ShowsController@loadShows');
Route::POST('/create-event/{event}/shows', 'ShowsController@store');

Route::GET('/create-event/{event}/description', 'DescriptionController@create');
Route::PATCH('/create-event/{event}/description ', 'DescriptionController@store');

Route::GET('/create-event/{event}/expect', 'ExpectController@create');
Route::PATCH('/create-event/{event}/expect ', 'ExpectController@store');

Route::GET('/create-event/{event}/images', 'ImageController@create');
Route::POST('/create-event/{event}/images', 'ImageController@store');

Route::GET('/create-event/{event}/thankyou', 'EventController@thanks');

//Generate City List
Route::GET('/citylist/generate', 'CityListsController@generate');


