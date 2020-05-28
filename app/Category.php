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
    	'name', 'slug','description','largeImagePath', 'thumbImagePath', 'rank', 'remote' ];

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
        if($request->name) {
            $category->updateName($category, $request);
            return '';
        }
        if($request->credit) {
            $category->update(['credi' => $request->credit]);
            return '';
        }
        if($request->rank) {
            $category->update(['rank' => $request->rank]);
            return '';
        }
        if($request->description) {
            $category->update(['description' => $request->description]);
            return '';
        }
        if($request->imagePath) {
            $category->saveFile($request, $category, 600, 600);
            return '';
        }
    }

    /**
    * Deletes the category images and then deletes the catgory
    *
    * @return Nothing
    */
    public function deleteCategory($category) {
        Storage::deleteDirectory('public/category-images/' . pathinfo($category->largeImagePath, PATHINFO_FILENAME));
        $category->delete();
    }

    /**
    * Saves the image that is passed from the controller
    *
    * @return string
    */
    public function saveFile($request, $category, $width, $height)
    {
        ini_set('memory_limit','512M');
        if ($request->imagePath) {
            if ($category->largeImagePath) {
                Storage::deleteDirectory('public/category-images/' . pathinfo($category->largeImagePath, PATHINFO_FILENAME));
            };

            $title = str_slug($category->name);
            $extension = $request->file('imagePath')->getClientOriginalExtension();
            $inputFile= $title . '_' . 'category' . '.' . $extension;
            $filename= $title . '_' . 'category';

            $request->file('imagePath')->storeAs('/public/category-images/' . $filename, $inputFile);
            Image::make(storage_path()."/app/public/category-images/$filename/$inputFile")
            ->fit($width, $height)
            ->save(storage_path("/app/public/category-images/$filename/$filename.webp"))
            ->save(storage_path("/app/public/category-images/$filename/$filename.jpg"))
            ->fit( $width / 2, $height / 2)
            ->save(storage_path("/app/public/category-images/$filename/$filename-thumb.webp"))
            ->save(storage_path("/app/public/category-images/$filename/$filename-thumb.jpg"));

            if($category->slug) {
                $category->update([ 
                    'largeImagePath' => 'category-images/' . $filename . '/' . $filename. '.webp',
                    'thumbImagePath' => 'category-images/' . $filename. '/' . $filename. '-thumb.webp',
                ]);
            } else {
                $category->update([ 
                    'largeImagePath' => 'category-images/' . $filename . '/' . $filename. '.webp',
                    'thumbImagePath' => 'category-images/' . $filename. '/' . $filename. '-thumb.webp',
                    'slug' => str_slug($request->name),
                ]);
            }
        } else {
            $category->update([ 'slug' => str_slug($request->name) ]);
        };
    }

    /**
    * Saves the image that is passed from the controller
    *
    * @return string
    */
    public function updateName($category, $request)
    {
        $category->update([
            'name' => $request->name, 
            'slug' => str_slug($request->name)
        ]);

        $path = pathinfo($category->largeImagePath, PATHINFO_FILENAME);

        $title = str_slug($request->name);
        $filename= $title . '_' . 'category';
        $newImagePath = 'category-images/' . $filename . '/' . $filename;

        Storage::move('public/category-images/' . $path . '/' . $path . '.webp', 'public/' . $newImagePath . '.webp' );
        Storage::move('public/category-images/' . $path . '/' . $path . '.jpg', 'public/' . $newImagePath . '.jpg' );
        Storage::move('public/category-images/' . $path . '/' . $path . '-thumb.webp', 'public/' . $newImagePath . '-thumb.webp' );
        Storage::move('public/category-images/' . $path . '/' . $path . '-thumb.jpg', 'public/' . $newImagePath . '-thumb.jpg' );

        Storage::deleteDirectory('public/category-images/' . pathinfo($category->largeImagePath, PATHINFO_FILENAME));

        $category->update([
            'largeImagePath' => $newImagePath . '.webp',
            'thumbImagePath' => $newImagePath . '-thumb.webp',
        ]);
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
