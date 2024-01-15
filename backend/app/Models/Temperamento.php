<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Temperamento extends Model
{
    protected $table = 'temperamentos';
    use HasFactory;

    protected $fillable = [
        'nome',
    ];

    public function pet()
    {
        return $this->belongsTo(Pet::class);
    }
}
