<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [
    	'name', 'slug','description','imagePath'
    ];
    /**
    * Each Category has many events
    *
    * @return \Illuminate\Database\Eloquent\Relations\hasMany
    */
    public function events() 
    {
        return $this->hasMany(Event::class);
    }
    
    /**
    * Sets the Route Key to slug instead of ID
    *
    * @return Route Key Name
    */
    public function getRouteKeyName()
    {
        return 'slug';
    }

}
