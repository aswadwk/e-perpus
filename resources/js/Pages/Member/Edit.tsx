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

const Edit = ({ member, grades }: any) => {
  const { data, setData, put, errors, processing } = useForm({
    nis: member.nis || "",
    code: member.code || "",
    name: member.name || "",
    username: member.username || "",
    email: member.email || "",
    password: "",
    address: member.address || "",
    grade_id: member.grade_id || "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    put(route("web.members.update", member.id), {
      preserveScroll: true,
      onSuccess: () => {
        setData({
          code: "",
          nis: "",
          name: "",
          username: "",
          email: "",
          password: "",
          address: "",
          grade_id: "",
        });
      },
    });
  }

  return (
    <DefaultLayout>
      {/* <h1 className="mb-4 text-2xl font-semibold">Create Member</h1> */}

      <CardHeader>
        <CardTitle>Ubah Pengguna</CardTitle>
        <CardDescription>Ubah Pengguna</CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <InputCustom
                isDisabled
                label="Kode Anggota"
                type="text"
                placeholder="NIM"
                value={data.code}
                onChange={(e) => setData("code", e.target.value)}
                error={errors.code}
              />
            </div>
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

export default Edit;
