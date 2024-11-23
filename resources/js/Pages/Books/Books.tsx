import AlbumArtwork from "@/Components/Layout/Book";
import BookLayout from "@/Components/Layout/BookLayout";
import { useModal } from "@/Components/Login/LoginContext";
import PaginationDemo, {
  PaginateInfo,
} from "@/Components/Paginate/PaginateDemo";
import { ScrollArea, ScrollBar } from "@/Components/ui/scroll-area";
import { Separator } from "@/Components/ui/separator";
import { Tabs, TabsContent } from "@/Components/ui/tabs";
import { Head } from "@inertiajs/react";
import { Button } from "react-day-picker";

const BookPage = ({ books, recommendations }: any) => {
  console.log(books);

  return (
    <BookLayout>
      <Head title="Books" />
      <Tabs defaultValue="music" className="h-full space-y-6">
        <TabsContent value="music" className="p-0 border-none outline-none">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">Books</h2>
              <p className="text-sm text-muted-foreground">
                Improve your reading literacy today with our free reading
                resources.
              </p>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="relative">
            <div className="grid grid-cols-2 gap-2 pb-4 md:grid-cols-3 lg:grid-cols-4">
              {books.data?.map((album: any) => (
                <AlbumArtwork
                  key={album.name}
                  book={album}
                  className="w-[200px] md:w-[250px]"
                  aspectRatio="portrait"
                />
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
          <div className="mt-6 space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Made for You
            </h2>
            <p className="text-sm text-muted-foreground">
              Get better recommendations the more you read.
            </p>
          </div>
          <Separator className="my-4" />
          <div className="relative">
            <ScrollArea>
              <div className="flex pb-4 space-x-4">
                {recommendations?.map((album: any) => (
                  <AlbumArtwork
                    key={album.name}
                    book={album}
                    className="w-[150px]"
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
