<?php

namespace App\Http\Controllers;

use App\SearchData;
use Illuminate\Http\Request;

class SearchDataController extends Controller
{
    public function create(Request $request)
    {
        $array = [];
        $data = SearchData::where('search_type', $request->type)->get();
        $counts = $data->groupBy('search_term')->map->count()->toArray();
        return $counts;

        return SearchData::where('search_type', $request->type)->limit(40)->get();
    }
}
