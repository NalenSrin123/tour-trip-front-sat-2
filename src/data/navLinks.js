// Header + footer navigation data, kept separate from the components that
// render it. If a teammate needs to add/rename a page (e.g. adding a
// "Blog" link), they edit this file only — PublicHeader.jsx and
// PublicFooter.jsx never need to change for that, which keeps merge
// conflicts to a minimum.
//
// NOTE: these paths currently overlap with existing ADMIN routes in
// App.jsx (e.g. "/tours", "/destinations" are already registered there
// for the admin dashboard). See the header/footer handoff notes for why
// that's a real collision risk once these public pages actually get
// built and routed.
export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Tours', path: '/tours' },
  { label: 'Destinations', path: '/destinations' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
]