<?php

namespace App\Services;

use App\Models\Image;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class ImageService{

    public function hashFile(UploadedFile $uploadedFile): string
    {
        return hash_file('sha256', $uploadedFile->getRealPath());
    }

    public function store(UploadedFile $uploadedFile, int $animalId, string $folder = 'images'): Image
    {
        $name = $uploadedFile->hashName();
        $disk = config('filesystems.default');

        if (app()->runningUnitTests()) {
            $name = 'temp-' . $name;
        }

        $filePath = Storage::disk($disk)->putFileAs($folder, $uploadedFile, $name, 'public');

        $image = new Image();
        $image->name = $uploadedFile->getClientOriginalName();
        $image->file_name = $name;
        $image->extension = $uploadedFile->getClientOriginalExtension();
        $image->size = $uploadedFile->getSize();
        $image->mime_type = $uploadedFile->getMimeType();
        $image->file_path = $filePath;
        $image->file_hash = $this->hashFile($uploadedFile);
        $image->disk = $disk;
        $image->animal_id = $animalId; 
        $image->save();

        return $image;
    }

    public function delete(Image $image): void
    {
        Storage::disk($image->disk)->delete($image->file_path);
        $image->delete();
    }

    public function isSameFile(Image $image, UploadedFile $uploadedFile): bool
    {
        return $image->file_hash === $this->hashFile($uploadedFile);
    }
}