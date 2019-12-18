<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class MobilityAdvisory extends Model
{
    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [ 'mobilities','admin', 'user_id' ];
    
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
        if ($request->has('mobilityAdvisory')) {
            foreach ($request['mobilityAdvisory'] as $content) {
                MobilityAdvisory::firstOrCreate([
                    'mobilities' => $content
                ],
                [
                    'user_id' => auth()->user()->id,
                ]);
            };
            $newSync = MobilityAdvisory::all()->whereIn('mobilities', $request['mobilityAdvisory']);
            $event->mobilityadvisories()->sync($newSync);
        };
    }
}
