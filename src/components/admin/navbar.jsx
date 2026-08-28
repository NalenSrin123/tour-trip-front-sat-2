import { Search, Bell, Mail, ChevronDown } from "lucide-react";

function Navbar({
  user = {
    name: "Admin",
    role: "Administrator",
    avatar: null,
    initial: "A",
  },
  onSearch,
  onNotification,
  onMail,
  onProfile,
}) {
  return (
    <header className="sticky top-0 z-40 flex h-[76px] items-center justify-between border-b border-slate-200 bg-white px-6">
      {/* ================= LEFT ================= */}
      <div className="flex items-center">
        {/* Search */}
        <div className="relative w-80">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            onChange={onSearch}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-100"
          />
        </div>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="flex items-center gap-2">
        {/* Notification */}
        <button
          onClick={onNotification}
          className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <Bell size={19} />

          {/* Notification badge */}
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>

        {/* Mail */}
        <button
          onClick={onMail}
          className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <Mail size={19} />

          {/* Mail badge */}
          <span className="absolute right-2 top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-indigo-600 px-1 text-[9px] font-bold text-white ring-2 ring-white">
            3
          </span>
        </button>

        {/* Divider */}
        <div className="mx-2 h-8 w-px bg-slate-200" />

        {/* Profile */}
        <button
          onClick={onProfile}
          className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-slate-50"
        >
          {/* Avatar */}
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="h-9 w-9 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-600">
              {user.initial}
            </div>
          )}

          {/* User information */}
          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-slate-800">{user.name}</p>

            <p className="text-[11px] text-slate-400">{user.role}</p>
          </div>

          {/* Arrow */}
          <ChevronDown size={16} className="text-slate-400" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
