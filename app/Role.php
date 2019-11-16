<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    /**
    * Each Role belongs to a User on the site
    *
    * @return \Illuminate\Database\Eloquent\Relations\belongsTo
    */
    public function role() {
        return $this->belongsTo(User::class);
    }
}
