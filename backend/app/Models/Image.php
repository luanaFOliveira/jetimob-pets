<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Http\UploadedFile;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Image extends Model
{
    protected $table = 'images';
    use HasFactory;

    protected $fillable = [
        'pet_id',
        'name',
        'file_name',
        'extension',
        'size',
        'mime_type',
        'file_path',
        'file_hash',
        'disk',
    ];

    public function pet(): BelongsTo
    {
        return $this->belongsTo(Pet::class);
    }

    public function files(): array
    {
        return $this->hasMany(UploadedFile::class)->get();
    }
}
