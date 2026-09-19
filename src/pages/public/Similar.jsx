import React from "react";
import { MapPin, Clock, Star } from "lucide-react";

const Similar = () => {
  const tours = [
    {
      id: 1,
      image:
        "https://cdn.getyourguide.com/image/format=auto%2Cfit=crop%2Cgravity=auto%2Cquality=60%2Cwidth=400%2Cheight=265%2Cdpr=2/tour_img/0ba199faf36a46c2d78d188d8482edb49fa22920f620b268f694b2979b95eb16.jpg",
      title: "Phnom Penh Explorer",
      location: "Phnom Penh",
      duration: "2 Days / 1 Night",
      rating: 4.8,
      price: 95,
    },
    {
      id: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4vsnpDv0LEBOJUIJL6UDfWb7V9FgAC1MciCP-9hqxnVe6UTT2twqz_0&s=10",
      title: "Kampot Countryside Escape",
      location: "Kampot",
      duration: "3 Days / 2 Nights",
      rating: 4.7,
      price: 110,
    },
    {
      id: 3,
      image:
        "https://customasiatravel.com/storage/photos/25/Blog/cambodia/koh-rong-private-island.webp",
      title: "Sihanoukville Tropical Geta...",
      location: "Koh Rong",
      duration: "4 Days / 3 Nights",
      rating: 4.9,
      price: 180,
    },
    {
      id: 4,
      image:
        "https://www.pelago.com/img/products/KH-Cambodia/private-river-boat-from-battambang-to-siem-reap-tonle-sap-lake/7cab4f8b-aae5-4daf-bd56-c8e323b817ee_private-river-boat-from-battambang-to-siem-reap-tonle-sap-lake.jpg",
      title: "Battambang Cultural Tour",
      location: "Battambang",
      duration: "2 Days / 1 Night",
      rating: 4.6,
      price: 80,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9fa] p-8 font-sans">
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-[#1e293b]">
          Similar Tours You Might Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-2xl p-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h3 className="font-bold text-lg leading-tight mb-4 text-[#1e293b] truncate">
                {tour.title}
              </h3>

              <div className="flex justify-between items-center text-xs text-slate-500 mb-4">
                <div className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={14} />
                  <span>{tour.duration}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-5 mt-auto">
                <div className="flex items-center gap-1 text-sm">
                  <div className="flex text-[#fbbf24]">
                    <Star size={16} fill="currentColor" stroke="currentColor" />
                    <Star size={16} fill="currentColor" stroke="currentColor" />
                    <Star size={16} fill="currentColor" stroke="currentColor" />
                    <Star size={16} fill="currentColor" stroke="currentColor" />
                    <Star size={16} fill="none" stroke="currentColor" />
                  </div>
                  <span className="font-bold text-[#1e293b] ml-1">
                    {tour.rating}
                  </span>
                </div>
                <div className="text-xs">
                  <span className="font-bold text-[#ea580c] text-base">
                    ${tour.price}
                  </span>
                  <span className="text-slate-400"> /person</span>
                </div>
              </div>

              <button className="w-full py-2.5 rounded-xl border border-slate-200 text-sm font-semibold text-[#1e293b] hover:bg-slate-50 transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="rounded-[2rem] bg-gradient-to-r from-[#115e59] to-[#1e293b] p-16 text-center">
          <h2 className="text-white text-4xl font-bold mb-4">
            Ready for your next adventure?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Book your unforgettable journey with TripGo today.
          </p>
          <button className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-3.5 rounded-lg font-semibold transition-colors">
            Book This Tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default Similar;
