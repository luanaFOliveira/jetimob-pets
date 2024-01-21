<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Temper extends Model
{
    protected $table = 'tempers';
    protected $primaryKey = 'temper_id';

    use HasFactory;
    use SoftDeletes;
    public $timestamps = false;
    protected $fillable = [
        'name',
    ];

    public function pets()
    {
        return $this->belongsToMany(Pet::class, 'pet_tempers', 'temper_id', 'pet_id', 'temper_id', 'pet_id')->withPivot('pet_temper_id');
    }
}
