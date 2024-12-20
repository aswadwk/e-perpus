<?php

namespace Database\Factories;

use App\Models\Grade;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    protected $count = 1;

    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // 'name' => 'Member 1',
        // 'email' => 'member@gmail.com',
        // 'password' => bcrypt('password'),
        // 'nis' => '1234567890',
        // 'code' => 'M001',
        // 'username' => 'member1',
        // 'address' => 'Jl. Member 1',

        return [
            'name'              => fake()->name(),
            'email'             => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'nis'               => fake()->unique()->numerify('##########'),
            'code'           => 'ARB' . str_pad($this->count++, 3, '0', STR_PAD_LEFT),
            'username'       => fake()->userName(),
            'grade_id'       => Grade::all()->random()->id,
            'address'        => fake()->address(),
            'password'       => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
