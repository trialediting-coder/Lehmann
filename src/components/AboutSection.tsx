import React from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  Smile,
  CreditCard,
  Zap,
  Activity,
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';
import { CORE_VALUES } from '../data/mockData';

interface AboutSectionProps {
  onOpenScheduler?: () => void;
  onExploreServices?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  const iconMap: Record<string, React.ElementType> = {
    CreditCard: CreditCard,
    Smile: Smile,
    Zap: Zap,
    Heart: Heart,
    Activity: Activity,
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with centered narrative and floating imagery (Reference Image 3) */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-snug sm:leading-tight">
            We believe that every smile tells a story — and we’re here to make yours{' '}
            <span className="text-[#C59B56]">healthier, brighter, and more confident.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Led by Dr. Grant Lehmann, Lehmann Family Dental in Clear Lake, Iowa combines gentle, family-centered patient care with comprehensive in-office capabilities. From routine cleanings to same-day pain relief, our practice is designed around your comfort and health.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#C59B56] text-white shadow-sm"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-white border border-stone-300 text-zinc-800 shadow-2xs"
            >
              <span>Schedule a Consultation</span>
            </button>
          </div>
        </div>

        {/* Visual Showcase: Practice Facility, Community & Dental Craftsmanship (No labels for images) */}
        <div className="mt-14 mb-20 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 aspect-[4/3] group bg-stone-100">
            <img
              src="/images/building.jpg"
              alt="Lehmann Family Dental Practice in Clear Lake, IA"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-[#C59B56]/40 aspect-[4/3] sm:aspect-[3/4] group bg-stone-100">
            <img
              src="/images/family.jpg"
              alt="Healthy smiles for the whole family at Lehmann Family Dental"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 aspect-[4/3] group bg-stone-100">
            <img
              src="/images/pediatric.jpg"
              alt="Fun, gentle pediatric dental care in Clear Lake"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>

        {/* Guiding Principles & Core Values 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-stone-200">
          {/* Left Column: 5 Core Values Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {CORE_VALUES.map((val, idx) => {
              const IconComponent = iconMap[val.iconName] || Sparkles;
              const isLast = idx === CORE_VALUES.length - 1;
              return (
                <div
                  key={val.id}
                  className={`p-6 rounded-2xl bg-[#FBF9F5] border border-stone-200 hover:border-[#C59B56]/60 transition-all duration-300 hover:shadow-md group flex flex-col justify-between ${
                    isLast ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#C59B56]/15 flex items-center justify-center text-[#C59B56] mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold text-[#b28643] uppercase tracking-wider block mb-1">
                      {val.number} • Core Value
                    </span>
                    <h3 className="text-lg font-bold text-zinc-900 leading-snug">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-2.5 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Narrative Framing */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              Our Core Guiding Values
            </h3>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              Every appointment at Lehmann Family Dental is shaped by our core promises—putting your comfort, peace of mind, and oral health first.
            </p>

            <ul className="space-y-3.5 text-sm text-zinc-800">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C59B56]/20 flex items-center justify-center text-[#C59B56] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="font-bold text-zinc-900">Flexible Financing:</strong> Transparent quotes and flexible payment arrangements for every budget.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C59B56]/20 flex items-center justify-center text-[#C59B56] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="font-bold text-zinc-900">Light Sedation Available:</strong> Relaxed, gentle options so nervous patients feel completely safe.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C59B56]/20 flex items-center justify-center text-[#C59B56] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="font-bold text-zinc-900">If You Are in Pain, We Will Help:</strong> Dedicated same-day emergency slots to stop tooth pain fast.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C59B56]/20 flex items-center justify-center text-[#C59B56] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="font-bold text-zinc-900">We See Children:</strong> Warm, engaging pediatric visits with patient explanations and prizes.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C59B56]/20 flex items-center justify-center text-[#C59B56] shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="font-bold text-zinc-900">Extractions & Root Canals In-Office:</strong> Comprehensive clinical procedures without referrals.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
