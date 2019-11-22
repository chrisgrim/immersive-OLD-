<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactLevel extends Model
{
	/**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [
    	'level'
    ];

	/**
	* Each ContactLevel can belong to many events
	*
	* @return \Illuminate\Database\Eloquent\Relations\belongsToMany
	*/
    public function events() 
    {
    	return $this->belongsToMany(Event::class);
    }
}
