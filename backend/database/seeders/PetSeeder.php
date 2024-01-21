<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\LiveWellIn;
use App\Models\Pet;
use App\Models\SociableWith;
use App\Models\Temper;
use App\Models\VeterinaryCare;
use Illuminate\Database\Seeder;

class PetSeeder extends Seeder
{
    
    public function run()
    {
        Pet::factory(10)->create()->each(function ($pet) {
            $tempers = Temper::inRandomOrder()->take(3)->pluck('temper_id');
            $pet->tempers()->attach($tempers);
            $veterinary_care = VeterinaryCare::inRandomOrder()->take(3)->pluck('veterinary_care_id');
            $pet->veterinaryCare()->attach($veterinary_care);
            $live_well_in = LiveWellIn::inRandomOrder()->take(3)->pluck('live_well_in_id');
            $pet->liveWellIn()->attach($live_well_in);
            $sociable_with = SociableWith::inRandomOrder()->take(3)->pluck('sociable_with_id');
            $pet->sociableWith()->attach($sociable_with);
            $pet->images()->saveMany(Image::factory(3)->make());
        });
    }
}
