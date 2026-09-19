import React from "react";
import PublicHeader from "../layout/PublicHeader";
import PublicFooter from "../layout/PublicFooter";

function InspirationDetail() {
  return (
    <div className="min-h-screen bg-gray-100">
      <PublicHeader />

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-full pt-5 px-10">
        <div className="relative h-[450px] overflow-hidden rounded-sm">
          {/* Hero Image */}
          <img
            src="https://i.pinimg.com/1200x/ea/00/b5/ea00b57048c0cab99b9dd5680c16b396.jpg"
            alt="Ta Prohm Temple"
            className="h-full w-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-24 text-white">
            <span className="mb-4 w-fit rounded bg-teal-500 px-3 py-1 text-[10px] font-bold uppercase">
              Travel & Culture
            </span>

            <h1 className="max-w-2xl text-2xl font-extrabold leading-tight md:text-4xl">
              Ta Prohm: Where Human Monument
              <br className="hidden md:block" />
              Meets the Unyielding Force of Nature
            </h1>

            {/* Author */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                👤
              </div>

              <div>
                <p className="text-sm font-semibold">
                  By Elena Vance
                </p>

                <p className="text-xs text-gray-300">
                  April 12, 2025 · 8 min read
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-full bg-white px-10 py-10 md:px-16">

        {/* Introduction */}
        <p className="mb-6 text-sm leading-7 text-gray-700">
          Few places on earth evoke the visual collision of human civilization
          and wild nature as potently as Ta Prohm. Unlike its pristine
          neighboring Angkor Wat, this 12th-century Buddhist monastery was
          intentionally left by conservationists in its reclaimed state.
        </p>

        <p className="mb-6 text-sm leading-7 text-gray-700">
          As you walk through the moss-covered corridors of the temple, the
          smell of damp moss and wet volcanic sandstone fills the air.
          Overhead, massive tree roots weave through ancient stone walls,
          creating a strange and surreal atmosphere.
        </p>

        {/* ================= QUOTE ================= */}
        <blockquote className="my-8 border-l-4 border-teal-500 bg-teal-50 px-6 py-5">
          <p className="text-sm font-semibold italic leading-7 text-gray-800">
            "In Ta Prohm, nature did not wait for the historians to finish.
            It simply resumed its slow, majestic growth, weaving stone and wood
            into a single organic masterwork."
          </p>

          <footer className="mt-3 text-xs text-gray-500">
            — Maya Singh, Angkor Conservator
          </footer>
        </blockquote>

        {/* ================= SECTION ================= */}
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          The Silent Reclamation
        </h2>

        <p className="mb-6 text-sm leading-7 text-gray-700">
          The preservation strategy here is a story of genius. In the early
          20th century, the French found the temple nearly overgrown and
          decided to preserve Ta Prohm as it was found — a decision that
          captured the popular imagination and earned it a legendary status
          in modern adventure lore.
        </p>

        {/* ================= ARTICLE IMAGE ================= */}
        <div className="my-8 overflow-hidden rounded-lg">
          <img
            src="https://i.pinimg.com/1200x/e5/83/9b/e5839b05f4506b9f6550f86e0b43d53f.jpg"
            alt="Ta Prohm roots"
            className="h-[250px] w-full object-cover md:h-[360px]"
          />
        </div>

        {/* ================= SHARE ================= */}
        <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-6">
          <span className="mr-2 text-xs font-semibold text-gray-600">
            Share this article
          </span>

          <button className="rounded border border-gray-200 bg-white px-3 py-1.5 text-[10px] text-gray-600 transition hover:bg-gray-100">
            Facebook
          </button>

          <button className="rounded border border-gray-200 bg-white px-3 py-1.5 text-[10px] text-gray-600 transition hover:bg-gray-100">
            Twitter
          </button>

          <button className="rounded border border-gray-200 bg-white px-3 py-1.5 text-[10px] text-gray-600 transition hover:bg-gray-100">
            Pinterest
          </button>
        </div>

        {/* ================= AUTHOR ================= */}
        <div className="mt-8 flex gap-4 rounded-xl bg-gray-50 p-5">

          {/* Avatar */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xl">
            👩🏻
          </div>

          {/* Author information */}
          <div>
            <h3 className="text-sm font-bold text-gray-900">
              Elena Vance
            </h3>

            <p className="mt-1 text-xs leading-5 text-gray-500">
              Elena is a senior travel writer and historian specializing in
              Southeast Asian heritage. She spends her winters trekking old
              caravan routes and documenting little-known archaeological
              treasures.
            </p>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}

export default InspirationDetail;