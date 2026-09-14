import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ShieldCheck, Heart, Zap, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const TestimonialsSection: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Reviews' },
    { id: 'emergency', label: 'Pain & Emergency' },
    { id: 'pediatric', label: 'Children & Family' },
    { id: 'surgery', label: 'Root Canals & Extractions' },
    { id: 'gentle', label: 'Gentle & Painless' },
  ];

  const filteredReviews = TESTIMONIALS.filter((t) => {
    if (filterCategory === 'all') return true;
    const lowerTreatment = (t.treatment || '').toLowerCase();
    const lowerQuote = t.quote.toLowerCase();
    if (filterCategory === 'emergency') {
      return lowerTreatment.includes('emergency') || lowerTreatment.includes('pain') || lowerQuote.includes('emergency') || lowerQuote.includes('same day');
    }
    if (filterCategory === 'pediatric') {
      return lowerTreatment.includes('pediatric') || lowerTreatment.includes('family') || lowerQuote.includes('littles') || lowerQuote.includes('son') || lowerQuote.includes('daughter');
    }
    if (filterCategory === 'surgery') {
      return lowerTreatment.includes('root canal') || lowerTreatment.includes('extraction') || lowerTreatment.includes('wisdom') || lowerQuote.includes('pulled');
    }
    if (filterCategory === 'gentle') {
      return lowerTreatment.includes('gentle') || lowerTreatment.includes('painless') || lowerQuote.includes('painless') || lowerQuote.includes('fear') || lowerQuote.includes('anxiety');
    }
    return true;
  });

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FBF9F5] relative border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Real Stories From Real Patients
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Read unfiltered Google reviews from individuals and families who trust Lehmann Family Dental in Clear Lake, Iowa.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilterCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === tab.id
                    ? 'bg-[#C59B56] text-white shadow-sm'
                    : 'bg-white border border-stone-200 text-zinc-700 hover:bg-stone-50 hover:border-stone-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid (No images: clean typographic monogram circles & verified badges) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((t, idx) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-2xs hover:shadow-md hover:border-[#C59B56]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Author row with Monogram Initial Circle (No images) */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-stone-100 border border-[#C59B56]/30 text-[#b28643] font-bold text-sm flex items-center justify-center shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-zinc-900 leading-tight">
                          {t.name}
                        </span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B56]" />
                      </div>
                      <span className="text-[11px] text-zinc-500 font-medium block">
                        {t.badge || 'Verified Patient'}
                      </span>
                    </div>
                  </div>

                  {/* Google G Symbol */}
                  <div className="w-6 h-6 rounded-full bg-stone-50 border border-stone-200 text-[11px] font-bold text-[#b28643] flex items-center justify-center shrink-0">
                    G
                  </div>
                </div>

                {/* 5 Gold Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="text-[11px] font-semibold text-zinc-500 ml-1.5">
                    5.0 • Google
                  </span>
                </div>

                {/* Quote text */}
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Treatment tag and date footer */}
              <div className="mt-5 pt-3.5 border-t border-stone-100 text-[11px] font-semibold flex items-center justify-between text-zinc-500">
                <span className="text-[#b28643] bg-[#C59B56]/10 px-2.5 py-0.5 rounded-full">
                  {t.treatment}
                </span>
                <span>{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Trust Bar */}
        <div className="mt-12 p-5 bg-white rounded-2xl border border-stone-200 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#C59B56]/15 border border-[#C59B56]/30 flex items-center justify-center font-black text-[#C59B56] text-lg shrink-0">
              G
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
                <span className="text-xs font-bold text-zinc-900 ml-1">5.0 Star Rating</span>
              </div>
              <p className="text-xs text-zinc-500 mt-0.5">
                Over 250+ five-star Google patient reviews in Cerro Gordo County & Clear Lake
              </p>
            </div>
          </div>

          <span className="text-xs font-bold text-[#b28643] shrink-0">
            Verified Google Reviews &rarr;
          </span>
        </div>
      </div>
    </section>
  );
};
