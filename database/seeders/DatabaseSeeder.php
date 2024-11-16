<?php

namespace Database\Seeders;

use App\Models\Grade;
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
                'code' => 'AB' . str_pad(1, 3, '0', STR_PAD_LEFT),
                'username' => 'member1',
                'address' => 'Jl. Member 1',
            ],
            [
                'name' => 'Member 2',
                'email' => 'member2@gmail.com',
                'password' => bcrypt('password'),
                'nis' => '1234567891',
                'code' => 'AB' . str_pad(2, 3, '0', STR_PAD_LEFT),
                'username' => 'member2',
                'address' => 'Jl. Member 2',
            ],
        ];



        $this->call([
            GradeSeeder::class,
            PublisherSeeder::class,
            CategorySeeder::class,
            BookSeeder::class,
            UserSeeder::class,
        ]);

        foreach ($users as $user) {
            $user['grade_id'] = Grade::all()->random()->id;

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
    }
}
