import React, { useState } from "react";
import {
  MapPinIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  Bars3Icon,
  XMarkIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const heroImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDMXOUxffrw9w-aDUQ055Q6WlKVs7quks2cp2MKm4lA&s=10";

  return (
    <div className="min-h-screen bg-slate-100">

      {/* ================= NAVBAR ================= */}
      <header className="absolute top-0 left-0 z-50 w-full bg-white">
        <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 text-lg font-bold text-slate-800"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500 text-sm text-white">
              ↗
            </span>
            <span>TripGo</span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-xs font-medium text-slate-800 hover:text-emerald-500">
              Home
            </a>

            <a href="#tours" className="text-xs font-medium text-slate-800 hover:text-emerald-500">
              Tours
            </a>

            <a href="#destinations" className="text-xs font-medium text-slate-800 hover:text-emerald-500">
              Destinations
            </a>

            <a href="#about" className="text-xs font-medium text-slate-800 hover:text-emerald-500">
              About Us
            </a>

            <a href="#contact" className="text-xs font-medium text-slate-800 hover:text-emerald-500">
              Contact
            </a>
          </nav>

          {/* Desktop Right Side */}
<div className="hidden items-center gap-4 md:flex">

  {/* Heart Slash */}
  <div className="relative h-5 w-5">
    <HeartIcon className="h-6 w-6 text-slate-700" />
    <span className="absolute left-1/2 top-0 h-6 w-[1.5px] -translate-x-1/2 rotate-[-45deg] bg-slate-700"></span>
  </div>

  {/* Login */}
  <button className="rounded-md border border-slate-800 bg-white px-4 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50">
    Login
  </button>

  {/* Sign Up */}
  <button className="rounded-md bg-emerald-500 px-5 py-2 text-xs font-semibold text-white hover:bg-emerald-600">
    Sign Up
  </button>

</div>

{/* Mobile Menu Button */}
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-md p-2 hover:bg-slate-100 md:hidden"
          >
            {menuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-700" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t bg-white px-5 py-5 shadow-md md:hidden">
            <nav className="flex flex-col gap-4">

              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-800"
              >
                Home
              </a>

              <a
                href="#tours"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-800"
              >
                Tours
              </a>

              <a
                href="#destinations"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-800"
              >
                Destinations
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-800"
              >
                About Us
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-slate-800"
              >
                Contact
              </a>

              <div className="mt-2 flex gap-3 border-t pt-4">
                <button className="flex-1 rounded-md border border-slate-800 py-2 text-xs font-semibold">
                  Login
                </button>

                <button className="flex-1 rounded-md bg-emerald-500 py-2 text-xs font-semibold text-white">
                  Sign Up
                </button>
              </div>

            </nav>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative flex min-h-[600px] items-center justify-center overflow-visible bg-cover bg-center pt-[68px]"
        style={{
          backgroundImage: `url("${heroImage}")`,
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto -mt-10 px-5 text-center text-white">

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-[56px]">
            Discover Your Next
            <br />
            Adventure
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-white/95 sm:text-base">
            Explore amazing destinations and create unforgettable
            <br className="hidden sm:block" />
            memories with expert-guided tours.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <button className="w-[150px] rounded-md bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-emerald-600">
              Explore Tours
            </button>

            <button className="w-[150px] rounded-md border border-white bg-transparent px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-white hover:text-slate-800">
              View Destinations
            </button>

          </div>
        </div>

        {/* ================= SEARCH CARD ================= */}
        <div className="absolute bottom-[-30px] left-1/2 z-20 w-[calc(100%-32px)] max-w-[780px] -translate-x-1/2 rounded-xl bg-white p-3 shadow-xl">

          <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1.15fr_1.15fr_104px]">

            {/* Destination */}
            <div className="border-b border-slate-200 px-3 py-3 md:border-b-0 md:border-r">
              <p className="mb-1 text-[8px] font-bold text-slate-500">
                DESTINATION
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-800">
                <MapPinIcon className="h-4 w-4 text-emerald-500" />
                <span>Where are you going?</span>
              </div>
            </div>

            {/* Travel Date */}
            <div className="border-b border-slate-200 px-3 py-3 md:border-b-0 md:border-r">
              <p className="mb-1 text-[8px] font-bold text-slate-500">
                TRAVEL DATE
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-800">
                <CalendarDaysIcon className="h-4 w-4 text-emerald-500" />
                <span>Choose a date</span>
              </div>
            </div>

            {/* Guests */}
            <div className="px-3 py-3 md:border-r">
              <p className="mb-1 text-[8px] font-bold text-slate-500">
                GUESTS
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-800">
                <UserGroupIcon className="h-4 w-4 text-emerald-500" />
                <span>How many guests?</span>
              </div>
            </div>  

           
          {/* Search Button */}
          <button className="mt-3 mb-4 flex h-10 w-25 items-center justify-center rounded-md bg-emerald-500 text-xs font-semibold text-white transition hover:bg-emerald-600 md:mt-4">
  Search
</button>

          </div>
        </div>

      </section>

    </div>
  );
}

export default App;