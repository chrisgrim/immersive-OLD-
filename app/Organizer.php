<?php

namespace App;

use ScoutElastic\Searchable;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;


class Organizer extends Model
{
    use Searchable;

    protected $indexConfigurator = OrganizerIndexConfigurator::class;

    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [
    	'user_id','name','website','slug','description','rating','imagePath','instagramHandle','twitterHandle','facebookHandle'
    ];

    /**
    * Each Organizer can have many events
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function events() 
    {
        return $this->hasMany(Event::class);
    }
    
    /**
     * The Organizer belongs to one user
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function user() 
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get Live Events for organizer
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function liveEvents()
    {
        return $this->hasMany(Event::class)->whereDate('closingDate', '>=', Carbon::today());
    }

    /**
     * Get Past Events for organizer
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function pastEvents()
    {
        return $this->hasMany(Event::class)->whereDate('closingDate', '<=', Carbon::today());
    }

    /**
     * Get In Progress Events for organizer
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function inProgressEvents()
    {
        return $this->hasMany(Event::class)->where('approval_process', 'inProgress')->orWhere('approval_process', 'ready');
    }

    /**
    * Save File and update organizer model with path name
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  $organizer
    */
    public static function saveFile($organizer, $request)
    {
        Storage::delete('public/' . $organizer->imagePath);
        $extension = $request->file('imagePath')->getClientOriginalExtension();
        $filename= $request->slug . '-' . 'organization' . '_' . rand(1,50000) .'.'.$extension;
        $imagePath = "organizer-images/$filename";
        $request->file('imagePath')->storeAs('/public/organizer-images', $filename);
        Image::make(storage_path()."/app/public/organizer-images/$filename")->fit(1200, 800)->save(storage_path("/app/public/$imagePath"));
        $organizer->update([ 'imagePath' => $imagePath ]);
    }

    /**
    * Save File and update organizer model with path name
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  $organizer
    */
    public static function getOrganizerEvents()
    {
        $organizers = auth()->user()->organizers->load([
            'liveEvents' => function ($builder) {
                $builder->where('user_id', auth()->id());
            },
            'pastEvents' => function ($builder) {
                $builder->where('user_id', auth()->id());
            },
            'inProgressEvents' => function ($builder) {
                $builder->where('user_id', auth()->id());
            }
        ]);
        $eventsbyorganizer = $organizers->map(function ($organizer) {
            return [
                        'id' => $organizer->id,
                        'name' => $organizer->name,
                        'slug' => $organizer->slug,
                        'imagePath' => $organizer->imagePath,
                        'live_events' =>  $organizer->liveEvents,
                        'past_events' => $organizer->pastEvents,
                        'in_progress_events' => $organizer->inProgressEvents,
            ];
        });
        return $eventsbyorganizer;
    }

    /**
    * Sets the Route Key to slug instead of ID
    *
    * @return Route Key Name
    */
    public function getRouteKeyName()
    {
        return 'slug';
    }

    protected $searchRules = [
        //
    ];

    protected $mapping = [
        'properties' => [
            'id' => [
                'type' => 'integer',
                'index' => false
            ],
            'user_id' => [
                'type' => 'integer',
                'index' => false
            ],
            'name' => [
                'type' => 'search_as_you_type',
            ],
            'website' => [
                'type' => 'keyword'
            ],
            'description' => [
                'type' => 'text',
                'analyzer' => 'english'
            ],
            'slug' => [
                'type' => 'text',
                'index' => false
            ],
            'rating' => [
                'type' => 'integer',
                'index' => false
            ],
            'imagePath' => [
                'type' => 'text',
                'index' => false
            ],
            'instagramHandle' => [
                'type' => 'keyword',
                'index' => false
            ],
            'facebookHandle' => [
                'type' => 'keyword',
                'index' => false
            ],
            'twitterHandle' => [
                'type' => 'keyword',
                'index' => false
            ],
        ]
    ];
}
