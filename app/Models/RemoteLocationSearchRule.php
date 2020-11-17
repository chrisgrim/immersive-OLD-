<?php

namespace App\Models;

use ScoutElastic\SearchRule;

class RemoteLocationSearchRule extends SearchRule
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
                        'name',
                        'name.2gram',
                        'name.3gram'
                    ],
                ]
            ]
        ];
    }
}