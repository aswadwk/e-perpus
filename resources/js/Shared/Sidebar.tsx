import { ChevronRight, Database, Home } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/Components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/Components/ui/sidebar";
import { Link, useForm, usePage } from "@inertiajs/react";
// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/logo.png",
  },
  navMain: [
    // {
    //   title: "Catalog",
    //   url: "admin/home",
    //   icon: Home,
    //   isActive: true,
    // },
    {
      title: "Master",
      url: "#",
      icon: Database,
      isActive: true,
      items: [
        {
          title: "Admin",
          url: "/admin/admins",
        },
        {
          title: "Kelas",
          url: "/admin/grades",
        },
        {
          title: "Kategori",
          url: "/admin/categories",
        },
        {
          title: "Anggota",
          url: "/admin/members",
        },
        {
          title: "Publisher",
          url: "/admin/publishers",
        },
        {
          title: "Peminjaman",
          url: "/admin/histories",
        },
        {
          title: "Buku",
          url: "/admin/books",
        },
      ],
    },
  ],
  sales: [
    {
      name: "Home",
      url: "/admin/home",
      icon: Home,
    },
  ],
};

const AppSidebar = () => {
  const { post } = useForm({});

  const signOut = () => {
    post(route("web.auth.logout"));
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex items-center justify-center rounded-lg aspect-square size-8 text-sidebar-primary-foreground">
                <img
                  src="/logo.png"
                  alt="logo"
                  className="text-red-500"
                  width={32}
                  height={32}
                />
              </div>
              <div className="grid flex-1 text-sm leading-tight text-left">
                <span className="text-xl font-semibold truncate text-primary">
                  Ruang Baca
                </span>
                <span className="text-xs truncate text-wrap">
                  Jurusan Administrasi Niaga
                </span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <SidebarMenu>
            {data.sales.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Master</SidebarGroupLabel>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link href={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      {/* <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="w-8 h-8 rounded-lg">
                    <AvatarImage
                      src={data.user.avatar}
                      alt={props?.auth?.name}
                    />
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
                      <AvatarImage
                        src={data.user.avatar}
                        alt={props?.auth.name}
                      />
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
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
};

export default AppSidebar;
