<?php

namespace App\Http\Controllers;

use App\Models\CuidadoVeterinario;
use App\Models\Pet;

use App\Models\Image;
use App\Models\SociavelCom;
use App\Models\Temperamento;
use App\Models\ViveBemEm;
use Illuminate\Http\Request;

class PetController extends Controller
{
    public function index()
    {
        $pets = Pet::with('images', 'cuidadosVeterinarios', 'temperamentos', 'viveBemEm', 'sociavelCom')->orderBy('id')->paginate(10);
        return response()->json($pets);
    }

    public function store(Request $request)
    {
        $pet = Pet::create($request->all());

        $files = $request->file('images');

        if (is_array($files) && count($files) > 0) {
            foreach ($files as $file) {
                $image = Image::create([
                    'pet_id' => $pet->id,
                    'name' => $file->getClientOriginalName(),
                    'file_name' => $file->getFileName(),
                    'extension' => $file->getClientOriginalExtension(),
                    'size' => $file->getSize(),
                    'mime_type' => $file->getMimeType(),
                    'file_path' => $file->store('images', 'public'),
                    'file_hash' => $file->hashName(),
                    'disk' => 'local',
                ]);

                $pet->images()->save($image);
            }
        }

        $cuidadosVeterinarios = $request->input('cuidados_veterinarios');

        if (is_array($cuidadosVeterinarios) && count($cuidadosVeterinarios) > 0) {
            foreach ($cuidadosVeterinarios as $cuidadoVeterinarioId) {
                $cuidadoVeterinario = CuidadoVeterinario::find($cuidadoVeterinarioId);

                $pet->cuidadosVeterinarios()->attach($cuidadoVeterinario);
            }
        }

        $temperamentos = $request->input('temperamentos');

        if (is_array($temperamentos) && count($temperamentos) > 0) {
            foreach ($temperamentos as $temperamentoId) {
                $temperamento = Temperamento::find($temperamentoId);

                $pet->temperamentos()->attach($temperamento);
            }
        }

        $viveBemEm = $request->input('vive_bem_em');

        if (is_array($viveBemEm) && count($viveBemEm) > 0) {
            foreach ($viveBemEm as $viveBemEmId) {
                $viveBemEm = ViveBemEm::find($viveBemEmId);

                $pet->viveBemEm()->attach($viveBemEm);
            }
        }

        $sociavelCom = $request->input('sociavel_com');

        if (is_array($sociavelCom) && count($sociavelCom) > 0) {
            foreach ($sociavelCom as $sociavelComId) {
                $sociavelCom = SociavelCom::find($sociavelComId);

                $pet->sociavelCom()->attach($sociavelCom);
            }
        }

        return $pet->load('images', 'cuidadosVeterinarios', 'temperamentos', 'viveBemEm', 'sociavelCom');
    }

    public function show(int $id)
    {
        $pet = Pet::find($id);

        $pet->load( 'images', 'cuidadosVeterinarios', 'temperamentos', 'viveBemEm', 'sociavelCom');


        if ($pet) {
            return response()->json($pet);
        } else {
            return response()->json(['error' => 'Pet not found'], 404);
        }
    }

    public function update(Request $request, int $id)
    {
        $pet = Pet::find($id);

        $pet->update($request->all());

        $cuidadosVeterinarios = $request->input('cuidados_veterinarios');

        if (is_array($cuidadosVeterinarios) && count($cuidadosVeterinarios) > 0) {
            $pet->cuidadosVeterinarios()->sync($cuidadosVeterinarios);
        }

        $temperamentos = $request->input('temperamentos');

        if (is_array($temperamentos) && count($temperamentos) > 0) {
            $pet->temperamentos()->sync($temperamentos);
        }

        $viveBemEm = $request->input('vive_bem_em');

        if (is_array($viveBemEm) && count($viveBemEm) > 0) {
            $pet->viveBemEms()->sync($viveBemEm);
        }

        $sociavelCom = $request->input('sociavel_com');

        if (is_array($sociavelCom) && count($sociavelCom) > 0) {
            $pet->sociavelCom()->sync($sociavelCom);
        }

        return response()->json($pet);
    }


    public function destroy(int $id)
    {
        $pet = Pet::find($id);
        $pet->images()->detach();
        $pet->cuidadosVeterinarios()->detach();
        $pet->temperamentos()->detach();
        $pet->viveBemEm()->detach();
        $pet->sociavelCom()->detach();
        $pet->delete();

        return response()->noContent();
    }
}
