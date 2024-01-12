<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Animal;

class SociavelCom extends Model
{
    protected $table = 'socia_com';
    use HasFactory;

    protected $fillable = ['nome'];


    public function animal()
    {
        return $this->belongsToMany(Animal::class);
    }
}
