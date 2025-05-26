<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies =[
            [
                'name' => 'Inception',
                'slug' => 'inception',
                'category' => 'Sci-Fi',
                'video_url' => 'https://example.com/videos/inception.mp4',
                'thumbnail' => 'https://example.com/images/inception.jpg',
                'rating' => 8.8,
                'is_featured' => true,
            ],
            [
                'name' => 'The Dark Knight',
                'slug' => 'the-dark-knight',
                'category' => 'Action',
                'video_url' => 'https://example.com/videos/the-dark-knight.mp4',
                'thumbnail' => 'https://example.com/images/the-dark-knight.jpg',
                'rating' => 9.0,
                'is_featured' => true,
            ],
            [
                'name' => 'Interstellar',
                'slug' => 'interstellar',
                'category' => 'Sci-Fi',
                'video_url' => 'https://example.com/videos/interstellar.mp4',
                'thumbnail' => 'https://example.com/images/interstellar.jpg',
                'rating' => 8.6,
                'is_featured' => false,
            ],
        ];
        Movie::insert($movies);
    }
}
