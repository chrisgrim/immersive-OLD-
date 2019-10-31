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
            $table->string('wheelchairReady')->nullable();
            $table->string('sexualViolence')->nullable();
            $table->longtext('sexualViolenceDescription')->nullable();
            $table->unsignedInteger('ageRestriction')->nullable();
            $table->longtext('contactAdvisories')->nullable();
            $table->longtext('mobilityAdvisories')->nullable();
            $table->longtext('contentAdvisories')->nullable();
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
        Schema::dropIfExists('expects');
    }
}
