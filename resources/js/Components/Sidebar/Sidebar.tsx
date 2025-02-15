import { Link, usePage } from "@inertiajs/react";
import {
  Book,
  Factory,
  History,
  House,
  PanelLeftOpen,
  PanelRightOpen,
  Users,
} from "lucide-react";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  sidebarExpanded: boolean;
  setSidebarExpanded: (arg: boolean) => void;
}

function checkRole(role: string, menus: SidebarItem[]) {
  return menus.filter((menu) => {
    return menu.requiredRoles.includes(role);
  });
}

export default function Sidebar({
  sidebarExpanded,
  setSidebarExpanded,
}: Readonly<SidebarProps>) {
  const { url, props }: any = usePage();

  const isActive = (path: string) => {
    return url.replace("/admin", "").startsWith(path.replace("/admin", ""));
  };

  return (
    <aside
      className={`fixed hidden left-0 top-0 z-40 lg:flex inset-y-0 flex-col transition-all duration-300 ease-in-out bg-background shadow-lg border-r dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarExpanded ? "w-14" : "w-52"
      }`}
    >
      <div className="flex items-center justify-center pt-3 pb-5">
        <Link
          href="/"
          className={`${
            sidebarExpanded ? "h-9 w-9" : ""
          } flex shrink-0 items-center justify-center gap-2 rounded-lg`}
        >
          {sidebarExpanded ? (
            <img width={84} height={84} src="/logomark.min.svg" alt="Logo" />
          ) : (
            <img width={84} height={84} src="/logomark.min.svg" alt="Logo" />
          )}
        </Link>
      </div>

      <nav className="flex flex-col w-full px-2 space-y-1">
        {checkRole(props?.auth?.role, SIDEBAR_ITEMS).map((item) => {
          return (
            <SidebarItem
              key={item.href}
              link={item.href}
              icon={item.icon}
              label={item.label}
              isActive={isActive(item.href)}
              sidebarExpanded={sidebarExpanded}
            />
          );
        })}
      </nav>
      <nav className="flex flex-col items-end gap-4 px-2 mt-auto mr-3 sm:py-4">
        <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
          {sidebarExpanded ? (
            <PanelLeftOpen size={20} />
          ) : (
            <PanelRightOpen size={20} />
          )}
        </button>
      </nav>
    </aside>
  );
}

type SidebarItem = {
  href: string;
  icon: JSX.Element;
  label: string;
  requiredRoles: string[];
  darkMode: boolean;
};

const SIDEBAR_ITEMS = [
  {
    href: "/admin/home",
    icon: <House className="w-4 h-4" />,
    label: "Beranda",
    requiredRoles: ["super admin", "admin", "user"],
    darkMode: false,
  },
  {
    href: "/admin/admins",
    icon: <Users className="w-4 h-4" />,
    label: "Admin",
    requiredRoles: ["super admin"],
    darkMode: false,
  },
  {
    href: "/admin/grades",
    icon: <Users className="w-4 h-4" />,
    label: "Kelas",
    requiredRoles: ["super admin", "admin"],
    darkMode: false,
  },
  {
    href: "/admin/categories",
    icon: <Users className="w-4 h-4" />,
    label: "Kategori",
    requiredRoles: ["super admin", "admin"],
    darkMode: false,
  },
  {
    href: "/admin/members",
    icon: <Users className="w-4 h-4" />,
    label: "Pengguna",
    requiredRoles: ["super admin", "admin"],
    darkMode: false,
  },
  {
    href: "/admin/publishers",
    icon: <Factory className="w-4 h-4" />,
    label: "Publisher",
    requiredRoles: ["super admin", "admin"],
    darkMode: false,
  },
  {
    href: "/admin/histories",
    icon: <History className="w-4 h-4" />,
    label: "Peminjaman",
    requiredRoles: ["super admin", "admin"],
    darkMode: false,
  },
  {
    href: "/admin/books",
    icon: <Book className="w-4 h-4" />,
    label: "Buku",
    requiredRoles: ["super admin", "admin", "user"],
    darkMode: false,
  },
];
