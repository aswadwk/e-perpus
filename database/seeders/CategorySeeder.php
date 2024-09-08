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
        // array('id_kategori' => '1','kode_kategori' => 'KT-001','nama_kategori' => 'Novel '),
        // array('id_kategori' => '2','kode_kategori' => 'KT-002','nama_kategori' => 'Cergam'),
        // array('id_kategori' => '3','kode_kategori' => 'KT-003','nama_kategori' => 'Ensiklopedi'),
        // array('id_kategori' => '4','kode_kategori' => 'KT-004','nama_kategori' => 'Biografi'),
        // array('id_kategori' => '5','kode_kategori' => 'KT-005','nama_kategori' => 'Catatan Harian'),
        // array('id_kategori' => '6','kode_kategori' => 'KT-006','nama_kategori' => 'Karya Ilmiah'),
        // array('id_kategori' => '7','kode_kategori' => 'KT-007','nama_kategori' => 'Tafsir'),
        // array('id_kategori' => '8','kode_kategori' => 'KT-008','nama_kategori' => 'Panduan (how to)'),
        // array('id_kategori' => '9','kode_kategori' => 'KT-009','nama_kategori' => 'Majalah'),
        // array('id_kategori' => '10','kode_kategori' => 'KT-010','nama_kategori' => 'Antologi')

        $categories = [
            [
                'code' => 'KT-001',
                'name' => 'Novel'
            ],
            [
                'code' => 'KT-002',
                'name' => 'Cergam'
            ],
            [
                'code' => 'KT-003',
                'name' => 'Ensiklopedi'
            ],
            [
                'code' => 'KT-004',
                'name' => 'Biografi'
            ],
            [
                'code' => 'KT-005',
                'name' => 'Catatan Harian'
            ],
            [
                'code' => 'KT-006',
                'name' => 'Karya Ilmiah'
            ],
            [
                'code' => 'KT-007',
                'name' => 'Tafsir'
            ],
            [
                'code' => 'KT-008',
                'name' => 'Panduan (how to)'
            ],
            [
                'code' => 'KT-009',
                'name' => 'Majalah'
            ],
            [
                'code' => 'KT-010',
                'name' => 'Antologi'
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
