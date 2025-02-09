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

const Edit = ({ book, categories, publishers }: any) => {
  const { data, setData, post, errors, processing, reset } = useForm({
    _method: "put",
    title: book.title || "",
    author: book.author || "",
    category_id: book.category_id || "",
    publisher_id: book.publisher_id || "",
    isbn: book.isbn || "",
    cover: null,
    year_published: book.year_published || "",
    stock: book.stock || "",
    price: book.price || "",
    description: book.description || "",
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    post(route("web.books.update", book.id), {
      method: "put",
      forceFormData: true,
      preserveScroll: true,
      onSuccess: () => {
        reset();
      },
    });
  }

  return (
    <DefaultLayout>
      <CardHeader>
        <CardTitle>Edit Buku</CardTitle>
        <CardDescription>Edit Buku</CardDescription>
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
                placeholder="Kategori"
                items={categories.map((category: any) => ({
                  value: category.id.toString(),
                  label: category.name,
                }))}
                onChange={(value: any) => setData("category_id", value)}
                error={errors.category_id}
                currentValue={data.category_id.toString()}
              />
            </div>
            <div>
              <SelectInput
                label="Publisher"
                placeholder="Publisher"
                items={publishers.map((publisher: any) => ({
                  value: publisher.id.toString(),
                  label: publisher.name,
                }))}
                onChange={(value: any) => setData("publisher_id", value)}
                error={errors.publisher_id}
                currentValue={data.category_id.toString()}
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
                label="Year Publisher"
                type="number"
                placeholder="Year Publisher"
                value={data.year_published}
                onChange={(e) => setData("year_published", e.target.value)}
                error={errors.year_published}
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
            <div>
              <InputCustom
                label="Cover"
                type="file"
                placeholder="Cover"
                onChange={(e) => setData("cover", e.target.files[0])}
                error={errors.cover}
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
