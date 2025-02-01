<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Borrow;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HistoryController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Histories/Histories', [
            'histories' => Borrow::with(['book', 'user'])
                ->where('user_id', auth('web')->user()->id)
                ->orderBy('created_at', 'desc')->paginate(10),
        ]);
    }

    public function adminHistory(Request $request)
    {
        return inertia('Histories/AdminHistory', [
            'histories' => Borrow::with(['book', 'user'])
                ->when(isset($request->search), function ($query) use ($request) {
                    $query->whereHas('user', function ($query) use ($request) {
                        $query->where('name', 'like', '%' . $request->search . '%')
                            ->orWhere('email', 'like', '%' . $request->search . '%');
                    });
                })
                ->orderBy('created_at', 'desc')->paginate(10),
        ]);
    }


    public function update(Request $request, $id)
    {
        $request->validate([
            'status' => ['required', 'in:pending,approved,rejected,returned,borrowed',],
        ]);

        try {
            DB::beginTransaction();

            $borrow = Borrow::find($id);

            if ($request->status === 'borrowed') {
                $borrow->update([
                    'status' => $request->status,
                    'borrow_date' => now(),
                ]);

                $borrow->book->update([
                    'stock' => $borrow->book->stock - 1,
                ]);
            }

            if ($request->status === 'returned') {
                $borrow->update([
                    'status' => $request->status,
                    'return_date' => now(),
                ]);

                $borrow->book->update([
                    'stock' => $borrow->book->stock + 1,
                ]);
            }

            if ($request->status === 'rejected' || $request->status === 'pending') {
                //only status pending can be rejected
                if (!$borrow->status === 'pending') {

                    DB::rollBack();

                    return redirect()->back()->with('error', 'Only pending status can be rejected');
                }

                $borrow->update([
                    'status' => $request->status,
                ]);
            }

            DB::commit();

            return redirect()->route('web.histories.admin');
        } catch (\Throwable $th) {
            DB::rollBack();

            throw $th;
        }
    }
}
