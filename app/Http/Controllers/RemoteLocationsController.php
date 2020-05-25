<?php

namespace App\Http\Controllers;

use App\RemoteLocation;
use Illuminate\Http\Request;

class RemoteLocationsController extends Controller
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
        return RemoteLocation::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('adminArea.remotelocations');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        RemoteLocation::create([
            'location' => strtolower($request->location),
            'description' => strtolower($request->description),
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, RemoteLocation $remotelocation)
    {
        if ($request->location) {
            $remotelocation->update([
                'location' => strtolower($request->location),
                'user_id' => auth()->user()->id,
            ]);
        }
         if ($request->description) {
            $remotelocation->update([
                'description' => strtolower($request->description),
                'user_id' => auth()->user()->id,
            ]);
        }
        if ($request->rank) {
            $remotelocation->update([
                'user_id' => auth()->user()->id,
                'rank' => $request->rank,
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(RemoteLocation $remotelocation)
    {
        $remotelocation->delete();
    }
}
