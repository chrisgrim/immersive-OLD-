<?php

namespace App;

use ScoutElastic\SearchRule;
use Request;

class EventRemoteSearchRule extends SearchRule
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
        if (Request::get('category') && Request::get('dates') && Request::get('price')) {
            return [
                'must' => 
                [
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
        if (Request::get('dates') && Request::get('price')) {
            return [
                'must' => 
                [
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
        if (Request::get('category') && Request::get('price')) {
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
                ]
            ];  
        }
        if (Request::get('category') && Request::get('dates')) {
            return [
                'must' => 
                [
                    [
                        'match' => 
                        [
                            'category_id' => Request::get('category')['id'],
                        ]
                    ],
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
                        'match' => 
                        [
                            'category_id' => Request::get('category')['id'],
                        ]
                    ],
                ],
            ];  
        }
        if (Request::get('dates')) {
            return [
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
        if (Request::get('price')) {
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
            ],
        ]; 
    }
}