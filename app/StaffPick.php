<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Scopes\CreatedAtScope;

class StaffPick extends Model
{
     /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [
        'start_date','event_id', 'user_id', 'end_date', 'rank', 'comments'
    ];

     /**
    * The relations to eager load on every query. I am adding shows here because I need to filter by dates for the search
    *
    * @var array
    */
    protected $with = ['event', 'user'];

    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted()
    {
        static::addGlobalScope(new CreatedAtScope);
    }

    /**
    * Each Staff Pick hasOne one event
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
