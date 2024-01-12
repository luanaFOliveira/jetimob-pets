<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Animal;

class Temperamento extends Model
{
    protected $table = 'temperamentos';
    use HasFactory;

    protected $fillable = ['nome'];


    public function animal()
    {
        return $this->belongsToMany(Animal::class);
    }
}
