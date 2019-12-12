<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Intervention\Image\ImageManagerStatic as Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\View\View;
use Laravel\Cashier\Billable;

class User extends Authenticatable
{
    use Notifiable, Billable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','image_path'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = ['hasCreatedOrganizers', 'userType', 'needsApproval'];

    /**
     * User can have many events
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function events() 
    {
        return $this->hasMany(Event::class);
    }

    /**
     * The User has many organizations
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function organizers() 
    {
        return $this->hasMany(Organizer::class);
    }

    /**
     * User can have many favorites
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */
    public function favorites() 
    {
        return $this->hasMany(Favorite::class);
    }

    /**
    * User belongs to a role on the site
    *
    * @return \Illuminate\Database\Eloquent\Relations\belongsToMany
    */
    public function role() {
        return $this->hasOne(Role::class);
    }

    /**
    * Determine if the current user is Admin
    *
    * @return bool
    */
    public function isAdmin() {
        return $this->role()->where('name', 'admin')->exists();
    }

    /**
    * Determine if the current user is Moderator
    *
    * @return bool
    */
    public function isModerator() {
        return $this->role()->where('name', 'moderator')->exists();
    }

    /**
    * Determine if the current user has created events
    *
    * @return bool
    */
    public function getHasCreatedOrganizersAttribute()
    {
        return auth()->user()->organizers()->count() ? true : false;    
    }

    /**
    * Creates a new event
    *
    * @return count of events needing approval
    */
    public function getNeedsApprovalAttribute()
    {
        return auth()->user()->isAdmin() ? Event::where('approval_process', 'ready')->count() : null;
    }

    /**
    * Determine current User type
    *
    * @return sting
    */
    public function getUserTypeAttribute()
    {
        return $this->role()->first();    
    }

    /**
    * Saves the image that is passed from the controller
    *
    * @return string
    */
    public static function saveFile($request, $user)
    {
        Storage::delete('public/' . $user->image_path);
        $extension = $request->file('image')->getClientOriginalExtension();
        $filename = $user->name .'-'. rand(5,9999) . '.' .$extension;
        $imagePath = "avatars/$filename";
        $request->file('image')->storeAs('/public/avatars', $filename);
        Image::make(storage_path()."/app/public/avatars/$filename")->fit(800, 800)->save(storage_path("/app/public/$imagePath"));
        $user->update([ 'image_path' => $imagePath ]);
    }
}
