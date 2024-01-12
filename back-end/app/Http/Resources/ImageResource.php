<?php

namespace App\Http\Resources;

use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ImageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'animal_id' => $this->animal_id,
            'name' => $this->name,
            'file_name' => $this->file_name,
            'extension' => $this->extension,
            'size' => $this->size,
            'mime_type' => $this->mime_type,
            'file_path' => $this->file_path,
            'file_hash' => $this->file_hash,
            'disk' => $this->disk,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
