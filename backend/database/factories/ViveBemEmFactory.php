<?php

namespace Database\Factories;

use App\Models\Pet;
use App\Models\ViveBemEm;
use Illuminate\Database\Eloquent\Factories\Factory;

class ViveBemEmFactory extends Factory
{
    protected $model = ViveBemEm::class;

    public function definition()
    {
        $vive_bem_em = ['Apartamento', 'Apartamento telado', 'Casa com quintal fechado'];

        return [
            'pet_id' => Pet::factory(),
            'nome' => $this->faker->randomElement($vive_bem_em),
        ];
    }
}