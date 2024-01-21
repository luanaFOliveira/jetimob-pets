<?php

namespace Database\Seeders;

use App\Models\AgeRange;
use Illuminate\Database\Seeder;

class AgeRangeSeeder extends Seeder
{
    
    public function run()
    {
        AgeRange::create(['name' => 'Filhote']);
        AgeRange::create(['name' => 'Adulto']);
        AgeRange::create(['name' => 'Idoso']);

    }
}
