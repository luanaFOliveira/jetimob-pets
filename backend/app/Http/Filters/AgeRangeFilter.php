<?php

namespace App\Http\Filters;

class AgeRangeFilter{

    function __invoke($query, $value)
    {
        return $query->whereHas('age_range', function ($query) use ($value) {
            $query->where('name', $value);
        });
    }
}