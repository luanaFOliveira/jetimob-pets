<?php

namespace Database\Seeders;

use App\Models\Specie;
use Illuminate\Database\Seeder;

class SpecieSeeder extends Seeder
{
    
    public function run()
    {
        Specie::create(['name' => 'Canino']);
        Specie::create(['name' => 'Felino']);
    }
}
