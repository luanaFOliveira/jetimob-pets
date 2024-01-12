<?php

namespace App\Services;

use App\Http\Requests\StoreAnimalRequest;
use App\Models\Animal;
use App\Models\Image;

class AnimalService{
    
    public function __construct(
        private readonly ImageService $imageService
    )
    {
    }

    public function upsertAnimal(StoreAnimalRequest $request, ?Animal $animal = null): Animal
    {
        return \DB::transaction(function () use ($request, $animal) {
            if ($animal === null) {
                return $this->createAnimal($request);
            }

            return $this->updateAnimal($request, $animal);
        });
    }

    private function updateAnimal(StoreAnimalRequest $request, Animal $animal): Animal
    {
        $animal->update($request->validated());
        return $animal;
    }

    private function createAnimal(StoreAnimalRequest $request): Animal
    {
        return Animal::create(
            $request->validated(),
        );
    }

    public function deleteAnimal(Animal $animal): void
    {
        \DB::transaction(function () use ($animal) {
            $animal->images()->detach(); 

            foreach ($animal->images as $image) {
                $this->imageService->delete($image);
            }

            $animal->delete();
        });
    }

    public function attachImages(array $imageIds, Animal $animal): Animal
    {
        return \DB::transaction(function () use ($imageIds, $animal) {
            foreach ($imageIds as $imageId) {
                $image = Image::find($imageId);

                if ($image) {
                    $animal->images()->save($image);
                }
            }

            return $animal;
        });
    }

    
}
