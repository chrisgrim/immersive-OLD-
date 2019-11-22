<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
	/**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [
    	'region'
    ];

	/**
     * Each Region belongs to many events
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsToMany
     */
    public function events() 
    {
    	return $this->belongsToMany(Event::class);
    }
}
