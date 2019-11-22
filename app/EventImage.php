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
    public static function saveFile($request, $event)
    {
        if ($event->largeImagePath) {
            Storage::delete('public/' . $event->largeImagePath);
            Storage::delete('public/' . $event->thumbImagePath);
        };
        $title = $event->name;
        $filename = $title.'-'. rand(5, 9999) . '.jpg';
        $imagePath = "event-large-images/$filename";
        $thumbnailPath = "event-thumb-images/thumb-$filename";
        Image::make(file_get_contents($request->image))->save(storage_path("/app/public/$imagePath"));
        Image::make(storage_path()."/app/public/event-large-images/$filename")->fit(1200, 800)->save(storage_path("/app/public/$imagePath"))->fit(600, 400)->save(storage_path("/app/public/$thumbnailPath"));

        $event->update([
            'largeImagePath' => $imagePath,
            'thumbImagePath' => $thumbnailPath,
        ]);
    }
}
