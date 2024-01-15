<?php

namespace Database\Factories;

use App\Models\Pet;
use App\Models\Temperamento;
use Illuminate\Database\Eloquent\Factories\Factory;

class TemperamentoFactory extends Factory
{
    protected $model = Temperamento::class;

    public function definition()
    {
        $temperamento = ['Agressivo', 'Arisco', 'Brincalhao','Calmo','Carente','Docil','Independente','Sociavel'];

        return [
            'pet_id' => Pet::factory(),
            'nome' => $this->faker->randomElement($temperamento),
        ];
    }
}