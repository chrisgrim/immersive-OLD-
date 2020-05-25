<?php

namespace App\Http\Controllers;

use App\InteractiveLevel;
use Illuminate\Http\Request;

class InteractiveLevelController extends Controller
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
        return InteractiveLevel::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('adminArea.interactivelevels');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        InteractiveLevel::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, InteractiveLevel $interactivelevel)
    {
        if ($request->name) {
            return $interactivelevel->update([
                'name' => $request->name,
            ]);
        }
        if ($request->rank) {
            return $interactivelevel->update([
                'rank' => $request->rank,
            ]);
        }
        if ($request->description) {
            return $interactivelevel->update([
                'description' => $request->description,
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(InteractiveLevel $interactivelevel)
    {
        $interactivelevel->delete();
    }
}
