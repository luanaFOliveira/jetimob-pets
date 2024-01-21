<?php

namespace Database\Seeders;

use App\Models\Temper;
use Illuminate\Database\Seeder;

class TempersSeeder extends Seeder
{
    
    public function run()
    {
        Temper::create(['name' => 'Agressivo']);
        Temper::create(['name' => 'Arisco']);
        Temper::create(['name' => 'Brincalhao']);
        Temper::create(['name' => 'Calmo']);
        Temper::create(['name' => 'Carente']);
        Temper::create(['name' => 'Docil']);
        Temper::create(['name' => 'Independente']);
        Temper::create(['name' => 'Sociavel']);
    }
}
