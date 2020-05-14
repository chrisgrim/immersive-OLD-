<?php

namespace App\Http\Controllers;

use App\ContentAdvisory;
use Illuminate\Http\Request;

class ContentAdvisoriesController extends Controller
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
        return ContentAdvisory::where('admin', true)->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('adminArea.contentadvisories');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        ContentAdvisory::create([
            'advisories' => $request->advisories,
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
    public function update(Request $request, ContentAdvisory $contentadvisory)
    {
        if ($request->rank) {
            return $contentadvisory->update([
                'rank' => $request->rank,
                'user_id' => auth()->user()->id
            ]);
        }
        if ($request->advisories) {
            return $contentadvisory->update([
                'advisories' => $request->advisories,
                'user_id' => auth()->user()->id
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContentAdvisory $contentadvisory)
    {
        $contentadvisory->delete();
    }
}
