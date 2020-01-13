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
        $this->middleware(['auth', 'verified']);
        $this->middleware('can:update,event');
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
     * Show the form for creating a new resource. $Pivots gets the genres assigned to the event
     $genres gets all the genres in the list.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Event $event)
    {
        return view('create.description', compact('event'));
    }

     /**
     * Show the form for creating a new resource. $Pivots gets the genres assigned to the event
     $genres gets all the genres in the list.
     *
     * @return \Illuminate\Http\Response
     */
    public function fetch(Event $event)
    {
        $pivots = $event->genres()->get();
        $genres = Genre::where('admin', true)
                        ->orWhere('user_id', auth()->user()->id)
                        ->get();

        return response()->json(array(
            'event' => $event,
            'pivots' => $pivots,
            'genres' => $genres
        ));
    }

    /**
     * Store a newly created resource in storage. Update all the standard fields. For each genre field I check if they exist then add any the user created. Finally I sync those submitted with the genres associated with the event.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DescriptionStoreRequest $request, Event $event)
    {
        $event->update($request->except(['genre']));

        if ($request->has('genre')) {
            foreach ($request['genre'] as $genre) {
                Genre::firstOrCreate([
                    'genre' => $genre
                ],
                [
                    'user_id' => auth()->user()->id,
                ]);
            };
            $newSync = Genre::all()->whereIn('genre', $request['genre']);
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
