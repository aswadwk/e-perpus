import AlbumArtwork from "@/Components/Layout/Book";
import BookLayout from "@/Components/Layout/BookLayout";
import PaginationDemo, {
  PaginateInfo,
} from "@/Components/Paginate/PaginateDemo";
import { Input } from "@/Components/ui/input";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import { Separator } from "@/Components/ui/separator";
import { Tabs, TabsContent } from "@/Components/ui/tabs";
import { removeEmptyValues } from "@/Shared/utils";
import { Head, router } from "@inertiajs/react";
import { debounce } from "lodash";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Button } from "react-day-picker";
import { Search } from "lucide-react";
import BookItem from "@/Components/Layout/Book";

const BookPage = ({ books, recommendations }: any) => {
  console.log(books);
  const [filters, setFilters] = useState<any>({
    per_page: 10,
    search: "",
    with_trashed: false,
  });

  const firstRender = useRef(true);

  const debouncedSearch = useRef(
    debounce((searchFilter: any) => {
      let newFilter = removeEmptyValues({
        ...searchFilter,
      });

      router.get(
        route("web.books.index"),
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

  return (
    <BookLayout>
      <Head title="Books" />
      <Tabs defaultValue="music" className="h-full space-y-6">
        <TabsContent value="music" className="p-0 border-none outline-none">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="space-y-1 text-center md:text-left">
              <h2 className="text-2xl font-semibold tracking-tight">Buku</h2>
              <p className="text-sm text-muted-foreground">
                Tingkatkan literasi Anda dengan membaca buku.
              </p>
            </div>
            <div className="relative mt-4 md:mt-0 w-full md:w-auto">
              <Input
                placeholder="Search "
                onChange={(e) => {
                  setFilters({
                    ...filters,
                    search: e.target.value,
                  });
                }}
                className="w-full md:w-[250px] pl-10"
                value={filters.search}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <Separator className="my-4" />
          <div className="relative">
            <div className="grid grid-cols-2 gap-2 pb-4 sm:grid-cols-3 lg:grid-cols-4">
              {books.data?.map((album: any) => (
                <Card key={album.name} className="w-full">
                  <CardContent>
                    <BookItem
                      book={album}
                      className="w-full transition-transform transform hover:scale-105"
                      aspectRatio="portrait"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col items-center justify-between w-full gap-2 md:flex-row">
              <PaginateInfo
                from={books.from}
                to={books.to}
                total={books.total}
              />
              <div>
                <PaginationDemo links={books.links} />
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-1 text-center md:text-left">
            <h2 className="text-2xl font-semibold tracking-tight">
              Rekomendasi Buku
            </h2>
            <p className="text-sm text-muted-foreground">
              Rekomendasi buku yang mungkin Anda sukai.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="relative bg-gray-50 p-4 rounded-md">
            <ScrollArea>
              <div className="flex pb-4 space-x-4 overflow-x-auto">
                {recommendations?.map((album: any) => (
                  <AlbumArtwork
                    key={album.name}
                    book={album}
                    className="w-[150px] flex-shrink-0 transition-transform transform hover:scale-105"
                    aspectRatio="portrait"
                    width={150}
                    height={300}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </TabsContent>
      </Tabs>
    </BookLayout>
  );
};

export default BookPage;
