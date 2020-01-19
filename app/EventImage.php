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
        if ($event->largeImagePath) {
            Storage::delete('public/' . $event->largeImagePath);
            Storage::delete('public/' . $event->thumbImagePath);
        };
        $title = str_slug($event->name);
        $extension = $request->file('image')->getClientOriginalExtension();
        $filename = $title.'-'. rand(5, 9999) . '.' . $extension;
        $largeImagePath = "event-large-images/$filename";
        $thumbImagePath = "event-thumb-images/thumb-$filename";
        $request->file('image')->storeAs('/public/event-large-images', $filename);
        Image::make(storage_path() . "/app/public/event-large-images/$filename")->fit($width, $height)->save(storage_path("/app/public/$largeImagePath"))->fit( $width / 2, $height / 2)->save(storage_path("/app/public/$thumbImagePath"));

        $event->update([
            'largeImagePath' => $largeImagePath,
            'thumbImagePath' => $thumbImagePath,
        ]);
    }
}
