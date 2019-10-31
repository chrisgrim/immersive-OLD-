<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Show extends Model
{
	protected $fillable = ['date','event_id'];
	
    public function event() 
    {
        return $this->belongsTo(Event::class);
    }
    public function tickets() 
    {
        return $this->hasMany(Ticket::class);
    }
}
