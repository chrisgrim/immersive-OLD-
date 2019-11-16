<?php

namespace App;

use ScoutElastic\Searchable;
use Illuminate\Database\Eloquent\Model;

class Genre extends Model
{
	use Searchable;

    protected $indexConfigurator = GenreIndexConfigurator::class;

    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
	protected $fillable = [
    	'genre'
    ];
    
    /**
     * Each genre can belong to many Events
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsToMany
     */
    public function events() 
    {
    	return $this->belongsToMany(Event::class);
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
            'genre' => [
                'type' => 'search_as_you_type',
            ],
            'deleted_at' => [
                'type' => 'keyword',
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
    ];
}
