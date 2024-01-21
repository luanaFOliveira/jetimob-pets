<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Pet extends Model
{
    protected $table = 'pets';
    protected $primaryKey = 'pet_id';

    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'specie_id',
        'sex_id',
        'size_id',
        'age_range_id',
    ];

    public function specie()
    {
        return $this->belongsTo(Specie::class, 'specie_id', 'specie_id');
    }

    public function sex()
    {
        return $this->belongsTo(Sex::class,'sex_id','sex_id');
    }

    public function size()
    {
        return $this->belongsTo(Size::class,'size_id','size_id');
    }

    public function ageRange()
    {
        return $this->belongsTo(AgeRange::class,'age_range_id','age_range_id');
    }

    public function veterinaryCare()
    {
        return $this->belongsToMany(VeterinaryCare::class,'pet_veterinary_care', 'pet_id', 'veterinary_care_id', 'pet_id', 'veterinary_care_id')->withPivot('pet_veterinary_care_id');

    }


    public function tempers()
    {
        return $this->belongsToMany(Temper::class, 'pet_tempers', 'pet_id', 'temper_id', 'pet_id', 'temper_id')->withPivot('pet_temper_id');
    }

    public function liveWellIn()
    {
        return $this->belongsToMany(LiveWellIn::class,'pet_live_well_in', 'pet_id', 'live_well_in_id', 'pet_id', 'live_well_in_id')->withPivot('pet_live_well_in_id');
    }

    public function sociableWith()
    {
        return $this->belongsToMany(SociableWith::class,'pet_sociable_with', 'pet_id', 'sociable_with_id', 'pet_id', 'sociable_with_id')->withPivot('pet_sociable_with_id');

    }

    public function images()
    {
        return $this->hasMany(Image::class, 'pet_id', 'pet_id');
    }
}
