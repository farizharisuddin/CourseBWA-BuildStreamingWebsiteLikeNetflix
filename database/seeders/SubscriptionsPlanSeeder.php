<?php

namespace Database\Seeders;

use App\Models\SubscriptionsPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionsPlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionsPlans = [
            [
                'name' => 'Basic',
                'price' => 190000,
                'active_period_in_month' => 30,
                'features' => json_encode(['HD Streaming 1', '2 Devices', 'Offline Download']),
            ],
            [
                'name' => 'Standard',
                'price' => 290000,
                'active_period_in_month' => 30,
                'features' => json_encode(['HD Streaming 1', '2 Devices', 'Offline Download']),
            ],
            [
                'name' => 'Premium',
                'price' => 390000,
                'active_period_in_month' => 30,
                'features' => json_encode(['HD Streaming 1', '2 Devices', 'Offline Download']),
            ],
        ];
        SubscriptionsPlan::insert($subscriptionsPlans);        
    }
}
