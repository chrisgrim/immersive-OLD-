<?php

namespace App;

use ScoutElastic\Searchable;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use Searchable, Favoritable;

    protected $indexConfigurator = EventIndexConfigurator::class;

    protected $casts = [
        'location_latlon' => 'array',
    ];
    
	protected $fillable = [
    	'slug', 'user_id', 'category_id','organizer_id','description','name','largeImagePath','thumbImagePath','expectation_id','information_id', 'organizer_id', 'location_latlon', 'closingDate','websiteUrl','ticketUrl',

    ];

    /**
     * The relations to eager load on every query.
     *
     * @var array
     */
    protected $with = ['shows', 'favorites'];
     /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['isFavorited'];

    public function user() 
    {
        return $this->belongsTo(User::class);
    }
    public function category() 
    {
        return $this->belongsTo(Category::class);
    }
    public function organizer() 
    {
        return $this->belongsTo(Organizer::class);
    }
    public function location() 
    {
        return $this->hasOne(Location::class);
    }
    public function expectation() 
    {
        return $this->hasOne(Expect::class);
    }
    public function information() 
    {
        return $this->hasOne(Information::class);
    }
    public function shows() 
    {
        return $this->hasMany(Show::class);
    }
    public function genres() 
    {
        return $this->belongsToMany(Genre::class);
    }
    public function regions() 
    {
        return $this->belongsToMany(Region::class);
    }
    public function contactlevels() 
    {
        return $this->belongsToMany(ContactLevel::class);
    }
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
                'index' => false
            ],
            'category_id' => [
                'type' => 'integer',
            ],
            'location_id' => [
                'type' => 'integer',
                'index' => false
            ],
            'dates_id' => [
                'type' => 'integer',
                'index' => false
            ],
            'information_id' => [
                'type' => 'integer',
                'index' => false
            ],
            'expectation_id' => [
                'type' => 'integer',
                'index' => false
            ],
            'organizer_id' => [
                'type' => 'integer',
                'index' => false
            ],
            'overallRating' => [
                'type' => 'integer',
                'index' => false
            ],
            'approved' => [
                'type' => 'integer',
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
