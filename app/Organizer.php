<?php

namespace App;

use ScoutElastic\Searchable;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;


class Organizer extends Model
{
    use Searchable;

    protected $indexConfigurator = OrganizerIndexConfigurator::class;

    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
    protected $fillable = [
    	'user_id','name','website','slug','description','rating','largeImagePath','thumbImagePath','instagramHandle','twitterHandle','facebookHandle', 'email'
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['hexColor'];

    /**
    * Each Organizer can have many events
    *
    * @return \Illuminate\Database\Eloquent\Relations\HasMany
    */
    public function events() 
    {
        return $this->hasMany(Event::class);
    }
    
    /**
     * The Organizer belongs to one user
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function user() 
    {
        return $this->belongsTo(User::class);
    }

    /**
    * Assign the current user a color
    *
    * @return string
    */
    public function gethexColorAttribute()
    {
        $myarray = ['#2F405F','#DA5E8E','#20B7A6','#749EEB','#1EAA9A']; 
        return $myarray[$this->id % count($myarray)];
    }

    /**
     * Get Past Events for organizer
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function pastEvents()
    {
        return $this->hasMany(Event::class)
                    ->whereDate('closingDate', '<', Carbon::today())->where('approved', 1);
    }

    /**
     * Get In Progress Events for organizer
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function inProgressEvents()
    {
        return $this->hasMany(Event::class)
                    ->whereDate('closingDate', '>=', Carbon::today())
                    ->orWhereNull('closingDate')
                    ->orderBy('created_at', 'ASC');
    }

    /**
    * Save File and update organizer model with path name
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  $organizer
    */
    public static function saveImages($organizer, $request, $width, $height)
    {
        ini_set('memory_limit','512M');
        if ($organizer->imagePath) {
            Storage::deleteDirectory('public/organizer-images/' . pathinfo($organizer->largeImagePath, PATHINFO_FILENAME));
        };

        $extension = $request->file('imagePath')->getClientOriginalExtension();
        $inputFile= $request->slug . '.' . $extension;
        $filename= $request->slug;

        $request->file('imagePath')->storeAs('/public/organizer-images/' . $filename, $inputFile);
        Image::make(storage_path()."/app/public/organizer-images/$filename/$inputFile")
        ->fit($width, $height)
        ->save(storage_path("/app/public/organizer-images/$filename/$filename.webp"))
        ->save(storage_path("/app/public/organizer-images/$filename/$filename.jpg"))
        ->fit( $width / 2, $height / 2)
        ->save(storage_path("/app/public/organizer-images/$filename/$filename-thumb.webp"))
        ->save(storage_path("/app/public/organizer-images/$filename/$filename-thumb.jpg"));

        $organizer->update([ 
            'largeImagePath' => 'organizer-images/' . $filename . '/' . $filename. '.webp',
            'thumbImagePath' => 'organizer-images/' . $filename. '/' . $filename. '-thumb.webp',
        ]);
    }

     /**
    * Update image name 
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  $organizer
    */
    public static function updateImages($organizer, $request)
    {
        $path = pathinfo($organizer->largeImagePath, PATHINFO_FILENAME);
        $newImagePath = 'organizer-images/' . $request->slug . '/' . $request->slug;

        Storage::move('public/organizer-images/' . $path . '/' . $path . '.webp', 'public/' . $newImagePath . '.webp' );
        Storage::move('public/organizer-images/' . $path . '/' . $path . '.jpg', 'public/' . $newImagePath . '.jpg' );
        Storage::move('public/organizer-images/' . $path . '/' . $path . '-thumb.webp', 'public/' . $newImagePath . '-thumb.webp' );
        Storage::move('public/organizer-images/' . $path . '/' . $path . '-thumb.jpg', 'public/' . $newImagePath . '-thumb.jpg' );

        Storage::deleteDirectory('public/organizer-images/' . pathinfo($organizer->largeImagePath, PATHINFO_FILENAME));

        $organizer->update([
            'largeImagePath' => $newImagePath . '.webp',
            'thumbImagePath' => $newImagePath . '-thumb.webp',
        ]);
    }

    /**
    * Save File and update organizer model with path name
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  $organizer
    */
    public static function getOrganizerEvents()
    {
        $organizers = auth()->user()->organizers->load([
            'pastEvents' => function ($builder) {
                $builder->where('user_id', auth()->id());
            },
            'inProgressEvents' => function ($builder) {
                $builder->where('user_id', auth()->id());
            }
        ]);
        $eventsbyorganizer = $organizers->map(function ($organizer) {
            return [
                        'id' => $organizer->id,
                        'name' => $organizer->name,
                        'slug' => $organizer->slug,
                        'largeImagePath' => $organizer->largeImagePath,
                        'thumbImagePath' => $organizer->thumbImagePath,
                        'past_events' => $organizer->pastEvents,
                        'in_progress_events' => $organizer->inProgressEvents,
                        'hexColor' => $organizer->hexColor,
            ];
        });
        return $eventsbyorganizer;
    }

    /**
    * Deletes the event images and then deletes event
    *
    * @return Nothing
    */
    public function deleteOrganizer($organizer) 
    {
        if ($organizer->largeImagePath) {
            Storage::deleteDirectory('public/organizer-images/' . pathinfo($organizer->largeImagePath, PATHINFO_FILENAME));
        };
        foreach ($organizer->events as $event) {
            $event->deleteEvent($event);
        }
        $organizer->delete();
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

    protected $searchRules = [
        //
    ];

    protected $mapping = [
        'properties' => [
            'id' => [
                'type' => 'integer',
                'index' => false
            ],
            'user_id' => [
                'type' => 'integer',
                'index' => false
            ],
            'name' => [
                'type' => 'search_as_you_type',
            ],
            'website' => [
                'type' => 'keyword'
            ],
            'emai' => [
                'type' => 'text',
                'index' => false
            ],
            'description' => [
                'type' => 'text',
                'analyzer' => 'english'
            ],
            'slug' => [
                'type' => 'text',
                'index' => false
            ],
            'rating' => [
                'type' => 'integer',
                'index' => false
            ],
            'imagePath' => [
                'type' => 'text',
                'index' => false
            ],
            'instagramHandle' => [
                'type' => 'keyword',
                'index' => false
            ],
            'facebookHandle' => [
                'type' => 'keyword',
                'index' => false
            ],
            'twitterHandle' => [
                'type' => 'keyword',
                'index' => false
            ],
        ]
    ];
}
