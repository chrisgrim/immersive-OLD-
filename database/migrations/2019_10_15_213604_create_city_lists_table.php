<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCityListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('city_lists', function (Blueprint $table) {

            $table->bigIncrements('id');
            $table->string('name');
            $table->unsignedBigInteger('population');
            $table->DECIMAL('latitude', 10 ,8)->nullable();
            $table->DECIMAL('longitude', 11, 8)->nullable();
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
        Schema::dropIfExists('city_lists');
    }
}
