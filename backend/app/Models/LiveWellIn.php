<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class LiveWellIn extends Model
{
    protected $table = 'live_well_in';
    protected $primaryKey = 'live_well_in_id';

    use HasFactory;
    use SoftDeletes;
    public $timestamps = false;
    protected $fillable = [
        'name',
    ];

    public function pets()
    {
        return $this->belongsToMany(Pet::class,'pet_live_well_in', 'live_well_in_id', 'pet_id', 'live_well_in_id', 'pet_id')->withPivot('pet_live_well_in_id');

    }
}
