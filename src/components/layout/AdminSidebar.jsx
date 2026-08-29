import { Link, useLocation } from 'react-router-dom'
import { NAV_ITEMS, FOOTER_NAV_ITEMS } from './adminNavItems'

// A nav item is "active" if the current URL is that exact path, or a
// sub-route of it (e.g. /destinations/create should still highlight
// "Destinations"). The root path ("/") is only ever an exact match, or
// every item would light up on Dashboard.
function isPathActive(pathname, itemPath) {
  if (itemPath === '/') return pathname === '/'
  return pathname === itemPath || pathname.startsWith(`${itemPath}/`)
}

function NavLink({ icon, label, path, active }) {
  return (
    <Link
      to={path}
      className={
        active
          ? 'flex items-center gap-xs px-md py-xs bg-primary-fixed text-on-primary-fixed rounded-r-full border-r-4 border-primary transition-all duration-200'
          : 'flex items-center gap-xs px-md py-xs text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-r-full'
      }
    >
      <span className="material-symbols-outlined">{icon}</span>
      <span className="text-label-lg">{label}</span>
    </Link>
  )
}

export default function AdminSidebar({ isOpen, onClose, activeItem, onLogout }) {
  const location = useLocation()

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-inverse-surface/40 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`bg-surface-container-lowest fixed left-0 top-0 h-screen w-sidebar-width border-r border-outline-variant flex flex-col py-lg z-50 transition-transform duration-300 md:translate-x-0 md:flex ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Logo */}
        <div className="px-lg mb-8 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center">
              <span className="material-symbols-outlined">tour</span>
            </div>
            <div>
              <h1 className="text-headline-lg text-primary">TourBook</h1>
              <p className="text-label-md text-on-surface-variant">Admin Console</p>
            </div>
          </div>
          <button
            type="button"
            className="md:hidden p-1 text-on-surface-variant hover:text-primary rounded-full hover:bg-surface-container-high"
            onClick={onClose}
            aria-label="Close menu"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex-1 overflow-y-auto pr-4">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <NavLink
                  icon={item.icon}
                  label={item.label}
                  path={item.path}
                  // activeItem is an optional manual override, kept for backward
                  // compatibility. Leave it unset and the sidebar figures out
                  // the active item from the URL on its own.
                  active={
                    activeItem
                      ? item.label === activeItem
                      : isPathActive(location.pathname, item.path)
                  }
                />
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Tabs */}
        <div className="mt-auto px-md pt-4 border-t border-outline-variant space-y-1">
          {FOOTER_NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="flex items-center gap-xs px-md py-xs text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg"
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="text-label-lg">{item.label}</span>
            </Link>
          ))}
          <button
            type="button"
            onClick={onLogout ?? (() => console.log('Logout clicked — wire this up to your auth flow.'))}
            className="w-full flex items-center gap-xs px-md py-xs text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg text-left"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="text-label-lg">Logout</span>
          </button>
        </div>
      </aside>
    </>
  )
}