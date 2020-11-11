<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use ScoutElastic\Searchable;
use App\Scopes\AdminScope;
use Illuminate\Support\Str;

class Genre extends Model
{
    use Searchable; 

    protected $indexConfigurator = GenreIndexConfigurator::class;

    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
	protected $fillable = [
    	'name','admin', 'user_id', 'rank', 'slug'
    ];

    /**
     * The "booted" method of the model.
     *
     * @return void
     */
    protected static function booted()
    {
        static::addGlobalScope(new AdminScope);
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
            "name" => $this->name,
            "admin" => $this->admin,
            "rank" => $this->rank,
        ];
    }
    
    /**
     * Each genre can belong to many Events
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsToMany
     */
    public function events() 
    {
    	return $this->belongsToMany(Event::class);
    }

    /**
     * This saves a new Genre type
     *
     * @return  nothing
     */
    public static function saveGenre($request) 
    {
        Genre::firstOrCreate([
            'slug' => Str::slug($request->name)
        ],
        [
            'name' => $request->name,
            'user_id' => auth()->user()->id,
            'admin' => true,
        ]);
    }

     /**
     * This updates a genre type
     *
     * @return nothing
     */
    public function updateGenre($request) 
    {
        $this->update([
            'rank' => $request->rank,
            'name' => $request->name,
            'slug' => Str::slug($request->name),
            'user_id' => auth()->user()->id,
            'admin' => $request->admin,
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
            'admin' => [
                'type' => 'text',
            ],
            'slug' => [
                'type' => 'text',
            ],
        ]
    ];
    
}
