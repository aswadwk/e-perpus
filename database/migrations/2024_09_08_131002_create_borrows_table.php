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
        Schema::create('borrows', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()
                ->onDelete('cascade');
            $table->foreignId('book_id')->constrained()
                ->onDelete('cascade');
            $table->date('borrow_date');
            $table->date('return_date');
            $table->date('return_date_actual')->nullable();
            $table->string('status')->default('borrowed'); // borrowed, returned, overdue
            $table->integer('fine')->default(0);
            $table->text('notes')->nullable();


            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('borrows');
    }
};