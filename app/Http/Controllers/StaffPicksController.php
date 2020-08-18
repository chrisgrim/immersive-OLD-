<?php

namespace App\Http\Controllers;

use App\StaffPick;
use App\Event;
use App\User;
use App\EventSearchRule;
use App\Http\Requests\StaffPickRequest;
use Illuminate\Http\Request;
use Carbon\Carbon;

class StaffPicksController extends Controller
{
    /**
    * Checks for admin before allowing controller access
    *
    * @return \Illuminate\Http\Response
    */
    public function __construct()
    {
        $this->middleware('moderator')->except('fetch', 'show');
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return StaffPick::paginate(10);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function userpicks(User $user)
    {
        return StaffPick::where('user_id', $user->id)->paginate(10);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $ids = StaffPick::all()->pluck('user_id');
        $users = User::find($ids);
        return view('adminArea.staffpicks', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function fetch(Request $request)
    {
        return Event::all()
            ->where('status', 'p')
            ->take(10);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        StaffPick::Create(
            [
            'event_id' => $request->event_id['id'],
            'user_id' => auth()->id(),
            'comments' => $request->comments,
            'rank' => $request->rank ? $request->rank : 5,
            'start_date' => $request->dates[0],
            'end_date' => $request->dates[1]
            ]
        );
    }


    /**
     * Display the specified resource.
     *
     * @param  \App\StaffPick  $staffPick
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $thursday = Carbon::now()->startOfWeek()->addDays(3); 
        $wednesday = Carbon::now()->startOfWeek()->addDays(9); 
        $week = $thursday->format('D') . ' ' .  $thursday->format('d') . ' to ' . $wednesday->format('D') . ' ' .  $wednesday->format('d');

        $staffpicks = StaffPick::whereDate('start_date', '<=', date("Y-m-d"))
            ->whereDate('end_date', '>=', date("Y-m-d"))
            ->orderBy('rank')
            ->get();
        return view('staffpicks.show', compact('staffpicks', 'week'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\StaffPick  $staffPick
     * @return \Illuminate\Http\Response
     */
    public function edit(StaffPick $staffpick)
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
    public function update(Request $request, StaffPick $staffpick)
    {
        if($request->rank) { $staffpick->update(['rank' => $request->rank]); return '';}
        if($request->comments) { $staffpick->update(['comments' => $request->comments]); return '';}
        $staffpick->update(
            [
            'start_date' => $request->start_date,
            'end_date' => $request->end_date,
            ]
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\StaffPick  $staffPick
     * @return \Illuminate\Http\Response
     */
    public function destroy(StaffPick $staffpick)
    {
        $staffpick->delete();
    }
}
