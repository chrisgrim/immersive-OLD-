<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGenresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('genres', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->string('genre')->unique();
            $table->boolean('admin')->default(0);
            $table->integer('rank')->default(0);
            $table->timestamps();
        });
        Schema::create('event_genre', function(Blueprint $table) {
            $table->unsignedBigInteger('event_id');
            $table->unsignedBigInteger('genre_id');
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
        Schema::dropIfExists('genres');
        Schema::dropIfExists('event_genre');
    }
}
