// import Image from "next/image";
// import { PlusCircledIcon } from "@radix-ui/react-icons";

import { cn } from "@/Lib/utils";
import { Album, Book } from "./BookLayout";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "../ui/context-menu";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "sonner";
import SheetDemo from "../Sheet/Sheet";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import DatePickerDemo from "../DatePicker/DatePicker";
import InputCustom from "../Input/InputCustom";
import InputCheckBox from "../Input/InputCheckBox";
import { Button } from "../ui/button";
import { format } from "date-fns";

interface BookProps extends React.HTMLAttributes<HTMLDivElement> {
  book: Book;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export default function BookItem({
  book,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: Readonly<BookProps>) {
  const [isOpen, setIsOpen] = useState({
    borrowBook: false,
  });

  const formBorrowBook = useForm({
    book_id: "",
    // +7 days
    return_date: new Date(),
    notes: "",
    fine: true,
  });

  async function handleBorrowBook() {
    formBorrowBook.transform((data: any) => {
      return {
        ...data,
        return_date: format(data.return_date, "yyyy-MM-dd"),
      };
    });

    formBorrowBook.post(
      route("web.books.borrow", formBorrowBook.data.book_id),
      {
        preserveState: true,
        onSuccess: () => {
          formBorrowBook.reset();
          toast.success("Book borrowed successfully");
          setIsOpen({
            ...isOpen,
            borrowBook: false,
          });
        },
        onError: () => {
          toast.error("Failed to borrow book");
        },
      }
    );
  }

  return (
    <div className={cn("space-y-3", className)} {...props}>
      <SheetDemo
        isOpen={isOpen.borrowBook}
        onClose={() => {
          setIsOpen({
            ...isOpen,
            borrowBook: false,
          });
        }}
        width="w-[600px] sm:w-[840px]"
        title="Borrow Book"
        description="Fill in the form below to borrow a book"
      >
        <FormAddAdminUser form={formBorrowBook} onSubmit={handleBorrowBook} />
      </SheetDemo>

      <div
        className="relative overflow-hidden rounded-md cursor-pointer"
        onClick={() => {
          setIsOpen({
            ...isOpen,
            borrowBook: true,
          });
          formBorrowBook.setData("book_id", book.id);
        }}
      >
        <img
          src={book.cover}
          alt={book.title}
          width={width}
          height={height}
          className={cn(
            "h-auto w-auto object-cover transition-all hover:scale-105",
            aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square"
          )}
        />
        {/* genre */}
        <div className="absolute top-0 right-0 p-2 text-xs font-semibold text-white bg-primary-500 rounded-bl-md">
          {book.genre}
        </div>
      </div>

      <div
        className="space-y-1 text-sm cursor-pointer"
        onClick={() => {
          setIsOpen({
            ...isOpen,
            borrowBook: true,
          });
          formBorrowBook.setData("book_id", book.id);
        }}
      >
        <h3 className="font-medium leading-none">{book.title}</h3>
        <p className="text-xs text-muted-foreground">{book.author}</p>
      </div>
    </div>
  );
}

export type Playlist = (typeof playlists)[number];

export const playlists = [
  "Recently Added",
  "Recently Played",
  "Top Songs",
  "Top Albums",
  "Top Artists",
  "Logic Discography",
  "Bedtime Beats",
  "Feeling Happy",
  "I miss Y2K Pop",
  "Runtober",
  "Mellow Days",
  "Eminem Essentials",
];

function FormAddAdminUser({ onSubmit, form }: any) {
  console.log("form");
  console.log(form);

  // const [forms, setForms] = useState({
  //   date: new Date(),
  //   fine: true,
  //   notes: "",
  // });

  // const handleBorrowBook = async (e: any) => {
  //   e.preventDefault();
  //   onSubmit(forms);
  // };

  return (
    <div>
      <Card className="mt-4 border-none">
        <CardHeader>
          <CardTitle>Book Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 ">
              <Label htmlFor="book">Return Date</Label>
              <DatePickerDemo
                onChange={(date) => {
                  form.setData("return_date", date);
                }}
                value={form.data.return_date}
              />
            </div>
            <div>
              <InputCustom
                error={form.errors.notes}
                type="text"
                onChange={(e) => {
                  form.setData("notes", e.target.value);
                }}
                label="Notes"
                value={form.data.notes}
                placeholder="Notes"
              />
            </div>
            <div>
              <InputCheckBox
                error={form.errors.fine}
                label="Book Condition Good"
                onChange={(e) => {
                  form.setData("fine", e);
                }}
                placeholder="Fine"
                value={form.data.fine}
                id="bookCondition"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex justify-end">
            <Button
              onClick={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              Borrow
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
