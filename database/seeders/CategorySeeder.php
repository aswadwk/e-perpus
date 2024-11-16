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
        $categories = [
            [
                'code' => 'KT-001',
                'name' => 'Novel'
            ],
            [
                'code' => 'KT-002',
                'name' => 'Cerpen'
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
            [
                'code' => 'KT-011',
                'name' => 'Komik'
            ],
            [
                'code' => 'KT-012',
                'name' => 'Puisi'
            ],
            [
                'code' => 'KT-013',
                'name' => 'Dongeng'
            ],
            [
                'code' => 'KT-014',
                'name' => 'Fiksi'
            ],
            [
                'code' => 'KT-015',
                'name' => 'Non Fiksi'
            ],
            [
                'code' => 'KT-016',
                'name' => 'Kamus'
            ],
            [
                'code' => 'KT-017',
                'name' => 'Buku Anak'
            ],
            [
                'code' => 'KT-018',
                'name' => 'Buku Remaja'
            ],
            [
                'code' => 'KT-019',
                'name' => 'Buku Dewasa'
            ],
            [
                'code' => 'KT-020',
                'name' => 'Buku Pelajaran'
            ],
            [
                'code' => 'KT-021',
                'name' => 'Buku Agama'
            ],
            [
                'code' => 'KT-022',
                'name' => 'Buku Hukum'
            ],
            [
                'code' => 'KT-023',
                'name' => 'Buku Ekonomi'
            ],
            [
                'code' => 'KT-024',
                'name' => 'Buku Politik'
            ],
            [
                'code' => 'KT-025',
                'name' => 'Buku Sejarah'
            ],
            [
                'code' => 'KT-026',
                'name' => 'Buku Sosial'
            ],
            [
                'code' => 'KT-027',
                'name' => 'Buku Teknologi'
            ],
            [
                'code' => 'KT-028',
                'name' => 'Buku Seni'
            ],
            [
                'code' => 'KT-029',
                'name' => 'Buku Budaya'
            ],
            [
                'code' => 'KT-030',
                'name' => 'Buku Alam'
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }

        // Category::factory(10)->create();
    }
}
