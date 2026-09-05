import { EyeOff, MapPin, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const FEATURED_TOURS = [
	{
		title: 'Angkor Wat Discovery',
		location: 'Siem Reap',
		duration: '3 Days / 2 Nights',
		price: '$150',
		rating: '4.8',
		reviews: '324',
		image: 'https://toursbyjeeps.com/wp-content/uploads/2019/09/angkor-wat-tours.jpg',
	},
	{
		title: 'Koh Rong Island Escape',
		location: 'Koh Rong',
		duration: '3 Days / 2 Nights',
		price: '$120',
		rating: '4.7',
		reviews: '218',
		image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=85',
	},
	{
		title: 'Kampot Nature Adventure',
		location: 'Kampot',
		duration: '2 Days / 1 Night',
		price: '$90',
		rating: '4.9',
		reviews: '156',
		image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?auto=format&fit=crop&w=900&q=85',
	},
]

export default function FeatureTourPacket() {
	return (
		<section className="bg-[#f5f7fa] px-4 py-8 sm:px-6 lg:px-10 lg:py-12" aria-labelledby="featured-tours-title">
			<div className="mx-auto max-w-[1120px]">
				<header className="mb-8 text-center sm:mb-10">
					<h1 id="featured-tours-title" className="text-[26px] font-bold leading-tight text-[#1e2d4d] sm:text-[30px]">
						Featured Tour Packages
					</h1>
					<p className="mt-2 text-[13px] text-[#71809a] sm:text-sm">Handpicked tours for unforgettable experiences</p>
				</header>

				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{FEATURED_TOURS.map((tour) => (
						<article key={tour.title} className="overflow-hidden rounded-[9px] bg-white shadow-[0_2px_10px_rgba(31,45,77,0.08)] transition-transform duration-200 hover:-translate-y-1">
							<div className="relative h-44 overflow-hidden sm:h-40 lg:h-36">
								<img className="h-full w-full object-cover" src={tour.image} alt={`${tour.title} landscape`} />
								<span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/85 text-[#1e2d4d] shadow-sm" aria-label="Scenic tour">
									<EyeOff size={15} strokeWidth={1.8} />
								</span>
							</div>

							<div className="px-3.5 pb-3 pt-3">
								<div className="flex items-center gap-1 text-[10px] font-semibold text-[#00a98f] sm:text-[11px]">
									<MapPin size={13} strokeWidth={2.2} />
									<span>{tour.location}</span>
								</div>
								<h2 className="mt-1 text-[14px] font-bold leading-5 text-[#1e2d4d] sm:text-[15px]">{tour.title}</h2>

								<div className="mt-2 flex items-center justify-between gap-2 text-[11px] text-[#62728c]">
									<span>{tour.duration}</span>
									<span className="flex shrink-0 items-center gap-1">
										<Star size={12} fill="#f5a900" strokeWidth={1.6} className="text-[#f5a900]" />
										<strong className="font-semibold text-[#1e2d4d]">{tour.rating}</strong>
										<span>({tour.reviews})</span>
									</span>
								</div>

								<div className="mt-2.5 flex items-end justify-between border-t border-[#e4e8ef] pt-2.5">
									<div>
										<p className="text-[10px] text-[#71809a]">Price per person</p>
										<p className="text-[17px] font-bold leading-5 text-[#f15b45]">{tour.price}</p>
									</div>
									<Link to="/tours" className="rounded-md bg-[#1e2d4d] px-3.5 py-1.5 text-[11px] font-semibold text-white transition-colors hover:bg-[#00a98f] focus:outline-none focus:ring-2 focus:ring-[#00a98f] focus:ring-offset-2">
										View Details
									</Link>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
