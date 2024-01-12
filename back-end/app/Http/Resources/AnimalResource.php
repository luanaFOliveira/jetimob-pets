<?php

namespace App\Http\Resources;

use App\Models\CuidadosVeterinarios;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AnimalResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'nome' => $this->nome,
            'especie' => $this->especie,
            'sexo' => $this->sexo,
            'porte' => $this->porte,
            'idade' => $this->idade,
            'cuidados_veterinarios' => CuidadosVeterinariosResource::make($this->cuidadosVeterinarios),
            'temperamento' => TemperamentoResource::make($this->temperamento),
            'vive_bem_em' => ViveBemEmResource::make($this->viveBemEm),
            'sociavel_com' => SociavelComResource::make($this->sociavelCom),
            'descricao' => $this->descricao,
        ];
    }
}
