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
        
        Schema::create('pets', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('especie');
            $table->string('sexo');
            $table->string('porte');
            $table->string('idade');
            $table->string('descricao');
            $table->timestamps();
        });

        Schema::create('cuidados_veterinarios', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pet_id')->constrained('pets')->onDelete('CASCADE');
            $table->string('nome');
            $table->timestamps();
        });

        Schema::create('temperamentos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pet_id')->constrained('pets')->onDelete('CASCADE');
            $table->string('nome');
            $table->timestamps();
        });

        Schema::create('vive_bem_em', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pet_id')->constrained('pets')->onDelete('CASCADE');
            $table->string('nome');
            $table->timestamps();
        });

        Schema::create('sociavel_com', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pet_id')->constrained('pets')->onDelete('CASCADE');
            $table->string('nome');
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
        Schema::dropIfExists('cuidados_veterinarios');
        Schema::dropIfExists('temperamentos');
        Schema::dropIfExists('vive_bem_em');
        Schema::dropIfExists('sociavel_com');
        Schema::dropIfExists('pets');
    }
}
