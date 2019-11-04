<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrganizersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organizers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->string('name');
            $table->string('website')->nullable();
            $table->string('slug')->unique();
            $table->longtext('description');
            $table->string('rating')->default(0);
            $table->string('imagePath')->default('organizer-images/default.png');
            $table->string('instagramHandle')->nullable();
            $table->string('twitterHandle')->nullable();
            $table->string('facebookHandle')->nullable();
            $table->softDeletes();
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
        Schema::dropIfExists('organizers');
    }
}
