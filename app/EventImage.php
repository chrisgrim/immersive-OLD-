<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;

class EventImage extends Model
{
    /**
    * Saves an image when the user submits their event for the first time.
    *
    * @return string
    */
    public static function saveNewImage($request, $event, $width, $height)
    {
        ini_set('memory_limit','512M');
        if ($event->largeImagePath) {
            Storage::deleteDirectory('public/event-images/' . pathinfo($event->largeImagePath, PATHINFO_FILENAME));
        };

        $rand = substr(md5(microtime()),rand(0,26),5);
        //    546ds
        $title = str_slug($event->name);
        //    new-titles
        $extension = $request->file('image')->getClientOriginalExtension();
        //     jpg
        $inputFile= $title . '-' . $rand . '.' . $extension;
        //    new-titles-54fwd.jpg
        $fileName= $title . '-' . $rand;
        //      new-titles-54fwd
        $imagePath = '/public/storage/event-images/' . $title . '-' . $rand;
        //   /public/storage/event-images/my-event-54fwd

        $request->file('image')->storeAs('/public/event-images/' . $fileName, $inputFile);
        Image::make(storage_path()."/app/public/event-images/$fileName/$inputFile")
        ->fit($width, $height)
        ->save(storage_path("/app/public/event-images/$fileName/$fileName.webp"))
        ->save(storage_path("/app/public/event-images/$fileName/$fileName.jpg"))
        ->fit( $width / 2, $height / 2)
        ->save(storage_path("/app/public/event-images/$fileName/$fileName-thumb.webp"))
        ->save(storage_path("/app/public/event-images/$fileName/$fileName-thumb.jpg"));

        $event->update([ 
            'largeImagePath' => 'event-images/' . $fileName . '/' . $fileName. '.webp',
            'thumbImagePath' => 'event-images/' . $fileName. '/' . $fileName. '-thumb.webp',
        ]);
    }

    /**
    * Saves an image after the user has already created and event and is updating.
    *
    * @return nothing
    */
    public static function updateImage($request, $event, $width, $height)
    {
        ini_set('memory_limit','512M');

        $rand = substr(md5(microtime()),rand(0,26),5);
        //   54fwd
        $extension = $request->file('image')->getClientOriginalExtension();
        //   jpg
        $imageName = $event->slug; 
        //   my-event
        $imagePath = '/public/storage/event-images/' . $imageName . '-' . $rand;
        //   /public/storage/event-images/my-event-54fwd
        $inputFile= $imageName . '-' . $rand . '.' . $extension;
        //    my-event-54fwd.jpg
        $fileName= $imageName . '-' . $rand;
        //    my-event-54fwd

        $request->file('image')->storeAs('/public/event-images/' . $fileName, $inputFile);
        Image::make(storage_path() . "/app/public/event-images/$fileName/$inputFile")
        ->fit($width, $height)
        ->save(storage_path("/app/public/event-images/$fileName/$fileName.webp"))
        ->save(storage_path("/app/public/event-images/$fileName/$fileName.jpg"))
        ->fit( $width / 2, $height / 2)
        ->save(storage_path("/app/public/event-images/$fileName/$fileName-thumb.webp"))
        ->save(storage_path("/app/public/event-images/$fileName/$fileName-thumb.jpg"));

        $event->update([ 
            'largeImagePath' => 'event-images/' . $fileName . '/' . $fileName. '.webp',
            'thumbImagePath' => 'event-images/' . $fileName. '/' . $fileName. '-thumb.webp',
        ]);
    }

     /**
    * Finalizes the Image when the admin approves the event. Correctly names it.
    *
    * @return nothing
    */
    public static function finalizeImage($event, $slug)
    {
        $path = pathinfo($event->largeImagePath, PATHINFO_FILENAME);
        $newImagePath = 'event-images/' . $slug . '/' . $slug;

        Storage::move('public/event-images/' . $path . '/' . $path . '.webp', 'public/' . $newImagePath . '.webp' );
        Storage::move('public/event-images/' . $path . '/' . $path . '.jpg', 'public/' . $newImagePath . '.jpg' );
        Storage::move('public/event-images/' . $path . '/' . $path . '-thumb.webp', 'public/' . $newImagePath . '-thumb.webp' );
        Storage::move('public/event-images/' . $path . '/' . $path . '-thumb.jpg', 'public/' . $newImagePath . '-thumb.jpg' );

        Storage::deleteDirectory('public/event-images/' . pathinfo($event->largeImagePath, PATHINFO_FILENAME));

        $event->update([
            'largeImagePath' => $newImagePath . '.webp',
            'thumbImagePath' => $newImagePath . '-thumb.webp',
        ]);
    }
}
