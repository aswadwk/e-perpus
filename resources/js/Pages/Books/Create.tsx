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

const Create = ({ categories, publishers }: any) => {
  const { data, setData, post, errors, processing } = useForm({
    title: "",
    author: "",
    category_id: "",
    publisher_id: "",
    isbn: "",
    cover: "",
    year_publisher: "",
    stock: "",
    price: "",
    description: "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    post(route("web.members.store"), {
      preserveScroll: true,
      onSuccess: () => {
        setData({
          title: "",
          author: "",
          category_id: "",
          publisher_id: "",
          isbn: "",
          cover: "",
          year_publisher: "",
          stock: "",
          price: "",
          description: "",
        });
      },
    });
  }

  console.log(categories);
  console.log(data);

  return (
    <DefaultLayout>
      <CardHeader>
        <CardTitle>Tambah Buku</CardTitle>
        <CardDescription>Tambah buku baru</CardDescription>
      </CardHeader>
      <CardContent>
        <form action="" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <InputCustom
                label="Judul"
                type="text"
                placeholder="Judul"
                value={data.title}
                onChange={(e) => setData("title", e.target.value)}
                error={errors.title}
              />
            </div>
            <div>
              <InputCustom
                label="Author"
                type="text"
                placeholder="Author"
                value={data.author}
                onChange={(e) => setData("author", e.target.value)}
                error={errors.author}
              />
            </div>
            <div>
              <SelectInput
                label="Kategori"
                value={data.category_id}
                placeholder="Kategori"
                items={categories.map((category: any) => ({
                  value: category.id,
                  label: category.name,
                }))}
                onChange={(e) => setData("category_id", e)}
                error={errors.category_id}
              />
            </div>
            <div>
              <SelectInput
                label="Publisher"
                value={data.publisher_id}
                placeholder="Publisher"
                items={publishers.map((publisher: any) => ({
                  value: publisher.id,
                  label: publisher.name,
                }))}
                onChange={(value) => setData("publisher_id", value)}
                error={errors.publisher_id}
              />
            </div>
            <div>
              <InputCustom
                label="ISBN"
                type="text"
                placeholder="ISBN"
                value={data.isbn}
                onChange={(e) => setData("isbn", e.target.value)}
                error={errors.isbn}
              />
            </div>
            <div>
              <InputCustom
                label="Stock"
                type="number"
                placeholder="Stock"
                value={data.stock}
                onChange={(e) => setData("stock", e.target.value)}
                error={errors.stock}
              />
            </div>
            <div>
              <InputCustom
                label="Harga"
                type="number"
                placeholder="Harga"
                value={data.price}
                onChange={(e) => setData("price", e.target.value)}
                error={errors.price}
              />
            </div>

            <div>
              <InputCustom
                label="Description"
                type="text"
                placeholder="Description"
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

export default Create;
