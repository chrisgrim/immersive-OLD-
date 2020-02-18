<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Conversation extends Model
{
    protected $fillable = ['opener_id', 'receiver_id'];
    /**
    * The relations to eager load on every query. I am adding shows here because I need to filter by dates for the search
    *
    * @var array
    */
    protected $with = ['messages', 'users'];

    /**
     * This Conversation has many Messages
     *
     * @return \Illuminate\Database\Eloquent\Relations\hasMany
     */

    public function messages()
    {
        return $this->hasMany(Message::class)->orderBy('updated_at', 'DESC');
    }

    /**
     * This Conversation hasMany
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsToMany
     */
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
