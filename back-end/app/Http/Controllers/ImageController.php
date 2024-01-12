<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreImageRequest;
use App\Http\Resources\ImageResource;
use App\Models\Animal;
use App\Models\Image;
use App\Services\ImageService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Http\Response;

class ImageController extends Controller
{
    protected $imageService;

    public function __construct(ImageService $imageService)
    {
        $this->imageService = $imageService;
    }

    public function index(): ResourceCollection
    {
        return ImageResource::collection(
            Image::orderBy('id')->paginate()
        );
    }

    public function show(Image $image): JsonResource
    {
        return ImageResource::make($image);
    }

    public function store(StoreImageRequest $request, Animal $animal): JsonResource
    {
        return ImageResource::make(
            $this->imageService->store($request->getUploadedImage(), $animal->id)
        );
    }

    
    public function destroy(Image $image): Response
    {
        $this->imageService->delete($image);
        return response()->noContent();
    }
}