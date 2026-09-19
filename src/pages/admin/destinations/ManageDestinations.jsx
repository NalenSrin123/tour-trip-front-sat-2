import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, Edit2, Trash2, MapPin, ChevronRight, X, Calendar } from 'lucide-react';
import AdminSidebar from '../../../components/layout/AdminSidebar';
import AdminHeader from '../../../components/layout/AdminHeader';
import { deleteDestination, getDestinations } from '../../../services/destinationsService';

// Quick read-only popup for a single destination, opened by the "View"
// button. Description is rendered as HTML since it's produced by
// CreateDestination's rich-text editor (our own app's output, not
// arbitrary external content), same trust level as the rest of this
// admin-only data.
function DestinationViewModal({ destination, onClose }) {
  if (!destination) return null
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`${destination.name} details`}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl max-w-[32rem] w-full max-h-[85vh] overflow-y-auto"
        onClick={(event) => event.stopPropagation()}
      >
        {destination.featuredImageUrl ? (
          <img src={destination.featuredImageUrl} alt={destination.name} className="w-full h-48 object-cover rounded-t-2xl" />
        ) : (
          <div className="w-full h-48 bg-gray-100 rounded-t-2xl flex items-center justify-center">
            <MapPin className="w-8 h-8 text-gray-300" />
          </div>
        )}

        <div className="p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{destination.name}</h2>
              <span className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                Cambodia
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="p-1.5 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-3 mb-4">
            {destination.status === 'active' ? (
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
            {destination.createdAt && (
              <span className="flex items-center gap-1 text-xs text-gray-400">
                <Calendar className="w-3.5 h-3.5" />
                Added {new Date(destination.createdAt).toLocaleDateString()}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Active Tours</p>
              <p className="font-bold text-gray-900">{destination.activeTours ?? 0}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Bookings</p>
              <p className="font-bold text-gray-900">{destination.bookings ?? 0}</p>
            </div>
          </div>

          {destination.description ? (
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Description</p>
              <div
                className="text-sm text-gray-700 leading-relaxed [&_a]:text-blue-600 [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: destination.description }}
              />
            </div>
          ) : (
            <p className="text-sm text-gray-400 italic">No description added.</p>
          )}

          {destination.galleryImageUrls?.length > 0 && (
            <div className="mt-4">
              <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">Gallery</p>
              <div className="grid grid-cols-4 gap-2">
                {destination.galleryImageUrls.map((url, index) => (
                  <img key={index} src={url} alt="" className="aspect-square rounded-lg object-cover" />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ManageDestinations() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [destinations, setDestinations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [viewingDestination, setViewingDestination] = useState(null);

  useEffect(() => {
  let isMounted = true
  getDestinations().then((result) => {
    if (isMounted) setDestinations(result)
  })
  return () => {
    isMounted = false
  }
}, [])

  async function handleDelete(destination) {
  const confirmed = window.confirm(`Delete "${destination.name}"? This can't be undone.`);
  if (!confirmed) return;
  await deleteDestination(destination.id);
  setDestinations((current) => current.filter((item) => item.id !== destination.id));
}

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filterStatus === 'All' ||
      (filterStatus === 'Active' && dest.status === 'active') ||
      ((filterStatus === 'Inactive' || filterStatus === 'Draft') && dest.status === 'inactive');
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-background text-on-background min-h-screen">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

      <main className="md:ml-sidebar-width min-h-[calc(100vh-4rem)] bg-gray-50/50 p-8 font-sans text-gray-900">
        <div className="w-full space-y-8">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">Manage Destinations</h1>
              <p className="text-gray-500 mt-1">View, edit, and organize tour locations.</p>
            </div>
            <Link
              to="/destinations/create"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-sm transition-all"
            >
              <Plus className="w-5 h-5" />
              Add Destination
            </Link>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-[28rem]">
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
                            {dest.featuredImageUrl ? (
                              <img src={dest.featuredImageUrl} alt={dest.name} className="w-12 h-12 rounded-xl object-cover shadow-sm" />
                            ) : (
                              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                                <MapPin className="w-5 h-5 text-gray-400" />
                              </div>
                            )}
                            <div>
                              <span className="font-bold text-gray-900 block">{dest.name}</span>
                              <span className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                                <MapPin className="w-3 h-3 text-blue-500" />
                                Cambodia
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          {dest.status === 'active' ? (
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
                        <td className="py-4 px-6 font-semibold text-gray-900">{dest.activeTours ?? 0}</td>
                        <td className="py-4 px-6 font-semibold text-gray-900">{dest.bookings ?? 0}</td>
                        <td className="py-4 px-6 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Link
                              to={`/destinations/edit/${dest.id}`}
                              aria-label="Edit"
                              className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                            >
                              <Edit2 className="w-4 h-4" />
                            </Link>
                            <button
                              onClick={() => handleDelete(dest)}
                              className="p-2 hover:bg-red-50 text-gray-500 hover:text-red-600 rounded-xl transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setViewingDestination(dest)}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:bg-blue-50 ml-2 px-3 py-1.5 rounded-xl transition-colors"
                            >
                              View <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="py-12 text-center text-gray-500">
                        {destinations.length === 0
                          ? 'No destinations yet — click "Add Destination" to create one.'
                          : 'No destinations found matching your criteria.'}
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

      <DestinationViewModal destination={viewingDestination} onClose={() => setViewingDestination(null)} />
    </div>
  );
}