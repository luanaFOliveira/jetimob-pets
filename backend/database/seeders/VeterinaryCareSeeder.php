<?php

namespace Database\Seeders;

use App\Models\VeterinaryCare;
use Illuminate\Database\Seeder;

class VeterinaryCareSeeder extends Seeder
{
    
    public function run()
    {
        VeterinaryCare::create(['name' => 'Castrado']);
        VeterinaryCare::create(['name' => 'Vacinado']);
        VeterinaryCare::create(['name' => 'Vermifugado']);
        VeterinaryCare::create(['name' => 'Precisa de cuidados especiais']);

    }
}
