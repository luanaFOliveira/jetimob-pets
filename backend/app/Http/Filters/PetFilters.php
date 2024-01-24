<?php

namespace App\Http\Filters;

class PetFilters{

    protected $filters = [
        'specie' => SpecieFilter::class,
        'sex' => SexFilter::class,
        'size' => SizeFilter::class,
        'age_range' => AgeRangeFilter::class,
    ];
}