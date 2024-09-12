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
        $faker = \Faker\Factory::create();

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
                'slug' => 'bumi-manusia',
                'cover' => $faker->imageUrl(640, 480, 'books'),
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
                'slug' => 'laskar-pelangi',
                'cover' => $faker->imageUrl(640, 480, 'books'),
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
                'slug' => 'dilan-1990',
                'cover' => $faker->imageUrl(640, 480, 'books'),
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
                'slug' => 'doraemon',
                'cover' => $faker->imageUrl(640, 480, 'books'),
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
                'slug' => 'one-piece',
                'cover' => $faker->imageUrl(640, 480, 'books'),
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
                'cover' => $faker->imageUrl(640, 480, 'books'),
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
                'cover' => $faker->imageUrl(640, 480, 'books'),
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
                'cover' => $faker->imageUrl(640, 480, 'books'),
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
                'cover' => $faker->imageUrl(640, 480, 'books'),
            ]
        ];

        foreach ($books as $book) {
            Book::create($book);
        }
    }
}
