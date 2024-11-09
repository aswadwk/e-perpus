import InputCustom from "@/Components/Input/InputCustom";
import DefaultLayout from "@/Components/Layout/DefaultLayout";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { useForm } from "@inertiajs/react";
import React from "react";

const Create = () => {
  const { data, setData, post, errors, processing } = useForm({
    name: "",
    code: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    post(route("web.categories.store"), {
      preserveScroll: true,
      onSuccess: () => {
        setData({
          name: "",
          code: "",
        });
      },
    });
  }

  return (
    <DefaultLayout>
      {/* <h1 className="mb-4 text-2xl font-semibold">Create Member</h1> */}

      <CardHeader>
        <CardTitle>Tambah Kelas</CardTitle>
        <CardDescription>Tambah kelas baru</CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <InputCustom
                label="Nama"
                type="text"
                placeholder="Nama"
                value={data.name}
                onChange={(e) => setData("name", e.target.value)}
                error={errors.name}
              />
            </div>
            <div>
              <InputCustom
                label="Kode"
                type="text"
                placeholder="Kode"
                value={data.code}
                onChange={(e) => setData("code", e.target.value)}
                error={errors.code}
              />
            </div>
          </div>
          <div className="mt-4">
            <Button type="submit" disabled={processing}>
              Tambah
            </Button>
          </div>
        </form>
      </CardContent>
    </DefaultLayout>
  );
};

export default Create;
