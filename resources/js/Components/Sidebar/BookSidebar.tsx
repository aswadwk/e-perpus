import { Link, usePage } from "@inertiajs/react";
import { Button } from "../ui/button";
import { cn } from "@/Lib/utils";
import { BookCopyIcon, History, Settings2 } from "lucide-react";

export function Sidebar({ className }: any) {
  const { url, props }: any = usePage();

  function isActive(path: string): string {
    return url.startsWith(path);
  }

  return (
    <div className={cn("", className)}>
      <div className="relative h-screen py-4 space-y-4">
        <div className="px-3 py-2">
          <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
            Discover
          </h2>
          <div className="space-y-1">
            <Link href="/books">
              <Button
                variant={isActive("/books") ? "secondary" : "ghost"}
                className="justify-start w-full"
              >
                <BookCopyIcon className="w-4 h-4 mr-2" />
                Buku
              </Button>
            </Link>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
            Library
          </h2>
          <div className="space-y-1">
            <Link href="/histories">
              <Button
                variant={isActive("/histories") ? "secondary" : "ghost"}
                className="justify-start w-full"
              >
                <History className="w-4 h-4 mr-2" />
                Histori Peminjaman
              </Button>
            </Link>
          </div>
        </div>
        {/* <div className="py-2">
          <h2 className="relative text-lg font-semibold tracking-tight px-7">
            Playlists
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="p-2 space-y-1">
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="justify-start w-full font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 mr-2"
                  >
                    <path d="M21 15V6" />
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div> */}
        <div className="px-3 py-2">
          <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">
            Setting
          </h2>
          <Link href="/setting">
            <Button
              variant={isActive("/setting") ? "secondary" : "ghost"}
              className="justify-start w-full"
            >
              <Settings2 className="w-4 h-4 mr-2" />
              Akun
            </Button>
          </Link>
        </div>
      </div>

      {/* fixed */}
    </div>
  );
}
