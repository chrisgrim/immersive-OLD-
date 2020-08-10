<?php

namespace App\Http\Controllers;

use App\Genre;
use App\GenreSearchRule;
use Illuminate\Http\Request;

class GenresController extends Controller
{
    /**
     * Checks for admin before allowing controller access
     *
     * @return \Illuminate\Http\__construct
     */
    public function __construct()
    {
        $this->middleware('admin');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Genre::orderBy('name')->paginate(40);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('adminArea.genres');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Genre::create([
            'name' => $request->name,
            'slug' => strtolower($request->name),
            'admin' => true,
            'user_id' => auth()->user()->id
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function searchgenres(Request $request)
    {
        if ($request->keywords) {
            $genres = Genre::search($request->keywords)
                ->rule(GenreSearchRule::class)
                ->get();
             if ($genres->count()) {
                return $genres;  
            }
        }
        return Genre::orderBy('name')->limit(40)->get();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $Genre
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Genre $genre)
    {
        $genre->update([
            'rank' => $request['rank'],
            'name' => $request['name'],
            'slug' => strtolower($request['name']),
            'user_id' => auth()->user()->id,
            'admin' => $request['admin'],
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $Genre
     * @return \Illuminate\Http\Response
     */
    public function destroy(Genre $genre)
    {
        $genre->delete();
    }
}
