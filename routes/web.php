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

Auth::routes(['verify' => true]);


Route::RESOURCE('events', 'EventController');
Route::RESOURCE('categories', 'CategoryController');
Route::RESOURCE('regions', 'RegionsController');
Route::RESOURCE('contactlevels', 'ContactLevelsController');
Route::RESOURCE('contentadvisories', 'ContentAdvisoriesController');
Route::RESOURCE('genres', 'GenresController');
Route::RESOURCE('organizer', 'OrganizerController');
Route::RESOURCE('mobilities', 'MobilityController');
Route::RESOURCE('staffpicks', 'StaffPicksController');
Route::RESOURCE('eventreviews', 'EventReviewController');

// ----------   Search Page -------
// Adds Top Search to Session
Route::POST('/search/storedata', 'SearchController@searchDatastore');
// Loads Search Page with Session variable
Route::GET('/index/search', 'SearchController@index');
// This is the search for vuex
Route::POST('/vuex/search', 'SearchController@filterIndex');

//Get Messages from database
Route::GET('/messages', 'ConversationsController@index');
Route::GET('/conversations/fetch', 'ConversationsController@fetch');
Route::GET('/conversations/{conversation}', 'ConversationsController@show');
Route::POST('/conversations/{conversation}', 'ConversationsController@update');

//Admin Area
Route::GET('/admin/dashboard', 'AdminAreaController@index');
Route::GET('/finish/events', 'AdminAreaController@approval');
Route::GET('/finish/events/{event}', 'AdminAreaController@showApproval');
Route::POST('/approve/{event}', 'AdminAreaController@success');
Route::POST('/unapprove/{event}', 'AdminAreaController@fail');
Route::GET('/master/userlist', 'UserMasterController@index');
Route::PATCH('/master/userlist/{user}', 'UserMasterController@update');
Route::GET('/userlist/fetch', 'UserMasterController@fetch');
Route::POST('/admin/staffpicks', 'StaffPicksController@store');
Route::POST('/admin/staffpicks/{staffpick}', 'StaffPicksController@update');
Route::GET('/admin/staffpicks', 'StaffPicksController@index');
Route::GET('/admin/organizer', 'AdminOrganizerController@index');
Route::PATCH('/admin/organizer/{organizer}', 'AdminOrganizerController@update');
Route::GET('/admin/organizer/fetch', 'AdminOrganizerController@fetch');



//User Profile Pages
Route::RESOURCE('users', 'ProfilesController');

Route::POST('message/organizer/{organizer}/{user}', 'OrganizerController@message');


// favorites Button
Route::GET('myFavorites/{user}', 'FavoritesController@index');
Route::POST('favorite/{event}/favorites', 'FavoritesController@store');
Route::DELETE('favorite/{event}/favorites', 'FavoritesController@destroy');
Route::GET('favorite/{event}/login', 'FavoritesController@loginToFavorite');

//Event Creation Process
Route::GET('/create-event/edit', 'EventController@editEvents');
Route::GET('/create-event/edit/fetch', 'EventController@fetchEditEvents');
//Create Title
Route::GET('/create-event/{event}/title', 'EventController@title');
Route::GET('/create-event/{event}/title/fetch', 'EventController@fetchTitle');
Route::PATCH('/create-event/{event}/title ', 'EventController@updateTitle');
//Create Location
Route::GET('/create-event/{event}/location', 'LocationController@create');
Route::GET('/create-event/{event}/location/fetch', 'LocationController@fetch');
Route::PATCH('/create-event/{event}/location', 'LocationController@store');
//Select Category
Route::GET('/create-event/{event}/category', 'CategoryController@select');
Route::GET('/create-event/{event}/category/fetch', 'CategoryController@fetch');
Route::PATCH('/create-event/{event}/category', 'CategoryController@add');
//Create Show and Ticket Times
Route::GET('/create-event/{event}/shows', 'ShowsController@create');
Route::GET('/create-event/{event}/shows/fetch', 'ShowsController@fetch');
Route::POST('/create-event/{event}/shows', 'ShowsController@store');
//Create Description
Route::GET('/create-event/{event}/description', 'DescriptionController@create');
Route::GET('/create-event/{event}/description/fetch', 'DescriptionController@fetch');
Route::PATCH('/create-event/{event}/description ', 'DescriptionController@store');
//Create Advisories
Route::GET('/create-event/{event}/advisories', 'AdvisoriesController@create');
Route::GET('/create-event/{event}/advisories/fetch', 'AdvisoriesController@fetch');
Route::PATCH('/create-event/{event}/advisories ', 'AdvisoriesController@store');
//Create Image
Route::GET('/create-event/{event}/images', 'ImageController@create');
Route::POST('/create-event/{event}/images', 'ImageController@store');
//Create Review
Route::GET('/create-event/{event}/review', 'EventController@review');
//Submit Event
Route::GET('/create-event/{event}/submit', 'EventController@submitEvent');
Route::GET('/create-event/{event}/thankyou', 'EventController@thanks');

Route::GET('/login/{provider}', 'Auth\LoginController@redirectToProvider');
Route::GET('/login/{provider}/callback', 'Auth\LoginController@handleProviderCallback');

//Generate City List
Route::GET('/citylist/generate', 'CityListsController@generate');


