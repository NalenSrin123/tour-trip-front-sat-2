// List_tour.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from '../layout/AdminSidebar';
import AdminHeader from '../layout/AdminHeader';

const API_URL = 'http://tour-trip-etec.duckdns.org/api/tours';

const norm = (v) => String(v ?? '').toLowerCase();

const label = (v) => {
  if (v && typeof v === 'object') return v.name ?? '';
  return v ?? '';
};

const formatPrice = (p) => {
  const n = Number(p);
  return Number.isNaN(n) ? '—' : `$${n.toFixed(2)}`;
};

const getPageNumbers = (current, last) => {
  if (last <= 5) return Array.from({ length: last }, (_, i) => i + 1);
  const set = new Set([1, last, current - 1, current, current + 1]);
  const sorted = [...set].filter((p) => p >= 1 && p <= last).sort((a, b) => a - b);
  const result = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) result.push(`gap-${p}`);
    result.push(p);
  });
  return result;
};

function List_tour() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [destination, setDestination] = useState('All Destinations');
  const [status, setStatus] = useState('All Statuses');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [tours, setTours] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [meta, setMeta] = useState({ from: 0, to: 0, total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetch(`${API_URL}?page=${page}`, {
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        setTours(json.data ?? []);
        setLastPage(json.last_page ?? 1);
        setMeta({
          from: json.from ?? 0,
          to: json.to ?? 0,
          total: json.total ?? 0,
        });
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [page]);


  const categories = useMemo(
    () => [...new Set(tours.map((t) => label(t.category)).filter(Boolean))],
    [tours]
  );
  const destinations = useMemo(
    () => [...new Set(tours.map((t) => label(t.destination)).filter(Boolean))],
    [tours]
  );


  const filteredTours = tours.filter((tour) => {
    const q = search.toLowerCase();
    const matchesSearch =
      norm(tour.name).includes(q) || norm(tour.id).includes(q);
    const matchesCategory =
      category === 'All Categories' || label(tour.category) === category;
    const matchesDestination =
      destination === 'All Destinations' || label(tour.destination) === destination;
    const matchesStatus =
      status === 'All Statuses' || norm(tour.status) === norm(status);
    return matchesSearch && matchesCategory && matchesDestination && matchesStatus;
  });

  return (
    <div className="bg-background text-on-background min-h-screen">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

      <main className="md:ml-sidebar-width p-4 md:pt-8 md:px-8 md:pb-8">
        <div className="max-w-350 mx-auto pt-0">

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Manage Tours</h1>
              <p className="text-sm text-gray-500 mt-1">View, edit, and manage your tour catalog.</p>
            </div>
            <Link
              to="/admin/add-new-tour"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add New Tour
            </Link>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 mb-6">
            <div className="flex flex-col lg:flex-row gap-3 items-start lg:items-center">
              <div className="relative w-full lg:w-64">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search tours..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="flex flex-wrap gap-3 w-full lg:w-auto">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>All Categories</option>
                  {categories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>

                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>All Destinations</option>
                  {destinations.map((d) => (
                    <option key={d}>{d}</option>
                  ))}
                </select>

                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>All Statuses</option>
                  <option>Active</option>
                  <option>Draft</option>
                </select>

                <button className="inline-flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                  More Filters
                </button>
              </div>
            </div>
          </div>


          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs">Tour</th>
                    <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs">Destination</th>
                    <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs">Category</th>
                    <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs">Duration</th>
                    <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs">Price</th>
                    <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs">Status</th>
                    <th className="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-xs text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">

                  {loading && (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                        Loading tours...
                      </td>
                    </tr>
                  )}


                  {!loading && error && (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center text-red-600">
                        Failed to load tours: {error}
                      </td>
                    </tr>
                  )}

                  {/* Rows */}
                  {!loading &&
                    !error &&
                    filteredTours.map((tour) => (
                      <tr key={tour.id} className="hover:bg-gray-50 transition-colors">
                        {/* Tour */}
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {tour.image ? (
                              <img
                                src={tour.image}
                                alt={tour.name}
                                className="w-10 h-10 rounded-lg object-cover shrink-0"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-lg bg-gray-100 shrink-0" />
                            )}
                            <div>
                              <p className="font-medium text-gray-900">{tour.name}</p>
                              <p className="text-xs text-gray-500">ID: {tour.id}</p>
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-4 text-gray-700">{label(tour.destination) || '—'}</td>

                        <td className="px-6 py-4 text-gray-700">{label(tour.category) || '—'}</td>

                        <td className="px-6 py-4 text-gray-700">{tour.duration ?? '—'}</td>

                        <td className="px-6 py-4 font-medium text-gray-900">
                          {formatPrice(tour.price)}
                        </td>


                        <td className="px-6 py-4">
                          {norm(tour.status) === 'active' ? (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
                              Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                              {tour.status ? String(tour.status) : 'Draft'}
                            </span>
                          )}
                        </td>

                        
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            {/* View */}
                            <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="View">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                            {/* Edit */}
                            <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Edit">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            {/* Delete */}
                            <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors" title="Delete">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}

                  {/* Empty state */}
                  {!loading && !error && filteredTours.length === 0 && (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                        {tours.length === 0
                          ? 'No tours yet. Click "Add New Tour" to create one.'
                          : 'No tours found matching your filters.'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-4 border-t border-gray-200 bg-gray-50">
              <p className="text-sm text-gray-500">
                {meta.total === 0
                  ? 'Showing 0 tours'
                  : `Showing ${meta.from} to ${meta.to} of ${meta.total} tours`}
              </p>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-md border border-transparent hover:border-gray-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {getPageNumbers(page, lastPage).map((p) =>
                  typeof p === 'string' ? (
                    <span key={p} className="px-2 text-gray-400">...</span>
                  ) : (
                    <button
                      key={p}
                      onClick={() => setPage(p)}
                      className={
                        p === page
                          ? 'px-3 py-1.5 text-sm font-medium bg-blue-600 text-white rounded-md'
                          : 'px-3 py-1.5 text-sm text-gray-600 hover:bg-white rounded-md border border-transparent hover:border-gray-200 transition-colors'
                      }
                    >
                      {p}
                    </button>
                  )
                )}

                <button
                  onClick={() => setPage((p) => Math.min(lastPage, p + 1))}
                  disabled={page === lastPage}
                  className="p-2 text-gray-400 hover:text-gray-600 hover:bg-white rounded-md border border-transparent hover:border-gray-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default List_tour;