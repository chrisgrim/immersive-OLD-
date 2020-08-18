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
Route::RESOURCE('contactlevels', 'ContactLevelsController');
Route::RESOURCE('contentadvisories', 'ContentAdvisoriesController');
Route::RESOURCE('genres', 'GenresController');
Route::RESOURCE('remotelocations', 'RemoteLocationsController');
Route::RESOURCE('mobilities', 'MobilityController');
Route::RESOURCE('staffpicks', 'StaffPicksController');
Route::RESOURCE('reviewevents', 'ReviewEventsController');
Route::RESOURCE('interactivelevels', 'InteractiveLevelController');





// ----------   Search Page -------

Route::POST('/search/storedata', 'SearchController@searchDatastore');

Route::GET('/index/search', 'SearchController@index');

Route::GET('/index/search-online', 'SearchController@onlinesearch');
// This is the search for vuex
Route::POST('/vuex/search', 'SearchController@filterIndex');

//Get Messages from database
Route::GET('/messages', 'ConversationsController@index');
Route::GET('/conversations/fetch/messages', 'ConversationsController@fetchmessages');
Route::GET('/conversations/fetch/eventmessages', 'ConversationsController@fetcheventmessages');
Route::GET('/conversations/{conversation}', 'ConversationsController@show');
Route::POST('/conversations/{conversation}', 'ConversationsController@update');

//Admin Area
Route::GET('/admin/dashboard', 'AdminAreaController@index');
Route::GET('/finish/events', 'AdminAreaController@approval');
Route::GET('/finish/events/{event}', 'AdminAreaController@showApproval');
Route::GET('/finish/organizers', 'AdminAreaController@orgApproval');
Route::GET('/finish/organizers/{organizer}', 'AdminAreaController@showOrgApproval');
Route::POST('/approve/{event}', 'AdminAreaController@success');
Route::POST('/approve/org/{organizer}', 'AdminAreaController@orgSuccess');
Route::POST('/reject/{event}', 'AdminAreaController@reject');
Route::POST('/unapprove/{event}', 'AdminAreaController@fail');
Route::GET('/master/userlist', 'UserMasterController@index');
Route::PATCH('/master/userlist/{user}', 'UserMasterController@update');
Route::POST('/userlist/fetch', 'UserMasterController@fetch');
Route::GET('/admin/organizer', 'AdminOrganizerController@index');
Route::PATCH('/admin/organizer/{organizer}', 'AdminOrganizerController@update');
Route::POST('/admin/organizer/fetch', 'AdminOrganizerController@fetch');
Route::GET('/admin/events', 'AdminAreaEventsController@index');
Route::GET('/admin/boneyard', 'AdminAreaEventsController@boneyard');
Route::POST('/admin/events/fetch', 'AdminAreaEventsController@fetch');
Route::POST('/admin/boneyard/fetch', 'AdminAreaEventsController@boneyardFetch');
Route::POST('/admin/boneyard/{event}', 'AdminAreaEventsController@resurrect');
Route::POST('/staffpicks/userpicks/{user}', 'StaffPicksController@userpicks');
Route::POST('/admin/data', 'SearchDataController@create');

Route::GET('/admin/search/genres', 'GenresController@searchgenres');

//staffpicks
Route::GET('/staffpicks/current', 'StaffPicksController@show');


//Organizer 
Route::POST('/organizer/{organizer}/patch', 'OrganizerController@update');
Route::RESOURCE('organizer', 'OrganizerController');
Route::POST('message/organizer/{organizer}/{user}', 'OrganizerController@message');
Route::POST('change/organizer/{organizer}/', 'AdminOrganizerController@edit');

//User Profile Pages
Route::RESOURCE('users', 'ProfilesController');
Route::GET('account-settings', 'ProfilesController@account');
Route::GET('account-settings/notifications', 'ProfilesController@notifications');
Route::GET('account-settings/favorited', 'ProfilesController@favorited');

// favorites Button
Route::GET('myFavorites/{user}', 'FavoritesController@index');
Route::POST('favorite/{event}/favorites', 'FavoritesController@store');
Route::DELETE('favorite/{event}/favorites', 'FavoritesController@destroy');
Route::GET('favorite/{event}/login', 'FavoritesController@loginToFavorite');

Route::GET('/privacy-policy', 'LegalController@privacy');
Route::GET('/terms', 'LegalController@terms');
Route::GET('/disclaimer', 'LegalController@disclaimer');

//Event Creation Process
Route::GET('/create-event/edit', 'EventController@editEvents');
Route::GET('/create-event/edit/fetch', 'EventController@fetchEditEvents');
//Create Title
Route::GET('/create-event/{event}/title', 'EventTitleController@title');
Route::GET('/create-event/{event}/title/fetch', 'EventTitleController@fetchTitle');
Route::PATCH('/create-event/{event}/title ', 'EventTitleController@updateTitle');
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
//Create Tickets
Route::GET('/create-event/{event}/tickets', 'TicketsController@create');
Route::GET('/create-event/{event}/tickets/fetch', 'TicketsController@fetch');
Route::POST('/create-event/{event}/tickets', 'TicketsController@store');
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


