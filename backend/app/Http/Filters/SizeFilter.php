<?php

namespace App\Http\Filters;

class SizeFilter{

    function __invoke($query, $value)
    {
        return $query->whereHas('size', function ($query) use ($value) {
            $query->where('name', $value);
        });
    }
}