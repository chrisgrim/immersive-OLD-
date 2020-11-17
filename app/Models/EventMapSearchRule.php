<?php

namespace App\Models;

use ScoutElastic\SearchRule;
use Request;
use Illuminate\Support\Arr;

class EventMapSearchRule extends SearchRule
{
    /**
     * @inheritdoc
     */
    public function buildHighlightPayload()
    {
        //
    }

    /**
     * @inheritdoc
     */
    public function buildQueryPayload()
    {
        $array = ['must' => [], 'filter' => [], 'should' => []];

        if (Request::get('mapboundary')) {
            $array['filter'][] = [
                'geo_bounding_box' => 
                [
                    'location_latlon' => 
                    [
                        'top_right' => 
                        [
                            'lat' => Request::get('mapboundary')['_northEast']['lat'],
                            'lon' => Request::get('mapboundary')['_northEast']['lng'],
                        ],
                        'bottom_left' =>
                        [
                            'lat' => Request::get('mapboundary')['_southWest']['lat'],
                            'lon' => Request::get('mapboundary')['_southWest']['lng'],
                        ]
                    ]
                ]
            ];
        }

        if (Request::get('lat')) {
            $array['filter'][] = [
                'geo_distance' => 
                [
                    'distance' => '40km',
                    'location_latlon' => 
                    [
                        'lat' => Request::get('lat'),
                        'lon' => Request::get('lng')
                    ]
                ]
            ];
        }

        if (!Request::get('dates')) {
            $array['must'][] = [
                'range' => [
                    'closingDate' => [
                        'gte' => 'now/d',
                    ],
                ],
            ];
        }

        if (Request::get('price')) {
            $array['must'][] = [
                'range' => [
                    'priceranges.price' => [
                        'gte' => Request::get('price')[0],
                        'lte' => Request::get('price')[1],
                    ],
                ],
            ];
        }

        if (Request::get('category')) {
            $array['must'][] = [
                'match' => ['category_id' => Request::get('category')],
            ];
        }

        if (Request::get('tag')) {
            $array['must'][] = [
                'match' => ['genres.name' => Request::get('tag')],
            ];
        }

        if (Request::get('dates')) {
            $array['should'][] = [
                'bool' => 
                    [
                        'must' => ['match' => ['showtype' => 'a']]
                    ]
            ];
        }
        if (Request::get('dates')) {
            $array['should'][] = [
                'bool' => 
                    [
                        'should' => 
                        [
                            'range' => 
                            [
                                'shows.date' => 
                                [
                                    'gte' => Request::get('dates')[0],
                                    'lte' => Request::get('dates')[1],
                                ]
                            ]
                        ]
                    ]
            ];
        }
        
        if (Request::get('dates')) {
            $array['minimum_should_match'] = 1;
        }

        return $array;


    }
}