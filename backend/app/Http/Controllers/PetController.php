<?php

namespace App\Http\Controllers;

use App\Http\Resources\PetCardResource;
use App\Models\AgeRange;
use App\Models\Sex;
use App\Models\Size;
use App\Models\Specie;
use App\Models\VeterinaryCare;
use App\Models\Pet;

use App\Models\Image;
use App\Models\SociableWith;
use App\Models\Temper;
use App\Models\LiveWellIn;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class PetController extends Controller
{
    public function index()
    {
        $pets = Pet::with('images')->orderBy('pet_id')->paginate(8);
        return response()->json($pets);
    }

    public function showCard(): ResourceCollection
    {
        return PetCardResource::collection(
            Pet::with('images')->orderBy('pet_id')->paginate(8)
        );
    }

    //funcao pra madnar soh as info pro card, images e nome

    public function store(Request $request)
    {

        $specie = Specie::firstOrCreate(['name' => $request->input('specie')]);
        $sex = Sex::firstOrCreate(['name' => $request->input('sex')]);
        $size = Size::firstOrCreate(['name' => $request->input('size')]);
        $ageRange = AgeRange::firstOrCreate(['name' => $request->input('age_range')]);

        $pet = Pet::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'specie_id' => $specie->id, 
            'sex_id' => $sex->id, 
            'size_id' => $size->id, 
            'age_range_id' => $ageRange->id, 
        ]);

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


        $veterinaryCare = $request->input('veterinary_care');

        if (is_array($veterinaryCare) && count($veterinaryCare) > 0) {
            foreach ($veterinaryCare as $veterinaryCareId) {
                $veterinaryCare = VeterinaryCare::find($veterinaryCareId);

                $pet->veterinaryCare()->attach($veterinaryCare, ['pet_id' => $pet->id]);
            }
        }

        $tempers = $request->input('tempers');

        if (is_array($tempers) && count($tempers) > 0) {
            foreach ($tempers as $temperId) {
                $temper = Temper::find($temperId);

                $pet->tempers()->attach($temper, ['pet_id' => $pet->id]);
            }
        }

        $liveWellIn = $request->input('live_well_in');

        if (is_array($liveWellIn) && count($liveWellIn) > 0) {
            foreach ($liveWellIn as $liveWellInId) {
                $liveWellIn = LiveWellIn::find($liveWellInId);

                $pet->liveWellIn()->attach($liveWellIn, ['pet_id' => $pet->id]);
            }
        }

        $sociableWith = $request->input('sociable_with');

        if (is_array($sociableWith) && count($sociableWith) > 0) {
            foreach ($sociableWith as $sociableWithId) {
                $sociableWith = SociableWith::find($sociableWithId);

                $pet->sociableWith()->attach($sociableWith, ['pet_id' => $pet->id]);
            }
        }

        return $pet->load('images','specie', 'sex', 'size', 'ageRange', 'veterinaryCare', 'tempers', 'liveWellIn', 'sociableWith');
    }

    public function show(int $id)
    {
        $pet = Pet::find($id);

        $pet->load( 'images','specie', 'sex', 'size', 'ageRange', 'veterinaryCare', 'tempers', 'liveWellIn', 'sociableWith');

        if ($pet) {
            return response()->json($pet);
        } else {
            return response()->json(['error' => 'Pet not found'], 404);
        }
    }

    public function update(Request $request, int $id)
    {
        $pet = Pet::find($id);

        $specie = Specie::firstOrCreate(['name' => $request->input('specie')]);
        $sex = Sex::firstOrCreate(['name' => $request->input('sex')]);
        $size = Size::firstOrCreate(['name' => $request->input('size')]);
        $ageRange = AgeRange::firstOrCreate(['name' => $request->input('age_range')]);

        $pet->update([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'specie_id' => $specie->id, 
            'sex_id' => $sex->id, 
            'size_id' => $size->id, 
            'age_range_id' => $ageRange->id, 
        ]);

        $veterinaryCare = $request->input('veterinary_care');

        if (is_array($veterinaryCare) && count($veterinaryCare) > 0) {
            $pet->veterinaryCare()->sync($veterinaryCare);
        }

        $tempers = $request->input('tempers');

        if (is_array($tempers) && count($tempers) > 0) {
            $pet->tempers()->sync($tempers);
        }

        $liveWellIn = $request->input('live_well_in');

        if (is_array($liveWellIn) && count($liveWellIn) > 0) {
            $pet->liveWellIn()->sync($liveWellIn);
        }

        $sociableWith = $request->input('sociable_with');

        if (is_array($sociableWith) && count($sociableWith) > 0) {
            $pet->sociableWith()->sync($sociableWith);
        }

        return response()->json($pet);
    }


    public function destroy(int $id)
    {
        $pet = Pet::find($id);
        $pet->images()->detach();
        $pet->specie()->dissociate();
        $pet->sex()->dissociate();
        $pet->size()->dissociate();
        $pet->ageRange()->dissociate();
        $pet->veterinary_care()->detach();
        $pet->tempers()->detach();
        $pet->liveWellIn()->detach();
        $pet->sociablewith()->detach();
        
        $pet->delete();

        return response()->noContent();
    }
}
