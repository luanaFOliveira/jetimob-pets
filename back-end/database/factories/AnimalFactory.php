<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class AnimalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $especies = ['Canino', 'Felino'];
        $sexo = ['Femea', 'Macho'];
        $porte = ['Pequeno', 'Medio', 'Grande'];
        $idade = ['Filhote', 'Adulto', 'Idoso'];
        $cuidados_veterinarios = ['Castrado', 'Vacinado', 'Vermifugado', 'Precisa de cuidados especiais'];
        $temperamento = ['Agressivo', 'Arisco', 'Brincalhao','Calmo','Carente','Docil','Independente','Sociavel'];
        $vive_bem_em = ['Apartamento', 'Apartamento telado', 'Casa com quintal fechado'];
        $sociavel_com = ['Cachorros', 'Gatos', 'Crianças','Pessoas desconhecidas'];

        return [
            'nome' => $this->faker->name(),
            'especie' => $this->faker->randomElement($especies),
            'sexo' => $this->faker->randomElement($sexo),
            'porte' => $this->faker->randomElement($porte),
            'idade' => $this->faker->randomElement($idade),
            'cuidados_veterinarios' => $this->faker->randomElement($cuidados_veterinarios),
            'temperamento' => $this->faker->randomElement($temperamento),
            'vive_bem_em' => $this->faker->randomElement($vive_bem_em),
            'sociavel_com' => $this->faker->randomElement($sociavel_com),
            'descricao' => $this->faker->text(),
            'created_at' => now(),
            'updated_at' => now()
        ];
    }
}
