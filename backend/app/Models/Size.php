<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;

class Size extends Model
{
    protected $table = 'sizes';
    protected $primaryKey = 'size_id';

    use HasFactory;
    use SoftDeletes;
    public $timestamps = false;
    protected $fillable = [
        'name',
    ];

    public function pets()
    {
        return $this->hasMany(Pet::class, 'size_id', 'size_id');
    }
}
