<?php

namespace App;

use ScoutElastic\Searchable;
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
    * Each event belongs to One User
    *
    * @return \Illuminate\Database\Eloquent\Relations\belongsTo
    */
    public function user() 
    {
        return $this->belongsTo(User::class);
    }

    /**
    * Each event has One Comment
    *
    * @return \Illuminate\Database\Eloquent\Relations\belongsTo
    */
    public function moderatorcomment() 
    {
        return $this->hasOne(ModeratorComment::class);
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
