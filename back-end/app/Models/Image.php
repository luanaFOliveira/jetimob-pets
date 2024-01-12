<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Animal;

class Image extends Model
{
    protected $table = 'images';
    use HasFactory;

    protected $fillable = [
        'animal_id', 'name', 'file_name', 'extension', 'size', 'mime_type',
        'file_path', 'file_hash', 'disk',
    ];

    public function animal()
    {
        return $this->belongsTo(Animal::class);
    }
}
