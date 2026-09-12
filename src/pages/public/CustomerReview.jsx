import React, { useEffect, useState } from "react";

// Renders a row of 5 stars, filling `rating` of them (supports partial fill, e.g. 4.9)
const StarRow = ({ rating, size = 20 }) => {
  return (
    <div className="flex items-center justify-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => {
        const fillPct = Math.max(0, Math.min(1, rating - (i - 1))) * 100;
        return (
          <span key={i} className="relative inline-block" style={{ width: size, height: size }}>
            <svg viewBox="0 0 20 20" className="absolute inset-0 stroke-1 text-[var(--color-ink-muted)]">
              <path
                fill="currentColor"
                fillOpacity="0.15"
                d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.74.99-5.79-4.21-4.1 5.82-.85z"
              />
            </svg>
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fillPct}%` }}>
              <svg viewBox="0 0 20 20" className="text-amber-400" style={{ width: size, height: size }}>
                <path
                  fill="currentColor"
                  d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.79L10 14.77l-5.2 2.74.99-5.79-4.21-4.1 5.82-.85z"
                />
              </svg>
            </span>
          </span>
        );
      })}
    </div>
  );
};

const RatingBar = ({ label, percent }) => (
  <div className="flex items-center gap-3 text-sm">
    <span className="w-14 shrink-0 font-medium text-[var(--color-title)]">{label}</span>
    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--color-ink-muted)]/15">
      <div className="h-full rounded-full bg-amber-400" style={{ width: `${percent}%` }} />
    </div>
    <span className="w-8 shrink-0 text-right text-[var(--color-ink-muted)]">{percent}%</span>
  </div>
);

const ReviewCard = ({ name, location, avatar, rating, date, text }) => (
  <div className="rounded-2xl border border-[var(--color-ink-muted)]/20 p-4 bg-white">
    <div className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={avatar} alt="" className="h-11 w-11 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-[var(--color-title)]">{name}</p>
          <p className="text-sm text-[var(--color-ink-muted)]">{location}</p>
        </div>
      </div>
      <span className="whitespace-nowrap text-sm text-[var(--color-ink-muted)]">{date}</span>
    </div>

    <div className="mt-3 flex items-center gap-2">
      <StarRow rating={rating} size={16} />
      <span className="text-sm font-semibold text-[var(--color-title)]">{rating}</span>
    </div>

    <p className="mt-3 leading-relaxed text-[var(--color-ink-muted)]">&ldquo;{text}&rdquo;</p>
  </div>
);

// ---------------------------------------------------------------------------
// MOCK DATA — everything the UI needs lives in this one shape.
// Swap `fetchReviewData()` below for a real API call and nothing else
// in the component needs to change, as long as the response matches this shape:
//
// {
//   averageRating: number,
//   totalReviews: number,
//   breakdown: [{ label: string, percent: number }, ...],   // 5 rows, 5★→1★
//   reviews: [{ name, location, avatar, rating, date, text }, ...]
// }
// ---------------------------------------------------------------------------
const MOCK_REVIEW_DATA = {
  averageRating: 4.9,
  totalReviews: 128,
  breakdown: [
    { label: "5 Stars", percent: 85 },
    { label: "4 Stars", percent: 10 },
    { label: "3 Stars", percent: 3 },
    { label: "2 Stars", percent: 1 },
    { label: "1 Stars", percent: 1 },
  ],
  reviews: [
    {
      name: "Jessica Miller",
      location: "United States",
      avatar: "https://i.pravatar.cc/80?img=47",
      rating: 5,
      date: "Oct 12, 2024",
      text:
        "This tour was the absolute highlight of my Cambodia trip! Watching the sunrise over Angkor Wat was a spiritual experience. Our guide, Sokha, was extremely knowledgeable and told us amazing stories about the carvings and history. Highly recommend!",
    },
    {
      name: "Marcus Tan",
      location: "Singapore",
      avatar: "https://i.pravatar.cc/80?img=13",
      rating: 5,
      date: "Sep 28, 2024",
      text:
        "Spectacularly planned. Everything from airport pickup to check-in was perfectly smooth. The itinerary was relaxed enough that we didn't feel rushed, but we saw all the key sites. The floating village tour on Day 3 was a beautiful window into local life.",
    },
    {
      name: "Emma Walsh",
      location: "United Kingdom",
      avatar: "https://i.pravatar.cc/80?img=32",
      rating: 4.8,
      date: "Sep 15, 2024",
      text:
        "Ta Prohm temple was mystical and breathtaking! The tour guide Sokha speaks amazing English and handled the crowd beautifully so we got perfect pictures without people in them. Fresh Khmer local food was also incredible.",
    },
  ],
};

// Replace the body of this function with your real fetch, e.g.:
//   const res = await fetch("/api/reviews");
//   return res.json();
// The rest of the component doesn't need to change.
async function fetchReviewData() {
  await new Promise((resolve) => setTimeout(resolve, 300)); // simulate network delay
  return MOCK_REVIEW_DATA;
}

const CustomerReview = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading"); // "loading" | "ready" | "error"

  useEffect(() => {
    let cancelled = false;

    fetchReviewData()
      .then((result) => {
        if (cancelled) return;
        setData(result);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (status === "loading") {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-[var(--color-ink-muted)]">
        Loading reviews…
      </div>
    );
  }

  if (status === "error" || !data) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-[var(--color-ink-muted)]">
        Couldn&apos;t load reviews right now.
      </div>
    );
  }

  const { averageRating, totalReviews, breakdown, reviews } = data;

  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-[var(--color-title)]">Customer Reviews</h1>

        <div className="grid grid-cols-12 gap-4">
          {/* Summary card */}
          <div className="col-span-12 md:col-span-4 bg-white p-6 rounded-2xl border border-[var(--color-ink-muted)]/20  text-center h-fit">
            <h3 className="text-4xl font-bold text-[var(--color-title)]">{averageRating}</h3>
            <div className="mt-2">
              <StarRow rating={averageRating} />
            </div>
            <p className="mt-2 text-md text-[var(--color-ink-muted)]">
              Based on {totalReviews} global reviews
            </p>

            <div className="mt-6 space-y-3 border-t border-[var(--color-ink-muted)]/15 pt-6 text-left">
              {breakdown.map((row) => (
                <RatingBar key={row.label} {...row} />
              ))}
            </div>
          </div>

          {/* Reviews list */}
          <div className="col-span-12 md:col-span-8 space-y-4">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <button className="rounded-full border border-teal-600 px-6 py-3 font-semibold text-teal-600 transition-colors hover:bg-teal-50">
            View All {totalReviews} Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;