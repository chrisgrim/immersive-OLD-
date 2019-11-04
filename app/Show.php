<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Show extends Model
{
    use SoftDeletes;

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
