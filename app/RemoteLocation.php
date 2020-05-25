<?php

namespace App;

use App\Scopes\RankScope;
use Illuminate\Database\Eloquent\Model;

class RemoteLocation extends Model
{
    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [
        'location','admin', 'user_id', 'rank', 'description'
    ];

    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted()
    {
        static::addGlobalScope(new RankScope);
    }

    /**
     * Each genre can belong to many Events
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsToMany
     */
    public function events() 
    {
        return $this->belongsToMany(Event::class);
    }
}