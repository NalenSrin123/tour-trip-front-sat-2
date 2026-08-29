import React, { useState } from 'react';
import { Search, Plus, Edit2, Trash2, MapPin, ChevronRight, ArrowUpDown } from 'lucide-react';

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
  const [destinations] = useState(initialDestinations);

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.country.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterStatus === 'All' || dest.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50/50 p-8 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Manage Destinations</h1>
            <p className="text-gray-500 mt-1">View, edit, and organize tour locations.</p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-sm transition-all">
            <Plus className="w-5 h-5" />
            Add Destination
          </button>
        </div>

        {/* Search and Filters Bar */}
        <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50/80 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
            <span className="text-xs font-semibold tracking-wider text-gray-400 uppercase mr-1">Filter by status:</span>
            {['All', 'Active', 'Inactive', 'Draft'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  filterStatus === status
                    ? 'bg-blue-100 text-blue-700 shadow-sm'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200/60'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Destinations Table View */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50 text-gray-400 text-xs font-semibold uppercase tracking-wider">
                  <th className="py-4 px-6">Destination</th>
                  <th className="py-4 px-6">Status</th>
                  <th className="py-4 px-6">Active Tours</th>
                  <th className="py-4 px-6">Bookings</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {filteredDestinations.length > 0 ? (
                  filteredDestinations.map((dest) => (
                    <tr key={dest.id} className="hover:bg-gray-50/60 transition-colors group">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-4">
                          <img
                            src={dest.image}
                            alt={dest.name}
                            className="w-12 h-12 rounded-xl object-cover shadow-sm"
                          />
                          <div>
                            <span className="font-bold text-gray-900 block">{dest.name}</span>
                            <span className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                              <MapPin className="w-3 h-3 text-blue-500" />
                              {dest.country}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        {dest.status === 'Active' ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                            Inactive
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-6 font-semibold text-gray-900">
                        {dest.activeTours}
                      </td>
                      <td className="py-4 px-6 font-semibold text-gray-900">
                        {dest.bookings}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 hover:bg-gray-100 text-gray-500 hover:text-blue-600 rounded-xl transition-colors">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 hover:bg-red-50 text-gray-500 hover:text-red-600 rounded-xl transition-colors">
                            <Trash2 className="w-4 h-4" />
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
                    <td colSpan="5" className="py-12 text-center text-gray-500">
                      No destinations found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}