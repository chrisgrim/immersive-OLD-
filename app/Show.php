<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Show extends Model
{
    use SoftDeletes;

    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
	protected $fillable = ['date','event_id'];

	/**
     * Show Model belongs to the Event Model
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function event() 
    {
        return $this->belongsTo(Event::class);
    }
    
    /**
     * Each Show has many tickets 
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function tickets() 
    {
        return $this->hasMany(Ticket::class);
    }
}
