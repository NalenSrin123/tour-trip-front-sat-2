import { Link } from 'react-router-dom'
import {
  FOOTER_QUICK_LINKS,
  FOOTER_TOP_DESTINATIONS,
  FOOTER_SUPPORT_LINKS,
  LEGAL_LINKS,
  SOCIAL_LINKS,
} from '../../data/footerLinks'
import SocialIcon from './SocialIcon'

/**
 * PublicFooter
 * ---------------------------------------------------------------------
 * HOW TO CONNECT YOUR WORK
 * All link content lives in src/data/footerLinks.js, not in this file —
 * edit that file to add/remove/rename links (e.g. once real top
 * destinations are known). This file only needs to change if the
 * overall layout/columns themselves change, which should be rare.
 *
 * Like PublicHeader, this is for marketing/browsing pages only — not the
 * auth pages in src/pages/public/.
 * ---------------------------------------------------------------------
 */
export default function PublicFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand column */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <span className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center">
              <span className="material-symbols-outlined text-[18px]">north_east</span>
            </span>
            <span className="text-lg font-bold text-white">TourBook</span>
          </Link>
          <p className="text-sm leading-relaxed">
            Your trusted partner for unforgettable travel experiences in Cambodia and beyond. Let's
            make every trip a masterwork.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {FOOTER_QUICK_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Top Destinations */}
        <div>
          <h3 className="text-white font-semibold mb-4">Top Destinations</h3>
          <ul className="space-y-2 text-sm">
            {FOOTER_TOP_DESTINATIONS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support & Help */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support &amp; Help</h3>
          <ul className="space-y-2 text-sm">
            {FOOTER_SUPPORT_LINKS.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="hover:text-white transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {year} TourBook. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link key={link.path} to={link.path} className="hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">

            {SOCIAL_LINKS.map((social) => (
              <a 
                key={social.label}
                href={social.url}
                aria-label={social.label}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <SocialIcon name={social.icon} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}