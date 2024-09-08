import { Link, usePage } from "@inertiajs/react";
import {
  House,
  PanelLeftOpen,
  PanelRightOpen,
  ScanBarcode,
  ScanIcon,
  ShoppingCart,
  Users,
} from "lucide-react";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  sidebarExpanded: boolean;
  setSidebarExpanded: (arg: boolean) => void;
}

export default function Sidebar({
  sidebarExpanded,
  setSidebarExpanded,
}: Readonly<SidebarProps>) {
  const { url } = usePage();

  const isActive = (path: string) => {
    return url.startsWith(path);
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
        {SIDEBAR_ITEMS.map((item) => {
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

const SIDEBAR_ITEMS = [
  {
    href: "/home",
    icon: <House className="w-4 h-4" />,
    label: "Home",
    requiredRoles: ["admin finance", "user"],
    darkMode: false,
  },
  {
    href: "/members",
    icon: <Users className="w-4 h-4" />,
    label: "Members",
    requiredRoles: ["admin finance", "user"],
    darkMode: false,
  },
  {
    href: "/publishers",
    icon: <Users className="w-4 h-4" />,
    label: "Publishers",
    requiredRoles: ["admin finance", "user"],
    darkMode: false,
  },
  {
    href: "/borrowers",
    icon: <Users className="w-4 h-4" />,
    label: "Borrowers",
    requiredRoles: ["admin finance", "user"],
    darkMode: false,
  },
  {
    href: "/books",
    icon: <Users className="w-4 h-4" />,
    label: "Books",
    requiredRoles: ["admin finance", "user"],
    darkMode: false,
  },
  {
    href: "/reports",
    icon: <Users className="w-4 h-4" />,
    label: "Reports",
    requiredRoles: ["admin finance", "user"],
    darkMode: false,
  },
];
