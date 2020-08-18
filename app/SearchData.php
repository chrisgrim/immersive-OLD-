<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SearchData extends Model
{
    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = ['search_term','search_type'];

    /**
     * Stores the users search based on category or tag
     *
     * @return nothing is returned
     */
    public static function storeSearch($request)
    {
        if ($request->category) {
             SearchData::create([
                'search_term' => Category::find($request->category)->name,
                'search_type' => 'category'
            ]);
        }
        if ($request->tag) {
            SearchData::create([
                'search_term' => $request->tag,
                'search_type' => 'tag'
            ]);
        }
    }
}
