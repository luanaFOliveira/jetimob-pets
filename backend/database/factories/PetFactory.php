<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PetFactory extends Factory
{
    
    public function definition()
    {
        $especies = ['Canino', 'Felino'];
        $sexo = ['Femea', 'Macho'];
        $porte = ['Pequeno', 'Medio', 'Grande'];
        $idade = ['Filhote', 'Adulto', 'Idoso'];

        return [
            'nome' => $this->faker->name(),
            'especie' => $this->faker->randomElement($especies),
            'sexo' => $this->faker->randomElement($sexo),
            'porte' => $this->faker->randomElement($porte),
            'idade' => $this->faker->randomElement($idade),
            'descricao' => $this->faker->text(),
        ];
    }
}
