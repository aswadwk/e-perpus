import DatePickerDemo from "@/Components/DatePicker/DatePicker";
import InputCheckBox from "@/Components/Input/InputCheckBox";
import InputCustom from "@/Components/Input/InputCustom";
import DefaultLayout from "@/Components/Layout/DefaultLayout";
import PaginationDemo, {
  PaginateInfo,
} from "@/Components/Paginate/PaginateDemo";
import SheetDemo from "@/Components/Sheet/Sheet";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

import { Sheet, SheetContent } from "@/Components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { imagePath } from "@/Lib/utils";
import {
  dateHumanize,
  removeEmptyValues,
  toYearMonthDay,
  toYearMonthDayHourMinute,
} from "@/Shared/utils";
import { Head, Link, router, useForm } from "@inertiajs/react";
import { debounce } from "lodash";
import { Edit, Eye, Plus, Trash } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const AdminBooks = ({ books }: any) => {
  const [filters, setFilters] = useState<any>({
    per_page: 10,
    search: "",
    with_trashed: false,
  });

  const [isOpen, setIsOpen] = useState({
    borrowBook: false,
  });

  const [bookTemp, setBookTemp] = useState<any>({});

  const formBorrowBook = useForm({
    book_id: "",
    // +7 days
    return_date: new Date(),
    notes: "",
    fine: true,
  });

  const { delete: destroy } = useForm({});

  const firstRender = useRef(true);

  const debouncedSearch = useRef(
    debounce((searchFilter: any) => {
      let newFilter = removeEmptyValues({
        ...searchFilter,
        start_date: toYearMonthDay(searchFilter.start_date, ""),
        end_date: toYearMonthDay(searchFilter.end_date, ""),
      });

      router.get(
        route("web.books.admin"),
        {
          ...newFilter,
        },
        { preserveState: true, preserveScroll: "errors" }
      );
    }, 500)
  ).current;

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    debouncedSearch(filters);
  }, [filters]);

  function hasFilter() {
    return filters.search || filters.with_trashed;
  }

  function deleteBook(id: any) {
    if (confirm("Are you sure you want to delete this book?")) {
      destroy(route("web.books.destroy", id));
    }
  }

  async function handleBorrowBook() {
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
    <DefaultLayout>
      <Head title="Books" />

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

      <Card>
        <CardHeader>
          <CardTitle>Buku</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Tabs
                className="hidden sm:flex"
                defaultValue="all"
                value={filters.subscription}
                onValueChange={(value) => {
                  setFilters({
                    ...filters,
                    subscription: value,
                  });
                }}
              >
                <TabsList>
                  <TabsTrigger value="">All</TabsTrigger>
                  <TabsTrigger value="available">In Stock</TabsTrigger>
                  <TabsTrigger value="unavailable">Out of Stock</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="flex items-center justify-end space-x-2">
              {hasFilter() && (
                <Button
                  variant="outline"
                  onClick={() => {
                    setFilters({
                      ...filters,
                      search: "",
                      per_page: "",
                      with_trashed: false,
                    });
                  }}
                >
                  Clear Filter
                </Button>
              )}
              <Input
                placeholder="Search "
                onChange={(e) => {
                  setFilters({
                    ...filters,
                    search: e.target.value,
                  });
                }}
                className="w-[150px] lg:w-[250px]"
                value={filters.search}
              />

              <Link href={route("web.books.create")}>
                <Button>
                  <Plus />
                  Tambah Buku
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-4 overflow-x-auto border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>ISBN</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {books?.data?.map((book: any) => (
                  <TableRow key={book.id}>
                    <TableCell>
                      <img src={imagePath(book?.cover)} alt={book?.title} />
                    </TableCell>
                    <TableCell>
                      {book?.title ?? "Unknown"}
                      <br />
                      <span className="text-xs text-muted-foreground">
                        {book?.category?.name}
                      </span>
                    </TableCell>
                    <TableCell>{book.author}</TableCell>
                    <TableCell>
                      {book?.category?.name}
                      <br />
                      <span className="text-xs text-muted-foreground">
                        {book?.category?.code}
                      </span>
                    </TableCell>
                    <TableCell>{book.isbn}</TableCell>
                    <TableCell>{book.stock}</TableCell>
                    <TableCell className="text-nowrap">
                      {dateHumanize(book.created_at)}
                      <br />
                      <span className="text-xs text-muted-foreground">
                        {toYearMonthDayHourMinute(book.created_at)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center gap-2">
                        <Button variant="ghost">
                          <Link href={route("web.books.edit", book.id)}>
                            <Edit height={18} />
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => {
                            deleteBook(book.id);
                          }}
                        >
                          <Trash height={18} />
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => {
                            formBorrowBook.setData("book_id", book.id);
                            setIsOpen({
                              ...isOpen,
                              borrowBook: true,
                            });
                          }}
                        >
                          Borrow
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex items-center justify-between w-full">
            <PaginateInfo from={books.from} to={books.to} total={books.total} />
            <div>
              <PaginationDemo links={books.links} />
            </div>
          </div>
        </CardFooter>
      </Card>
    </DefaultLayout>
  );
};

export default AdminBooks;

function BorrowBook({
  isOpen,
  handleClose,
  children,
  width = "w-[400px] sm:w-[540px]",
}: Readonly<{
  isOpen: boolean;
  children?: React.ReactNode;
  handleClose?: () => void;
  width?: string;
}>) {
  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className={"w-[800px]"}>{children}</SheetContent>
    </Sheet>
  );
}

function FormAddAdminUser({ onSubmit, form }: any) {
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
