<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReviewEvent extends Model
{
    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [
        'user_id','event_id','organizer_id','image_path','reviewer_name','url','review','rank'
    ];

    /**
     * Each review belongs to an event
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function event() 
    {
        return $this->belongsTo(Event::class);
    }

}
