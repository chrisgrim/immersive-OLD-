<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    /**
    * What protected variables are allowed to be passed to the database
    *
    * @var array
    */
	protected $fillable = ['name','ticket_price','ticket_id', 'ticket_type', 'description','type'];
    
	/**
     * Ticket Belongs to the Show Model
     *
     * @return \Illuminate\Database\Eloquent\Relations\belongsTo
     */
    public function ticket()
    {
        return $this->morphTo();
    }
}
