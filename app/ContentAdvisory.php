<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContentAdvisory extends Model
{
	/**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [ 'advisories','admin', 'user_id' ];
    
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
                    'advisories' => $content
                ],
                [
                    'user_id' => auth()->user()->id,
                ]);
            };
            $newSync = ContentAdvisory::all()->whereIn('advisories', $request['contentAdvisory']);
            $event->contentadvisories()->sync($newSync);
        };
    }
}
