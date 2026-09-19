import AdminSidebar from "../../../components/layout/AdminSidebar";
import AdminHeader from "../../../components/layout/AdminHeader";

import {
  Camera,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Edit3,
  Heart,
  Plane,
  Clock3,
  Star,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const SIDEBAR_WIDTH = 240;

const upcomingTrips = [
  {
    id: 1,
    destination: "Siem Reap",
    country: "Cambodia",
    date: "Oct 18 - Oct 21, 2026",
    image:
      "https://images.unsplash.com/photo-1600100397608-f0109c4f6d7b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    destination: "Bali",
    country: "Indonesia",
    date: "Nov 08 - Nov 13, 2026",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
  },
];

const savedDestinations = [
  {
    name: "Santorini",
    country: "Greece",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Kyoto",
    country: "Japan",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Bali",
    country: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=700&q=80",
  },
];

const bookings = [
  {
    destination: "Bangkok, Thailand",
    date: "Aug 12, 2026",
    price: "$428",
    status: "Completed",
  },
  {
    destination: "Da Nang, Vietnam",
    date: "Jul 03, 2026",
    price: "$365",
    status: "Completed",
  },
  {
    destination: "Singapore",
    date: "May 18, 2026",
    price: "$520",
    status: "Completed",
  },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-50">
      {/* =====================================================
          SIDEBAR
      ====================================================== */}
      <AdminSidebar />

      {/* =====================================================
          HEADER
          Header has its OWN width.
          It is NOT inside the content container.
      ====================================================== */}
      <AdminHeader />

      {/* =====================================================
          PAGE CONTENT
          Sidebar = 240px
          Header = 64px
      ====================================================== */}
      <main
        className="
          min-h-screen
          w-full
          pt-16
          md:ml-[240px]
          md:w-[calc(100%-240px)]
        "
      >
        <div className="w-full p-4 sm:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-7xl">
            {/* =====================================================
                PAGE HEADER
            ===================================================== */}
            <div className="mb-6">
              <p className="text-sm font-medium text-emerald-600">Account</p>

              <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                My Profile
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Manage your personal information and travel preferences.
              </p>
            </div>

            {/* =====================================================
                PROFILE CARD
            ===================================================== */}
            <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              {/* Cover */}
              <div className="relative h-32 sm:h-44">
                <img
                  src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=80"
                  alt="Travel cover"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <button className="absolute right-4 top-4 flex items-center gap-2 rounded-xl bg-white/90 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:bg-white">
                  <Camera size={15} />

                  <span className="hidden sm:inline">Change cover</span>
                </button>
              </div>

              {/* Profile information */}
              <div className="relative px-5 pb-6 sm:px-8">
                <div className="-mt-12 flex flex-col gap-5 sm:-mt-16 sm:flex-row sm:items-end sm:justify-between">
                  {/* Avatar + Name */}
                  <div className="flex flex-col sm:flex-row sm:items-end sm:gap-5">
                    <div className="relative w-fit">
                      <img
                        src="https://i.pravatar.cc/200?img=12"
                        alt="Alex Morgan"
                        className="h-24 w-24 rounded-2xl border-4 border-white object-cover shadow-lg sm:h-32 sm:w-32"
                      />

                      <button className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-emerald-600 text-white shadow transition hover:bg-emerald-700">
                        <Camera size={14} />
                      </button>
                    </div>

                    <div className="mt-3 sm:mb-1">
                      <div className="flex items-center gap-2">
                        <h2 className="text-2xl font-bold text-slate-900">
                          Alex Morgan
                        </h2>

                        <CheckCircle2
                          size={19}
                          className="fill-emerald-500 text-white"
                        />
                      </div>

                      <p className="mt-1 text-sm text-slate-500">
                        Travel enthusiast · 12 countries visited
                      </p>
                    </div>
                  </div>

                  {/* Edit */}
                  <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 sm:w-auto">
                    <Edit3 size={16} />
                    Edit Profile
                  </button>
                </div>

                {/* Bio */}
                <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-600">
                  Exploring new places, discovering local cultures, and
                  collecting unforgettable memories. Always looking for the next
                  adventure.
                </p>

                {/* Contact */}
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <MapPin size={16} className="text-emerald-600" />
                    Phnom Penh, Cambodia
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Mail size={16} className="text-emerald-600" />
                    alex@example.com
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Phone size={16} className="text-emerald-600" />
                    +855 12 345 678
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar size={16} className="text-emerald-600" />
                    Joined March 2025
                  </div>
                </div>
              </div>
            </section>

            {/* =====================================================
                STATISTICS
            ====================================================== */}
            <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <StatCard
                icon={<Plane size={19} />}
                value="18"
                label="Trips completed"
              />

              <StatCard
                icon={<MapPin size={19} />}
                value="12"
                label="Countries visited"
              />

              <StatCard
                icon={<Heart size={19} />}
                value="34"
                label="Saved destinations"
              />

              <StatCard
                icon={<Star size={19} />}
                value="4.9"
                label="Average rating"
              />
            </section>

            {/* =====================================================
                MAIN CONTENT
            ====================================================== */}
            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
              {/* LEFT CONTENT */}
              <div className="space-y-8">
                {/* Upcoming trips */}
                <section>
                  <SectionHeader
                    title="Upcoming Trips"
                    subtitle="Your next adventures"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    {upcomingTrips.map((trip) => (
                      <TripCard key={trip.id} trip={trip} />
                    ))}
                  </div>
                </section>

                {/* Saved destinations */}
                <section>
                  <SectionHeader
                    title="Saved Destinations"
                    subtitle="Places you want to visit"
                  />

                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {savedDestinations.map((place) => (
                      <SavedCard key={place.name} place={place} />
                    ))}
                  </div>
                </section>

                {/* Recent bookings */}
                <section>
                  <SectionHeader
                    title="Recent Bookings"
                    subtitle="Your recent travel history"
                  />

                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    {bookings.map((booking, index) => (
                      <BookingRow key={index} booking={booking} />
                    ))}
                  </div>
                </section>
              </div>

              {/* =====================================================
                  RIGHT SIDEBAR
              ====================================================== */}
              <aside className="space-y-5">
                {/* Travel preferences */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-bold text-slate-900">
                        Travel Preferences
                      </h2>

                      <p className="mt-1 text-xs text-slate-500">
                        Personalize your experience
                      </p>
                    </div>

                    <button className="text-slate-400 transition hover:text-emerald-600">
                      <Edit3 size={16} />
                    </button>
                  </div>

                  <div className="mt-5 space-y-4">
                    <Preference label="Favorite destination" value="Japan" />

                    <Preference label="Travel style" value="Adventure" />

                    <Preference label="Favorite season" value="Autumn" />

                    <Preference
                      label="Preferred budget"
                      value="$100 – $250 / day"
                    />
                  </div>
                </div>

                {/* Achievement */}
                <div className="rounded-2xl bg-emerald-700 p-6 text-white">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                    <Star size={20} className="fill-white" />
                  </div>

                  <p className="mt-5 text-xs font-medium uppercase tracking-wider text-emerald-100">
                    Travel achievement
                  </p>

                  <h3 className="mt-1 text-xl font-bold">Explorer Level 4</h3>

                  <p className="mt-2 text-sm leading-6 text-emerald-100">
                    Visit 3 more countries to unlock your next travel badge.
                  </p>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/20">
                    <div className="h-full w-[78%] rounded-full bg-white" />
                  </div>

                  <div className="mt-2 flex justify-between text-xs text-emerald-100">
                    <span>12 countries</span>
                    <span>15 goal</span>
                  </div>
                </div>

                {/* Quick actions */}
                <div className="rounded-2xl border border-slate-200 bg-white p-2">
                  <QuickAction
                    icon={<Edit3 size={17} />}
                    label="Edit profile"
                  />

                  <QuickAction
                    icon={<Clock3 size={17} />}
                    label="Booking history"
                  />

                  <QuickAction
                    icon={<Heart size={17} />}
                    label="Saved destinations"
                  />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ============================================================
   STAT CARD
============================================================ */

function StatCard({ icon, value, label }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          {icon}
        </div>

        <div>
          <p className="text-xl font-bold text-slate-900">{value}</p>

          <p className="text-xs text-slate-500 sm:text-sm">{label}</p>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   SECTION HEADER
============================================================ */

function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-4 flex items-end justify-between">
      <div>
        <h2 className="text-xl font-bold text-slate-900">{title}</h2>

        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      </div>

      <button className="flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700">
        View all
        <ChevronRight size={15} />
      </button>
    </div>
  );
}

/* ============================================================
   TRIP CARD
============================================================ */

function TripCard({ trip }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-44 overflow-hidden">
        <img
          src={trip.image}
          alt={trip.destination}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-emerald-700 backdrop-blur">
          Upcoming
        </span>

        <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-600 shadow-sm backdrop-blur transition hover:text-red-500">
          <Heart size={16} />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-slate-900">{trip.destination}</h3>

        <p className="mt-1 text-xs text-slate-500">{trip.country}</p>

        <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <Calendar size={15} />
          {trip.date}
        </p>

        <button className="mt-4 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-600">
          View trip
        </button>
      </div>
    </article>
  );
}

/* ============================================================
   SAVED DESTINATION
============================================================ */

function SavedCard({ place }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-slate-200">
      <img
        src={place.image}
        alt={place.name}
        className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-14 text-white">
        <h3 className="font-bold">{place.name}</h3>

        <p className="text-xs text-white/75">{place.country}</p>
      </div>

      <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-red-500 shadow-sm">
        <Heart size={16} className="fill-current" />
      </button>
    </article>
  );
}

/* ============================================================
   BOOKING ROW
============================================================ */

function BookingRow({ booking }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-slate-100 p-4 last:border-0">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100">
          <Plane size={17} className="text-slate-600" />
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-slate-900">
            {booking.destination}
          </h3>

          <p className="mt-1 text-xs text-slate-500">{booking.date}</p>
        </div>
      </div>

      <div className="shrink-0 text-right">
        <p className="text-sm font-bold text-slate-900">{booking.price}</p>

        <p className="mt-1 text-xs font-medium text-emerald-600">
          {booking.status}
        </p>
      </div>
    </div>
  );
}

/* ============================================================
   PREFERENCE
============================================================ */

function Preference({ label, value }) {
  return (
    <div>
      <p className="text-xs text-slate-400">{label}</p>

      <p className="mt-1 text-sm font-semibold text-slate-700">{value}</p>
    </div>
  );
}

/* ============================================================
   QUICK ACTION
============================================================ */

function QuickAction({ icon, label }) {
  return (
    <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-emerald-600">
      {icon}

      <span>{label}</span>

      <ChevronRight size={15} className="ml-auto text-slate-300" />
    </button>
  );
}
