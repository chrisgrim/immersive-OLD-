<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;

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

    /**
    * Saves the image that is passed from the controller
    *
    * @return string
    */
    public function saveFile($request, $category)
    {
        if ($request->imagePath) {
            if ($category->imagePath) {
                Storage::delete('public/' . $category->imagePath);
            };
            $title = $category->name;
            $extension = $request->file('imagePath')->getClientOriginalExtension();
            $filename = $title . '.' . $extension;
            $imagePath = "category-images/$filename";
            $request->file('imagePath')->storeAs('/public/category-images', $filename);
            Image::make(storage_path() . "/app/public/category-images/$filename")->fit(600, 400)->save(storage_path("/app/public/$imagePath"));
            $category->update([
                'imagePath' => $imagePath,
                'slug' => str_slug($request->name),
        ]);
        } else {
            $category->update([ 'slug' => str_slug($request->name) ]);
        };

    }

}
