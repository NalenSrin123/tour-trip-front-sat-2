const experiences = [
  {
    name: "Culture",
    count: "18 Experiences",
    icon: "✪",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    name: "Beach",
    count: "12 Experiences",
    icon: "≋",
    color: "text-teal-500",
    bg: "bg-teal-50",
  },
  {
    name: "Adventure",
    count: "15 Experiences",
    icon: "△",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    name: "Nature",
    count: "14 Experiences",
    icon: "♧",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    name: "Food",
    count: "9 Experiences",
    icon: "♨",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    name: "Camping",
    count: "8 Experiences",
    icon: "♧",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
];

function ExploreExperiences() {
  return (
    <section className="w-full bg-white py-14">

      <div className="mx-auto w-full max-w-6xl px-6">

        {/* ================= PROMO BANNER ================= */}
        <div
          className="relative h-[235px] w-full overflow-hidden rounded-2xl bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
          }}
        >

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Banner Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full px-10 md:px-12">

              {/* Special Promo */}
              <div className="mb-4 inline-block rounded-md bg-[#ff654d] px-4 py-2">
                <span className="text-xs font-bold uppercase tracking-wide text-white">
                  Special Promo
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold leading-tight text-white md:text-3xl">
                Summer Adventure — Save 20%
              </h1>

              {/* Description */}
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white md:text-base">
                Book your next adventure with code TRIP20 and enjoy exclusive
                premium travel benefits.
              </p>

              {/* Button */}
              <button
                className="mt-4 rounded-md bg-[#ff654d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#f4513b]"
              >
                Book Now
              </button>

            </div>
          </div>
        </div>


        {/* ================= EXPLORE EXPERIENCES ================= */}
        <div className="mt-24">

          {/* Heading */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-[#1f3155]">
              Explore Experiences
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Find your perfect travel style
            </p>
          </div>


          {/* Cards */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">

            {experiences.map((experience) => (
              <div
                key={experience.name}
                className="
                  flex h-[120px]
                  cursor-pointer
                  flex-col
                  items-center
                  justify-center
                  rounded-xl
                  bg-slate-50
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >

                {/* Icon */}
                <div
                  className={`
                    mb-3
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    ${experience.bg}
                  `}
                >
                  <span className={`text-xl ${experience.color}`}>
                    {experience.icon}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-sm font-bold text-[#1f3155]">
                  {experience.name}
                </h3>

                {/* Count */}
                <p className="mt-1 text-xs text-slate-400">
                  {experience.count}
                </p>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default ExploreExperiences;