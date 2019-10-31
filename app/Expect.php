<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Expect extends Model
{
    protected $fillable = [
    	'wheelchairReady','sexualViolence','sexualViolenceDescription','contactAdvisories','mobilityAdvisories','contentAdvisories','event_id','ageRestriction'

    ];
    public function event() 
    {
        return $this->hasOne(Event::class);
    }
}


