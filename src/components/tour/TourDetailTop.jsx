import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MOCK_TOUR } from '../../data/mockTourDetail'

const MAX_TRAVELERS_PER_CATEGORY = 10

// Explicit grid placement for the 4 thumbnails, so they always sit tight
// against the hero image with no gap, regardless of viewport width. Index
// matches tour.photos.slice(1, 5) order: 0=top-inner, 1=top-outer,
// 2=bottom-inner, 3=bottom-outer.
const THUMBNAIL_GRID_POSITION = [
  'sm:col-start-3 sm:row-start-1',
  'sm:col-start-4 sm:row-start-1',
  'sm:col-start-3 sm:row-start-2',
  'sm:col-start-4 sm:row-start-2',
]

function PhotoFrame({ photo, className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      {photo.url ? (
        <img src={photo.url} alt={photo.alt} className="w-full h-full object-cover" />
      ) : (
        // TODO(media feature owner): shown whenever a photo has no real url
        // yet (see mockTourDetail.js) — swap in the real <img> once photos exist.
        <div className="w-full h-full flex flex-col items-center justify-center gap-1 text-slate-400">
          <span className="material-symbols-outlined text-3xl">image</span>
          <span className="text-xs px-2 text-center hidden sm:block">{photo.alt}</span>
        </div>
      )}
    </div>
  )
}

