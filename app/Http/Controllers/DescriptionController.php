<?php

namespace App\Http\Controllers;

use App\Genre;
use App\Event;
use Illuminate\Http\Request;
use App\Http\Requests\DescriptionStoreRequest;

class DescriptionController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Event $event)
    {
        //Selects all the genres assigned to this event and adds then to $pivots variable
        $pivots = $event->genres()->get();
        //Grabs all the Genres to populate the list
        $genres = Genre::all();

        return view('create.description', compact('event', 'pivots', 'genres'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DescriptionStoreRequest $request, Event $event)
    {
        $event->update($request->except(['genre']));

        if ($request->has('genre')) {

            $genres = $request['genre'];

            //go through them and if it exists then it does nothing, otherwise it will create a new genre
            foreach ($genres as $genre) {
                Genre::firstOrCreate(['genre' => $genre]);
            }

            //newSync is given all the objects where the name is the same as the submitted names
            $newSync = Genre::all()->whereIn('genre', $genres);
            
            //using laravels sync and belongsTo relationship we can easy add these to the event_genre table
            $event->genres()->sync($newSync);

        };
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Genre  $genre
     * @return \Illuminate\Http\Response
     */
    public function show(Genre $genre)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Genre  $genre
     * @return \Illuminate\Http\Response
     */
    public function edit(Genre $genre)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Genre  $genre
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Genre $genre)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Genre  $genre
     * @return \Illuminate\Http\Response
     */
    public function destroy(Genre $genre)
    {
        //
    }
}
