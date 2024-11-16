import Header from "@/Components/Header/Header";
import Sidebar from "@/Components/Sidebar/Sidebar";
import { ThemeProvider } from "@/Components/ThemeProvider";
import { Toaster } from "@/Components/ui/sonner";
import AppSidebar from "@/Shared/Sidebar";
import store from "@/states";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";

const getInitialSidebarState = () => {
  const storedValue = localStorage.getItem("sidebarExpanded");
  return storedValue ? JSON.parse(storedValue) : true;
};

export default function DefaultLayout({ children }: any) {
  const [sidebarExpanded, setSidebarExpanded] = useState(
    getInitialSidebarState
  );

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
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-4 mr-2" />

            {/* <BreadcrumbWithCustomSeparator /> */}
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
