<?php

namespace App\Http\Controllers;

use App\Conversation;
use App\Message;
use App\ModeratorComment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactUser;

class ConversationsController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('messages.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Conversation $conversation)
    {
        $this->authorize('update', $conversation);
        auth()->user()->update(['unread' => null]);
        return view('messages.show', compact('conversation'));
    }

    /**

     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Organizer  $organizer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Conversation $conversation)
    {   
        $this->authorize('update', $conversation);
        $receiver = $conversation->users->where('id', '!=' , auth()->id())->first();

        if ($request->message) {
            $message = Message::Create([
                'user_id' => auth()->id(),
                'message' => request('message'),
                'conversation_id' => $conversation->id
            ]);
            $attributes = [
                'email' => $receiver->email,
                'body' => $request->message,
                'username' => auth()->user()->name,
            ];
            $receiver->update(['unread' => 'm']);
        };

        if ($request->modmessage) {
            $ModeratorComment = ModeratorComment::create([
                'conversation_id' => $conversation->id,
                'event_id' => $conversation->modmessages[0]->event_id,
                'comments' => $request->modmessage,
                'user_id' => auth()->id(),
            ]);
            $attributes = [
                'email' => $receiver->email,
                'body' => $request->modmessage,
                'username' => auth()->user()->name,
            ];
            $receiver->update(['unread' => 'e']);
        }

        $conversation->touch();
        
        Mail::to($receiver->email)->send(new ContactUser($attributes));
        
    }

    /**
     * Get Messages From Database
     *
     * @return \Illuminate\Http\Response
     */
    public function fetch()
    {
        return auth()->user()->conversations()->get();
    }
}
