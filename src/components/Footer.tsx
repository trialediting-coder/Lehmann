import React from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  ShieldCheck
} from 'lucide-react';
import { Logo } from './Logo';
import { PRACTICE_INFO } from '../data/mockData';

interface FooterProps {
  onOpenScheduler?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-white text-zinc-600 pt-16 pb-12 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-200">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="dark" size="lg" />
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-2">
              Exceptional family, cosmetic, and restorative dentistry in Clear Lake, Iowa. Led by Dr. Grant Lehmann, DDS, our team combines clinical excellence with gentle, compassionate care for your whole family.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[#C59B56] text-white shadow-2xs">
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>(641) 357-3315</span>
              </span>
              <button
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-stone-100 text-zinc-800 border border-stone-200"
              >
                <span>Book Visit</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li>
                <a href="#hero" className="hover:text-[#C59B56] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C59B56] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C59B56] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#C59B56] transition-colors">
                  Patient Reviews
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#C59B56] transition-colors">
                  Location & Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
              Dental Treatments
            </h4>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li>General Dentistry (Fillings, Crowns & Bridges)</li>
              <li>Dental Cleanings & Digital X-Rays</li>
              <li>Pediatric Dental Care</li>
              <li>Free Dental Implant Consultations</li>
              <li>Same Day Emergency Dentistry</li>
              <li>Cosmetic Dentistry & Veneers</li>
              <li>Gentle Extractions</li>
              <li>Root Canal Therapy</li>
              <li>Invisalign™ Clear Aligners</li>
            </ul>
          </div>

          {/* Hours & Location */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-900">
              Clear Lake Practice
            </h4>
            <div className="text-xs text-zinc-600 space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C59B56] shrink-0 mt-0.5" />
                <span>108 S 4th St, Clear Lake, IA 50428</span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#C59B56] shrink-0 mt-0.5" />
                <span>
                  Mon–Thu: 8:00 AM – 5:00 PM <br />
                  Friday: 8:00 AM – 12:00 PM <br />
                  Sat–Sun: Closed
                </span>
              </p>
              <p className="flex items-center gap-2 text-zinc-900 pt-1 font-semibold">
                <Phone className="w-4 h-4 text-[#C59B56] shrink-0" />
                <span>(641) 357-3315</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {new Date().getFullYear()} Lehmann Family Dental. All rights reserved. Serving Clear Lake, Mason City, and North Iowa.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-zinc-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C59B56]" />
              ADA & HIPAA Compliant Care
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-zinc-600 hover:text-zinc-900 border border-stone-200 transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
