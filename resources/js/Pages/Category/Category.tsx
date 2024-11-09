import DefaultLayout from "@/Components/Layout/DefaultLayout";
import PaginationDemo, {
  PaginateInfo,
} from "@/Components/Paginate/PaginateDemo";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
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
import { Head, Link, router, useForm } from "@inertiajs/react";
import axios from "axios";
import { debounce } from "lodash";
import { DollarSignIcon, Edit, Eye, Plus, Trash } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const Grade = ({ categories }: any) => {
  const [filters, setFilters] = useState<any>({
    per_page: 10,
    search: "",
    with_trashed: false,
  });

  const { delete: destroy } = useForm({});

  const firstRender = useRef(true);

  const debouncedSearch = useRef(
    debounce((searchFilter: any) => {
      let newFilter = removeEmptyValues({
        ...searchFilter,
      });

      router.get(
        route("web.categories.index"),
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
      destroy(route("web.categories.destroy", id));
    }
  }

  return (
    <DefaultLayout>
      <Head title="Publisher" />

      <Card>
        <CardHeader>
          <CardTitle>Kategori</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <div>
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
              </div>
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
            </div>

            <Link href="/admin/categories/create">
              <Button>
                <Plus />
                Tambah Kategori
              </Button>
            </Link>
          </div>
          <div className="mt-4 overflow-x-auto border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama</TableHead>
                  <TableHead>Kode</TableHead>
                  <TableHead>Created At</TableHead>
                  <TableHead className="text-center">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {categories?.data?.map((publisher: any) => (
                  <TableRow key={publisher.id}>
                    <TableCell>{publisher?.name ?? "Unknown"}</TableCell>
                    <TableCell>{publisher.code}</TableCell>
                    <TableCell className="text-nowrap">
                      {dateHumanize(publisher.created_at)}
                      <br />
                      <span className="text-xs text-muted-foreground">
                        {toYearMonthDayHourMinute(publisher.created_at)}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex justify-center gap-2">
                        <Button variant="ghost">
                          <Link
                            href={route("web.categories.edit", publisher.id)}
                          >
                            <Edit height={18} />
                          </Link>
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => {
                            deletePublisher(publisher.id);
                          }}
                        >
                          <Trash height={18} />
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
            <PaginateInfo
              from={categories.from}
              to={categories.to}
              total={categories.total}
            />
            <div>
              <PaginationDemo links={categories.links} />
            </div>
          </div>
        </CardFooter>
      </Card>
    </DefaultLayout>
  );
};

export default Grade;
