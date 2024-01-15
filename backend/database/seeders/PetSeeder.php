<?php

namespace Database\Seeders;

use App\Models\CuidadoVeterinario;
use App\Models\Image;
use App\Models\Pet;
use App\Models\SociavelCom;
use App\Models\Temperamento;
use App\Models\ViveBemEm;
use Illuminate\Database\Seeder;

class PetSeeder extends Seeder
{
    
    public function run()
    {
        Pet::factory(10)->create()->each(function ($pet) {
            $pet->cuidadosVeterinarios()->saveMany(CuidadoVeterinario::factory(3)->make());
            $pet->temperamentos()->saveMany(Temperamento::factory(3)->make());
            $pet->viveBemEm()->saveMany(ViveBemEm::factory(3)->make());
            $pet->sociavelCom()->saveMany(SociavelCom::factory(3)->make());
            $pet->images()->saveMany(Image::factory(3)->make());
        });
    }
}
