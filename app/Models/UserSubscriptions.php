<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class UserSubscriptions extends Model
{
    use HasFactory, SoftDeletes;
    protected $guarded = [];

    /**
     * Get the subscriptionsPlan that owns the UserSubscriptions
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function subscriptionsPlan(): BelongsTo
    {
        return $this->belongsTo(SubscriptionsPlan::class);
    }
}
