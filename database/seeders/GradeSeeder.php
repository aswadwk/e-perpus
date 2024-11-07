<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $grades = [
            ['name' => '1A', 'description' => 'Kelas 1A'],
            ['name' => '1B', 'description' => 'Kelas 1B'],
            ['name' => '1C', 'description' => 'Kelas 1C'],
            ['name' => '2A', 'description' => 'Kelas 2A'],
            ['name' => '2B', 'description' => 'Kelas 2B'],
            ['name' => '2C', 'description' => 'Kelas 2C'],
            ['name' => '3A', 'description' => 'Kelas 3A'],
            ['name' => '3B', 'description' => 'Kelas 3B'],
            ['name' => '3C', 'description' => 'Kelas 3C'],
        ];

        foreach ($grades as $grade) {
            \App\Models\Grade::create($grade);
        }
    }
}
