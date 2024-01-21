<?php

namespace Database\Seeders;

use App\Models\Sex;
use Illuminate\Database\Seeder;

class SexSeeder extends Seeder
{
    
    public function run()
    {
        Sex::create(['name' => 'Femea']);
        Sex::create(['name' => 'Macho']);
    }
}
