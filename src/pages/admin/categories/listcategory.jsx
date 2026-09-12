import React from "react";
import {
  Download,
  Plus,
  Search,
  ChevronDown,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Bell,
  Mail,
} from "lucide-react";

const customers = [
  {
    id: "CUST-001",
    initials: "ER",
    avatarBg: "bg-slate-200",
    avatarText: "text-slate-500",
    photo: true,
    name: "Eleanor Richards",
  },
  {
    id: "CUST-002",
    initials: "MW",
    avatarBg: "bg-violet-100",
    avatarText: "text-violet-600",
    photo: false,
    name: "Marcus Webb",
  },
  {
    id: "CUST-003",
    initials: "SC",
    avatarBg: "bg-slate-200",
    avatarText: "text-slate-500",
    photo: true,
    name: "Sophia Chen",
  },
];

function Avatar({ customer }) {
  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full text-xs font-semibold ${customer.avatarBg} ${customer.avatarText}`}
    >
      {customer.photo ? (
        <div className="h-full w-full bg-gradient-to-br from-slate-300 to-slate-400" />
      ) : (
        customer.initials
      )}
    </div>
  );
}

export default function ManageCustomers() {
  return (
    <div className="min-h-screen w-full bg-[#eef0f7]">
      <header className="h-16 border-b border-slate-200 bg-white px-5">
        <div className="flex h-full items-center justify-between">
          <div className="relative w-full max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
            />
          </div>

          <div className="ml-6 flex h-full items-center">
            <button className="relative flex h-10 w-10 items-center justify-center text-slate-500 hover:text-slate-700">
              <Bell className="h-5 w-5" />
            </button>

            <button className="flex h-10 w-10 items-center justify-center text-slate-500 hover:text-slate-700">
              <Mail className="h-5 w-5" />
            </button>

            <div className="mx-3 h-8 w-px bg-slate-200" />

            <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-slate-50">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-slate-100">
                <span className="text-xs font-semibold text-slate-600">
                  A
                </span>
              </div>

              <span className="text-sm font-medium text-slate-700">
                Admin Profile
              </span>

              <ChevronDown className="h-4 w-4 text-slate-500" />
            </button>
          </div>
        </div>
      </header>

      <div className="w-full p-6 sm:p-10">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Manage Category
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                View and manage categories and their details.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50">
                <Download className="h-4 w-4" />
                Export
              </button>


              <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700">
                <Plus className="h-4 w-4" />
                Add Customer
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-4 flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                placeholder="Search customers by name, email or phone..."
                className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            <button className="inline-flex items-center justify-between gap-6 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600 sm:w-40">
              All Statuses
              <ChevronDown className="h-4 w-4 text-slate-400" />
            </button>

            <button className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
              <SlidersHorizontal className="h-4 w-4" />
              More Filters
            </button>
          </div>

          {/* Table */}
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] text-left">
                <thead>
                  <tr className="border-b border-slate-100 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    <th className="px-6 py-3 font-semibold">ID</th>
                    <th className="px-6 py-3 font-semibold">Name</th>
                    <th className="px-6 py-3 text-right font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {customers.map((c, i) => (
                    <tr
                      key={c.name}
                      className={
                        i !== customers.length - 1
                          ? "border-b border-slate-100"
                          : ""
                      }
                    >
                      <td className="px-6 py-4 text-sm text-slate-500">
                        {c.id}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar customer={c} />
                          <span className="text-sm font-medium text-slate-800">
                            {c.name}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex justify-end">
                          <button className="rounded-md p-1.5 text-slate-400 hover:bg-slate-50 hover:text-slate-600">
                            <MoreHorizontal className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between border-t border-slate-100 px-6 py-4">
              <span className="text-sm text-slate-500">
                Showing 1 to 3 of 156 customers
              </span>


              <div className="flex items-center gap-1.5">
                <button className="flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-50">
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <button className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-600 text-sm font-medium text-white">
                  1
                </button>

                <button className="flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50">
                  2
                </button>

                <button className="flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium text-slate-600 hover:bg-slate-50">
                  3
                </button>

                <span className="px-1 text-sm text-slate-400">...</span>

                <button className="flex h-8 w-8 items-center justify-center rounded-md text-slate-400 hover:bg-slate-50">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
