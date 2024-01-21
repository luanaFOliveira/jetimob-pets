<?php

namespace Database\Seeders;

use App\Models\LiveWellIn;
use Illuminate\Database\Seeder;

class LiveWellInSeeder extends Seeder
{
    
    public function run()
    {
        LiveWellIn::create(['name' => 'Apartamento']);
        LiveWellIn::create(['name' => 'Apartamento telado']);
        LiveWellIn::create(['name' => 'Casa com quintal fechado']);

    }
}
