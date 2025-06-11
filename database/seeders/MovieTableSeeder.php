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
                'video_url' => 'youtube.com/watch?v=YoHD9XEInc0',
                'thumbnail' => 'https://picsum.photos/id/1/200/300',
                'rating' => 3.8,
                'is_featured' => true,
            ],
            [
                'name' => 'The Dark Knight',
                'slug' => 'the-dark-knight',
                'category' => 'Action',
                'video_url' => 'youtube.com/watch?v=YoHD9XEInc0',
                'thumbnail' => 'https://picsum.photos/id/42/200/300',
                'rating' => 4.0,
                'is_featured' => true,
            ],
            [
                'name' => 'Interstellar',
                'slug' => 'interstellar',
                'category' => 'Sci-Fi',
                'video_url' => 'youtube.com/watch?v=YoHD9XEInc0',
                'thumbnail' => 'https://picsum.photos/id/48/200/300',
                'rating' => 3.6,
                'is_featured' => false,
            ],
        ];
        Movie::insert($movies);
    }
}
