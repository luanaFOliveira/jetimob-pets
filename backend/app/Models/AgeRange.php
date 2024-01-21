<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class AgeRange extends Model
{
    protected $table = 'age_ranges';
    protected $primaryKey = 'age_range_id';

    use HasFactory;
    use SoftDeletes;
    public $timestamps = false;
    protected $fillable = [
        'name',
    ];

    public function pets()
    {
        return $this->hasMany(Pet::class, 'age_range_id', 'age_range_id');
    }
}
