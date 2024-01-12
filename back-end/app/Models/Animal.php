<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Image;

class Animal extends Model
{
    protected $table = 'animais';
    use HasFactory;

    protected $fillable = ['nome', 'especie', 'sexo', 'porte', 'idade','descricao'];

    public function images(){
        return $this->hasMany(Image::class);
    }

    public function temperamentos(){
        return $this->belongsToMany(Temperamento::class);
    }

    public function cuidadosVeterinarios(){
        return $this->belongsToMany(CuidadosVeterinarios::class);
    }

    public function viveBemEm(){
        return $this->belongsToMany(ViveBemEm::class);
    }

    public function sociavelCom(){
        return $this->belongsToMany(SociavelCom::class);
    }
}
