<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ResetDataSeeder extends Seeder
{
    public function run()
    {
        foreach (['pets', 'cuidados_veterinarios', 'temperamentos', 'vive_bem_em', 'sociavel_com'] as $table) {
            DB::table($table)->truncate();
        }
    }
}
