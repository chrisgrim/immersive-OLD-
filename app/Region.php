<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Region extends Model
{
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
