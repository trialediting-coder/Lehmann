import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  Calendar
} from 'lucide-react';
import { PRACTICE_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenScheduler?: (serviceId?: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-stone-200/90 py-3 shadow-md'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
        <div className="flex items-center justify-between">
          {/* Logo: Actual Lehmann Family Dental logo image */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`inline-flex items-center px-3.5 py-1.5 rounded-xl border transition-all duration-200 focus:outline-none group active:scale-95 ${
              isScrolled
                ? 'bg-stone-50/80 hover:bg-stone-100 border-stone-200 shadow-xs'
                : 'bg-white/95 hover:bg-white border-white/30 shadow-md backdrop-blur-xs'
            }`}
            aria-label="Lehmann Family Dental"
          >
            <img
              src="/logo.png"
              alt="Lehmann Family Dental"
              className="h-7 sm:h-8 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              loading="eager"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['Home', 'Team', 'Services', 'Insurance', 'More'].map((tab) => (
              <a
                key={tab}
                href="#"
                onClick={(e) => e.preventDefault()}
                className={`transition-colors duration-200 cursor-pointer ${
                  isScrolled
                    ? 'text-zinc-700 hover:text-[#C59B56]'
                    : 'text-white/90 hover:text-[#C59B56]'
                }`}
              >
                {tab}
              </a>
            ))}
          </nav>

          {/* Right Action: Brand Gold Pill Button with circular arrow (Mockup) */}
          <div className="flex items-center gap-3">
            <button
              id="nav-book-now-button"
              type="button"
              className="group inline-flex items-center gap-3 pl-1.5 pr-5 py-1.5 rounded-full bg-[#C59B56] text-white shadow-lg select-none"
            >
              <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#C59B56] shadow-xs">
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide">
                Book Now
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl backdrop-blur-xs focus:outline-none transition-colors ${
                isScrolled
                  ? 'bg-stone-100 text-zinc-800 hover:bg-stone-200 border border-stone-200'
                  : 'bg-black/20 text-white hover:bg-black/30'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden px-5 pt-3 pb-6 space-y-3 shadow-2xl mt-2 animate-in slide-in-from-top-2 duration-200 border-b ${
            isScrolled
              ? 'bg-white/98 backdrop-blur-xl border-stone-200 text-zinc-800'
              : 'bg-zinc-950/95 backdrop-blur-xl border-zinc-800 text-white'
          }`}
        >
          <div className="space-y-1 py-1">
            {['Home', 'Team', 'Services', 'Insurance', 'More'].map((tab) => (
              <a
                key={tab}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200 hover:text-[#C59B56] ${
                  isScrolled ? 'text-zinc-800' : 'text-white'
                }`}
              >
                {tab}
              </a>
            ))}
          </div>

          <div
            className={`pt-2 border-t space-y-2 ${
              isScrolled ? 'border-stone-200' : 'border-zinc-800'
            }`}
          >
            <button
              type="button"
              className="w-full py-3 rounded-xl text-sm font-bold bg-[#C59B56] text-white shadow-md flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Now</span>
            </button>
            <span
              className={`w-full py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 ${
                isScrolled
                  ? 'bg-stone-100 text-zinc-800'
                  : 'bg-zinc-900 text-zinc-300'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#C59B56]" />
              <span>Call Practice: {PRACTICE_INFO.phone}</span>
            </span>
          </div>
        </div>
      )}
    </header>
  );
};
