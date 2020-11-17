<?php

namespace App\Models;

use ScoutElastic\IndexConfigurator;
use ScoutElastic\Migratable;

class EventIndexConfigurator extends IndexConfigurator
{
    use Migratable;

    /**
     * @var array
     */
    protected $settings = [
        //
    ];
}