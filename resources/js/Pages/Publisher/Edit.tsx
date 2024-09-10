import InputCheckBox from "@/Components/Input/InputCheckBox";
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

const Edit = ({ publisher }: any) => {
  const { data, setData, put, errors, processing } = useForm({
    code: publisher.code || "",
    name: publisher.name || "",
    is_verified: publisher.is_verified === 1 ? true : false,
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    put(route("web.publishers.update", publisher.id), {
      preserveScroll: true,
      onSuccess: () => {
        setData({
          code: "",
          name: "",
          is_verified: true,
        });
      },
    });
  }

  return (
    <DefaultLayout>
      <CardHeader>
        <CardTitle>Edit Publisher</CardTitle>
        <CardDescription>Edit a new publisher</CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <InputCustom
                label="Code"
                type="text"
                placeholder="Code"
                value={data.code}
                onChange={(e) => setData("code", e.target.value)}
                error={errors.code}
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
              <InputCheckBox
                error={""}
                label="Is Verified"
                onChange={(value) => setData("is_verified", value)}
                placeholder="Is Verified"
                value={data.is_verified}
                id="is_verified"
              />
            </div>
          </div>
          <div className="mt-4">
            <Button type="submit" disabled={processing}>
              Save
            </Button>
          </div>
        </form>
      </CardContent>
    </DefaultLayout>
  );
};

export default Edit;
