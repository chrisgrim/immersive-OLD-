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

    /**
     * Get the indexable data array for the model.
     *
     * @return array
     */
    public function toSearchableArray()
    {
        return [
            "id" => $this->id,
            "name" => $this->name ,
            "population" => $this->population,
            // "latitude" => $this->latitude,
            // "longitude" => $this->longitude,
        ];
    }

    protected $mapping = [
    	'properties' => [
    		'id' => [
                'type' => 'integer',
                'index' => false
            ],
            'name' => [
                'type' => 'search_as_you_type',
            ],
            'population' => [
                'type' => 'integer',
            ],
            // 'latitude' => [
            //     'type' => 'integer',
            //     'index' => false
            // ],
            // 'longitude' => [
            //     'type' => 'integer',
            //     'index' => false
            // ],
    	]
    ];

}