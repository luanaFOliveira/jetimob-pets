<?php

namespace Database\Factories;

use App\Models\Pet;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\CuidadoVeterinario;

class CuidadoVeterinarioFactory extends Factory
{
    protected $model = CuidadoVeterinario::class;

    public function definition()
    {
        $cuidados_veterinarios = ['Castrado', 'Vacinado', 'Vermifugado', 'Precisa de cuidados especiais'];

        return [
            'pet_id' => Pet::factory(),
            'nome' => $this->faker->randomElement($cuidados_veterinarios),
        ];
    }
}