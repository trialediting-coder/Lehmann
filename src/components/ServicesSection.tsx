import React, { useState } from 'react';
import {
  Sparkles,
  Smile,
  ShieldCheck,
  AlignCenter,
  HeartHandshake,
  Cpu,
  Zap,
  Activity,
  ArrowRight
} from 'lucide-react';
import { SERVICES } from '../data/mockData';

export const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const iconMap: Record<string, React.ElementType> = {
    Sparkles: Sparkles,
    Smile: Smile,
    ShieldCheck: ShieldCheck,
    AlignCenter: AlignCenter,
    HeartHandshake: HeartHandshake,
    Cpu: Cpu,
    Zap: Zap,
    Activity: Activity,
  };

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'preventive', label: 'Cleanings & Pediatric' },
    { id: 'restorative', label: 'General, Implants & Restorative' },
    { id: 'cosmetic', label: 'Cosmetics & Invisalign' },
    { id: 'specialty', label: 'Emergency' },
  ];

  const filteredServices = SERVICES.filter((s) => {
    if (activeCategory === 'all') return true;
    return s.category === activeCategory;
  });

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FBF9F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              Comprehensive Care for Every Stage of Your Smile
            </h2>
            <p className="text-sm sm:text-base text-zinc-600">
              From routine wellness hygiene to restorative dental surgery, we provide personalized care tailored to the Clear Lake community.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#C59B56] text-white shadow-sm'
                    : 'bg-white border border-stone-200 text-zinc-700 hover:border-stone-300 hover:bg-stone-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid (Reference Image 4 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Sparkles;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-[#C59B56]/50 transition-all duration-300 flex flex-col group"
              >
                {/* Card Top Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Outline Icon matching Reference Image 4 */}
                    <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-[#b28643] mb-4 group-hover:scale-105 group-hover:bg-[#C59B56]/15 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-[#b28643] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-600 mt-2.5 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Action row with View Details & Schedule (Mockup presentation) */}
                  <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b28643]">
                      <span className="w-5 h-5 rounded-full bg-[#C59B56]/15 flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-[#C59B56]" />
                      </span>
                      <span>Learn More</span>
                    </span>

                    <button
                      type="button"
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-stone-100 text-zinc-800"
                    >
                      Book Visit
                    </button>
                  </div>
                </div>

                {/* Card Bottom Photo (Reference Image 4) */}
                <div className="h-44 w-full overflow-hidden bg-stone-100 border-t border-stone-100">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Dentistry Highlight Card */}
        <div className="mt-12 bg-zinc-950 text-white rounded-3xl p-6 sm:p-10 border border-zinc-800 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-400 text-xs font-bold tracking-wider uppercase border border-red-500/30">
              Immediate Assistance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Have a Dental Emergency in Clear Lake?
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Knocked-out tooth, severe toothache, broken crown, or acute facial swelling? Don’t wait. Dr. Lehmann reserves emergency capacity for same-day relief.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <span className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-[#C59B56] text-white shadow-md">
              <Zap className="w-4 h-4 fill-current" />
              <span>Call (641) 357-3315</span>
            </span>
            <button
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-bold bg-white/10 text-white border border-white/20"
            >
              Request Urgent Slot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
