<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimaisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('animais', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('especie');
            $table->string('sexo');
            $table->string('porte');
            $table->string('idade');
            $table->string('cuidados_veterinarios');
            $table->string('temperamento');
            $table->string('vive_bem_em');
            $table->string('sociavel_com');
            $table->string('descricao');
            $table->binary('imagem')->nullable();
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
        Schema::dropIfExists('animais');
    }
}
