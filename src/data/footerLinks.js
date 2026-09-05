// Footer column data. Same reasoning as navLinks.js — edit this file to
// add/remove links, not PublicFooter.jsx itself.
export const FOOTER_QUICK_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Tours', path: '/tours' },
  { label: 'Destinations', path: '/destinations' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

// TODO(destinations feature owner): placeholder content matching the
// reference design. Once real destinations data exists, either hardcode
// the real top few here, or replace this import in PublicFooter.jsx with a
// hook/fetch that pulls the most popular ones dynamically.
export const FOOTER_TOP_DESTINATIONS = [
  { label: 'Siem Reap', path: '/destinations/siem-reap' },
  { label: 'Phnom Penh', path: '/destinations/phnom-penh' },
  { label: 'Kampot', path: '/destinations/kampot' },
  { label: 'Koh Rong', path: '/destinations/koh-rong' },
]

export const FOOTER_SUPPORT_LINKS = [
  { label: 'Help Center', path: '/help' },
  { label: 'FAQs', path: '/faqs' },
  { label: 'Cancellation Policy', path: '/cancellation-policy' },
  { label: 'Travel Insurance', path: '/travel-insurance' },
]

export const LEGAL_LINKS = [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms & Conditions', path: '/terms' },
]

// TODO(marketing/social owner): replace these placeholder "#" URLs with the
// real social profile links once they exist.
export const SOCIAL_LINKS = [
  { label: 'Facebook', icon: 'facebook', url: '#' },
  { label: 'Instagram', icon: 'instagram', url: '#' },
  { label: 'Twitter', icon: 'twitter', url: '#' },
  { label: 'YouTube', icon: 'youtube', url: '#' },
]