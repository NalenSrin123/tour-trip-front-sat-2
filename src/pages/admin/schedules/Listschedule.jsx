import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    CalendarDays,
    ChevronLeft,
    ChevronRight,
    Filter,
    MapPin,
    Pencil,
    Plus,
    Search,
    Trash2,
    UserRound,
    Eye,
} from 'lucide-react'
import AdminHeader from '../../../components/layout/AdminHeader'
import AdminSidebar from '../../../components/layout/AdminSidebar'

const scheduleData = [
    {
        id: 1,
        date: '09/03/2026',
        day: 'Thu',
        tour: 'Mountain Hike Expr',
        duration: 'Half Day',
        time: '08:00 AM - 12:00 PM',
        guide: 'Mike T.',
        destination: 'Old Town',
        capacity: 12,
        bookings: 8,
        status: 'Available',
        image:
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 2,
        date: '09/03/2026',
        day: 'Thu',
        tour: 'Waterfall Adventure',
        duration: 'Full Day',
        time: '08:30 AM - 04:30 PM',
        guide: 'Sara L.',
        destination: 'Waterfall Park',
        capacity: 10,
        bookings: 10,
        status: 'Full',
        image:
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 3,
        date: '09/04/2026',
        day: 'Fri',
        tour: 'Temple Discovery',
        duration: 'Full Day',
        time: '07:30 AM - 05:00 PM',
        guide: 'David K.',
        destination: 'Angkor Wat',
        capacity: 15,
        bookings: 6,
        status: 'Available',
        image:
            'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 4,
        date: '09/05/2026',
        day: 'Sat',
        tour: 'Lake Cruise',
        duration: 'Half Day',
        time: '09:00 AM - 01:00 PM',
        guide: 'Sokha P.',
        destination: 'Tonle Sap',
        capacity: 8,
        bookings: 8,
        status: 'Full',
        image:
            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 5,
        date: '09/06/2026',
        day: 'Sun',
        tour: 'Cultural Village',
        duration: 'Half Day',
        time: '09:30 AM - 01:30 PM',
        guide: 'Rithy S.',
        destination: 'Kampong Phluk',
        capacity: 12,
        bookings: 4,
        status: 'Available',
        image:
            'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 6,
        date: '09/07/2026',
        day: 'Mon',
        tour: 'Beach Getaway',
        duration: 'Full Day',
        time: '08:00 AM - 04:00 PM',
        guide: 'Vann D.',
        destination: 'Sihanoukville',
        capacity: 20,
        bookings: 20,
        status: 'Closed',
        image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 7,
        date: '09/08/2026',
        day: 'Tue',
        tour: 'Floating Village',
        duration: 'Half Day',
        time: '09:00 AM - 01:00 PM',
        guide: 'Chenda R.',
        destination: 'Kampong Phluk',
        capacity: 10,
        bookings: 3,
        status: 'Available',
        image:
            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=300&q=80',
    },
    {
        id: 8,
        date: '09/09/2026',
        day: 'Wed',
        tour: 'Sunset View',
        duration: 'Half Day',
        time: '03:00 PM - 06:00 PM',
        guide: 'Mike T.',
        destination: 'Phnom Bakheng',
        capacity: 14,
        bookings: 9,
        status: 'Available',
        image:
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=300&q=80',
    },
]

const statusStyles = {
    Available: 'bg-blue-100 text-blue-700 ring-1 ring-blue-200',
    Full: 'bg-rose-100 text-rose-700 ring-1 ring-rose-200',
    Closed: 'bg-slate-200 text-slate-700 ring-1 ring-slate-300',
}

