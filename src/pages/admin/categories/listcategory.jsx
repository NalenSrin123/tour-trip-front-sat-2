import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Filter, Building2, Compass, Leaf, MapPinned, Mountain } from 'lucide-react';
import AdminSidebar from '../../../components/layout/AdminSidebar';
import AdminHeader from '../../../components/layout/AdminHeader';

const categories = [
  {
    name: 'Adventure',
    description: 'High-energy outdoor experiences and extreme sports.',
    tours: 124,
    active: true,
    icon: Mountain,
    iconBg: 'bg-[#edf5ff] text-[#2f6fe8]',
  },
  {
    name: 'Cultural',
    description: 'Historical sites, museums, and local heritage.',
    tours: 89,
    active: true,
    icon: Building2,
    iconBg: 'bg-[#eef5f9] text-[#2a7e91]',
  },
  {
    name: 'Beach & Island',
    description: 'Relaxing coastal getaways and water activities.',
    tours: 56,
    active: true,
    icon: MapPinned,
    iconBg: 'bg-[#edf9f7] text-[#1d7a6d]',
  },
  {
    name: 'City Tours',
    description: 'Urban exploration, sightseeing, and nightlife.',
    tours: 210,
    active: true,
    icon: Compass,
    iconBg: 'bg-[#f3f0ff] text-[#7254d6]',
  },
  {
    name: 'Nature & Wildlife',
    description: 'Safaris, national parks, and eco-tours.',
    tours: 0,
    active: false,
    icon: Leaf,
    iconBg: 'bg-[#eef9f1] text-[#4a8a5d]',
  },
];

export default function ManageCategory() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-[#f4f6fb] min-h-screen text-slate-800">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

      <main className="md:ml-sidebar-width p-4 md:p-6 lg:p-8">
        <div className="min-h-screen px-4 py-6 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="m-0 text-[28px] font-bold text-[#0f172a]">
                  Manage Categories
                </h2>
                <p className="mt-1 text-[14px] text-slate-500">
                  Organize and configure your tour offerings.
                </p>
              </div>

              <Link
                to="/categories/create"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1d4ed8]"
              >
                <Plus size={16} />
                Add Category
              </Link>
            </div>

            <div className="mb-6 flex items-center gap-3 text-slate-600">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                <Filter size={16} />
                Filter
              </button>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="font-medium text-slate-600">SORT BY:</span>
                <span className="font-medium text-slate-700">Most Active</span>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {categories.map((category) => {
                const Icon = category.icon;
                const pillClass = category.active
                  ? 'bg-[#dff8ee] text-[#0f7a59]'
                  : 'bg-[#eceff3] text-[#5d6676]';

                return (
                  <article
                    key={category.name}
                    className="rounded-[18px] border border-slate-200 bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.02)]"
                  >
                    <div className={`mb-5 flex h-[62px] w-[62px] items-center justify-center rounded-xl ${category.iconBg}`}>
                      <Icon size={28} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-[24px] font-bold tracking-[-0.02em] text-[#1f2a37]">{category.name}</h3>
                    <p className="mt-2 min-h-[72px] text-[15px] leading-6 text-slate-500">{category.description}</p>

                    <div className="mt-5 border-t border-slate-200 pt-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-400">
                            Active Tours
                          </div>
                          <div className="mt-2 text-[20px] font-bold text-[#1f2a37]">{category.tours}</div>
                        </div>

                        <span
                          className={[
                            'inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold',
                            pillClass,
                          ].join(' ')}
                        >
                          {category.active ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
