import DefaultLayout from "@/Components/Layout/DefaultLayout";
import PaginationDemo, {
  PaginateInfo,
} from "@/Components/Paginate/PaginateDemo";
import SelectInput from "@/Components/SelectInput/SelectInput";
import SheetDemo from "@/Components/Sheet/Sheet";
import Status from "@/Components/Status";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/Components/ui/command";
import { Input } from "@/Components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import {
  dateHumanize,
  removeEmptyValues,
  toYearMonthDay,
  toYearMonthDayHourMinute,
} from "@/Shared/utils";
import { Head, router, useForm } from "@inertiajs/react";
import { CommandEmpty } from "cmdk";
import { debounce } from "lodash";
import { Edit } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

function updateStatus(status: string): string {
  switch (status) {
    case "pending":
      return "Menunggu";
    case "borrowed":
      return "Dipinjam";
    case "returned":
      return "Dikembalikan";
    case "rejected":
      return "Ditolak";
    default:
      return status;
  }
}

const AdminHistories = ({ histories }: any) => {
  const [filters, setFilters] = useState<any>({
    per_page: 10,
    start_date: "",
    end_date: "",
    search: "",
    with_trashed: false,
  });

  const [isOpen, setIsOpen] = useState({
    borrowBook: false,
  });

  const formUpdateStatus = useForm({
    status: "",
    id: "",
    return_date_actual: "",
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
        route("web.histories.admin"),
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

  function deletePublisher(id: any) {
    if (confirm("Are you sure you want to delete this publisher?")) {
      destroy(route("web.publishers.destroy", id));
    }
  }

  async function handleBorrowBook() {
    formUpdateStatus.post(
      route("web.histories.update", formUpdateStatus.data.id),
      {
        preserveState: true,
        onSuccess: () => {
          formUpdateStatus.reset();
          toast.success("Book status updated successfully");
          setIsOpen({
            ...isOpen,
            borrowBook: false,
          });
        },
        onError: () => {
          toast.error("Failed to update book status");
        },
      }
    );
  }

  return (
    <DefaultLayout>
      <Head title="Publisher" />

      <SheetDemo
        isOpen={isOpen.borrowBook}
        onClose={() => {
          setIsOpen({
            ...isOpen,
            borrowBook: false,
          });
        }}
        width="w-[600px] sm:w-[840px]"
        title="Ubah Status Peminjaman Buku"
        description="Ubah status peminjaman buku"
      >
        <FormUpdateStatus form={formUpdateStatus} onSubmit={handleBorrowBook} />
      </SheetDemo>

      <Card className="w-full mx-auto">
        <CardHeader>
          <CardTitle>Histori Peminjaman Buku</CardTitle>
          <CardDescription>
            Daftar pemijaman buku yang pernah dilakukan oleh pengguna
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-end mb-2">
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
                placeholder="Search nama peminjam..."
                onChange={(e) => {
                  setFilters({
                    ...filters,
                    search: e.target.value,
                  });
                }}
                className="w-[150px] lg:w-[250px]"
                value={filters.search}
              />
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Peminjam</TableHead>
                <TableHead>Judul</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Tanggal Pinjam</TableHead>
                <TableHead>Tanggal Balik</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {histories.data?.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">
                    {item.user.name}
                    <br />
                    <span className="text-xs text-gray-500">
                      {item.user.email}
                    </span>
                  </TableCell>
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
                  <TableCell>{updateStatus(item.status)}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      onClick={() => {
                        formUpdateStatus.setData("id", item.id);
                        setIsOpen({
                          ...isOpen,
                          borrowBook: true,
                        });
                      }}
                    >
                      <Edit size={16} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="flex items-center justify-between w-full">
            <PaginateInfo
              from={histories.from}
              to={histories.to}
              total={histories.total}
            />
            <div>
              <PaginationDemo links={histories.links} />
            </div>
          </div>
        </CardFooter>
      </Card>
    </DefaultLayout>
  );
};

export default AdminHistories;

type Status = {
  value: string;
  label: string;
};

const statuses: Status[] = [
  {
    value: "pending",
    label: "Pending",
  },
  {
    value: "borrowed",
    label: "Dipinjam",
  },
  {
    value: "returned",
    label: "Dikembalikan",
  },
  {
    value: "rejected",
    label: "Ditolak",
  },
];

function FormUpdateStatus({ onSubmit, form }: any) {
  return (
    <div className="mt-4">
      <div className="flex flex-col gap-3 mb-4">
        <div className="flex flex-col gap-2 ">
          <SelectInput
            onChange={(value) => form.setData("status", value)}
            label="Status"
            placeholder="Select status..."
            items={statuses}
            currentValue={form.data.status}
          />
        </div>
        {/* <div className="flex flex-col gap-2">
          <Label htmlFor="status">Status</Label>
          <DatePickerDemo
            onChange={(date) => {
              form.setData("return_date_actual", date);
            }}
            value={form.data.return_date_actual}
          />
        </div> */}
      </div>

      <Button
        onClick={() => {
          onSubmit();
        }}
      >
        Update
      </Button>
    </div>
  );
}

function StatusList({
  setOpen,
  setSelectedStatus,
}: {
  setOpen: (open: boolean) => void;
  setSelectedStatus: (status: Status | null) => void;
}) {
  return (
    <Command>
      <CommandInput placeholder="Filter status..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {statuses.map((status) => (
            <CommandItem
              key={status.value}
              value={status.value}
              onSelect={(value) => {
                setSelectedStatus(
                  statuses.find((priority) => priority.value === value) || null
                );
                setOpen(false);
              }}
            >
              {status.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
