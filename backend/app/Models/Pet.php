<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pet extends Model
{
    protected $table = 'pets';
    use HasFactory;

    protected $fillable = [
        'nome',
        'especie',
        'sexo',
        'porte',
        'idade',
        'descricao',
    ];

    public function cuidadosVeterinarios()
    {
        return $this->hasMany(CuidadoVeterinario::class);
    }


    public function temperamentos()
    {
        return $this->hasMany(Temperamento::class);
    }

    public function viveBemEm()
    {
        return $this->hasMany(ViveBemEm::class);
    }

    public function sociavelCom()
    {
        return $this->hasMany(SociavelCom::class);
    }

    public function images()
    {
        return $this->hasMany(Image::class);
    }
}
