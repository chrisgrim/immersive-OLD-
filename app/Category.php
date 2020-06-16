<?php

namespace App;

use ScoutElastic\Searchable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use App\Scopes\RankScope;
use Intervention\Image\ImageManagerStatic as Image;

class Category extends Model
{
    use Searchable;

    protected $indexConfigurator = CategoryIndexConfigurator::class;
    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [
    	'name', 'slug','description','largeImagePath', 'thumbImagePath', 'rank', 'remote','credit' ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['hasEvent'];

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

    protected $casts = [
        'remote' => 'boolean'
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
    * Determine if the current user has created events
    *
    * @return bool
    */
    public function getHasEventAttribute()
    {
        return $this->events()->count() ? true : false;    
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

    /**
    * Updates the different elements of the model depending on the request
    *
    * @return nothing
    */
    public function updateElements($request, $category) 
    {
        $request->name !== $category->name && !$request->image ? MakeImage::renameImage($category, str_slug($request->name), 'category', $request) : '';
        if ($request->image) {
            MakeImage::saveImage($request, $category, 600, 600, 'category');
        } else {
            $category->update([
                'credit' => $request->credit,
                'rank' => $request->rank,
                'description' => $request->description,
                'name' => $request->name,
                'slug' => str_slug($request->name)
            ]);
        }
    }

    /**
    * Deletes the category images and then deletes the catgory
    *
    * @return Nothing
    */
    public function deleteCategory($category) {
        foreach ($category->events as $event) {
            $event->update([
                'category_id' => 0
            ]);
        }
        $category->delete();
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
