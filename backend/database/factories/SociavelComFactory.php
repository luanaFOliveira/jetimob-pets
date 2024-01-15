<?php

namespace Database\Factories;

use App\Models\Pet;
use App\Models\SociavelCom;
use Illuminate\Database\Eloquent\Factories\Factory;

class SociavelComFactory extends Factory
{
    protected $model = SociavelCom::class;

    public function definition()
    {
        $sociavel_com = ['Cachorros', 'Gatos', 'Crianças','Pessoas desconhecidas'];

        return [
            'pet_id' => Pet::factory(),
            'nome' => $this->faker->randomElement($sociavel_com),
        ];
    }
}