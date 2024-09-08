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

const Edit = ({ member }: any) => {
  const { data, setData, put, errors, processing } = useForm({
    nis: member.nis || "",
    name: member.name || "",
    username: member.username || "",
    email: member.email || "",
    password: "",
    address: member.address || "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    put(route("web.members.update", member.id), {
      preserveScroll: true,
      onSuccess: () => {
        setData({
          nis: "",
          name: "",
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
        <CardTitle>Edit Member</CardTitle>
        <CardDescription>Edit a new member</CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <InputCustom
                label="NIS"
                type="text"
                placeholder="NIS"
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
              Update
            </Button>
          </div>
        </form>
      </CardContent>
    </DefaultLayout>
  );
};

export default Edit;
