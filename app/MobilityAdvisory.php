<?php

namespace App;

use App\Scopes\RankScope;
use Illuminate\Database\Eloquent\Model;

class MobilityAdvisory extends Model
{
    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [ 'mobilities','admin', 'user_id', 'rank' ];

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
        if ($request->has('mobilityAdvisory')) {
            foreach ($request['mobilityAdvisory'] as $content) {
                MobilityAdvisory::firstOrCreate([
                    'mobilities' => strtolower($content)
                ],
                [
                    'user_id' => auth()->user()->id,
                ]);
            };
            $newSync = MobilityAdvisory::all()->whereIn('mobilities', array_map('strtolower', $request['mobilityAdvisory']));
            $event->mobilityadvisories()->sync($newSync);
        };
    }
}
