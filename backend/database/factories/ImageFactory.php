<?php

namespace Database\Factories;

use App\Models\Image;
use App\Models\Pet;
use Illuminate\Database\Eloquent\Factories\Factory;

class ImageFactory extends Factory
{
    protected $model = Image::class;

    public function definition()
    {

        return [
            'pet_id' => Pet::factory(),
            'name' => "cachorro-mini-pet.jpg",
            'file_name' => "php1972.tmp",
            'extension' => "jpg",
            'size' => 26011,
            'mime_type' => "image/jpeg",
            'file_path' => "images/LA7fk9lXsHs71vfak3s2nOd1xK6uEOynTC0LyVU5.jpg",
            'file_hash' => "LA7fk9lXsHs71vfak3s2nOd1xK6uEOynTC0LyVU5.jpg",
            'disk' => "local",
        ];
    }
}