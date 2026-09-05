import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NAV_LINKS } from '../../data/navLinks'

function isPathActive(pathname, itemPath) {
  if (itemPath === '/') return pathname === '/'
  return pathname === itemPath || pathname.startsWith(`${itemPath}/`)
}

/**
 * PublicHeader
 * ---------------------------------------------------------------------
 * HOW TO CONNECT YOUR WORK
 * This is the header for public marketing/browsing pages (Home, Tours,
 * Destinations, About, Contact) — NOT for the auth pages in
 * src/pages/public/ (Login, ForgotPassword, ConfirmOTP, ResetPassword),
 * which are intentionally full-screen with no header/footer.
 *
 * This component owns layout and interaction (mobile menu, active-link
 * highlighting) but not real auth state or wishlist data — those come in
 * as props from whoever renders it, so this file shouldn't need to
 * change when those features are built:
 *
 *   isAuthenticated?: boolean (default: false)
 *     When false (the current/default state), shows Login + Sign Up
 *     buttons. When the auth feature is ready, pass `isAuthenticated`
 *     and `user` in from wherever session state lives to switch to the
 *     logged-in view below.
 *
 *   user?: { name: string, avatarUrl?: string }
 *     Only used when isAuthenticated is true. Renders a simple account
 *     link in place of Login/Sign Up — replace/expand with a real
 *     dropdown (Profile, My Bookings, Logout) once that's built; the
 *     swap point is clearly marked below.
 *
 *   wishlistCount?: number (default: 0)
 *     Shown as a badge on the wishlist (heart) icon.
 *
 *   onSearch?: (query: string) => void
 *     Called when the user presses Enter in the search box. Defaults to
 *     a console.log placeholder — wire this up to real search/filtering
 *     logic (or a "/search?q=" results route) once it exists.
 * ---------------------------------------------------------------------
 */
export default function PublicHeader({ isAuthenticated = false, user, wishlistCount = 0, onSearch }) {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const headerRef = useRef(null)

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function submitSearch() {
    const query = searchQuery.trim()
    if (!query) return
    if (onSearch) {
      onSearch(query)
    } else {
      // TODO(search feature owner): replace with real search — e.g.
      // navigate to a results route, or filter data in place.
      console.log('Search submitted:', query)
    }
  }

  return (
    <header ref={headerRef} className="bg-white sticky top-0 z-40 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-header-height flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <span className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center">
            <span className="material-symbols-outlined text-[18px]">north_east</span>
          </span>
          <span className="text-lg font-bold text-ink">TourBook</span>
        </Link>

        {/* Desktop Nav Links */}
<nav className="hidden md:flex items-center gap-6">
  {NAV_LINKS.map((link) => (
    <Link
      key={link.path}
      to={link.path}
      className={`relative inline-block px-3 py-1.5 rounded-lg text-sm font-medium transition-colors hover:bg-slate-100
        after:content-[''] after:absolute after:left-1/2 after:-bottom-0.5 after:-translate-x-1/2
        after:h-0.5 after:w-0 after:bg-brand after:transition-all after:duration-300
        hover:after:w-[calc(100%-1.5rem)] ${
        isPathActive(location.pathname, link.path)
          ? 'text-brand'
          : 'text-ink-muted hover:text-ink'
      }`}
    >
      {link.label}
    </Link>
  ))}
</nav>

        {/* Trailing Actions (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Search bar — change the width by editing the "w-40" class below */}
          <div className="relative w-40">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-ink-muted text-[18px] pointer-events-none">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') submitSearch()
              }}
              placeholder="Search..."
              className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand text-sm text-ink placeholder-slate-400"
            />
          </div>

          <Link
            to="/wishlist"
            aria-label="Wishlist"
            className="relative p-2 text-ink-muted hover:text-brand transition-colors"
          >
            <span className="material-symbols-outlined text-[22px]">favorite_border</span>
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 min-w-[16px] h-4 px-1 rounded-full bg-brand text-white text-[10px] leading-4 text-center">
                {wishlistCount}
              </span>
            )}
          </Link>

          {isAuthenticated ? (
            // TODO(auth feature owner): swap this for a real account menu
            // (Profile / My Bookings / Logout) once that UI exists.
            <Link
              to="/account"
              className="flex items-center gap-2 text-sm font-medium text-ink hover:text-brand transition-colors"
            >
              {user?.avatarUrl ? (
                <img src={user.avatarUrl} alt="" className="w-8 h-8 rounded-full object-cover" />
              ) : (
                <span className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                  <span className="material-symbols-outlined text-[18px]">person</span>
                </span>
              )}
              {user?.name ?? 'My Account'}
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-semibold text-ink hover:bg-slate-50 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 rounded-lg bg-brand text-white text-sm font-semibold hover:bg-brand-dark transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          className="md:hidden p-2 text-ink"
        >
          <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 sm:px-6 py-4 space-y-4">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium ${
                  isPathActive(location.pathname, link.path) ? 'text-brand' : 'text-ink-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/wishlist" className="text-sm font-medium text-ink-muted">
              Wishlist{wishlistCount > 0 ? ` (${wishlistCount})` : ''}
            </Link>
          </nav>
          <div className="flex flex-col gap-2 pt-2 border-t border-slate-200">
            {isAuthenticated ? (
              <Link to="/account" className="text-sm font-semibold text-ink">
                {user?.name ?? 'My Account'}
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-lg border border-slate-300 text-sm font-semibold text-ink text-center"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-lg bg-brand text-white text-sm font-semibold text-center"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  )
}