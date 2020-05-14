<?php

namespace App;

use ScoutElastic\SearchRule;
use Request;

class EventDatesRule extends SearchRule
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
        if (!Request::get('mapboundary') && Request::get('category')) {
            return [
                'must' => 
                [
                    [
                        'range' => 
                        [
                            'closingDate' => 
                            [
                                'gte' => 'now/d',
                            ],
                        ],
                    ],
                    [
                        'range' => 
                        [
                            'priceranges.price' =>
                            [
                                'gte' => Request::get('price')[0],
                                'lte' => Request::get('price')[1],
                            ]
                        ]
                    ],
                    [
                        'match' => 
                        [
                            'category_id' => Request::get('category')['id'],
                        ]
                    ],

                ],

                'filter' => 
                [
                    'geo_distance' => 
                    [
                        'distance' => '40km',
                        'location_latlon' => 
                        [
                            'lat' => Request::get('loc')['lat'],
                            'lon' => Request::get('loc')['lng']
                        ]
                    ]
                ],
            ];  
        }
        if (!Request::get('mapboundary') && Request::get('dates')) {
            return [
                'must' => 
                [
                    [
                        'range' => 
                        [
                            'closingDate' => 
                            [
                                'gte' => 'now/d',
                            ],
                        ],
                    ],
                    [
                        'range' => 
                        [
                            'priceranges.price' =>
                            [
                                'gte' => Request::get('price')[0],
                                'lte' => Request::get('price')[1],
                            ]
                        ]
                    ],

                ],

                'filter' => 
                [
                    'geo_distance' => 
                    [
                        'distance' => '40km',
                        'location_latlon' => 
                        [
                            'lat' => Request::get('loc')['lat'],
                            'lon' => Request::get('loc')['lng']
                        ]
                    ]
                ],
                'should' => 
                [
                    [
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
                    ],
                    [
                        'bool' => 
                        [
                            'must' => 
                            [
                                'match' => 
                                [
                                    'showtype' => 'a'
                                ]
                            ]
                        ],
                    ],
                ],
                'minimum_should_match' => 1,
            ];  
        }
        if (!Request::get('mapboundary') && Request::get('dates') && Request::get('category')) {
            return [
                'must' => 
                [
                    [
                        'range' => 
                        [
                            'closingDate' => 
                            [
                                'gte' => 'now/d',
                            ],
                        ],
                    ],
                    [
                        'range' => 
                        [
                            'priceranges.price' =>
                            [
                                'gte' => Request::get('price')[0],
                                'lte' => Request::get('price')[1],
                            ]
                        ]
                    ],
                    [
                        'match' => 
                        [
                            'category_id' => Request::get('category')['id'],
                        ]
                    ],

                ],

                'filter' => 
                [
                    'geo_distance' => 
                    [
                        'distance' => '40km',
                        'location_latlon' => 
                        [
                            'lat' => Request::get('loc')['lat'],
                            'lon' => Request::get('loc')['lng']
                        ]
                    ]
                ],
                'should' => 
                [
                    [
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
                    ],
                    [
                        'bool' => 
                        [
                            'must' => 
                            [
                                'match' => 
                                [
                                    'showtype' => 'a'
                                ]
                            ]
                        ],
                    ],
                ],
                'minimum_should_match' => 1,
            ];  
        }
        if (!Request::get('mapboundary')) {
            return [
                'must' => 
                [
                    [
                        'range' => 
                        [
                            'closingDate' => 
                            [
                                'gte' => 'now/d',
                            ],
                        ],
                    ],
                    [
                        'range' => 
                        [
                            'priceranges.price' =>
                            [
                                'gte' => Request::get('price')[0],
                                'lte' => Request::get('price')[1],
                            ]
                        ]
                    ],

                ],

                'filter' => 
                [
                    'geo_distance' => 
                    [
                        'distance' => '40km',
                        'location_latlon' => 
                        [
                            'lat' => Request::get('loc')['lat'],
                            'lon' => Request::get('loc')['lng']
                        ]
                    ]
                ],
            ];  
        }
        if (Request::get('category') && Request::get('dates')) {
            return [
                'must' => 
                [
                    [
                        'range' => 
                        [
                            'closingDate' => 
                            [
                                'gte' => 'now/d',
                            ],
                        ],
                    ],
                    [
                        'range' => 
                        [
                            'priceranges.price' =>
                            [
                                'gte' => Request::get('price')[0],
                                'lte' => Request::get('price')[1],
                            ]
                        ]
                    ],
                    [
                        'match' => 
                        [
                            'category_id' => Request::get('category')['id'],
                        ]
                    ],

                ],

                'filter' => 
                [
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
                ],

                'should' => 
                [
                    [
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
                    ],
                    [
                        'bool' => 
                        [
                            'must' => 
                            [
                                'match' => 
                                [
                                    'showtype' => 'a'
                                ]
                            ]
                        ],
                    ],
                ],
                'minimum_should_match' => 1,
            ];
        }

        if (Request::get('category')) {
            return [
                'must' => 
                [
                    [
                        'range' => 
                        [
                            'closingDate' => 
                            [
                                'gte' => 'now/d',
                            ],
                        ],
                    ],
                    [
                        'range' => 
                        [
                            'priceranges.price' =>
                            [
                                'gte' => Request::get('price')[0],
                                'lte' => Request::get('price')[1],
                            ]
                        ]
                    ],
                    [
                        'match' => 
                        [
                            'category_id' => Request::get('category')['id'],
                        ]
                    ],

                ],

                'filter' => 
                [
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
                ],
            ];
        }

        if (Request::get('dates')) {
            return [
                'must' => 
                [
                    [
                        'range' => 
                        [
                            'closingDate' => 
                            [
                                'gte' => 'now/d',
                            ],
                        ],
                    ],
                    [
                        'range' => 
                        [
                            'priceranges.price' =>
                            [
                                'gte' => Request::get('price')[0],
                                'lte' => Request::get('price')[1],
                            ]
                        ]
                    ],
                ],

                'filter' => 
                [
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
                ],

                'should' => 
                [
                    [
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
                    ],
                    [
                        'bool' => 
                        [
                            'must' => 
                            [
                                'match' => 
                                [
                                    'showtype' => 'a'
                                ]
                            ]
                        ],
                    ],
                ],
                'minimum_should_match' => 1,
            ];
        }


        return [
            'must' => 
            [
                [
                    'range' => 
                    [
                        'closingDate' => 
                        [
                            'gte' => 'now/d',
                        ],
                    ],
                ],
                [
                    'range' => 
                    [
                        'priceranges.price' =>
                        [
                            'gte' => Request::get('price')[0],
                            'lte' => Request::get('price')[1],
                        ]
                    ]
                ],
            ],

            'filter' => 
            [
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
            ],
        ];
    }
}