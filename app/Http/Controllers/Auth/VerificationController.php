<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Event;
use App\Category;
use App\StaffPick;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\VerifiesEmails;

class VerificationController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Email Verification Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling email verification for any
    | user that recently registered with the application. Emails may also
    | be re-sent if the user didn't receive the original email message.
    |
    */

    use VerifiesEmails;

    /**
     * Where to redirect users after verification.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('signed')->only('verify');
        $this->middleware('throttle:6,1')->only('verify', 'resend');
    }

    public function show() {
        $events = Event::search('*')
            ->where('closingDate', '>=', 'now/d')
            ->get();
        $categories = Category::all();
        $staffpicks = StaffPick::whereDate('end_date','>=', Carbon::now())
            ->whereDate('start_date', '<=', Carbon::now())
            ->orderBy('rank', 'ASC')
            ->get();
        return view('/auth/verify',compact('events', 'categories','staffpicks'));
    }
}
