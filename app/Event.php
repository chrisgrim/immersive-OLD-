<?php

namespace App;

use ScoutElastic\Searchable;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Eloquent\Model;
use Intervention\Image\ImageManagerStatic as Image;

class Event extends Model
{
    use Searchable, Favoritable;

    protected $indexConfigurator = EventIndexConfigurator::class;


    protected $casts = [
        'location_latlon' => 'array',
    ];
    
    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
	protected $fillable = [
    	'slug', 'user_id', 'category_id','organizer_id','description','name','largeImagePath','thumbImagePath','advisories_id', 'organizer_id', 'location_latlon', 'closingDate','websiteUrl','ticketUrl','show_times','price_range', 'approval_process', 'approved','tag_line'

    ];

    /**
    * The relations to eager load on every query. I am adding shows here because I need to filter by dates for the search
    *
    * @var array
    */
    protected $with = ['shows', 'favorites', 'priceranges'];

    /**
    * The accessors to append to the model's array form.
    *
    * @var array
    */
    protected $appends = ['isFavorited'];

    /**
    * Should be searchable
    *
    * @return \Illuminate\Database\Eloquent\Relations\belongsTo
    */
    public function shouldBeSearchable()
    {
        return $this->isPublished();
    }

    /**
    * Determines which events are published
    *
    * @return bool
    */
    public function isPublished() {
        return $this->approved == true;
    }

    /**
    * Determines which events are published
    *
    * @return bool
    */
    public function getIsPickedAttribute() {
        return $this->approved == true;
    }
    
    /**
    * Each event belongs to One User
    *
    * @return \Illuminate\Database\Eloquent\Relations\belongsTo
    */
    public function user() 
    {
        return $this->belongsTo(User::class);
    }


    /**
    * Each event has multiple comments
    *
    * @return \Illuminate\Database\Eloquent\Relations\belongsTo
    */
    public function moderatorcomments() 
    {
        return $this->hasMany(ModeratorComment::class);
    }

    /**
    * Each event belongs to one Category
    *
    * @return \Illuminate\Database\Eloquent\Relations\belongsTo
    */
    public function category() 
    {
        return $this->belongsTo(Category::class);
    }

    /**
    * Each event hasOne StaffPick
    *
    * @return \Illuminate\Database\Eloquent\Relations\belongsTo
    */
    public function staffpick() 
    {
        return $this->hasOne(StaffPick::class);
    }

    /**
    * Each event hasOne StaffPick
    *
    * @return \Illuminate\Database\Eloquent\Relations\belongsTo
    */
    public function eventreviews() 
    {
        return $this->hasMany(ReviewEvent::class)
                    ->orderBy('rank', 'ASC');
    }

    /**
    * Each event belongs to One Organizer
    *
    * @return \Illuminate\Database\Eloquent\Relations/belongsTo
    */
    public function organizer() 
    {
        return $this->belongsTo(Organizer::class);
    }

    /**
     * Each Event has One Location
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function location() 
    {
        return $this->hasOne(Location::class);
    }

    /**
     * Each Event has one Expectation Model
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function advisories() 
    {
        return $this->hasOne(Advisory::class);
    }

    /**
     * Each event has many shows
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function shows() 
    {
        return $this->hasMany(Show::class);
    }

    /**
     * Each event has many price ranges
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function priceranges() 
    {
        return $this->hasMany(PriceRange::class);
    }

    /**
     * Each event can belong to many shows
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsToMany
     */
    public function genres() 
    {
        return $this->belongsToMany(Genre::class);
    }

    /**
     * Each event can belong to many regions
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsToMany
     */
    public function regions() 
    {
        return $this->belongsToMany(Region::class);
    }

    /**
     * Each event can belong to many ContactLevels
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsToMany
     */
    public function contactlevels() 
    {
        return $this->belongsToMany(ContactLevel::class);
    }

    /**
     * Each event can belong to many ContactLevels
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsToMany
     */
    public function contentadvisories() 
    {
        return $this->belongsToMany(ContentAdvisory::class);
    }

