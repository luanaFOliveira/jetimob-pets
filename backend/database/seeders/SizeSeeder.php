<?php

namespace Database\Seeders;

use App\Models\Size;
use Illuminate\Database\Seeder;

class SizeSeeder extends Seeder
{
    
    public function run()
    {
        Size::create(['name' => 'Pequeno']);
        Size::create(['name' => 'Medio']);
        Size::create(['name' => 'Grande']);

    }
}
