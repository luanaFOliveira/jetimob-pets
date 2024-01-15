<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ViveBemEm extends Model
{
    protected $table = 'vive_bem_em';
    use HasFactory;

    protected $fillable = [
        'nome',
    ];

    public function pet()
    {
        return $this->belongsTo(Pet::class);
    }
}
