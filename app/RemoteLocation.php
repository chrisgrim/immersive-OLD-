<?php

namespace App;

use App\Scopes\RankScope;
use ScoutElastic\Searchable;
use Illuminate\Database\Eloquent\Model;

class RemoteLocation extends Model
{
    use Searchable; 

    protected $indexConfigurator = RemoteIndexConfigurator::class;

    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [
        'name','admin', 'user_id', 'rank', 'description', 'slug'
    ];

    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted()
    {
        static::addGlobalScope(new RankScope);
    }

    /**
     * Get the indexable data array for the model.
     *
     * @return array
     */
    public function toSearchableArray()
    {
        return [
            "id" => $this->id,
            "name" => $this->name ,
        ];
    }

    /**
     * Each genre can belong to many Events
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsToMany
     */
    public function events() 
    {
        return $this->belongsToMany(Event::class);
    }

    protected $searchRules = [
        //
    ];

    protected $mapping = [
        'properties' => [
            'id' => [
                'type' => 'integer',
                'index' => false
            ],
            'name' => [
                'type' => 'search_as_you_type',
            ],
        ]
    ];
}
