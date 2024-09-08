<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
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

        $books = [
            [
                'title' => 'Bumi Manusia',
                'author' => 'Pramoedya Ananta Toer',
                'publisher_id' => 1,
                'category_id' => 1,
                'stock' => 10,
                'price' => 100000,
                'isbn' => '978-979-403-757-2',
                'year_published' => '1980',
                'slug' => 'bumi-manusia'
            ],
            [
                'title' => 'Laskar Pelangi',
                'author' => 'Andrea Hirata',
                'publisher_id' => 2,
                'category_id' => 1,
                'stock' => 10,
                'price' => 100000,
                'isbn' => '978-979-3069-50-5',
                'year_published' => '2005',
                'slug' => 'laskar-pelangi'
            ],
            [
                'title' => 'Dilan 1990',
                'author' => 'Pidi Baiq',
                'publisher_id' => 3,
                'category_id' => 1,
                'stock' => 10,
                'price' => 100000,
                'isbn' => '978-602-424-152-4',
                'year_published' => '2014',
                'slug' => 'dilan-1990'
            ],
            [
                'title' => 'Doraemon',
                'author' => 'Fujiko F. Fujio',
                'publisher_id' => 4,
                'category_id' => 2,
                'stock' => 10,
                'price' => 100000,
                'isbn' => '978-4-09-143134-3',
                'year_published' => '1969',
                'slug' => 'doraemon'
            ],
            [
                'title' => 'One Piece',
                'author' => 'Eiichiro Oda',
                'publisher_id' => 5,
                'category_id' => 2,
                'stock' => 10,
                'price' => 100000,
                'isbn' => '978-4-08-872509-3',
                'year_published' => '1997',
                'slug' => 'one-piece'
            ],
            [
                'title' => 'Naruto',
                'author' => 'Masashi Kishimoto',
                'publisher_id' => 1,
                'category_id' => 2,
                'stock' => 10,
                'price' => 100000,
                'isbn' => '978-4-08-873621-1',
                'year_published' => '1999',
                'slug' => 'naruto',
            ],
            [
                'title' => 'Ensiklopedi Indonesia',
                'author' => 'Tim Ensiklopedi Indonesia',
                'publisher_id' => 2,
                'category_id' => 3,
                'stock' => 10,
                'price' => 100000,
                'isbn' => '978-979-403-757-0',
                'year_published' => '2000',
                'slug' => 'ensiklopedi-indonesia',
            ],
            [
                'title' => 'Ensiklopedi Islam',
                'author' => 'Tim Ensiklopedi Islam',
                'publisher_id' => 3,
                'category_id' => 3,
                'stock' => 10,
                'price' => 100000,
                'isbn' => '978-979-403-757-3',
                'year_published' => '2020',
                'slug' => 'ensiklopedi-islam',
            ],
            [
                'title' => 'Biografi B.J. Habibie',
                'author' => 'Tim Biografi B.J. Habibie',
                'publisher_id' => 4,
                'category_id' => 4,
                'stock' => 20,
                'price' => 200000,
                'isbn' => '978-979-403-757-4',
                'year_published' => '2020',
                'slug' => 'biografi-bj-habibie',
            ]
        ];

        foreach ($books as $book) {
            Book::create($book);
        }
    }
}
