import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from '../../../components/layout/AdminSidebar'
import AdminHeader from '../../../components/layout/AdminHeader'

const bookingsData = [
  {
    id: 'TB-1001',
    customer: 'John Smith',
    tour: 'Grand Canyon South Rim Dr',
    travelDate: 'Oct 15, 2023',
    pax: 2,
    total: '$298.00',
    payment: 'PAID',
    status: 'CONFIRMED',
    initials: 'JS',
    paymentColor: 'bg-emerald-100 text-emerald-700',
    statusColor: 'bg-emerald-100 text-emerald-700',
    avatarColor: 'bg-[#d9e8ff] text-[#2f5fd9]',
  },
  {
    id: 'TB-1002',
    customer: 'Dara Kim',
    tour: 'Eiffel Tower Summit Access',
    travelDate: 'Nov 02, 2023',
    pax: 4,
    total: '$340.00',
    payment: 'PENDING',
    status: 'PENDING',
    initials: 'DK',
    paymentColor: 'bg-amber-100 text-amber-700',
    statusColor: 'bg-amber-100 text-amber-700',
    avatarColor: 'bg-[#e5e7eb] text-[#4b5563]',
  },
  {
    id: 'TB-1003',
    customer: 'Sarah Lee',
    tour: 'Kyoto Temples Walking Tour',
    travelDate: 'Sep 28, 2023',
    pax: 1,
    total: '$85.00',
    payment: 'REFUNDED',
    status: 'CANCELLED',
    initials: 'SL',
    paymentColor: 'bg-red-100 text-red-600',
    statusColor: 'bg-red-100 text-red-600',
    avatarColor: 'bg-[#dbeafe] text-[#2563eb]',
  },
]

