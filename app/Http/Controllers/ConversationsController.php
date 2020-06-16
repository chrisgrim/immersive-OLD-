<?php

namespace App\Http\Controllers;

use App\Conversation;
use App\Message;
use App\ModeratorComment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\NewMessage;

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
        $conversations = auth()->user()->conversations()->withTrashed()->get();
        return view('messages.index', compact('conversations'));
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

        if ($request->type == 'message') {
            $message = Message::Create([
                'user_id' => auth()->id(),
                'message' => $request->message,
                'conversation_id' => $conversation->id
            ]);
            $attributes = [
                'email' => $receiver ? $receiver->email : '',
                'body' => $request->message,
                'name' => auth()->user()->name,
            ];
            $receiver ? $receiver->update(['unread' => 'm']) : '';
        };

        if ($request->type == 'event') {
            $ModeratorComment = ModeratorComment::create([
                'conversation_id' => $conversation->id,
                'event_id' => $conversation->modmessages[0]->event_id,
                'comments' => $request->message,
                'user_id' => auth()->id(),
            ]);
            $attributes = [
                'email' => $receiver ? $receiver->email : '',
                'body' => $request->message,
                'name' => auth()->user()->name,
            ];
            $receiver ? $receiver->update(['unread' => 'e']) : '';
        }

        $conversation->touch();

        
        $receiver ? Mail::to($receiver->email)->send(new NewMessage($attributes)) : '';
        
        
        
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
