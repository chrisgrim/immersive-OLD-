<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContentAdvisoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('content_advisories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->string('advisories')->unique();
            $table->boolean('admin')->default(0);
            $table->timestamps();
        });
        Schema::create('content_advisory_event', function(Blueprint $table) {
            $table->unsignedBigInteger('event_id');
            $table->unsignedBigInteger('content_advisory_id');
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
        Schema::dropIfExists('content_advisories');
    }
}
