<?php

namespace Database\Seeders;

use App\Models\Sociablewith;
use Illuminate\Database\Seeder;

class SociableWithSeeder extends Seeder
{
    
    public function run()
    {
        Sociablewith::create(['name' => 'Cachorros']);
        Sociablewith::create(['name' => 'Gatos']);
        Sociablewith::create(['name' => 'Crianças']);
        Sociablewith::create(['name' => 'Pessoas desconhecidas']);
    }
}