function StarRating({ rating }) {
  const filled = Math.round(rating)
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`Rated ${rating} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`material-symbols-outlined text-[18px] ${i < filled ? 'text-amber-500' : 'text-slate-300'}`}
        >
          star
        </span>
      ))}
    </span>
  )
}

function Stepper({ label, note, value, onChange, min = 0 }) {
  return (
    <div>
      <p className="text-sm font-medium text-ink mb-1.5">
        {label}
        {note && <span className="text-red-500"> {note}</span>}
      </p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          aria-label={`Decrease ${label}`}
          className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-ink-muted hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">remove</span>
        </button>
        <span className="w-6 text-center font-medium text-ink">{value}</span>
        <button
          type="button"
          onClick={() => onChange(Math.min(MAX_TRAVELERS_PER_CATEGORY, value + 1))}
          disabled={value >= MAX_TRAVELERS_PER_CATEGORY}
          aria-label={`Increase ${label}`}
          className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-ink-muted hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
        </button>
      </div>
    </div>
  )
}

/**
 * TourDetailTop
 * ---------------------------------------------------------------------
 * HOW TO CONNECT YOUR WORK
 * This covers the TOP section of a tour's detail page only — gallery,
 * title/rating/stats, overview, and the booking widget. Whoever builds
 * the rest of the page (itinerary, inclusions, reviews, related tours)
 * renders their sections below this component, e.g.:
 *
 *   <PublicHeader />
 *   <TourDetailTop tour={realTourData} />
 *   <TourItinerary ... />
 *   <TourReviews ... />
 *   <PublicFooter />
 *
 * Naming note: this is about an individual bookable TOUR (e.g. "Angkor
 * Wat Discovery Tour"), not a Destination location (Siem Reap itself) —
 * those are a different, already-existing concept in this codebase
 * (see CreateDestination.jsx / ManageDestinations.jsx). Keeping the two
 * separate here on purpose to avoid folder/name confusion.
 *
 * Props:
 *   tour?: object — see src/data/mockTourDetail.js for the exact shape
 *     and a fully-populated example. Defaults to that mock data.
 *   initialWishlisted?: boolean (default: false)
 *   onToggleWishlist?: (isWishlisted: boolean) => void
 *     Called whenever the heart (hero overlay or booking card button) is
 *     toggled. Defaults to a console.log placeholder — wire this up to
 *     real wishlist persistence once that feature exists.
 *   onBookNow?: (booking: { date, adults, children, totalPrice }) => void
 *     Called when "Book Now" is clicked with a valid date selected.
 *     Defaults to a console.log placeholder — wire this up to a real
 *     checkout/booking flow once that exists.
 *
 * Pricing: children are charged half the adult per-person price, matching
 * the "(50% OFF Adult Price)" label on the Children stepper below.
 * ---------------------------------------------------------------------
 */
export default function TourDetailTop({ tour = MOCK_TOUR, initialWishlisted = false, onToggleWishlist, onBookNow }) {
  const [isWishlisted, setIsWishlisted] = useState(initialWishlisted)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [activePhotoIndex, setActivePhotoIndex] = useState(0)
  const [shareFeedback, setShareFeedback] = useState(null)

  const [selectedDate, setSelectedDate] = useState('')
  const [dateError, setDateError] = useState(null)
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [bookingFeedback, setBookingFeedback] = useState(null)

  const childPricePerPerson = tour.pricePerPerson / 2
  const totalPrice = tour.pricePerPerson * adults + childPricePerPerson * children
  
  useEffect(() => {
    if (!isGalleryOpen) return
    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsGalleryOpen(false)
      if (event.key === 'ArrowLeft') stepPhoto(-1)
      if (event.key === 'ArrowRight') stepPhoto(1)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGalleryOpen, activePhotoIndex])

  function openGallery(index) {
    setActivePhotoIndex(index)
    setIsGalleryOpen(true)
  }

  function stepPhoto(direction) {
    setActivePhotoIndex((current) => (current + direction + tour.photos.length) % tour.photos.length)
  }

  function toggleWishlist() {
    const next = !isWishlisted
    setIsWishlisted(next)
    if (onToggleWishlist) {
      onToggleWishlist(next)
    } else {
      // TODO(wishlist feature owner): replace with real persistence.
      console.log('Wishlist toggled:', next)
    }
  }

  async function handleShare() {
    const shareData = { title: tour.name, text: `Check out ${tour.name} on TourBook`, url: window.location.href }
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch {
        // User cancelled the native share sheet — nothing to do.
      }
    } else {
      await navigator.clipboard.writeText(window.location.href)
      setShareFeedback('Link copied to clipboard!')
      setTimeout(() => setShareFeedback(null), 2000)
    }
  }

  function handleBookNow() {
    if (!selectedDate) {
      setDateError('Select a date first.')
      return
    }
    setDateError(null)
    const booking = { date: selectedDate, adults, children, totalPrice }
    if (onBookNow) {
      onBookNow(booking)
    } else {
      // TODO(booking feature owner): replace with a real checkout flow.
      console.log('Book Now:', booking)
    }
    setBookingFeedback('Booking request sent. (No checkout flow yet — see console for details.)')
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm mb-4 overflow-x-auto whitespace-nowrap">
        {tour.breadcrumb.map((crumb, index) => (
          <span key={crumb.label} className="flex items-center gap-1.5">
            {index > 0 && <span className="text-slate-300">/</span>}
            {crumb.path ? (
              <Link to={crumb.path} className="text-ink-muted hover:text-ink transition-colors">
                {crumb.label}
              </Link>
            ) : (
              <span className="font-medium text-ink">{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>

      {/* Photo Gallery */}
      <div className="grid grid-cols-2 sm:grid-cols-4 sm:grid-rows-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
        <div
          className="relative col-span-2 sm:col-start-1 sm:row-start-1 sm:row-span-2 rounded-xl overflow-hidden cursor-pointer aspect-[4/3] sm:aspect-auto sm:h-[440px]"
          onClick={() => openGallery(0)}
        >
          <PhotoFrame photo={tour.photos[0]} className="w-full h-full" />
          <div className="absolute top-3 right-3 flex gap-2">
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                toggleWishlist()
              }}
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
              aria-pressed={isWishlisted}
              className="w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-sm transition-colors"
            >
              <span className={`material-symbols-outlined text-[20px] ${isWishlisted ? 'text-red-500' : 'text-ink-muted'}`}>
                {isWishlisted ? 'favorite' : 'favorite_border'}
              </span>
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                handleShare()
              }}
              aria-label="Share this tour"
              className="w-9 h-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-sm transition-colors"
            >
              <span className="material-symbols-outlined text-[20px] text-ink-muted">ios_share</span>
            </button>
          </div>
          {shareFeedback && (
            <div className="absolute bottom-3 left-3 right-3 bg-black/75 text-white text-xs rounded-lg px-3 py-2 text-center">
              {shareFeedback}
            </div>
          )}
        </div>

        {tour.photos.slice(1, 5).map((photo, i) => {
          const isLast = i === 3
          return (
            <div
              key={photo.id}
              className={`relative rounded-xl overflow-hidden cursor-pointer aspect-square sm:h-[214px] ${THUMBNAIL_GRID_POSITION[i]}`}
              onClick={() => openGallery(i + 1)}
            >
              <PhotoFrame photo={photo} className="w-full h-full" />
              {isLast && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-1.5 text-white text-xs sm:text-sm font-medium">
                  <span className="material-symbols-outlined text-[18px]">photo_library</span>
                  View all photos
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-ink mb-2">{tour.name}</h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm mb-5">
            <span className="flex items-center gap-1.5">
              <StarRating rating={tour.rating} />
              <span className="font-medium text-ink">{tour.rating}</span>
              <span className="text-ink-muted">({tour.reviewCount} Reviews)</span>
            </span>
            <span className="flex items-center gap-1 text-ink-muted">
              <span className="material-symbols-outlined text-[16px] text-brand">location_on</span>
              {tour.location}
            </span>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[18px] text-ink-muted">schedule</span>
              </span>
              <div>
                <p className="text-xs text-ink-muted">Duration</p>
                <p className="text-sm font-medium text-ink">{tour.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[18px] text-ink-muted">group</span>
              </span>
              <div>
                <p className="text-xs text-ink-muted">Group Size</p>
                <p className="text-sm font-medium text-ink">{tour.groupSize}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-[18px] text-ink-muted">trending_up</span>
              </span>
              <div>
                <p className="text-xs text-ink-muted">Difficulty</p>
                <p className="text-sm font-medium text-ink">{tour.difficulty}</p>
              </div>
            </div>
          </div>

          <h2 className="text-lg font-bold text-ink mb-2">Tour Overview</h2>
          <p className="text-sm text-ink-muted leading-relaxed">{tour.description}</p>
        </div>

        {/* Booking Card */}
        <div className="lg:col-span-1">
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5 lg:sticky lg:top-24">
            <div className="flex items-baseline gap-1 pb-4 mb-4 border-b border-slate-200">
              <span className="text-2xl font-bold text-orange-600">${tour.pricePerPerson}</span>
              <span className="text-sm text-ink-muted">/ person</span>
            </div>

            <div className="mb-4">
              <label htmlFor="tour-date" className="block text-sm font-medium text-ink mb-1.5">
                Select Date
              </label>
              <div className="relative">
                <input
                  id="tour-date"
                  type="date"
                  value={selectedDate}
                  onChange={(event) => {
                    setSelectedDate(event.target.value)
                    if (event.target.value) setDateError(null)
                  }}
                  aria-invalid={Boolean(dateError)}
                  aria-describedby={dateError ? 'tour-date-error' : undefined}
                  className={`w-full pl-3 pr-3 py-2 rounded-lg border text-sm text-ink focus:outline-none focus:ring-2 focus:ring-brand ${
                    dateError ? 'border-red-400' : 'border-slate-300'
                  }`}
                />
              </div>
              {dateError && (
                <p id="tour-date-error" className="text-xs text-red-500 mt-1">
                  {dateError}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <Stepper label="Adults" value={adults} onChange={setAdults} min={1} />
              <Stepper label="Children" note="(50% OFF Adult Price)" value={children} onChange={setChildren} min={0} />
            </div>

            <div className="flex items-center justify-between py-3 mb-4 border-t border-slate-200">
              <span className="text-sm font-medium text-ink">Total Price</span>
              <span className="text-lg font-bold text-ink">${totalPrice}</span>
            </div>

            <button
              type="button"
              onClick={handleBookNow}
              className="w-full py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm transition-colors mb-2"
            >
              Book Now
            </button>
            <button
              type="button"
              onClick={toggleWishlist}
              aria-pressed={isWishlisted}
              className="w-full py-3 rounded-lg border border-slate-300 hover:bg-slate-50 text-ink font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">
                {isWishlisted ? 'favorite' : 'favorite_border'}
              </span>
              {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>

            {bookingFeedback && (
              <p className="text-xs text-ink-muted text-center mt-3">{bookingFeedback}</p>
            )}
          </div>
        </div>
      </div>

      {/* Gallery Lightbox */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label="Photo gallery"
        >
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            <span className="text-white text-sm">
              {activePhotoIndex + 1} / {tour.photos.length}
            </span>
            <button
              type="button"
              onClick={() => setIsGalleryOpen(false)}
              aria-label="Close gallery"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center gap-2 sm:gap-4 px-2 sm:px-6 min-h-0">
            <button
              type="button"
              onClick={() => stepPhoto(-1)}
              aria-label="Previous photo"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white flex-shrink-0 transition-colors"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>

            <PhotoFrame
              photo={tour.photos[activePhotoIndex]}
              className="max-w-full max-h-full w-full sm:w-auto sm:h-full rounded-lg"
            />

            <button
              type="button"
              onClick={() => stepPhoto(1)}
              aria-label="Next photo"
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white flex-shrink-0 transition-colors"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 px-4 py-4 overflow-x-auto">
            {tour.photos.map((photo, index) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActivePhotoIndex(index)}
                aria-label={`View photo ${index + 1}`}
                aria-current={index === activePhotoIndex}
                className={`w-12 h-9 sm:w-16 sm:h-12 rounded-md overflow-hidden flex-shrink-0 transition-opacity ${
                  index === activePhotoIndex ? 'opacity-100 ring-2 ring-white' : 'opacity-50 hover:opacity-75'
                }`}
              >
                <PhotoFrame photo={photo} className="w-full h-full" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}