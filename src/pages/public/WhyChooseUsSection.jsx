import React from 'react';
import { 
  BadgePercent, 
  ShieldCheck, 
  Zap, 
  Lock 
} from 'lucide-react';

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: <BadgePercent className="w-5 h-5 text-emerald-600" />,
      title: "Best Price Guarantee",
      description: "We offer competitive prices and price matching on all curated tours."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      title: "Professional Tour Guides",
      description: "Expert local guides with deep knowledge of Khmer history and culture."
    },
    {
      icon: <Zap className="w-5 h-5 text-emerald-600" />,
      title: "Easy & Fast Booking",
      description: "Book your complete dream trip safely in just a few clicks."
    },
    {
      icon: <Lock className="w-5 h-5 text-emerald-600" />,
      title: "Secure Payment",
      description: "Your payment and personal information is always fully encrypted."
    }
  ];

  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Why Choose Us Header & Cards */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-slate-500 text-base max-w-xl mx-auto">
              We promise absolute premium service and care from start to finish
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 flex flex-col justify-between hover:-translate-y-0.5 transition-all hover:shadow-md"
              >
                <div className="space-y-5">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-900 text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Travel Inspiration Newsletter Banner */}
        <div className="bg-emerald-50/60 rounded-xl p-8 sm:p-14 text-center max-w-7xl mx-auto border border-emerald-100/60 shadow-sm">
          <div className="max-w-xl mx-auto space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Get Travel Inspiration
              </h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Subscribe to receive new destinations, travel tips, and exclusive offers directly in your inbox. No spam, ever.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 bg-white p-2 rounded-2xl shadow-sm border border-emerald-100">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 bg-transparent focus:outline-none"
                required
              />
              <button 
                type="submit" 
                className="bg-coral-500 hover:bg-coral-600 text-white font-medium px-6 py-3 rounded-lg text-sm transition-colors cursor-pointer"
                style={{ backgroundColor: '#F87153' }} // Custom color fallback matching the screenshot coral-orange button
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}