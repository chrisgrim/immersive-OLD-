<?php

use App\User;
use App\ModeratorComment;
namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = ['message', 'user_id', 'conversation_id'];

    /**
    * The relations to eager load on every query. I am adding shows here because I need to filter by dates for the search
    *
    * @var array
    */
    protected $with = ['user'];

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
     * This message belongs to a user
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
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

    public static function eventnotification($event, $status, $request) 
    {

        if($event->moderatorcomments()->count()) {

            $conversation = Conversation::find($event->moderatorcomments()->first()->conversation_id);
            $conversation->touch();
            $ModeratorComment = ModeratorComment::create([
                'conversation_id' => $conversation->id,
                'event_id' => $event->id,
                'comments' => $status == 'denied' ? $request->comments : $status,
                'user_id' => auth()->id(),
            ]);
        } else {
            $ids = [$event->user_id, auth()->id()];
            $conversation = Conversation::create();
            $conversation->users()->sync($ids);
            $ModeratorComment = ModeratorComment::create([
                'conversation_id' => $conversation->id,
                'event_id' => $event->id,
                'comments' => $status == 'denied' ? $request->comments : $status,
                'user_id' => auth()->id(),
            ]);
        };

        $event->user->update(['unread' => 'e']);
        return $ModeratorComment;
    }
}
