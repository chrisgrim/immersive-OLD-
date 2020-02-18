<?php

use App\User;
namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = ['message', 'user_id', 'conversation_id'];

    /**
     * This message belongs to a user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function sender()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * This message belongs to a conversation
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */   
    public function conversation()
    {
        return $this->belongsTo(Conversation::class);
    }
}
