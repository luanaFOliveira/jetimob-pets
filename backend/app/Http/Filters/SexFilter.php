<?php

namespace App\Http\Filters;

class SexFilter{

    function __invoke($query, $value)
    {
        return $query->whereHas('sex', function ($query) use ($value) {
            $query->where('name', $value);
        });
    }
}

