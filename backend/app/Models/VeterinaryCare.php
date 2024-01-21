<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class VeterinaryCare extends Model
{
    protected $table = 'veterinary_care';
    protected $primaryKey = 'veterinary_care_id';

    use HasFactory;
    use SoftDeletes;
    public $timestamps = false;
    protected $fillable = [
        'name',
    ];

    public function pets()
    {
        return $this->belongsToMany(Pet::class,'pet_veterinary_care', 'veterinary_care_id', 'pet_id', 'veterinary_care_id', 'pet_id')->withPivot('pet_veterinary_care_id');

    }
}
