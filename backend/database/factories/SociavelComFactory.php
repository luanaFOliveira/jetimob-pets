<?php

namespace Database\Factories;

use App\Models\Pet;
use App\Models\Sociablewith;
use Illuminate\Database\Eloquent\Factories\Factory;

class SociablewithFactory extends Factory
{
    protected $model = Sociablewith::class;

    public function definition()
    {
        $sociavel_com = ['Cachorros', 'Gatos', 'Crianças','Pessoas desconhecidas'];

        return [
            'pet_id' => Pet::factory(),
            'nome' => $this->faker->randomElement($sociavel_com),
        ];
    }
}