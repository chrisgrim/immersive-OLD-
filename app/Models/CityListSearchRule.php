<?php

namespace App\Models;

use ScoutElastic\SearchRule;

class CityListSearchRule extends SearchRule
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
                'match_phrase_prefix' =>  [
                    "name" => $this->builder->query,
                ]
            ],
        ];
    }
}