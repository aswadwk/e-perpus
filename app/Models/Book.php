<?php

namespace App\Models;

use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Book extends Model
{
    use HasFactory, SoftDeletes, Timestamp;

    protected $fillable = [
        'isbn',
        'title',
        'author',
        'publisher_id',
        'category_id',
        'stock',
        'price',
        'description',
        'cover',
        'year_published',
        'slug',
        'genre',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function publisher()
    {
        return $this->belongsTo(Publisher::class);
    }
}
