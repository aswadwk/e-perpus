<?php

namespace Database\Seeders;

use App\Models\Publisher;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PublisherSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // $publisher = [
        //     ['code' => 'RB001', 'name' => 'Gramedia Pustaka Utama', 'is_verified' => true],
        //     ['code' => 'RB002', 'name' => 'Mizan Pustaka', 'is_verified' => true],
        //     ['code' => 'RB003', 'name' => 'Bentang Pustaka', 'is_verified' => true],
        //     ['code' => 'RB004', 'name' => 'Erlangga', 'is_verified' => true],
        //     ['code' => 'RB005', 'name' => 'Republika', 'is_verified' => true]
        // ];

        // foreach ($publisher as $publisher) {
        //     Publisher::create($publisher);
        // }

        Publisher::factory(5)->create();
    }
}
