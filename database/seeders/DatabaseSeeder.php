<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $users = [
            [
                'name' => 'Member 1',
                'email' => 'member@gmail.com',
                'password' => bcrypt('password'),
                'nis' => '1234567890',
                'code' => 'M001',
                'username' => 'member1',
                'address' => 'Jl. Member 1',
            ],
            [
                'name' => 'Member 2',
                'email' => 'member2@gmail.com',
                'password' => bcrypt('password'),
                'nis' => '1234567891',
                'code' => 'M002',
                'username' => 'member2',
                'address' => 'Jl. Member 2',
            ],
        ];

        foreach ($users as $user) {
            User::create($user);
        }

        User::factory()->create([
            'name' => 'Super Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('password'),
            'role' => 'super admin',
        ]);

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
            'role' => 'admin',
        ]);

        $this->call([
            PublisherSeeder::class,
            CategorySeeder::class,
            BookSeeder::class,
            UserSeeder::class,
            GradeSeeder::class,
        ]);
    }
}
