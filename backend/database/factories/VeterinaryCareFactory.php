<?php

namespace Database\Factories;

use App\Models\Pet;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\VeterinaryCare;

class VeterinaryCareFactory extends Factory
{
    protected $model = VeterinaryCare::class;

    public function definition()
    {
        $cuidados_veterinarios = ['Castrado', 'Vacinado', 'Vermifugado', 'Precisa de cuidados especiais'];

        return [
            'pet_id' => Pet::factory(),
            'nome' => $this->faker->randomElement($cuidados_veterinarios),
        ];
    }
}