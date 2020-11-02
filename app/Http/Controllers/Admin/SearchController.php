<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\OrganizerSearchRule;
use App\Organizer;

use Illuminate\Http\Request;

class SearchController extends Controller
{
    /**
     * Return list of Organizers.
     *
     * @return \Illuminate\Http\Response
     */
    public function organizers(Request $request)
    {
        if (! $request->keywords) {
            return Organizer::take(10)->get();
        }

        return Organizer::search($request->keywords)
        ->rule(OrganizerSearchRule::class)
        ->get();
    }

}
