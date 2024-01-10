<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Animal extends Model
{
    protected $table = 'animais';
    use HasFactory;

    protected $fillable = ['nome', 'especie', 'sexo', 'porte', 'idade','cuidados_veterinarios','temperamento','vive_bem_em','sociavel_com','descricao', 'imagens'];

    protected $casts = [
        'imagens' => 'json',
    ];
}
