<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExpectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('event_id');
            $table->boolean('wheelchairReady')->nullable();
            $table->boolean('sexualViolence')->nullable();
            $table->longtext('sexualViolenceDescription')->nullable();
            $table->string('ageRestriction')->nullable();
            $table->longtext('mobilityAdvisories')->nullable();
            $table->longtext('contactAdvisories')->nullable();
            $table->timestamps();
            $table->foreign('event_id')
                    ->references('id')->on('events')
                    ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('expects');
    }
}
