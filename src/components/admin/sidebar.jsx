import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Map,
  Tags,
  MapPin,
  BriefcaseBusiness,
  CalendarDays,
  Ticket,
  Users,
  Star,
  BarChart3,
  WalletCards,
  Settings,
  CircleHelp,
  UserCircle,
  LogOut,
} from "lucide-react";

const mainMenu = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Tours",
    path: "/tours",
    icon: Map,
  },
  {
    name: "Categories",
    path: "/categories",
    icon: Tags,
  },
  {
    name: "Destinations",
    path: "/destinations",
    icon: MapPin,
  },
  {
    name: "Guides",
    path: "/guides",
    icon: BriefcaseBusiness,
  },
  {
    name: "Schedules",
    path: "/schedules",
    icon: CalendarDays,
  },
  {
    name: "Bookings",
    path: "/bookings",
    icon: Ticket,
  },
  {
    name: "Customers",
    path: "/customers",
    icon: Users,
  },
  {
    name: "Reviews",
    path: "/reviews",
    icon: Star,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: BarChart3,
  },
  {
    name: "Payments",
    path: "/payments",
    icon: WalletCards,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const bottomMenu = [
  {
    name: "Help",
    path: "/help",
    icon: CircleHelp,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: UserCircle,
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-[220px] bg-[#454857] ">
      {/* Sidebar panel */}
      <div className="flex h-full flex-col bg-[#f9f9ff]">
        {/* LOGO */}
        <div className="px-5 pt-4 pb-5">
          <div className="flex items-center gap-2.5">
            {/* Logo */}
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#2864df] text-white">
              <span className="text-[11px] font-bold">TB</span>
            </div>

            {/* Brand */}
            <div className="leading-none">
              <h1 className="text-[16px] font-bold text-[#1d5bd7]">TourBook</h1>
              <p className="mt-0.5 text-[8px] font-medium text-slate-500">
                Admin Console
              </p>
            </div>
          </div>
        </div>

        {/*  MAIN MENU  */}
        <nav className="flex-1 px-2">
          <div className="space-y-[2px]">
            {mainMenu.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `group relative flex h-[34px] items-center gap-3 rounded-md px-3 text-[10px] font-medium transition-colors ${
                      isActive
                        ? "bg-[#e9f0ff] text-[#145bd7]"
                        : "text-[#505363] hover:bg-[#eef0f7] hover:text-[#202331]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      
                      {isActive && (
                        <span className="absolute right-0 top-0 h-full w-[2px] rounded-l bg-[#145bd7]" />
                      )}

                      <Icon
                        size={14}
                        strokeWidth={1.8}
                        className={
                          isActive ? "text-[#145bd7]" : "text-[#4e5364]"
                        }
                      />

                      <span>{item.name}</span>
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/*  BOTTOM MENU  */}
        <div className="px-2 pb-4">
          {/* Divider */}
          <div className="mb-2 border-t border-slate-200" />

          <div className="space-y-[2px]">
            {bottomMenu.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex h-[34px] items-center gap-3 rounded-md px-3 text-[10px] font-medium transition-colors ${
                      isActive
                        ? "bg-[#e9f0ff] text-[#145bd7]"
                        : "text-[#505363] hover:bg-[#eef0f7]"
                    }`
                  }
                >
                  <Icon size={14} strokeWidth={1.8} />

                  <span>{item.name}</span>
                </NavLink>
              );
            })}

            {/* Logout */}
            <button
              type="button"
              className="flex h-[34px] w-full items-center gap-3 rounded-md px-3 text-[10px] font-medium text-red-500 transition-colors hover:bg-red-50"
              onClick={() => console.log("Logout")}
            >
              <LogOut size={14} strokeWidth={1.8} />

              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
