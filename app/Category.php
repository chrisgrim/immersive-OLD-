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
    	'name', 'slug','description','largeImagePath', 'thumbImagePath'
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
            if ($category->largeImagePath) {
                Storage::delete('public/' . $category->largeImagePath);
                Storage::delete('public/' . $category->thumbImagePath);
            };
            $title = str_slug($category->name);
            $extension = $request->file('imagePath')->getClientOriginalExtension();
            $filename = $title . '.' . $extension;
            $largeImagePath = "category-large-images/$filename";
            $thumbImagePath = "category-thumb-images/thumb-$filename";
            $request->file('imagePath')->storeAs('/public/category-large-images', $filename);
            Image::make(storage_path() . "/app/public/category-large-images/$filename")->fit(1280, 720)->save(storage_path("/app/public/$largeImagePath"))->fit(640, 360)->save(storage_path("/app/public/$thumbImagePath"));

            $category->update([
                'largeImagePath' => $largeImagePath,
                'thumbImagePath' => $thumbImagePath,
                'slug' => str_slug($request->name),
            ]);
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
        $ext = pathinfo('public/' . $category->largeImagePath, PATHINFO_EXTENSION);
        $filename = $category->slug . '.' . $ext;
        $largeImagePath = "category-large-images/$filename";
        $thumbImagePath = "category-thumb-images/thumb-$filename";
        Storage::move('public/' . $category->largeImagePath, 'public/' . $largeImagePath );
        Storage::move('public/' . $category->thumbImagePath, 'public/' . $thumbImagePath );
        $category->update([
            'largeImagePath' => $largeImagePath,
            'thumbImagePath' => $thumbImagePath,
        ]);
    }

}
