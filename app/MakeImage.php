<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;

class MakeImage extends Model
{
    /**
    * Saves an image when the user submits their event for the first time.
    *
    * @return string
    */
    public static function saveImage($request, $value, $width, $height, $type)
    {
        // Image::configure(array('driver' => 'imagick'));
        
        $name = $value->name ? $value->name : substr(md5(microtime()),rand(0,26),7);
        //      either new-titles or 69sjj3s
        $rand = substr(md5(microtime()),rand(0,26),7);
        //      546ds3g
        $title = str_slug($name);
        //      new-titles
        $extension = $request->file('image')->getClientOriginalExtension();
        //      jpg
        $inputFile= $title . '.' . $extension;
        //      new-titles.jpg
        $fileName= $title;
        //      new-titles
        $directory= $type . '-images/' . $title . '-' . $rand;
        //      event-images/new-titles-54fwd3g

        $request->file('image')->storeAs('/public/' . $directory, $inputFile);
        Image::make(storage_path()."/app/public/$directory/$inputFile")
        ->fit($width, $height)
        ->save(storage_path("/app/public/$directory/$fileName.webp"))
        ->save(storage_path("/app/public/$directory/$fileName.jpg"))
        ->fit( $width / 2, $height / 2)
        ->save(storage_path("/app/public/$directory/$fileName-thumb.webp"))
        ->save(storage_path("/app/public/$directory/$fileName-thumb.jpg"));

        $value->update([ 
            'largeImagePath' => $directory . '/' . $fileName. '.webp',
            'thumbImagePath' => $directory . '/' . $fileName. '-thumb.webp',
        ]);
    }

    /**
    * Saves an image after the user has already created and event and is updating.
    *
    * @return nothing
    */
    public static function updateImage($request, $value, $width, $height, $type)
    {
        // Image::configure(array('driver' => 'imagick'));

        $rand = substr(md5(microtime()),rand(0,26),7);
        //   54fwdee
        $extension = $request->file('image')->getClientOriginalExtension();
        //   jpg
        $imageName = $value->slug;
        //   myevent
        $inputFile = $imageName . '.' . $extension;
        //    myevent.jpg
        $fileName = $imageName;
        //    myevent
        $directory = $type .'-images/' . $imageName . '-' . $rand;
        //      event-images/myevent-54fwd3g

        $request->file('image')->storeAs('/public/' . $directory, $inputFile);
        Image::make(storage_path() . "/app/public/$directory/$inputFile")
        ->fit($width, $height)
        ->save(storage_path("/app/public/$directory/$fileName.webp"))
        ->save(storage_path("/app/public/$directory/$fileName.jpg"))
        ->fit( $width / 2, $height / 2)
        ->save(storage_path("/app/public/$directory/$fileName-thumb.webp"))
        ->save(storage_path("/app/public/$directory/$fileName-thumb.jpg"));

        $value->update([ 
            'largeImagePath' => $directory . '/' . $fileName . '.webp',
            'thumbImagePath' => $directory . '/' . $fileName . '-thumb.webp',
        ]);
    }

    /**
    * Finalizes the Image when the admin approves the event. Correctly names it.
    *
    * @return nothing
    */
    public static function renameImage($value, $slug, $type, $request)
    {
        // Image::configure(array('driver' => 'imagick'));

        $name = $slug ? $slug : $request->slug;
        
        $dir = pathinfo($value->largeImagePath, PATHINFO_DIRNAME);
        //      event-images/myevent-e2e9agg
        $filename = pathinfo($value->largeImagePath, PATHINFO_FILENAME);
        //      myevent
        $rand = substr(md5(microtime()),rand(0,26),7);
        //      546dsee
        $newImagePath = $type . '-images/' . $name . '-' . $rand . '/' . $name;
        //      event-images/myevent-546dsee/mynewevent

        Storage::copy('public/' . $dir . '/' . $filename . '.webp', 'public/' . $newImagePath . '.webp' );
        Storage::copy('public/' . $dir . '/' . $filename . '.jpg', 'public/' . $newImagePath . '.jpg' );
        Storage::copy('public/' . $dir . '/' . $filename . '-thumb.webp', 'public/' . $newImagePath . '-thumb.webp' );
        Storage::copy('public/' . $dir . '/' . $filename . '-thumb.jpg', 'public/' . $newImagePath . '-thumb.jpg' );


        $value->update([
            'largeImagePath' => $newImagePath . '.webp',
            'thumbImagePath' => $newImagePath . '-thumb.webp',
        ]);
    }

    /**
    * Saves an image when the user submits their event for the first time.
    *
    * @return string
    */
    public static function saveNewImage($request, $value, $width, $height, $type)
    {
        // Image::configure(array('driver' => 'imagick'));
        // ini_set('memory_limit','512M');
        if (strlen(pathinfo($value->largeImagePath, PATHINFO_DIRNAME)) > 7) {

            $dir = pathinfo($value->largeImagePath, PATHINFO_DIRNAME);
            //      event-images/myevent-e2e9agg
            $filename = pathinfo($value->largeImagePath, PATHINFO_FILENAME);
            //      myevent
            Storage::deleteDirectory('public/' . $dir);

        } else {

            $rand = substr(md5(microtime()),rand(0,26),7);
            //      546ds3g
            $filename = substr(md5(microtime()),rand(0,26),7);
            //      fd45cz3
            $dir = $type . '-images/' . $filename . '-' . $rand;
            //      event-images/new-titles-54fwd3g
        }

        $extension = $request->file('image')->getClientOriginalExtension();
        //      jpg
        $inputFile= $filename . '.' . $extension;
        //      new-titles.jpg


        $request->file('image')->storeAs('/public/' . $dir, $inputFile);
        Image::make(storage_path()."/app/public/$dir/$inputFile")
        ->fit($width, $height)
        ->save(storage_path("/app/public/$dir/$filename.webp"))
        ->save(storage_path("/app/public/$dir/$filename.jpg"))
        ->fit( $width / 2, $height / 2)
        ->save(storage_path("/app/public/$dir/$filename-thumb.webp"))
        ->save(storage_path("/app/public/$dir/$filename-thumb.jpg"));

        $value->update([ 
            'largeImagePath' => $dir . '/' . $filename. '.webp',
            'thumbImagePath' => $dir . '/' . $filename. '-thumb.webp',
        ]);
    }
}
