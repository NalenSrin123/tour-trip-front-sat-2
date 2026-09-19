import React from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=800&auto=format&fit=crop",
    alt: "Misty mountains and forest at sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
    alt: "Local elder gathering herbs in the forest",
  },
  {
    src: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=800&auto=format&fit=crop",
    alt: "Waterfall in the jungle",
  },
];

export default function TheLensAndExplore() {
  return (
    <section className="w-full bg-white py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Mondulkiri Through The Lens
        </h2>
        <p className="mt-3 text-slate-500 text-lg">
          Moments of serene raw beauty captured on our treks
        </p>
      </div>

      {/* Image grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-2xl shadow-sm aspect-[4/4] sm:aspect-[4/4]"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto bg-emerald-50 rounded-3xl py-16 px-6 text-center">
        <h3 className="text-3xl font-extrabold text-slate-900 mb-4">
          Ready to Explore Mondulkiri?
        </h3>
        <p className="text-slate-600 mb-8 px-[300px]">
          Connect with our certified local guides and book custom
          tailor-made packages directly through TripGo today.
        </p>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-xl transition-colors">
          Explore Mondulkiri Tours
        </button>
      </div>
    </section>
  );
}