function Bookings() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [paymentFilters, setPaymentFilters] = useState({
    paid: true,
    pending: true,
    refunded: false,
  })

  return (
    <div className="bg-[#f4f6fb] min-h-screen text-slate-800">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

      <main className="md:ml-sidebar-width p-4 md:p-6 lg:p-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-7 flex items-center justify-between gap-4">
            <h1 className="text-[42px] font-black leading-none tracking-[-0.04em] text-[#1f2a44]">Manage Bookings</h1>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-[#cfd6e4] bg-white px-5 py-2 text-sm font-medium text-[#2a3348] shadow-sm transition hover:bg-slate-100"
              >
                <span className="material-symbols-outlined text-base">download</span>
                Export
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-[#1a52ce] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1f5fe8]"
              >
                <span className="material-symbols-outlined text-base">add</span>
                New Booking
              </button>
            </div>
          </div>

          <div className="mb-6 grid gap-5 xl:grid-cols-[1.9fr_0.9fr]">
            <section className="rounded-2xl border border-[#dfe5f0] bg-[#f2f5fa] p-5 shadow-sm">
              <h2 className="mb-5 text-[22px] font-bold text-[#1f2a44]">Filter &amp; Search</h2>

              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Search</label>
                  <div className="flex items-center rounded-xl border border-[#d3dae7] bg-white px-3 py-3 text-slate-500 shadow-sm">
                    <span className="material-symbols-outlined mr-2 text-lg">search</span>
                    <input
                      className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                      placeholder="Booking ID, Customer"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Date Range</label>
                  <div className="flex items-center rounded-xl border border-[#d3dae7] bg-white px-3 py-3 text-slate-500 shadow-sm">
                    <button
                      type="button"
                      className="mr-2 flex items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100"
                      onClick={() => document.getElementById('booking-date-range')?.showPicker?.() || document.getElementById('booking-date-range')?.focus()}
                      aria-label="Open calendar"
                    >
                      <span className="material-symbols-outlined text-lg">calendar_month</span>
                    </button>
                    <input
                      id="booking-date-range"
                      type="date"
                      className="w-full bg-transparent text-sm text-slate-700 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-600">Tour</label>
                  <div className="flex items-center rounded-xl border border-[#d3dae7] bg-white px-3 py-3 text-slate-500 shadow-sm">
                    <select className="w-full appearance-none bg-transparent pr-7 text-sm text-slate-700 focus:outline-none">
                      <option>All Tours</option>
                      <option>Grand Canyon South Rim Dr</option>
                      <option>Eiffel Tower Summit Access</option>
                    </select>
                    <span className="material-symbols-outlined text-base">expand_more</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="mr-2 font-medium text-slate-700">Status:</span>

                {[
                  { key: 'paid', label: 'Confirmed', checked: true },
                  { key: 'pending', label: 'Pending', checked: true },
                  { key: 'completed', label: 'Completed', checked: false },
                  { key: 'cancelled', label: 'Cancelled', checked: false },
                ].map((item) => (
                  <label key={item.key} className="inline-flex items-center gap-2">
                    <input type="checkbox" defaultChecked={item.checked} className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                    <span>{item.label}</span>
                  </label>
                ))}
              </div>
            </section>

            <aside className="rounded-2xl border border-[#dfe5f0] bg-[#f2f5fa] p-5 shadow-sm">
              <h2 className="mb-4 text-[22px] font-bold text-[#1f2a44]">Payment Status</h2>

              <div className="space-y-3 text-[17px] text-slate-700">
                {[
                  { label: 'Paid', value: 'paid', checked: true, dot: 'bg-emerald-500' },
                  { label: 'Pending', value: 'pending', checked: true, dot: 'bg-yellow-500' },
                  { label: 'Refunded', value: 'refunded', checked: false, dot: 'bg-slate-500' },
                ].map((entry) => (
                  <div key={entry.value} className="flex items-center justify-between rounded-xl bg-[#f7f9fd] px-3 py-2">
                    <div className="flex items-center gap-3">
                      <span className={`h-3 w-3 rounded-full ${entry.dot}`} />
                      <span>{entry.label}</span>
                    </div>
                    <input
                      type="checkbox"
                      defaultChecked={entry.checked}
                      className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <section className="rounded-2xl border border-[#dfe5f0] bg-[#f5f7fb] shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-0 text-left">
                <thead>
                  <tr className="bg-[#edf2f9] text-sm font-semibold text-[#3a465d]">
                    <th className="px-5 py-4">Booking ID</th>
                    <th className="px-5 py-4">Customer</th>
                    <th className="px-5 py-4">Tour</th>
                    <th className="px-5 py-4">Travel Date</th>
                    <th className="px-5 py-4">Pax</th>
                    <th className="px-5 py-4">Total</th>
                    <th className="px-5 py-4">Payment</th>
                    <th className="px-5 py-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookingsData.map((booking) => (
                    <tr key={booking.id} className="border-t border-[#e4eaf4] bg-white text-sm text-[#24314b]">
                      <td className="px-5 py-4 font-semibold" style={{ letterSpacing: '0.01em' }}>{booking.id}</td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <span className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${booking.avatarColor}`}>
                            {booking.initials}
                          </span>
                          <span>{booking.customer}</span>
                        </div>
                      </td>
                      <td className="px-5 py-4 text-slate-600">{booking.tour}</td>
                      <td className="px-5 py-4 text-slate-600">{booking.travelDate}</td>
                      <td className="px-5 py-4 text-slate-600">{booking.pax}</td>
                      <td className="px-5 py-4 font-medium text-slate-700">{booking.total}</td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${booking.paymentColor}`}>
                          {booking.payment}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${booking.statusColor}`}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-4 border-t border-[#e4eaf4] bg-[#f5f7fb] px-5 py-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-slate-500">Showing 1 to 3 of 124 entries</p>

              <div className="flex items-center gap-2">
                <button className="flex h-9 w-9 items-center justify-center rounded-md border border-[#d7deeb] bg-white text-slate-500 hover:bg-slate-50">&lt;</button>
                <button className="flex h-9 w-9 items-center justify-center rounded-md border border-[#d7deeb] bg-[#1f5fe8] text-white">1</button>
                <button className="flex h-9 w-9 items-center justify-center rounded-md border border-[#d7deeb] bg-white text-slate-600 hover:bg-slate-50">2</button>
                <button className="flex h-9 w-9 items-center justify-center rounded-md border border-[#d7deeb] bg-white text-slate-600 hover:bg-slate-50">3</button>
                <button className="flex h-9 w-9 items-center justify-center rounded-md border border-[#d7deeb] bg-white text-slate-600 hover:bg-slate-50">...</button>
                <button className="flex h-9 w-9 items-center justify-center rounded-md border border-[#d7deeb] bg-white text-slate-500 hover:bg-slate-50">&gt;</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Bookings