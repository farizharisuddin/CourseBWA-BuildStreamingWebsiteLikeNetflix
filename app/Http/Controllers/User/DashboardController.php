<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $feturedMovies = Movie::whereisFeatured(true)
            ->orderBy('created_at', 'desc')
            ->take(3)
            ->get();
        $movies = Movie::orderBy('created_at', 'desc')
            ->take(10)
            ->get();
        return Inertia::render('User/Index', [
            'feturedMovies' => $feturedMovies,
            'movies' => $movies,
        ]);
    }
}
