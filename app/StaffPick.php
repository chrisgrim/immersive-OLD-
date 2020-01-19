<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StaffPick extends Model
{
     /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [
        'selected_date','event_id', 'user_id'
    ];

    /**
    * Each Staff Pick BelongsTo one event
    *
    * @return \Illuminate\Database\Eloquent\Relations\belongsTo
    */
    public function event() 
    {
        return $this->belongsTo(Event::class);
    }

    /**
    * Each Staff Pick BelongsTo one user
    *
    * @return \Illuminate\Database\Eloquent\Relations\belongsTo
    */
    public function user() 
    {
        return $this->belongsTo(User::class);
    }
}
