import { useState } from 'react'

/**
 * PromoBanner (public site)
 * ---------------------------------------------------------------------
 * HOW TO CONNECT YOUR WORK
 * Sits above PublicHeader, for a site-wide announcement/promotion strip.
 * This component owns none of the actual promo content or logic for
 * deciding what to show — that's intentionally left to whoever renders
 * it, via props:
 *
 *   message: string
 *     The text to display. There is no default — if you don't pass one,
 *     the banner doesn't render at all.
 *
 *   ctaLabel?: string, ctaHref?: string
 *     Optional link shown at the end of the banner (e.g. "Book Now").
 *     Omit both to show a plain text-only banner.
 *
 *   dismissible?: boolean (default: true)
 *     Whether the banner shows a close (×) button. Dismissal is only
 *     tracked in local component state for now — it resets on page
 *     reload. If persistent "don't show again" behavior is needed later,
 *     that's a good hook point (e.g. localStorage) without changing this
 *     component's props.
 *
 * USAGE (once a real public page exists):
 *   <PromoBanner
 *     message="Summer Sale: Save 20% on all Cambodia tours."
 *     ctaLabel="Explore Tours"
 *     ctaHref="/tours"
 *   />
 *   <PublicHeader />
 *   ...page content...
 *   <PublicFooter />
 * ---------------------------------------------------------------------
 */
export default function PromoBanner({ message, ctaLabel, ctaHref, dismissible = true }) {
  const [isDismissed, setIsDismissed] = useState(false)

  if (!message || isDismissed) return null

  return (
    <div className="bg-brand text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-center gap-3 relative">
        <p className="text-center">
          {message}
          {ctaLabel && ctaHref && (
            <a href={ctaHref} className="ml-2 font-semibold underline underline-offset-2 hover:no-underline">
              {ctaLabel}
            </a>
          )}
        </p>
        {dismissible && (
          <button
            type="button"
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss announcement"
            className="absolute right-4 sm:right-6 p-1 hover:opacity-75 transition-opacity"
          >
            <span className="material-symbols-outlined text-[18px] block">close</span>
          </button>
        )}
      </div>
    </div>
  )
}