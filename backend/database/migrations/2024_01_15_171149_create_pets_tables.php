<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePetsTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
         //1 para n
         Schema::create('species', function (Blueprint $table) {
            $table->id('specie_id');
            $table->string('name');
            $table->softDeletes();

        });
        //1 para n
        Schema::create('sex', function (Blueprint $table) {
            $table->id('sex_id');
            $table->string('name');
            $table->softDeletes();

        });
        //1 para n
        Schema::create('sizes', function (Blueprint $table) {
            $table->id('size_id');
            $table->string('name');
            $table->softDeletes();

        });
        //1 para n
        Schema::create('age_ranges', function (Blueprint $table) {
            $table->id('age_range_id');
            $table->string('name');
            $table->softDeletes();

        });

        //n para n
        Schema::create('veterinary_care', function (Blueprint $table) {
            $table->id('veterinary_care_id');
            $table->string('name');
            $table->softDeletes();
        });

        //n para n
        Schema::create('tempers', function (Blueprint $table) {
            $table->id('temper_id');
            $table->string('name');
            $table->softDeletes();
        });

         //n para n
         Schema::create('live_well_in', function (Blueprint $table) {
            $table->id('live_well_in_id');
            $table->string('name');
            $table->softDeletes();
        });

        //n para n
        Schema::create('sociable_with', function (Blueprint $table) {
            $table->id('sociable_with_id');
            $table->string('name');
            $table->softDeletes();
        });

        Schema::create('pets', function (Blueprint $table) {
            $table->id('pet_id');
            $table->string('name');
            $table->string('description');
            $table->foreignId('specie_id')->constrained('species', 'specie_id');
            $table->foreignId('sex_id')->constrained('sex','sex_id');
            $table->foreignId('size_id')->constrained('sizes', 'size_id');
            $table->foreignId('age_range_id')->constrained('age_ranges', 'age_range_id');
            $table->timestamps();
            $table->softDeletes();
        });
       
        

        Schema::create('pet_veterinary_care', function (Blueprint $table) {
            $table->id('pet_veterinary_care_id');
            $table->foreignId('pet_id')->constrained('pets', 'pet_id');
            $table->foreignId('veterinary_care_id')->constrained('veterinary_care', 'veterinary_care_id');
            $table->softDeletes();
        });

        
        Schema::create('pet_tempers', function (Blueprint $table) {
            $table->id('pet_temper_id');
            $table->foreignId('pet_id')->constrained('pets', 'pet_id');
            $table->foreignId('temper_id')->constrained('tempers', 'temper_id');
            $table->softDeletes();
        });
       

        Schema::create('pet_live_well_in', function (Blueprint $table) {
            $table->id('pet_live_well_in_id');
            $table->foreignId('pet_id')->constrained('pets', 'pet_id');
            $table->foreignId('live_well_in_id')->constrained('live_well_in', 'live_well_in_id');
            $table->softDeletes();
        });

        

        Schema::create('pet_sociable_with', function (Blueprint $table) {
            $table->id('pet_sociable_with_id');
            $table->foreignId('pet_id')->constrained('pets', 'pet_id');
            $table->foreignId('sociable_with_id')->constrained('sociable_with', 'sociable_with_id');
            $table->softDeletes();
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cuidados_veterinarios');
        Schema::dropIfExists('temperamentos');
        Schema::dropIfExists('vive_bem_em');
        Schema::dropIfExists('sociavel_com');
        Schema::dropIfExists('pets');
    }
}
