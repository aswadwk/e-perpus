import InputCustom from "@/Components/Input/InputCustom";
import BookLayout from "@/Components/Layout/BookLayout";
import { Button } from "@/Components/ui/button";
import { Separator } from "@/Components/ui/separator";
import { useForm, usePage } from "@inertiajs/react";
import React from "react";

const Setting = () => {
  const { auth }: any = usePage().props;

  const { post } = useForm({});

  const {
    data,
    setData,
    errors,
    post: postForm,
  } = useForm({
    name: auth?.name || "",
    old_password: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(data);

    postForm(route("web.auth.update"), {
      forceFormData: true,
      preserveScroll: true,
      onSuccess: () => {
        setData("old_password", "");
        setData("password", "");
      },
    });
  };

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
      <form action="" onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <div className="grid w-11/12 grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <InputCustom
                label="Nama"
                type="text"
                placeholder="nama"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                error={errors.name}
              />
            </div>
            <br />
            <div>
              <InputCustom
                label="Old Password"
                type="text"
                placeholder="old password"
                value={data.old_password}
                onChange={(e) => setData("old_password", e.target.value)}
                error={errors.old_password}
              />
            </div>
            <div>
              <InputCustom
                label="New Password"
                type="text"
                placeholder="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                error={errors.password}
              />
            </div>
          </div>
          <Button type="submit" className="btn btn-primary">
            Update
          </Button>
        </div>
      </form>

      <Separator className="my-4" />
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
