<?php

namespace Database\Factories;

use App\Models\Category;
use App\Models\Publisher;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class BookFactory extends Factory
{
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
        return [
            'title' => fake()->sentence(5),
            'author' => fake()->name(),
            'stock' => fake()->numberBetween(1, 100),
            'price' => fake()->numberBetween(10000, 100000),
            'isbn' => fake()->isbn13(),
            'year_published' => fake()->year(),
            'slug' => fake()->slug(),
            'cover' => fake()->imageUrl(640, 480, 'books'),
            'genre' => fake()->randomElement(['Komik', 'Ensiklopedia', 'Biografi', 'Novel', 'Pendidikan', 'Agama', 'Sejarah', 'Teknologi', 'Kesehatan', 'Olahraga']),
            'publisher_id' => Publisher::all()->random()->id,
            'category_id' => Category::all()->random()->id,
        ];
    }
}
