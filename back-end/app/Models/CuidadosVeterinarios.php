<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Animal;

class CuidadosVeterinarios extends Model
{
    protected $table = 'cuidados_veterinarios';
    use HasFactory;

    protected $fillable = ['nome'];


    public function animal()
    {
        return $this->belongsToMany(Animal::class);
    }
}
