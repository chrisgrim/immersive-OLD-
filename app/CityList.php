<?php

namespace App;

use ScoutElastic\Searchable;
use Illuminate\Database\Eloquent\Model;

class CityList extends Model
{
	protected $guarded = [];

	use Searchable;

	protected $indexConfigurator = CityListIndexConfigurator::class;

	protected $searchRules = [
        //
    ];

    protected $mapping = [
    	'properties' => [
    		'id' => [
                'type' => 'integer',
                'index' => false
            ],
            'geoNameId' => [
                'type' => 'integer',
                'index' => false
            ],
            'name' => [
                'type' => 'search_as_you_type',
            ],
            'population' => [
                'type' => 'integer',
            ],
            'latitude' => [
                'type' => 'integer',
                'index' => false
            ],
            'longitude' => [
                'type' => 'integer',
                'index' => false
            ],
    	]
    ];

}