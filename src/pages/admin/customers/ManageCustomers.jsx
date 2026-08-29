import React from "react";
import {
  Download,
  Search,
  ChevronDown,
  ListFilter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ManageCustomers = () => {
  // Mock data based on the image provided
  const customers = [
    {
      id: 1,
      name: "Eleanor Richards",
      avatar: null,
      initials: "ER",
      initialsBg: "bg-blue-100 text-blue-700",
      email: "eleanor.r@example.com",
      phone: "+1 (555) 123-4567",
      bookings: 12,
      spent: "$4,250.00",
      status: "Active",
      joined: "Mar 12, 2023",
    },
    {
      id: 2,
      name: "Marcus Webb",
      avatar: null,
      initials: "MW",
      initialsBg: "bg-purple-100 text-purple-700",
      email: "m.webb89@example.com",
      phone: "+44 7700 900077",
      bookings: 3,
      spent: "$850.50",
      status: "Inactive",
      joined: "Jun 05, 2022",
    },
    {
      id: 3,
      name: "Sophia Chen",
      avatar: null,
      initials: "SC",
      initialsBg: "bg-emerald-100 text-emerald-700",
      email: "schen.travels@example.com",
      phone: "+1 (555) 987-6543",
      bookings: 24,
      spent: "$12,400.00",
      status: "Active",
      joined: "Jan 18, 2021",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FD] p-4 sm:p-8 font-sans text-slate-900">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* --- Header Section --- */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
              Manage Customers
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              View and manage user accounts, booking history, and status.
            </p>
          </div>
          <div className="flex w-full items-center gap-3 sm:w-auto">
            <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 sm:flex-none">
              <Download className="h-4 w-4" />
              Export
            </button>
            <button className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:flex-none">
              + Add Customer
            </button>
          </div>
        </div>

        {/* --- Filter / Search Bar --- */}
        <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:flex-row md:items-center md:gap-4">
          <div className="relative w-full md:flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Search customers by name, email or phone..."
            />
          </div>

          <div className="flex w-full gap-3 md:w-auto">
            <button className="flex flex-1 items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 md:min-w-35 md:flex-none">
              All Statuses
              <ChevronDown className="h-4 w-4 text-slate-500" />
            </button>

            <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 md:border-transparent bg-white px-3 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-900 md:flex-none md:justify-start">
              <ListFilter className="h-4 w-4" />
              More Filters
            </button>
          </div>
        </div>

        {/* --- Data Table --- */}
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-200 text-left text-sm">
              <thead className="bg-[#F8FAFC] text-xs font-semibold uppercase tracking-wider text-slate-500 border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Contact</th>
                  <th className="px-6 py-4">Bookings</th>
                  <th className="px-6 py-4">Total Spent</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Joined</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {customers.map((customer) => (
                  <tr
                    key={customer.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    {/* Customer Info */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        {customer.avatar ? (
                          <img
                            src={customer.avatar}
                            alt={customer.name}
                            className="h-10 w-10 rounded-full object-cover border border-slate-100"
                          />
                        ) : (
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold ${customer.initialsBg}`}
                          >
                            {customer.initials}
                          </div>
                        )}
                        <span className="font-medium text-slate-900">
                          {customer.name}
                        </span>
                      </div>
                    </td>

                    {/* Contact Info */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-slate-800">{customer.email}</span>
                        <span className="mt-0.5 text-xs text-slate-500">
                          {customer.phone}
                        </span>
                      </div>
                    </td>

                    {/* Bookings */}
                    <td className="px-6 py-4 whitespace-nowrap text-slate-700">
                      {customer.bookings}
                    </td>

                    {/* Total Spent */}
                    <td className="px-6 py-4 whitespace-nowrap text-slate-700">
                      {customer.spent}
                    </td>

                    {/* Status Badge */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium
                        ${
                          customer.status === "Active"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-red-50 text-red-600"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>

                    {/* Joined Date */}
                    <td className="px-6 py-4 whitespace-nowrap text-slate-600">
                      {customer.joined.split(", ")[0]},<br />
                      {customer.joined.split(", ")[1]}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      {/* Placeholder for actions like a dropdown menu */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* --- Pagination Footer --- */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 bg-white px-6 py-4 sm:flex-row sm:gap-0">
            <p className="text-sm text-slate-500 text-center sm:text-left">
              Showing 1 to 3 of 156 customers
            </p>
            <div className="flex items-center gap-1">
              <button className="flex h-8 w-8 items-center justify-center rounded text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-sm font-medium text-white">
                1
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                2
              </button>
              <button className="flex h-8 w-8 items-center justify-center rounded text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors">
                3
              </button>
              <span className="flex h-8 w-8 items-center justify-center text-sm text-slate-500">
                ...
              </span>
              <button className="flex h-8 w-8 items-center justify-center rounded text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCustomers;