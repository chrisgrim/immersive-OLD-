<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('category_id')->nullable();
            $table->unsignedBigInteger('advisories_id')->nullable();
            $table->unsignedBigInteger('organizer_id')->nullable();
            $table->string('slug')->unique();
            $table->string('name')->nullable();
            $table->text('description')->nullable();
            $table->text('tag_line')->nullable();
            $table->string('websiteUrl')->nullable();
            $table->string('show_times')->nullable();
            $table->string('ticketUrl')->nullable();
            $table->string('largeImagePath')->nullable();
            $table->string('thumbImagePath')->nullable();
            $table->string('overallRating')->default(0);
            $table->json('location_latlon')->nullable();
            $table->dateTime('closingDate')->nullable();
            $table->string('price_range')->nullable();
            $table->string('approval_process')->default('inProgress');
            $table->boolean('approved')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
}
