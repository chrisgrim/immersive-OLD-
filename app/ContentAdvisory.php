<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Scopes\RankScope;

class ContentAdvisory extends Model
{
	/**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [ 'advisories','admin', 'user_id', 'rank' ];

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
	* Each ContentAdvisory can belong to many events
	*
	* @return \Illuminate\Database\Eloquent\Relations\belongsToMany
	*/
    public function events() 
    {
    	return $this->belongsToMany(Event::class);
    }

    /**
    *Save advisories and update pivot
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  $event
    */
    public static function saveAdvisories($event, $request)
    {
        if ($request->has('contentAdvisory')) {
            foreach ($request['contentAdvisory'] as $content) {
                ContentAdvisory::firstOrCreate([
                    'advisories' => strtolower($content)
                ],
                [
                    'user_id' => auth()->user()->id,
                ]);
            };
            $newSync = ContentAdvisory::all()->whereIn('advisories', array_map('strtolower', $request['contentAdvisory']));
            $event->contentadvisories()->sync($newSync);
        };
    }
}
