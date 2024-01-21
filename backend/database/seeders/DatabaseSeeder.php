<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call('TempersSeeder');
        $this->call('AgeRangeSeeder');
        $this->call('LiveWellInSeeder');
        $this->call('SexSeeder');
        $this->call('SizeSeeder');
        $this->call('SociableWithSeeder');
        $this->call('SpecieSeeder');
        $this->call('VeterinaryCareSeeder');

    }
}
