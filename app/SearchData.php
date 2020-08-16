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
}
