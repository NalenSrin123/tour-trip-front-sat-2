import { useMemo, useState } from 'react'

const GUIDES = [
  {
    id: 1,
    name: 'Eleanor Richards',
    email: 'eleanor.r@example.com',
    phone: '+1 (555) 123-4567',
    tours: 12,
    rating: 4.9,
    status: 'Active',
    joined: 'Mar 12, 2023',
  },
  {
    id: 2,
    name: 'Marcus Webb',
    email: 'm.webb89@example.com',
    phone: '+44 7700 900077',
    tours: 3,
    rating: 4.1,
    status: 'Inactive',
    joined: 'Jun 05, 2022',
  },
  {
    id: 3,
    name: 'Sophia Chen',
    email: 'schen.travels@example.com',
    phone: '+1 (555) 887-6543',
    tours: 24,
    rating: 5.0,
    status: 'Active',
    joined: 'Jan 18, 2021',
  },
  {
    id: 4,
    name: 'Dara Sokun',
    email: 'dara.sokun@example.com',
    phone: '+855 12 345 678',
    tours: 18,
    rating: 4.7,
    status: 'Active',
    joined: 'Sep 30, 2022',
  },
  {
    id: 5,
    name: 'Liam OConnor',
    email: 'liam.oc@example.com',
    phone: '+353 86 123 4567',
    tours: 7,
    rating: 4.4,
    status: 'Pending',
    joined: 'Feb 02, 2024',
  },
  {
    id: 6,
    name: 'Aiko Tanaka',
    email: 'aiko.tanaka@example.com',
    phone: '+81 90 1234 5678',
    tours: 31,
    rating: 4.8,
    status: 'Active',
    joined: 'Nov 21, 2020',
  },
]

const PAGE_SIZE = 3

const STATUS_STYLES = {
  Active: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  Inactive: 'bg-rose-50 text-rose-700 ring-rose-600/20',
  Pending: 'bg-amber-50 text-amber-700 ring-amber-600/20',
}

const AVATAR_STYLES = [
  'bg-indigo-100 text-indigo-700',
  'bg-violet-100 text-violet-700',
  'bg-sky-100 text-sky-700',
  'bg-emerald-100 text-emerald-700',
  'bg-amber-100 text-amber-700',
  'bg-rose-100 text-rose-700',
]

const initials = (name) =>
  name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

