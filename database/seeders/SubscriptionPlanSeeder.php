<?php

namespace Database\Seeders;

use App\Models\SubscriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subscriptionPlans = [
            [
                'name' => 'Basic',
                'price' => 190000,
                'active_period_in_month' => 30,
                'features' => json_encode(['HD Streaming', '1 Devices']),
            ],
            [
                'name' => 'Standard',
                'price' => 290000,
                'active_period_in_month' => 30,
                'features' => json_encode(['HD Streaming', '2 Devices', 'Offline Download']),
            ],
            [
                'name' => 'Premium',
                'price' => 390000,
                'active_period_in_month' => 30,
                'features' => json_encode(['FHD Streaming', '4 Devices', 'Offline Download']),
            ],
        ];
        SubscriptionPlan::insert($subscriptionPlans);        
    }
}
