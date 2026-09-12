import photo1 from '../assets/images/tours/photo-1.jpg'
import photo2 from '../assets/images/tours/photo-2.jpg'
import photo3 from '../assets/images/tours/photo-3.jpg'
import photo4 from '../assets/images/tours/photo-4.jpg'
import photo5 from '../assets/images/tours/photo-5.jpg'

// Placeholder data for the tour detail top section (TourDetailTop.jsx).
//
// HOW TO CONNECT YOUR WORK: once real tour data exists (from an API, a
// route param lookup, etc.), don't edit TourDetailTop.jsx to wire it in —
// pass the real object in via the `tour` prop wherever
// <TourDetailTop /> is rendered, matching this exact shape. This file
// (and its import in TourDetailTop.jsx) can be deleted once that's live.
export const MOCK_TOUR = {
  breadcrumb: [
    { label: 'Home', path: '/' },
    { label: 'Tours', path: '/tours' },
    { label: 'Siem Reap', path: '/destinations/siem-reap' },
    { label: 'Angkor Wat Discovery', path: null }, // null path = current page, not a link
  ],
  name: 'Angkor Wat Discovery Tour',
  rating: 4.9,
  reviewCount: 128,
  location: 'Siem Reap, Cambodia',
  duration: '3 Days / 2 Nights',
  groupSize: 'Up to 12 people',
  difficulty: 'Easy',
  description:
    "Embark on an unforgettable journey into the heart of the ancient Khmer Empire. This meticulously crafted 3-day adventure brings you face-to-face with the legendary temples of Siem Reap, Cambodia. Witness a majestic sunrise over Angkor Wat, walk under the enigmatic giant stone faces of Bayon Temple, and explore Ta Prohm — uniquely reclaimed by massive jungle tree roots. Beyond the temples, discover local life at a floating village on Tonle Sap Lake and enjoy Cambodia's warm hospitality, rich local culinary traditions, and vibrant cultural heritage.",
  pricePerPerson: 150,
  // TODO(media feature owner): replace with real uploaded photo URLs once
  // available (see fileToDataUrl.js / the admin CreateDestination pattern
  // for how images get turned into storable URLs).
  photos: [
    { id: 'photo-1', url: photo1, alt: 'Angkor Wat at sunrise, reflected in the moat' },
    { id: 'photo-2', url: photo2, alt: 'Stone faces of Bayon Temple' },
    { id: 'photo-3', url: photo3, alt: 'Floating village on Tonle Sap Lake' },
    { id: 'photo-4', url: photo4, alt: 'Tree roots overtaking Ta Prohm temple' },
    { id: 'photo-5', url: photo5, alt: 'Angkor Wat silhouette at sunset' },
  ],
}