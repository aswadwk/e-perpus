<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('author');
            $table->foreignId('category_id')->constrained()
                ->onDelete('cascade');
            $table->foreignId('publisher_id')->constrained()
                ->onDelete('cascade');

            $table->string('isbn');
            $table->string('cover')->nullable();
            $table->string('year_published');
            $table->integer('stock')->default(0);
            $table->integer('price')->default(0);
            $table->text('description')->nullable();
            $table->string('status')->default('available'); // available, unavailable
            $table->string('slug');
            $table->integer('views')->default(0);
            $table->integer('likes')->default(0);
            $table->integer('dislikes')->default(0);
            $table->integer('rating')->default(0);
            $table->integer('borrowed')->default(0);
            $table->string('genre', 30)
                ->nullable()
                ->index();

            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
