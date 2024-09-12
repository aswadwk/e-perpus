import AvatarCustom from "@/Components/Avatar/Avatar";
import DatePickerDemo from "@/Components/DatePicker/DatePicker";
import DatePickerWithRange from "@/Components/DatePicker/DateRangePicker";
import InputCheckBox from "@/Components/Input/InputCheckBox";
import InputCustom from "@/Components/Input/InputCustom";
import BookLayout from "@/Components/Layout/BookLayout";
import DefaultLayout from "@/Components/Layout/DefaultLayout";
import PaginationDemo, {
  PaginateInfo,
} from "@/Components/Paginate/PaginateDemo";
import Status from "@/Components/Status";
import { Button } from "@/Components/ui/button";
import { Calendar } from "@/Components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/Components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Tabs, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { cn } from "@/Lib/utils";
import {
  dateHumanize,
  removeEmptyValues,
  toYearMonthDay,
  toYearMonthDayHourMinute,
} from "@/Shared/utils";
import { Head, Link, router, useForm } from "@inertiajs/react";
import axios from "axios";
import { format } from "date-fns";
import { debounce } from "lodash";
import {
  CalendarIcon,
  DollarSignIcon,
  Edit,
  Eye,
  Plus,
  Trash,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const Histories = ({ histories }: any) => {
  const [filters, setFilters] = useState<any>({
    per_page: 10,
    start_date: "",
    end_date: "",
    search: "",
    subscription: "",
    with_trashed: false,
  });

  const [isOpen, setIsOpen] = useState({
    borrowBook: false,
  });

  const [bookTemp, setBookTemp] = useState<any>({});

  const { delete: destroy } = useForm({});

  const firstRender = useRef(true);

  const debouncedSearch = useRef(
    debounce((searchFilter: any) => {
      let newFilter = removeEmptyValues({
        ...searchFilter,
        start_date: toYearMonthDay(searchFilter.start_date, ""),
        end_date: toYearMonthDay(searchFilter.end_date, ""),
      });

      // router.get(
      //   route("v1.admin.users"),
      //   {
      //     ...newFilter,
      //   },
      //   { preserveState: true, preserveScroll: "errors" }
      // );
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
    return (
      filters.search ||
      filters.start_date ||
      filters.end_date ||
      filters.subscription ||
      filters.with_trashed
    );
  }

  function deletePublisher(id: any) {
    if (confirm("Are you sure you want to delete this publisher?")) {
      destroy(route("web.publishers.destroy", id));
    }
  }

  async function handleBorrowBook(data: any) {
    try {
      const result = await axios.post(
        route("web.books.borrow", bookTemp.id),
        {
          return_date: format(data.date, "yyyy-MM-dd"),
          fine: data.fine,
          notes: data.notes,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (result.status === 200) {
        router.reload();

        setIsOpen({
          ...isOpen,
          borrowBook: false,
        });

        toast.success("Book borrowed successfully");
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  }

  return (
    <BookLayout>
      <Head title="Publisher" />

      <Card className="w-full mx-auto">
        <CardHeader>
          <CardTitle>Book Borrowing History</CardTitle>
          <CardDescription>
            A list of recent book loans and their current status.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Book Title</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Borrow Date</TableHead>
                <TableHead>Return Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {histories.data?.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">
                    {item.book.title}
                  </TableCell>
                  <TableCell>{item.book.author}</TableCell>
                  <TableCell>
                    {dateHumanize(item.created_at)}
                    <br />
                    <span className="text-xs text-gray-500">
                      {toYearMonthDayHourMinute(item.created_at)}
                    </span>
                  </TableCell>
                  <TableCell>{item.return_date}</TableCell>
                  <TableCell>{item.status}</TableCell>
                  <TableCell>
                    <Popover>
                      <PopoverTrigger>
                        <Button>
                          <Edit size={16} />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <Button>
                          <Eye size={16} />
                        </Button>
                        <Button>
                          <Trash size={16} />
                        </Button>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </BookLayout>
  );
};

export default Histories;

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

function FormAddAdminUser({ onSubmit, data }: any) {
  const [forms, setForms] = useState({
    date: new Date(),
    fine: true,
    notes: "",
  });

  const handleBorrowBook = async (e: any) => {
    e.preventDefault();
    onSubmit(forms);
  };

  return (
    <SheetHeader>
      <SheetTitle>Borrow Book</SheetTitle>
      <SheetDescription>
        Fill in the form below to borrow a book
      </SheetDescription>

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
                  setForms({
                    ...forms,
                    date,
                  });
                }}
                value={forms.date}
              />
            </div>
            <div>
              <InputCustom
                error={""}
                type="text"
                onChange={(e) => {
                  console.log(e.target.value);

                  setForms({
                    ...forms,
                    notes: e.target.value,
                  });
                }}
                label="Notes"
                value={forms.notes}
                placeholder="Notes"
              />
            </div>
            <div>
              <InputCheckBox
                error={""}
                label="Book Condition Good"
                onChange={(e) => {
                  setForms({
                    ...forms,
                    fine: e,
                  });
                }}
                placeholder="Fine"
                value={forms.fine}
                id="bookCondition"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex justify-end">
            <Button
              onClick={(e) => {
                handleBorrowBook(e);
              }}
            >
              Borrow
            </Button>
          </div>
        </CardFooter>
      </Card>
    </SheetHeader>
  );
}