const Icon = ({ path, className = 'size-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {path}
  </svg>
)

const SearchIcon = (props) => (
  <Icon
    {...props}
    path={
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.2-3.2" />
      </>
    }
  />
)

const DownloadIcon = (props) => (
  <Icon
    {...props}
    path={
      <>
        <path d="M12 3v12" />
        <path d="m7 12 5 5 5-5" />
        <path d="M5 21h14" />
      </>
    }
  />
)

const PlusIcon = (props) => (
  <Icon {...props} path={<path d="M12 5v14M5 12h14" />} />
)

const FiltersIcon = (props) => (
  <Icon {...props} path={<path d="M4 7h16M7 12h10M10 17h4" />} />
)

const ROTATIONS = {
  down: '',
  up: 'rotate-180',
  left: 'rotate-90',
  right: '-rotate-90',
}

const ChevronIcon = ({ direction = 'down', className = 'size-4' }) => (
  <Icon
    className={`${className} ${ROTATIONS[direction]}`}
    path={<path d="m6 9 6 6 6-6" />}
  />
)

const StarIcon = () => (
  <svg
    className="size-4 text-amber-400"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z" />
  </svg>
)

const EyeIcon = (props) => (
  <Icon
    {...props}
    path={
      <>
        <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    }
  />
)

const PencilIcon = (props) => (
  <Icon
    {...props}
    path={
      <>
        <path d="M4 20h4l10-10a2.8 2.8 0 1 0-4-4L4 16v4Z" />
        <path d="m14 6 4 4" />
      </>
    }
  />
)

const TrashIcon = (props) => (
  <Icon
    {...props}
    path={
      <>
        <path d="M4 7h16" />
        <path d="M9 7V5h6v2" />
        <path d="M6 7v13h12V7" />
        <path d="M10 11v5M14 11v5" />
      </>
    }
  />
)

const Avatar = ({ guide, index }) =>
  guide.avatar ? (
    <img
      src={guide.avatar}
      alt=""
      className="size-9 shrink-0 rounded-full object-cover ring-1 ring-slate-900/5"
    />
  ) : (
    <span
      className={`flex size-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
        AVATAR_STYLES[index % AVATAR_STYLES.length]
      }`}
    >
      {initials(guide.name)}
    </span>
  )

const StatusBadge = ({ status }) => (
  <span
    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${
      STATUS_STYLES[status] ?? 'bg-slate-100 text-slate-600 ring-slate-500/20'
    }`}
  >
    {status}
  </span>
)

const ListGuides = () => {
  const [query, setQuery] = useState('')
  const [status, setStatus] = useState('All Statuses')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase()
    return GUIDES.filter((guide) => {
      const matchesStatus = status === 'All Statuses' || guide.status === status
      const matchesTerm =
        !term ||
        guide.name.toLowerCase().includes(term) ||
        guide.email.toLowerCase().includes(term) ||
        guide.phone.toLowerCase().includes(term)
      return matchesStatus && matchesTerm
    })
  }, [query, status])

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, pageCount)
  const start = (currentPage - 1) * PAGE_SIZE
  const rows = filtered.slice(start, start + PAGE_SIZE)

  const goTo = (next) => setPage(Math.min(Math.max(next, 1), pageCount))

  const handleSearch = (event) => {
    setQuery(event.target.value)
    setPage(1)
  }

  const handleStatus = (event) => {
    setStatus(event.target.value)
    setPage(1)
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Manage Guides
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              View and manage guide profiles, assigned tours, and status.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <DownloadIcon />
              Export
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-3.5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <PlusIcon />
              Add Guide
            </button>
          </div>
        </header>

        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative min-w-64 flex-1">
              <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={query}
                onChange={handleSearch}
                placeholder="Search guides by name, email or phone..."
                className="w-full rounded-lg border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div className="relative">
              <select
                value={status}
                onChange={handleStatus}
                aria-label="Filter by status"
                className="appearance-none rounded-lg border border-slate-200 bg-white py-2.5 pl-3.5 pr-10 text-sm text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              >
                <option>All Statuses</option>
                <option>Active</option>
                <option>Inactive</option>
                <option>Pending</option>
              </select>
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                <ChevronIcon />
              </span>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <FiltersIcon />
              More Filters
            </button>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <tr>
                  <th scope="col" className="px-6 py-3.5">Guide</th>
                  <th scope="col" className="px-6 py-3.5">Contact</th>
                  <th scope="col" className="px-6 py-3.5">Tours</th>
                  <th scope="col" className="px-6 py-3.5">Rating</th>
                  <th scope="col" className="px-6 py-3.5">Status</th>
                  <th scope="col" className="px-6 py-3.5">Joined</th>
                  <th scope="col" className="px-6 py-3.5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((guide, index) => (
                  <tr key={guide.id} className="group transition hover:bg-slate-50/70">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar guide={guide} index={start + index} />
                        <span className="font-medium text-slate-900">{guide.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-slate-700">{guide.email}</div>
                      <div className="text-slate-400">{guide.phone}</div>
                    </td>
                    <td className="px-6 py-4 text-slate-700">{guide.tours}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1.5 text-slate-700">
                        <StarIcon />
                        {guide.rating.toFixed(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={guide.status} />
                    </td>
                    <td className="px-6 py-4 text-slate-500">{guide.joined}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-1 text-slate-400 opacity-0 transition focus-within:opacity-100 group-hover:opacity-100">
                        <button
                          type="button"
                          aria-label={`View ${guide.name}`}
                          className="rounded-md p-1.5 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                          <EyeIcon />
                        </button>
                        <button
                          type="button"
                          aria-label={`Edit ${guide.name}`}
                          className="rounded-md p-1.5 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                          <PencilIcon />
                        </button>
                        <button
                          type="button"
                          aria-label={`Delete ${guide.name}`}
                          className="rounded-md p-1.5 transition hover:bg-rose-50 hover:text-rose-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
                        >
                          <TrashIcon />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {rows.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-slate-500">
                      No guides match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-6 py-4">
            <p className="text-sm text-slate-500">
              {filtered.length === 0
                ? 'Showing 0 guides'
                : `Showing ${start + 1} to ${start + rows.length} of ${filtered.length} guides`}
            </p>

            <nav className="flex items-center gap-1" aria-label="Pagination">
              <button
                type="button"
                onClick={() => goTo(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="rounded-md p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:pointer-events-none disabled:opacity-40"
              >
                <ChevronIcon direction="left" />
              </button>

              {Array.from({ length: pageCount }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  type="button"
                  onClick={() => goTo(number)}
                  aria-current={number === currentPage ? 'page' : undefined}
                  className={`size-8 rounded-md text-sm font-medium transition ${
                    number === currentPage
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {number}
                </button>
              ))}

              <button
                type="button"
                onClick={() => goTo(currentPage + 1)}
                disabled={currentPage === pageCount}
                aria-label="Next page"
                className="rounded-md p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:pointer-events-none disabled:opacity-40"
              >
                <ChevronIcon direction="right" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListGuides
