<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContentAdvisory extends Model
{
	/**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [ 'advisories','admin', 'user_id' ];
    
    /**
	* Each ContentAdvisory can belong to many events
	*
	* @return \Illuminate\Database\Eloquent\Relations\belongsToMany
	*/
    public function events() 
    {
    	return $this->belongsToMany(Event::class);
    }
}
