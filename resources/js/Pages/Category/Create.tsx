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
import { Head, useForm } from "@inertiajs/react";
import React from "react";

const Create = ({ code }: any) => {
  const { data, setData, post, errors, processing } = useForm({
    name: "",
    code: code,
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
      <Head title="Tambah Kategori" />

      <CardHeader>
        <CardTitle>Tambah Kelas</CardTitle>
        <CardDescription>Tambah kelas baru</CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <InputCustom
                isDisabled
                isRequired
                label="Kode"
                type="text"
                placeholder="Kode"
                value={data.code}
                onChange={(e) => setData("code", e.target.value)}
                error={errors.code}
              />
            </div>
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
