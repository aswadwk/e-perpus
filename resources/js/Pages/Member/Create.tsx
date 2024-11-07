import InputCustom from "@/Components/Input/InputCustom";
import DefaultLayout from "@/Components/Layout/DefaultLayout";
import SelectInput from "@/Components/SelectInput/SelectInput";
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

const Create = ({ grades }: any) => {
  const { data, setData, post, errors, processing } = useForm({
    nis: "",
    name: "",
    grade_id: "",
    username: "",
    email: "",
    password: "",
    address: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    post(route("web.members.store"), {
      preserveScroll: true,
      onSuccess: () => {
        setData({
          nis: "",
          name: "",
          grade_id: "",
          username: "",
          email: "",
          password: "",
          address: "",
        });
      },
    });
  }

  return (
    <DefaultLayout>
      {/* <h1 className="mb-4 text-2xl font-semibold">Create Member</h1> */}

      <CardHeader>
        <CardTitle>Tambah Pengguna</CardTitle>
        <CardDescription>Tambah pengguna baru</CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <InputCustom
                label="NIM"
                type="text"
                placeholder="NIM"
                value={data.nis}
                onChange={(e) => setData("nis", e.target.value)}
                error={errors.nis}
              />
            </div>
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
              <SelectInput
                label="Kelas"
                placeholder="Kelas"
                items={grades.map((grade: any) => ({
                  value: grade.id.toString(),
                  label: grade.name,
                }))}
                onChange={(value: any) => setData("grade_id", value)}
                error={errors.grade_id}
                currentValue={data.grade_id.toString()}
              />
            </div>
            <div>
              <InputCustom
                label="Username"
                type="text"
                placeholder="Username"
                value={data.username}
                onChange={(e) => setData("username", e.target.value)}
                error={errors.username}
              />
            </div>
            <div>
              <InputCustom
                label="Email"
                type="email"
                placeholder="Email"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                error={errors.email}
              />
            </div>
            <div>
              <InputCustom
                label="Password"
                type="text"
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                error={errors.password}
              />
            </div>

            <div>
              <InputCustom
                label="Address"
                type="text"
                placeholder="Address"
                value={data.address}
                onChange={(e) => setData("address", e.target.value)}
                error={errors.address}
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

export default Create;
