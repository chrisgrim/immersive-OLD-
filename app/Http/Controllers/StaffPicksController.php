<?php

namespace App\Http\Controllers;

use App\StaffPick;
use Illuminate\Http\Request;

class StaffPicksController extends Controller
{
    /**
    * Checks for admin before allowing controller access
    *
    * @return \Illuminate\Http\Response
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
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\StaffPick  $staffPick
     * @return \Illuminate\Http\Response
     */
    public function show(StaffPick $staffPick)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\StaffPick  $staffPick
     * @return \Illuminate\Http\Response
     */
    public function edit(StaffPick $staffPick)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\StaffPick  $staffPick
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, StaffPick $staffPick)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\StaffPick  $staffPick
     * @return \Illuminate\Http\Response
     */
    public function destroy(StaffPick $staffPick)
    {
        //
    }
}
