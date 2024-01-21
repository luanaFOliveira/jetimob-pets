<?php

namespace Database\Factories;

use App\Models\Pet;
use App\Models\Temper;
use Illuminate\Database\Eloquent\Factories\Factory;

class TemperFactory extends Factory
{
    protected $model = Temper::class;

    public function definition()
    {
        $temperamento = ['Agressivo', 'Arisco', 'Brincalhao','Calmo','Carente','Docil','Independente','Sociavel'];

        return [
            'pet_id' => Pet::factory(),
            'nome' => $this->faker->randomElement($temperamento),
        ];
    }
}