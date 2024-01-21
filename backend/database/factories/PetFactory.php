<?php

namespace Database\Factories;

use App\Models\AgeRange;
use App\Models\Sex;
use App\Models\Size;
use App\Models\Specie;
use Illuminate\Database\Eloquent\Factories\Factory;

class PetFactory extends Factory
{
    
    public function definition()
    {
       
        return [
            'name' => $this->faker->name(),
            'description' => $this->faker->text(),
            'specie_id' => Specie::inRandomOrder()->value('specie_id') ?? Specie::factory()->create()->specie_id,
            'sex_id' => Sex::inRandomOrder()->value('sex_id') ?? Sex::factory()->create()->sex_id,
            'size_id' => Size::inRandomOrder()->value('size_id') ?? Size::factory()->create()->size_id,
            'age_range_id' => AgeRange::inRandomOrder()->value('age_range_id') ?? AgeRange::factory()->create()->age_range_id,
        ];
    }
}
