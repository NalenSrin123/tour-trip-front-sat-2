import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../../components/layout/AdminSidebar';
import AdminHeader from '../../../components/layout/AdminHeader';
import { Search, Plus, Edit2, Trash2, MapPin, ChevronRight } from 'lucide-react';

const initialDestinations = [
  {
    id: 1,
    name: 'Siem Reap',
    country: 'Cambodia',
    image: 'https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?auto=format&fit=crop&w=600&q=80',
    activeTours: 24,
    bookings: '1,420',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Phnom Penh',
    country: 'Cambodia',
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80',
    activeTours: 18,
    bookings: '850',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Battambang',
    country: 'Cambodia',
    image: 'https://images.unsplash.com/photo-1578895101408-1a364e89ee6e?auto=format&fit=crop&w=600&q=80',
    activeTours: 5,
    bookings: '120',
    status: 'Inactive',
  },
];

export default function ManageDestinations() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [destinations] = useState(initialDestinations);

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'All' || dest.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-background text-on-background min-h-screen">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

      <main className="md:ml-sidebar-width p-4 md:p-lg">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Manage Destinations</h1>
              <p className="text-sm text-gray-500 mt-1">View, edit, and organize tour locations.</p>
            </div>
            <Link
              to="/destinations/create"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors"
            >
              <Plus className="h-4 w-4" />
              Add Destination
            </Link>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 mb-6">
            <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center">
              <div className="relative w-full lg:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-wrap gap-3 w-full lg:w-auto">
                {['All', 'Active', 'Inactive', 'Draft'].map((status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() => setFilterStatus(status)}
                    className={`px-3 py-2 border rounded-lg text-sm transition-colors ${
                      filterStatus === status
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs">Destination</th>
                    <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs">Status</th>
                    <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs">Active Tours</th>
                    <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs">Bookings</th>
                    <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredDestinations.length > 0 ? (
                    filteredDestinations.map((dest) => (
                      <tr key={dest.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={dest.image}
                              alt={dest.name}
                              className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                            />
                            <div>
                              <p className="font-medium text-gray-900">{dest.name}</p>
                              <p className="text-xs text-gray-500 flex items-center gap-1">
                                <MapPin className="h-3 w-3 text-blue-500" />
                                {dest.country}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4">
                          {dest.status === 'Active' ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
                              Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                              {dest.status}
                            </span>
                          )}
                        </td>

                        <td className="px-6 py-4 text-gray-700 font-medium">{dest.activeTours}</td>
                        <td className="px-6 py-4 text-gray-700 font-medium">{dest.bookings}</td>

                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Edit">
                              <Edit2 className="h-4 w-4" />
                            </button>
                            <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
                              <Trash2 className="h-4 w-4" />
                            </button>
                            <button className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 ml-2 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors">
                              View <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                        No destinations found matching your criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}