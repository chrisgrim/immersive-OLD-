<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [
    	'hiddenLocation','home','street','city','region','country','postal_code','longitude','latitude','event_id', 'hiddenLocationToggle'
    ];
    
    /**
     * Each Location belongs to an Event Model.
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function event() 
    {
        return $this->belongsTo(Event::class);
    }
}
