import React from 'react'
import { Heart, Star, MapPin } from 'lucide-react'

const attractions = [
  {
    name: "Bousra Waterfall",
    desc: "Cambodia's most iconic double-drop waterfall thundering down volcanic cliffs.",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkTljxxotwFLFn_WoRg9mAq9EpACzBRqF904DC_Y7WQHNPGFFxB53yk0K2aCVWLPvu0K0tL8UKIwb-7UcAH4hMX6IQuMCCe0DsqmthdA-SoLeXHw5tQzZfte2irOCjfknsn6Gl7yg=s680-w680-h510-rw",
  },
  {
    name: "Elephant Valley",
    desc: "A highly ethical sanctuary where retired elephants roam freely through their natural forest home.",
    img: "https://www.techoairport.com.kh/tia-backend/locators/1754020609097-mondulkiri-valley-project.jpg",
  },
  {
    name: "Sea Forest Viewpoint",
    desc: "Overlook an endless landscape of lush rolling green hilltops that resemble sea waves.",
    img: "https://littlelilly0302.wordpress.com/wp-content/uploads/2018/08/6-1.jpg?w=584",
  },
]

const tours = [
  {
    title: "Ethical Elephant Sanctuary Day Visit",
    duration: "1 Day",
    rating: 4.9,
    reviews: 112,
    price: 85,
    img: "https://images.travelandleisureasia.com/wp-content/uploads/sites/3/2022/12/28111004/samui-elephant-sanctuary.jpeg",
  },
  {
    title: "Highland Jungle Trekking & Camp",
    duration: "3 Days / 2 Nights",
    rating: 4.8,
    reviews: 74,
    price: 195,
    img: "https://authentiktravel.com/media/ckeditor/Trekking%20Guide%20Cambodia%20Why.jpg",
  },
  {
    title: "Bousra Falls & Bunong Village Tour",
    duration: "2 Days / 1 Night",
    rating: 4.7,
    reviews: 48,
    price: 140,
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLOodADenD_1fkfs6mowcG_iTQg5i4_bVJCq0AWvMvfHJxjqfOZ3noWqGdXoRh7yq472NK9V-TE75dejkC0zGGkhfRh_9XwJwoJ78jE3AhRxeyGDx3kXofcP-QABj4l0pHQWNF4O1xd8zsGRKlhHbS9JfNj6iY5ztPhn9sVWBP6UhkKspGnEGWpQtP/s1600/Bousra%20Waterfall%201.webp",
  },
  {
    title: "Wildlife Observation & Deep Forest Expedition",
    duration: "4 Days / 3 Nights",
    rating: 4.9,
    reviews: 36,
    price: 280,
    img: "https://visitcambodia.b-cdn.net/city/mondulkiri-hero.jpg",
  },
]

const AttractionCard = ({ name, desc, img }) => {
  return (
    <div
      className="relative h-56 rounded-2xl overflow-hidden bg-cover bg-center shadow-lg flex items-end"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
      <div className="relative z-10 p-5 text-white">
        <h3 className="text-lg font-bold mb-1">{name}</h3>
        <p className="text-sm text-white/90 max-w-[26ch] leading-snug">{desc}</p>
      </div>
    </div>
  )
}

const TourCard = ({ title, duration, rating, reviews, price, img }) => {
  const [saved, setSaved] = React.useState(false)

  return (
    <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm flex flex-col">
      <div
        className="relative h-36 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <button
          onClick={() => setSaved(!saved)}
          className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center"
          aria-label="Save tour"
        >
          <Heart
            size={15}
            className={saved ? 'fill-rose-500 text-rose-500' : 'text-slate-700'}
          />
        </button>
      </div>

      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center gap-1 text-emerald-600 text-xs font-semibold">
          <MapPin size={12} />
          Mondulkiri
        </div>

        <p className="text-sm font-bold text-slate-900 leading-snug">{title}</p>

        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{duration}</span>
          <span className="flex items-center gap-1 font-semibold text-slate-900">
            <Star size={12} className="fill-amber-400 text-amber-400" />
            {rating} ({reviews})
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between gap-2 pt-2">
          <div>
            <span className="block text-[10px] text-slate-400">Price per person</span>
            <span className="text-lg font-extrabold text-orange-600">${price}</span>
          </div>
          <button className="bg-[#1b2a4a] hover:bg-[#152140] text-white text-xs font-semibold rounded-lg px-3.5 py-2 whitespace-nowrap">
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

const DetailDestinationTop_Available = () => {
  return (
    <>
      <section className="bg-slate-50 px-6 py-14">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">
              Top Attractions in Mondulkiri
            </h1>
            <p className="text-slate-500">
              Experience the natural wonders of Cambodia's wild highlands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {attractions.map((a) => (
              <AttractionCard key={a.name} {...a} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="text-center mb-9">
          <h2 className="text-2xl font-extrabold mb-2">Available Tours in Mondulkiri</h2>
          <p className="text-slate-500">Curated premium packages for deep nature exploration</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tours.map((t) => (
            <TourCard key={t.title} {...t} />
          ))}
        </div>
      </section>
    </>
  )
}

export default DetailDestinationTop_Available