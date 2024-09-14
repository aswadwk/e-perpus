import BookLayout from "@/Components/Layout/BookLayout";
import { Separator } from "@/Components/ui/separator";
import { useForm, usePage } from "@inertiajs/react";
import React from "react";

const Setting = () => {
  const { auth }: any = usePage().props;

  const { post } = useForm({});

  console.log(auth);

  return (
    <BookLayout>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight">Setting</h2>
          <p className="text-sm text-muted-foreground">
            Atur akun dan informasi
          </p>
        </div>
      </div>
      <Separator className="my-4" />
      {/* show current user login */}
      <div className="flex items-center justify-between mt-4 space-x-4 pe-4">
        <div className="flex items-center gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full"></div>
          <div>
            <h2 className="text-lg font-semibold">{auth?.name}</h2>
            <p className="text-sm text-muted-foreground">{auth?.email}</p>
          </div>
        </div>
        {/* logout */}
        <button
          className="btn btn-primary"
          onClick={() => {
            post(route("web.auth.logout"));
          }}
        >
          Keluar
        </button>
      </div>
    </BookLayout>
  );
};

export default Setting;
