<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class SociableWith extends Model
{
    protected $table = 'sociable_with';
    protected $primaryKey = 'sociable_with_id';

    use HasFactory;
    use SoftDeletes;
    public $timestamps = false;
    protected $fillable = [
        'name',
    ];

    public function pets()
    {
        return $this->belongsToMany(Pet::class,'pet_sociable_with', 'sociable_with_id', 'pet_id', 'sociable_with_id', 'pet_id')->withPivot('pet_sociable_with_id');
    }
}
