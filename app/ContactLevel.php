<?php

namespace App;

use App\Scopes\RankScope;
use Illuminate\Database\Eloquent\Model;

class ContactLevel extends Model
{
	/**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [ 'level', 'rank', 'admin', 'user_id'];

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
	* Each ContactLevel can belong to many events
	*
	* @return \Illuminate\Database\Eloquent\Relations\belongsToMany
	*/
    public function events() 
    {
    	return $this->belongsToMany(Event::class);
    }
}
