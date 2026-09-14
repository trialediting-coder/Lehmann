import React from 'react';
import { Phone, Calendar, MapPin } from 'lucide-react';
import { PRACTICE_INFO } from '../data/mockData';

interface MobileQuickBarProps {
  onOpenScheduler?: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = () => {
  return (
    <div
      id="mobile-quick-action-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-t border-stone-300 p-2.5 shadow-2xl px-4 flex items-center justify-between gap-2"
    >
      <span
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold bg-[#C59B56] text-white shadow-sm"
      >
        <Phone className="w-3.5 h-3.5 fill-current" />
        <span>(641) 357-3315</span>
      </span>

      <button
        type="button"
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full text-xs font-bold bg-zinc-950 text-white shadow-sm"
      >
        <Calendar className="w-3.5 h-3.5 text-[#C59B56]" />
        <span>Book Appointment</span>
      </button>

      <span
        className="p-3 rounded-full bg-white border border-stone-300 text-zinc-800 shadow-sm"
        aria-label="Lehmann Family Dental"
      >
        <MapPin className="w-4 h-4 text-[#C59B56]" />
      </span>
    </div>
  );
};
