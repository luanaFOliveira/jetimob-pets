<?php

namespace App\Http\Filters;

class SpecieFilter{

    function __invoke($query, $value)
    {
        return $query->whereHas('specie', function ($query) use ($value) {
            $query->where('name', $value);
        });
    }
}