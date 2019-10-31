<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInformationTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('information', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('event_id');
            $table->string('websiteUrl')->nullable();
            $table->string('ticketUrl')->nullable();
            $table->unsignedInteger('ageRestriction')->nullable();
            $table->decimal('generalPricing', 6, 2)->nullable();
            $table->decimal('studentPricing', 6, 2)->nullable();
            $table->decimal('militaryPricing', 6, 2)->nullable();
            $table->decimal('seniorPricing', 6, 2)->nullable();
            $table->decimal('vipPricing', 6, 2)->nullable();
            $table->string('allOtherPricing')->nullable();

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
        Schema::dropIfExists('information');
    }
}
