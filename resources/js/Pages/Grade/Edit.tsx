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

const Edit = ({ member }: any) => {
  const { data, setData, put, errors, processing } = useForm({
    name: member.name || "",
    description: member.description || "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    put(route("web.grades.update", member.id), {
      preserveScroll: true,
      onSuccess: () => {
        setData({
          name: "",
          description: "",
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
                label="Deskripsi"
                type="text"
                placeholder="Deskripsi"
                value={data.description}
                onChange={(e) => setData("description", e.target.value)}
                error={errors.description}
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
