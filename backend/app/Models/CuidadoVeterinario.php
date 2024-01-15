<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CuidadoVeterinario extends Model
{
    protected $table = 'cuidados_veterinarios';
    use HasFactory;

    protected $fillable = [
        'nome',
    ];

    public function pet()
    {
        return $this->belongsTo(Pet::class);
    }
}
