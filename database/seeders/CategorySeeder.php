<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $categories = [
        //     [
        //         'code' => 'KT-001',
        //         'name' => 'Novel'
        //     ],
        //     [
        //         'code' => 'KT-002',
        //         'name' => 'Cergam'
        //     ],
        //     [
        //         'code' => 'KT-003',
        //         'name' => 'Ensiklopedi'
        //     ],
        //     [
        //         'code' => 'KT-004',
        //         'name' => 'Biografi'
        //     ],
        //     [
        //         'code' => 'KT-005',
        //         'name' => 'Catatan Harian'
        //     ],
        //     [
        //         'code' => 'KT-006',
        //         'name' => 'Karya Ilmiah'
        //     ],
        //     [
        //         'code' => 'KT-007',
        //         'name' => 'Tafsir'
        //     ],
        //     [
        //         'code' => 'KT-008',
        //         'name' => 'Panduan (how to)'
        //     ],
        //     [
        //         'code' => 'KT-009',
        //         'name' => 'Majalah'
        //     ],
        //     [
        //         'code' => 'KT-010',
        //         'name' => 'Antologi'
        //     ],
        // ];

        // foreach ($categories as $category) {
        //     Category::create($category);
        // }

        Category::factory(10)->create();
    }
}
