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
    	'user_id','name','website','slug','description','rating','imagePath','instagramHandle','twitterHandle','facebookHandle', 'email'
    ];

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
     * Get Past Events for organizer
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function pastEvents()
    {
        return $this->hasMany(Event::class)
                    ->whereDate('closingDate', '<=', Carbon::today())->where('approved', 1);
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
                    ->orWhereNull('closingDate');
    }

    /**
    * Save File and update organizer model with path name
    *
    * @param  \Illuminate\Http\Request  $request
    * @param  $organizer
    */
    public static function saveFile($organizer, $request)
    {
        ini_set('memory_limit','512M');
        if ($organizer->imagePath) {
            Storage::delete('public/' . $organizer->imagePath);
        };
        $extension = $request->file('imagePath')->getClientOriginalExtension();
        $filename= $request->slug . '_' . 'organization' . '_' . rand(1,50000) . '.' . $extension;
        $imagePath = "organizer-images/$filename";
        $request->file('imagePath')->storeAs('/public/organizer-images', $filename);
        Image::make(storage_path()."/app/public/organizer-images/$filename")->fit(800, 800)->save(storage_path("/app/public/$imagePath"));
        $organizer->update([ 'imagePath' => $imagePath ]);
    }

    //  /**
    // * Save File and update organizer model with path name
    // *
    // * @param  \Illuminate\Http\Request  $request
    // * @param  $organizer
    // */
    // public static function tempSave($request)
    // {
    //     ini_set('memory_limit','256M');
    //     $extension = $request->file('imagePath')->getClientOriginalExtension();
    //     $temp = 'temp' . '_' . rand(1,50000) . '.' . $extension;
    //     $request->file('imagePath')->storeAs('/public/organizer-images', $temp);
    //     return $temp;
    // }

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
                        'imagePath' => $organizer->imagePath,
                        'past_events' => $organizer->pastEvents,
                        'in_progress_events' => $organizer->inProgressEvents,
            ];
        });
        return $eventsbyorganizer;
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
