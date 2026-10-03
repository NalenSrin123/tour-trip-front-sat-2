// import React from 'react'

// const DetailDestinationHero = () => {
//   return (
//     <div>DetailDestinationHero</div>
//   )
// }

// export default DetailDestinationHero
import React from "react";


const icons = {
  calendar: (
    <>
      <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
      <path d="M8 2.5v4M16 2.5v4M3 9.5h18" />
      <path d="m9 15 2 2 4-4" />
    </>
  ),
  thermometer: (
    <>
      <path d="M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0Z" />
      <path d="M12 9v6" />
    </>
  ),
  currency: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.8 9.2c-.5-.8-1.5-1.2-2.8-1.2-1.7 0-2.8.8-2.8 2s1 1.7 2.8 2 2.8.8 2.8 2-1.1 2-2.8 2c-1.3 0-2.3-.5-2.8-1.3M12 6.5V8m0 8v1.5" />
    </>
  ),
  language: (
    <>
      <path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1" />
      <path d="m22 22-5-10-5 10M14 18h6" />
    </>
  ),
};

function FactIcon({ name }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4 text-emerald-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {icons[name]}
      </svg>
    </span>
  );
}

const defaultFacts = [
  { icon: "calendar", label: "Best Time to Visit", value: "Nov - Feb (Cool Dry)" },
  { icon: "thermometer", label: "Avg Temperature", value: "22°C - 28°C" },
  { icon: "currency", label: "Local Currency", value: "KHR / USD" },
  { icon: "language", label: "Official Language", value: "Khmer / Bunong" },
];

const defaultCrumbs = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Mondulkiri Province" }, // current page (no href)
];

export default function DetailDestinationHero({
  title = "Mondulkiri, Cambodia",
  description = "Journey to Cambodia's wild east — a land of rolling hills, thundering waterfalls, indigenous cultures, and sanctuary elephant reserves.",
  image = "https://asiatoursdesk.com/wp-content/uploads/2025/06/Mondulkiri_V1280x.webp",
  breadcrumbs = defaultCrumbs,
  facts = defaultFacts,
}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@600;700&display=swap');
      `}</style>

      <header className="font-['Inter',system-ui,sans-serif]">
        {/* ───────── Hero ───────── */}
        <section
          className="relative flex min-h-[350px] items-end overflow-hidden"
          style={{
            // gradient sits under the photo as a fallback while it loads
            backgroundImage: `url(${image}), linear-gradient(135deg, #0f4c5c 0%, #1f6f4a 60%, #14532d 100%)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Legibility overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />

          <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-24 md:pb-[72px]">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-4">
              <ol className="flex flex-wrap items-center gap-2 text-[13px] text-white/80">
                {breadcrumbs.map((crumb, i) => {
                  const isLast = i === breadcrumbs.length - 1;
                  return (
                    <li key={crumb.label} className="flex items-center gap-2">
                      {crumb.href && !isLast ? (
                        <a
                          href={crumb.href}
                          className="rounded-sm transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                          {crumb.label}
                        </a>
                      ) : (
                        <span aria-current="page" className="font-semibold text-white">
                          {crumb.label}
                        </span>
                      )}
                      {!isLast && (
                        <span aria-hidden="true" className="text-white/60">
                          &gt;
                        </span>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>

            {/* Title */}
            <h1 className="font-['Outfit',system-ui,sans-serif] text-4xl font-bold leading-[1.05] tracking-tight text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.35)] md:text-[56px]">
              {title}
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-[540px] text-base leading-relaxed text-white/90 md:text-[17px]">
              {description}
            </p>
          </div>
        </section>

        {/* ───────── Quick facts bar ───────── */}
        <div className="bg-slate-50">
          <dl className="mx-auto flex max-w-6xl flex-nowrap items-center justify-between gap-8 overflow-x-auto px-6 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {facts.map((fact) => (
              <div key={fact.label} className="flex shrink-0 items-center gap-3 whitespace-nowrap">
                <FactIcon name={fact.icon} />
                <div className="min-w-0">
                  <dt className="text-[11px] leading-tight text-slate-500">{fact.label}</dt>
                  <dd className="text-sm font-semibold leading-tight text-slate-900">
                    {fact.value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </header>
    </>
  );
}