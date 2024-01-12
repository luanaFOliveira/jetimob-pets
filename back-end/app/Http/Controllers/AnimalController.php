<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAnimalRequest;
use App\Http\Resources\AnimalDetailedResource;
use App\Http\Resources\AnimalResource;
use App\Models\Animal;
use App\Services\AnimalService;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Response;

class AnimalController extends Controller
{

    public function __construct(
        protected readonly AnimalService $animalService
    )
    {
    }

    public function index():ResourceCollection
    {
        return AnimalResource::collection(
            Animal::orderBy('id')->paginate()
        );
    }

    public function show(Animal $animal):JsonResource
    {
        return AnimalDetailedResource::make($animal);
    }

    public function store(StoreAnimalRequest $request):JsonResource
    {
        return AnimalDetailedResource::make(
            $this->animalService->upsertAnimal($request)
        );
    }

    
    public function update(StoreAnimalRequest $request, Animal $animal):JsonResource
    {
        return AnimalDetailedResource::make(
            $this->animalService->upsertAnimal($request,$animal)
        );
    }

    public function destroy(Animal $animal):Response
    {
        $this->animalService->deleteAnimal($animal);
        return response()->noContent();
    }

}
