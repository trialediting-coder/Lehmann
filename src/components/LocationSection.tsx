import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Navigation,
  Send
} from 'lucide-react';
import { PRACTICE_INFO } from '../data/mockData';

interface LocationSectionProps {
  onOpenScheduler?: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = () => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight">
            Located in Clear Lake, Iowa
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
            Just blocks from the lake, our modern dental clinic is easily accessible with dedicated patient parking.
          </p>
        </div>

        {/* 2-Column Grid: Location & Hours on Left, Map & Message on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left Column: Office Details Card */}
          <div className="lg:col-span-5 bg-[#FBF9F5] rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#C59B56]/15 flex items-center justify-center text-[#C59B56] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900">Our Address</h3>
                <p className="text-sm text-zinc-700 mt-0.5">
                  108 S 4th St, Clear Lake, IA 50428
                </p>
                <a
                  href={PRACTICE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#b28643] hover:underline mt-2"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Phone & Inquiries */}
            <div className="flex items-start gap-4 pt-4 border-t border-stone-200">
              <div className="w-10 h-10 rounded-xl bg-[#C59B56]/15 flex items-center justify-center text-[#C59B56] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900">Direct Contact</h3>
                <p className="text-sm text-zinc-700 mt-0.5 font-bold">
                  <a href={PRACTICE_INFO.phoneRaw} className="hover:text-[#C59B56]">
                    {PRACTICE_INFO.phone}
                  </a>
                </p>
                <p className="text-xs text-zinc-500 mt-1">
                  Call for appointments, dental emergencies, or insurance questions.
                </p>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start gap-4 pt-4 border-t border-stone-200">
              <div className="w-10 h-10 rounded-xl bg-[#C59B56]/15 flex items-center justify-center text-[#C59B56] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-zinc-900 mb-2">Office Hours</h3>
                <div className="space-y-1.5 text-xs text-zinc-700">
                  {PRACTICE_INFO.hours.map((h, i) => (
                    <div key={i} className="flex justify-between py-1 border-b border-stone-200/60 last:border-0">
                      <span className="font-semibold text-zinc-800">{h.day}</span>
                      <span className={h.hours === 'Closed' ? 'text-zinc-400' : 'font-bold text-zinc-900'}>
                        {h.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-full py-3 rounded-full text-xs sm:text-sm font-bold bg-[#C59B56] text-white shadow-sm"
            >
              Book an Appointment
            </button>
          </div>

          {/* Right Column: Styled Map Card & Quick Contact */}
          <div className="lg:col-span-7 space-y-6">
            {/* Interactive Map Visual */}
            <div className="bg-stone-100 rounded-3xl overflow-hidden border border-stone-200 shadow-sm relative h-72 sm:h-80">
              {/* Stylized Google Maps Embed / Visual */}
              <iframe
                title="Lehmann Family Dental Location"
                src="https://maps.google.com/maps?q=108%20S%204th%20St,%20Clear%20Lake,%20IA%2050428&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-stone-50 rounded-2xl p-5 sm:p-6 border border-stone-200">
              <h3 className="text-sm font-bold text-zinc-900 mb-1">
                Have a Quick Question for Dr. Lehmann or Staff?
              </h3>
              <p className="text-xs text-zinc-600 mb-3">
                Send us a non-urgent message and our team will get back to you by phone or email.
              </p>

              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    readOnly
                    placeholder="Your Name"
                    className="px-3.5 py-2 text-xs rounded-lg border border-stone-200 bg-white text-zinc-900 focus:outline-none"
                  />
                  <input
                    type="tel"
                    readOnly
                    placeholder="Your Phone Number"
                    className="px-3.5 py-2 text-xs rounded-lg border border-stone-200 bg-white text-zinc-900 focus:outline-none"
                  />
                </div>
                <textarea
                  rows={2}
                  readOnly
                  placeholder="How can we help you? (e.g. question about dental crowns or scheduling)"
                  className="w-full px-3.5 py-2 text-xs rounded-lg border border-stone-200 bg-white text-zinc-900 focus:outline-none resize-none"
                />
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold bg-white text-zinc-900 border border-stone-300 shadow-2xs hover:bg-stone-50 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5 text-[#C59B56]" />
                    <span>Send Message</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
