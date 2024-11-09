import InputCustom from "@/Components/Input/InputCustom";
import DefaultLayout from "@/Components/Layout/DefaultLayout";
import { Button } from "@/Components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { useForm } from "@inertiajs/react";
import React from "react";

const Edit = ({ category }: any) => {
  const { data, setData, put, errors, processing } = useForm({
    name: category.name || "",
    code: category.code || "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    put(route("web.categories.update", category.id), {
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
      <CardHeader>
        <CardTitle>Ubah Kelas</CardTitle>
        <CardDescription>Ubah kelas</CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <InputCustom
                label="Name"
                type="text"
                placeholder="Name"
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
              Simpan
            </Button>
          </div>
        </form>
      </CardContent>
    </DefaultLayout>
  );
};

export default Edit;
