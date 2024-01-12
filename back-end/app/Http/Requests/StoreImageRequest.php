<?php

use Illuminate\Validation\Rule;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\UploadedFile;

class StoreImageRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $animalId = $this->route('animal_id');

        return [
            'image' => [
                'nullable',
                Rule::file()->max('10mb'),
            ],
            'animal_id' => ['required', 'exists:animais,id'], 
        ];
    }

    public function getUploadedImage(int $animalId): ?UploadedFile
    {
        return $this->file('image');
    }
}
