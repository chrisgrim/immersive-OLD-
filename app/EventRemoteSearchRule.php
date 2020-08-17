<?php

namespace App;

use ScoutElastic\SearchRule;
use Request;
use Illuminate\Support\Arr;

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
        $array = ['must' => [], 'should' => []];

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
                        'lte' => Request::get('price')[1] > 250 ? 9999 : Request::get('price')[1],
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