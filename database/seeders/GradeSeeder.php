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
        // 1A D4 Adminisistrasi Bisnis
        // 1B D4 Adminisistrasi Bisnis
        // 1C D4 Adminisistrasi Bisnis
        // 1D D4 Adminisistrasi Bisnis
        // 1E D4 Adminisistrasi Bisnis

        // 1A D3 Adminisistrasi Bisnis
        // 1B D3 Adminisistrasi Bisnis
        // 1C D3 Adminisistrasi Bisnis
        // 1D D3 Adminisistrasi Bisnis
        // 1E D3 Adminisistrasi Bisnis

        // 1A D4 Administrasi Perkantoran Digital
        // 1B D4 Administrasi Perkantoran Digital
        // 1C D4 Administrasi Perkantoran Digital
        // 1D D4 Administrasi Perkantoran Digital
        // 1E D4 Administrasi Perkantoran Digital

        // 1A D4 Bispro
        // 1B D4 Bispro
        // 1C D4 Bispro
        // 1D D4 Bispro
        // 1E D4 Bispro

        // S2 Pemasaran Inovasi dan Teknologi

        $grades = [
            ['name' => '1A D4 Administrasi Bisnis'],
            ['name' => '1B D4 Administrasi Bisnis'],
            ['name' => '1C D4 Administrasi Bisnis'],
            ['name' => '1D D4 Administrasi Bisnis'],
            ['name' => '1E D4 Administrasi Bisnis'],

            ['name' => '1A D3 Administrasi Bisnis'],
            ['name' => '1B D3 Administrasi Bisnis'],
            ['name' => '1C D3 Administrasi Bisnis'],
            ['name' => '1D D3 Administrasi Bisnis'],
            ['name' => '1E D3 Administrasi Bisnis'],

            ['name' => '1A D4 Administrasi Perkantoran Digital'],
            ['name' => '1B D4 Administrasi Perkantoran Digital'],
            ['name' => '1C D4 Administrasi Perkantoran Digital'],
            ['name' => '1D D4 Administrasi Perkantoran Digital'],
            ['name' => '1E D4 Administrasi Perkantoran Digital'],

            ['name' => '1A D4 Bispro'],
            ['name' => '1B D4 Bispro'],
            ['name' => '1C D4 Bispro'],
            ['name' => '1D D4 Bispro'],
            ['name' => '1E D4 Bispro'],

            ['name' => 'S2 Pemasaran Inovasi dan Teknologi'],
        ];

        foreach ($grades as $grade) {
            \App\Models\Grade::create($grade);
        }
    }
}
