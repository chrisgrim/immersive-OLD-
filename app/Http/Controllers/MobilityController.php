<?php

namespace App\Http\Controllers;

use App\MobilityAdvisory;
use Illuminate\Http\Request;

class MobilityController extends Controller
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
        return MobilityAdvisory::where('admin', true)->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('adminArea.mobilities');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        MobilityAdvisory::create([
            'mobilities' => strtolower($request->mobilities),
            'admin' => true,
            'user_id' => auth()->user()->id
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $Mobility
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MobilityAdvisory $mobility)
    {
        if ($request->rank) {
            return $mobility->update([
                'rank' => $request->rank,
                'user_id' => auth()->user()->id
            ]);
        }
        if ($request->mobilities) {
             $mobility->update([
                'mobilities' => strtolower($request->mobilities),
                'user_id' => auth()->user()->id
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $Genre
     * @return \Illuminate\Http\Response
     */
    public function destroy(MobilityAdvisory $mobility)
    {
        $mobility->delete();
    }
}
