<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [
    	'hiddenLocation','home','street','city','region','country','postal_code','longitude','latitude','event_id', 'hiddenLocationToggle'
    ];
    
    /**
     * Each Location belongs to an Event Model.
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function event() 
    {
        return $this->belongsTo(Event::class);
    }

    /**
     * Store a newly created resource in storage. I update the location table with the request except token and region.
     I then sync the regions of the event to the request. Finally I add the lat and lon to the event model for easy searching
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public static function storeEventLocation($request, $event)
    {
        $event->location->update($request->all());
        $event->update([
            'location_latlon' => [
                'lat' => $request->latitude,
                'lon' => $request->longitude,
            ],
            'hasLocation' => true,
        ]);
    }

    /**
     * Store a newly created remote in storage. It is a has many relationship
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public static function storeRemoteLocation($request, $event)
    {
        foreach ($request->remote as $loc) {
            RemoteLocation::firstOrCreate([
                'location' => strtolower($loc)
            ],
            [
                'user_id' => auth()->user()->id,
            ]);
        };
        
        $newSync = RemoteLocation::all()->whereIn('location',  array_map('strtolower', $request['remote']));
        $event->remotelocations()->sync($newSync);

        $event->update([
            'hasLocation' => false,
            'location_latlon' => null,
            'remote_description' => $request->description,
        ]);
    }
}
