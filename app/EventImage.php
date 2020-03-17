<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;

class EventImage extends Model
{
    /**
    * Saves the image that is passed from the controller
    *
    * @return string
    */
    public static function saveFile($request, $event, $width, $height)
    {
        ini_set('memory_limit','512M');
        if ($event->largeImagePath) {
            Storage::deleteDirectory('public/event-images/' . pathinfo($event->largeImagePath, PATHINFO_FILENAME));
        };

        $title = str_slug($event->name);
        $extension = $request->file('image')->getClientOriginalExtension();
        $rand = rand(1,50000);
        $inputFile= $title . '_' . $rand . '.' . $extension;
        $filename= $title . '_' . $rand;

        $request->file('image')->storeAs('/public/event-images/' . $filename, $inputFile);
        Image::make(storage_path()."/app/public/event-images/$filename/$inputFile")
        ->fit($width, $height)
        ->save(storage_path("/app/public/event-images/$filename/$filename.webp"))
        ->save(storage_path("/app/public/event-images/$filename/$filename.jpg"))
        ->fit( $width / 2, $height / 2)
        ->save(storage_path("/app/public/event-images/$filename/$filename-thumb.webp"))
        ->save(storage_path("/app/public/event-images/$filename/$filename-thumb.jpg"));

        $event->update([ 
            'largeImagePath' => 'event-images/' . $filename . '/' . $filename. '.webp',
            'thumbImagePath' => 'event-images/' . $filename. '/' . $filename. '-thumb.webp',
        ]);
    }

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
