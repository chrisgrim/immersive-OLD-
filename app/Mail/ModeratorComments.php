<?php

namespace App\Mail;

use App\ModeratorComment;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ModeratorComments extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * The ModeratorComment instance.
     *
     * @var ModeratorComment
     */
    protected $ModeratorComment;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(ModeratorComment $ModeratorComment)
    {
        $this->ModeratorComment = $ModeratorComment;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('admin@ei.com')
                    ->view('emails.moderator-comments')
                    ->with([
                        'comments' => $this->ModeratorComment->comments,
                    ]);
    }
}
