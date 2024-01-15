<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class SociavelCom extends Model
{
    protected $table = 'sociavel_com';
    use HasFactory;

    protected $fillable = [
        'nome',
    ];

    public function pet()
    {
        return $this->belongsTo(Pet::class);
    }
}
