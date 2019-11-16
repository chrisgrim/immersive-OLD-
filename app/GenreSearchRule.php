<?php

namespace App;

use ScoutElastic\SearchRule;

class GenreSearchRule extends SearchRule
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
        return [
            'must' => [
                'multi_match' =>  [
                    "query" =>  $this->builder->query,
                    "type"  =>  'bool_prefix',
                    "fields"    =>  [
                        'genre',
                        'genre.2gram',
                        'genre.3gram'
                    ],
                ]
            ]
        ];
    }
}