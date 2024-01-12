<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreAnimalRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nome' => 'required|string',
            'especie' => 'required|string',
            'sexo' => 'required|string',
            'porte' => 'required|string',
            'idade' => 'required|string',
            'cuidados_veterinarios' => 'required|integer|exists:cuidados_veterinarios,id',
            'temperamento' => 'required|integer|exists:temperamentos,id',
            'vive_bem_em' => 'required|integer|exists:vive_bem_em,id',
            'sociavel_com' => 'required|integer|exists:sociavel_com,id',
            'descricao' => 'required|string',
        ];
    }
}
