<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\User\DashboardController;
use App\Http\Controllers\User\MovieController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::middleware(['role:admin'])->group(function () {
//     Route::get('/admin/dashboard', function () {
//         return 'Admin Dashboard';
//     })->name('admin.dashboard');
// });

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->group(function () {
    //Dashboard
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    //Movies
    Route::get('/movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show');
    //Profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::redirect('/', '/login');

Route::prefix('custom')->group(function () {
    Route::get('/login', function () {
        return Inertia::render('Prototype/Login');
    })->name('custom.login');
    Route::get('/register', function () {
        return Inertia::render('Prototype/Register');
    })->name('custom.register');

    Route::get('/dashboard', function () {
        return Inertia::render('Prototype/Dashboard');
    })->name('custom.dashboard');
    Route::get('/subscriptions-payments', function () {
        return Inertia::render('Prototype/SubscriptionsPayments');
    })->name('custom.subscriptions-payments');
    //details movie
    Route::get('/movie/{slug}', function () {
        return Inertia::render('Prototype/Movie/Show');
    })->name('custom.movie-show');
});

require __DIR__ . '/auth.php';
