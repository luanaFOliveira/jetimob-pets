<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Specie extends Model
{
    protected $table = 'species';
    protected $primaryKey = 'specie_id';

    use HasFactory;
    use SoftDeletes;
    public $timestamps = false;
    protected $fillable = [
        'name',
    ];

    public function pets()
    {
        return $this->hasMany(Pet::class, 'specie_id', 'specie_id');
    }
}