    /**
     * Each event can belong to many ContactLevels
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsToMany
     */
    public function mobilityadvisories() 
    {
        return $this->belongsToMany(MobilityAdvisory::class);
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

    /**
    * Creates a new event
    *
    * @return Nothing
    */
    public static function newEvent($request)
    {
        $event = Event::create([
            'user_id' => auth()->id(),
            'slug' => rand(),
            'organizer_id' => $request->id
        ]);
        $event->location()->Create();
        $event->advisories()->Create();
        return $event;
    }

    /**
    * Deletes the event images and then deletes event
    *
    * @return Nothing
    */
    public function deleteEvent($event) 
    {
        if ($event->largeImagePath) {
            Storage::deleteDirectory('public/event-images/' . pathinfo($event->largeImagePath, PATHINFO_FILENAME));
        };
        $event->delete();
    }

    /**
    * Deletes the event images and then deletes event
    *
    * @return Nothing
    */
    public function finalizeEvent($event) 
    {
        $website = $event->organizer->website;
        if ($event->websiteUrl == null) {
            $event->update([ 'websiteUrl' => $website ]);
        }
        if ($event->ticketUrl == null) {
            $event->update([ 'ticketUrl' => $website ]);
        }
        $event->update([
            'approval_process' => 'ready',
        ]);
    }

    /**
    * Deletes the event images and then deletes event
    *
    * @return Nothing
    */
    public static function finalSlug($event) 
    {
        if(Event::where('slug', '=', str_slug($event->name))->exists()){
            $slug = str_slug($event->name) . '-' . rand(2, 99);
            if(Event::where('slug', '=', $slug)->exists()){
                return str_slug($event->name) . '-' . rand(1,50000);
            } else {
                return $slug;
            };
        } else {
            return str_slug($event->name);
        };
    }

    /**
    * Store a newly created resource in storage. Update all the standard fields. For each genre field I check if they exist then add any the user created. Finally I sync those submitted with the genres associated with the event.
    *
    * @return Nothing
    */
    public function storeDescription($request, $event) 
    {
        $event->update($request->except(['genre']));
        if ($request->has('genre')) {
            foreach ($request['genre'] as $genre) {
                Genre::firstOrCreate([
                    'genre' => $genre
                ],
                [
                    'user_id' => auth()->user()->id,
                ]);
            };
            $newSync = Genre::all()->whereIn('genre', $request['genre']);
            $event->genres()->sync($newSync);
        };
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
            'name' => [
                'type' => 'search_as_you_type',
            ],
            'shows' => [
                'properties' => [
                    'date' => [
                        'type' => 'date',
                        'format' => 'yyyy-MM-dd HH:mm:ss'
                    ],
                    'event_id' => [
                        'type' => 'integer',
                    ],
                    'created_at' => [
                        'type' => 'text',
                        'index' => false
                    ],
                    'updated_at' => [
                        'type' => 'text',
                        'index' => false
                    ],
                ]
            ],
            'priceranges' => [
                'properties' => [
                    'price' => [
                        'type' => 'integer',
                    ],
                    'event_id' => [
                        'type' => 'integer',
                    ],
                    'created_at' => [
                        'type' => 'text',
                        'index' => false
                    ],
                    'updated_at' => [
                        'type' => 'text',
                        'index' => false
                    ],
                ]
            ],
            'advisories' => [
                'properties' => [
                    'sexualViolence' => [
                        'type' => 'text',
                        'index' => false
                    ],
                    'wheelchairReady' => [
                        'type' => 'text',
                        'index' => false
                    ],
                    'created_at' => [
                        'type' => 'text',
                        'index' => false
                    ],
                    'updated_at' => [
                        'type' => 'text',
                        'index' => false
                    ],
                ]
            ],
            'location' => [
                'properties' => [
                    'hiddenLocationToggle' => [
                        'type' => 'text',
                        'index' => false
                    ],
                    'created_at' => [
                        'type' => 'text',
                        'index' => false
                    ],
                    'updated_at' => [
                        'type' => 'text',
                        'index' => false
                    ],
                ]
            ],
            'slug' => [
                'type' => 'text',
                'index' => false
            ],
            'description' => [
                'type' => 'text',
                'analyzer' => 'english'
            ],
            'thumbImagePath' => [
                'type' => 'text',
                'index' => false
            ],
            'largeImagePath' => [
                'type' => 'text',
                'index' => false
            ],
            'user_id' => [
                'type' => 'integer',
            ],
            'category_id' => [
                'type' => 'integer',
            ],
            'dates_id' => [
                'type' => 'integer',
                'index' => false
            ],
            'information_id' => [
                'type' => 'integer',
                'index' => false
            ],
            'advisories_id' => [
                'type' => 'integer',
                'index' => false
            ],
            'organizer_id' => [
                'type' => 'integer',
            ],
            'overallRating' => [
                'type' => 'integer',
                'index' => false
            ],
            'approved' => [
                'type' => 'text',
                'index' => false
            ],
            'approval_process' => [
                'type' => 'text',
            ],
            'created_at' => [
                'type' => 'text',
                'index' => false
            ],
            'show_price' => [
                'type' => 'text',
                'index' => false
            ],
            'price_range' => [
                'type' => 'text',
                'index' => false,
            ],
            'updated_at' => [
                'type' => 'text',
                'index' => false
            ],
            'location_latlon' => [
                'type' => 'geo_point'                
            ],
            'closingDate' => [
                'type' => 'date',
                'format' => 'yyyy-MM-dd HH:mm:ss'
            ],
        ]
    ];

}
