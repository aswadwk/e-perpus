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
    email: "",
    password: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    post(route("web.admins.store"), {
      preserveScroll: true,
      onSuccess: () => {
        setData({
          name: "",
          email: "",
          password: "",
        });
      },
    });
  }

  return (
    <DefaultLayout>
      {/* <h1 className="mb-4 text-2xl font-semibold">Create Member</h1> */}

      <CardHeader>
        <CardTitle>Tambah Admin</CardTitle>
        <CardDescription>Tambah admin baru</CardDescription>
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
