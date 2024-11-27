import Header from "@/Components/Header/Header";
import Sidebar from "@/Components/Sidebar/Sidebar";
import { ThemeProvider } from "@/Components/ThemeProvider";
import { Toaster } from "@/Components/ui/sonner";
import AppSidebar from "@/Shared/Sidebar";
import store from "@/states";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import {
  SidebarInset,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "../ui/sidebar";
import { Separator } from "../ui/separator";
import { BreadcrumbWithCustomSeparator } from "../Breadcrumb/BreadcrumbLinks";
import { useForm, usePage } from "@inertiajs/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { BadgeCheck, ChevronsUpDown, LogOut } from "lucide-react";

const getInitialSidebarState = () => {
  const storedValue = localStorage.getItem("sidebarExpanded");
  return storedValue ? JSON.parse(storedValue) : true;
};

export default function DefaultLayout({ children }: any) {
  const { post } = useForm({});
  const { props }: any = usePage();
  const [sidebarExpanded, setSidebarExpanded] = useState(
    getInitialSidebarState
  );

  const signOut = () => {
    post(route("web.auth.logout"));
  };

  // Update local storage whenever the state changes
  useEffect(() => {
    localStorage.setItem("sidebarExpanded", JSON.stringify(sidebarExpanded));
  }, [sidebarExpanded]);

  return (
    // <Provider store={store}>
    //   <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    //     <div>
    //       <div className="flex h-screen overflow-hidden">
    //         <Sidebar
    //           sidebarExpanded={sidebarExpanded}
    //           setSidebarExpanded={setSidebarExpanded}
    //         />
    //         <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
    //           <Header />
    //           <main>
    //             <div className="p-4 mx-auto max-w-screen md:p-4 2xl:p-4">
    //               {children}
    //             </div>
    //           </main>
    //         </div>
    //       </div>
    //     </div>
    //     <Toaster richColors />
    //   </ThemeProvider>
    // </Provider>

    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 me-8 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-4 mr-2" />

            {/* <BreadcrumbWithCustomSeparator /> */}
          </div>
          <div className="flex justify-end w-full">
            <div className="w-48">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <Avatar className="w-8 h-8 rounded-lg">
                      <AvatarImage src="/logo.png" alt={props?.auth?.name} />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-sm leading-tight text-left">
                      <span className="font-semibold truncate">
                        {props?.auth.name}
                      </span>
                      <span className="text-xs truncate">
                        {props?.auth.email}
                      </span>
                    </div>
                    <ChevronsUpDown className="ml-auto size-4" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  side="bottom"
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="w-8 h-8 rounded-lg">
                        <AvatarImage src="/logo.png" alt={props?.auth.name} />
                        <AvatarFallback className="rounded-lg">
                          CN
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-sm leading-tight text-left">
                        <span className="font-semibold truncate">
                          {props?.auth.name}
                        </span>
                        <span className="text-xs truncate">
                          {props?.auth.email}
                        </span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <BadgeCheck />
                      Account
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut />
                    Keluar
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <main>
          <div className="pt-0 pb-4 pl-6 pr-8">{children}</div>
        </main>
      </SidebarInset>
      <Toaster />
    </SidebarProvider>
  );
}
