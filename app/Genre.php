<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
	protected $fillable = [
    	'genre','admin', 'user_id'
    ];
    
    /**
     * Each genre can belong to many Events
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsToMany
     */
    public function events() 
    {
    	return $this->belongsToMany(Event::class);
    }
    
}
