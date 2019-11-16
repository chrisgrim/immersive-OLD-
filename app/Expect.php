<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expect extends Model
{
    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [
    	'wheelchairReady','sexualViolence','sexualViolenceDescription','contactAdvisories','mobilityAdvisories','contentAdvisories','event_id','ageRestriction'
    ];
    
    /**
     * Expect Model hasOne Event
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasOne
     */
    public function event() 
    {
        return $this->hasOne(Event::class);
    }
}


