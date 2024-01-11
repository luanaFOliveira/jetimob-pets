<?php

namespace App\Http\Controllers;

use App\Models\Animal;
use Illuminate\Http\Request;

class AnimalController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'nome' => 'required|string',
            'especie' => 'required|string',
            'sexo' => 'required|string',
            'porte' => 'required|string',
            'idade' => 'required|string',
            'cuidados_veterinarios' => 'required|string',
            'temperamento' => 'required|string',
            'vive_bem_em' => 'required|string',
            'sociavel_com' => 'required|string',
            'descricao' => 'required|string',
            'imagem' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $animal = Animal::create($request->except('imagens'));

        if ($request->hasFile('imagem')) {
            $imagem = $request->file('imagem')->get();
            $animal->update(['imagem' => $imagem]);
        }

        return response()->json($animal, 201);
    }

    public function index()
    {
        $animais = Animal::all();

        return $animais;
    }

    public function show($id)
    {
        $animal = Animal::find($id);

        if (!$animal) {
            return response()->json(['message' => 'Animal não encontrado.'], 404);
        }

        return response()->json($animal, 200);
    }

    public function update(Request $request, Animal $animal)
    {
        $request->validate([
            'nome' => 'required|string',
            'especie' => 'required|string',
            'sexo' => 'required|string',
            'porte' => 'required|string',
            'idade' => 'required|string',
            'cuidados_veterinarios' => 'required|string',
            'temperamento' => 'required|string',
            'vive_bem_em' => 'required|string',
            'sociavel_com' => 'required|string',
            'descricao' => 'required|string',
            'imagem' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        $animal->update($request->except('imagens'));

        if ($request->hasFile('imagem')) {
            $imagem = $request->file('imagem')->get();
            $animal->update(['imagem' => $imagem]);
        }

        return response()->json($animal, 200);
    }

    public function destroy(Animal $animal)
    {
        $animal->delete();
        return response()->json(null, 204);
    }

}
