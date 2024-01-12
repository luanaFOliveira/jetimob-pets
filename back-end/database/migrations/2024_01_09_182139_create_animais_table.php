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
        Schema::create('cuidados_veterinarios', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->timestamps();
        });

        Schema::create('temperamentos', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->timestamps();
        });

        Schema::create('vive_bem_em', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->timestamps();
        });

        Schema::create('sociavel_com', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->timestamps();
        });



        Schema::create('animais', function (Blueprint $table) {
            $table->id();
            $table->string('nome');
            $table->string('especie');
            $table->string('sexo');
            $table->string('porte');
            $table->string('idade');
            $table->foreignId('cuidados_veterinarios_id')->nullable()->constrained('cuidados_veterinarios');
            $table->foreignId('temperamento_id')->nullable()->constrained('temperamentos');
            $table->foreignId('vive_bem_em_id')->nullable()->constrained('vive_bem_em');
            $table->foreignId('sociavel_com_id')->nullable()->constrained('sociavel_com');
            $table->string('descricao');
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
        Schema::dropIfExists('animais');
    }
}