export default function ListSchedule() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [search, setSearch] = useState('')

    const filteredSchedules = useMemo(() => {
        const query = search.trim().toLowerCase()

        if (!query) return scheduleData

        return scheduleData.filter((schedule) => {
            return (
                schedule.tour.toLowerCase().includes(query) ||
                schedule.guide.toLowerCase().includes(query) ||
                schedule.destination.toLowerCase().includes(query)
            )
        })
    }, [search])

    return (
        <div className="min-h-screen bg-[#f4f6fb] text-slate-800">
            <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

            <main className="p-4 md:p-6 lg:p-8 md:ml-[240px]">
                <div className="mx-auto max-w-[1400px]">
                    <div className="mb-6 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700 shadow-sm">
                                <CalendarDays className="h-5 w-5" />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold tracking-tight text-slate-800">Schedules</h1>
                                <p className="text-sm text-slate-500">Manage tour schedules and availability</p>
                            </div>
                        </div>

                        <Link
                            to="/schedules/create"
                            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                        >
                            <Plus className="h-4 w-4" />
                            Add New Schedule
                        </Link>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                        <div className="flex flex-col gap-3 border-b border-slate-200 bg-slate-50/80 p-3 lg:flex-row lg:items-center">
                            <div className="relative flex-1">
                                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(event) => setSearch(event.target.value)}
                                    placeholder="Search schedules..."
                                    className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm text-slate-700 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                                />
                            </div>

                            <div className="flex flex-wrap items-center gap-3">
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm transition hover:bg-slate-50"
                                >
                                    <CalendarDays className="h-4 w-4" />
                                    Select date range
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm transition hover:bg-slate-50"
                                >
                                    <Filter className="h-4 w-4" />
                                    Availability
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm transition hover:bg-slate-50"
                                >
                                    <UserRound className="h-4 w-4" />
                                    Guide
                                </button>
                                <button
                                    type="button"
                                    className="text-sm font-medium text-slate-500 transition hover:text-slate-700"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-[1200px] w-full border-separate border-spacing-0">
                                <thead className="bg-slate-50 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                                    <tr>
                                        <th className="px-4 py-3">Date</th>
                                        <th className="px-4 py-3">Tour</th>
                                        <th className="px-4 py-3">Start - End</th>
                                        <th className="px-4 py-3">Guide</th>
                                        <th className="px-4 py-3">Destination</th>
                                        <th className="px-4 py-3">Capacity</th>
                                        <th className="px-4 py-3">Bookings</th>
                                        <th className="px-4 py-3">Status</th>
                                        <th className="px-4 py-3 text-center">Actions</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y divide-slate-200 bg-white text-sm text-slate-700">
                                    {filteredSchedules.map((schedule) => (
                                        <tr key={schedule.id} className="transition hover:bg-slate-50/80">
                                            <td className="border-t border-slate-200 px-4 py-4 align-middle">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-12 w-12 overflow-hidden rounded-lg border border-slate-200 bg-slate-100">
                                                        <img
                                                            src={schedule.image}
                                                            alt={schedule.tour}
                                                            className="h-full w-full object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="font-medium text-slate-800">{schedule.date}</div>
                                                        <div className="text-xs text-slate-500">{schedule.day}</div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="border-t border-slate-200 px-4 py-4 align-middle">
                                                <div className="font-medium text-slate-800">{schedule.tour}</div>
                                                <div className="text-xs text-slate-500">{schedule.duration}</div>
                                            </td>

                                            <td className="border-t border-slate-200 px-4 py-4 align-middle text-slate-600">
                                                {schedule.time}
                                            </td>

                                            <td className="border-t border-slate-200 px-4 py-4 align-middle">
                                                <div className="flex items-center gap-2">
                                                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                                                        <UserRound className="h-3.5 w-3.5" />
                                                    </span>
                                                    <span>{schedule.guide}</span>
                                                </div>
                                            </td>

                                            <td className="border-t border-slate-200 px-4 py-4 align-middle">
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4 text-slate-400" />
                                                    <span>{schedule.destination}</span>
                                                </div>
                                            </td>

                                            <td className="border-t border-slate-200 px-4 py-4 align-middle">{schedule.capacity}</td>
                                            <td className="border-t border-slate-200 px-4 py-4 align-middle">{schedule.bookings}</td>

                                            <td className="border-t border-slate-200 px-4 py-4 align-middle">
                                                <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[schedule.status]}`}>
                                                    {schedule.status}
                                                </span>
                                            </td>

                                            <td className="border-t border-slate-200 px-4 py-4 align-middle">
                                                <div className="flex items-center justify-center gap-2">
                                                    <button
                                                        type="button"
                                                        aria-label="View schedule"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
                                                    >
                                                        <Eye className="h-4 w-4" />
                                                    </button>
                                                    <Link
                                                        to="/schedules/create"
                                                        aria-label="Edit schedule"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
                                                    >
                                                        <Pencil className="h-4 w-4" />
                                                    </Link>
                                                    <button
                                                        type="button"
                                                        aria-label="Delete schedule"
                                                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-rose-200 hover:text-rose-600"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-500">
                            <span>Showing 1 to 8 of 8 schedules</span>

                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-700"
                                    aria-label="Previous page"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-blue-600 bg-blue-600 text-white"
                                >
                                    1
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:text-slate-700"
                                    aria-label="Next page"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
