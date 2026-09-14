import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface HeroProps {
  onOpenScheduler?: (serviceId?: string) => void;
  onExploreServices?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden bg-zinc-900 text-white pt-24 sm:pt-28 pb-12 sm:pb-16 lg:pb-20"
    >
      {/* Background Image: Smiling man with curly hair, beard, laughing showing white teeth */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://framerusercontent.com/images/66apj3RQ8fwyAxhzpoJToGhrms.webp"
          alt="Man laughing joyfully with radiant white teeth in knit sweater"
          className="w-full h-full object-cover object-[76%_25%] sm:object-[72%_30%] md:object-[68%_35%] lg:object-[65%_center] xl:object-center"
          referrerPolicy="no-referrer"
          loading="eager"
        />

        {/* Soft atmospheric gradients matching the original design for high contrast legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent w-full lg:w-[68%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/35" />
      </div>

      {/* Hero Body Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left Column: Text, Asterisk Star, Massive Title, Pills, Paragraph */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-8 space-y-5 sm:space-y-6 max-w-2xl"
          >
            {/* 8-Ray Star Geometric Asterisk & 2-Line Sub-heading (Exact match to screenshot) */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              {/* Exact 8-spoke geometric asterisk from the reference */}
              <svg
                className="w-8 h-8 sm:w-9 sm:h-9 text-[#C59B56] shrink-0"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  fill="currentColor"
                  d="M38.334 18.334H24.017L34.134 8.217l-2.35-2.35-10.117 10.117V1.667h-3.333v14.317L8.217 5.867l-2.35 2.35 10.117 10.117H1.667v3.333h14.317L5.867 31.784l2.35 2.35 10.117-10.117v14.317h3.333V24.017l10.117 10.117 2.35-2.35-10.117-10.117h14.317z"
                />
              </svg>
              <p className="text-xs sm:text-sm md:text-[15px] font-normal text-white/85 leading-snug">
                We invite you to take pride in the <br />
                aesthetics of your face.
              </p>
            </div>

            {/* Massive Display Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[74px] font-bold text-white tracking-tight leading-[1.06] drop-shadow-md">
              Welcome To <br />
              <span className="text-[#C59B56]">Lehmann</span> Family Dental
            </h1>

            {/* Descriptive Subtext */}
            <p className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed max-w-2xl font-normal drop-shadow-xs">
              At Lehmann Family Dental, we use the latest technology and evidence based techniques to care for you and your whole family.  No matter the age or need!
            </p>
          </motion.div>

          {/* Right Column: Floating Frosted 5.0 Google Rating Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-4 flex justify-start lg:justify-end pb-2 sm:pb-4"
          >
            <div
              id="hero-happy-customers-card"
              className="bg-black/35 backdrop-blur-md border border-white/30 rounded-2xl p-5 sm:p-6 shadow-2xl text-white min-w-[260px]"
            >
              {/* Top Row: Big 5.0 with vertically aligned star & 5 Stars on Google */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-none text-white">
                    5.0
                  </span>
                  <Star className="w-6 h-6 sm:w-7 sm:h-7 fill-[#C59B56] text-[#C59B56] shrink-0" />
                </div>

                <div className="flex flex-col items-end justify-center">
                  <div className="flex items-center gap-1 text-[#C59B56]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C59B56] text-[#C59B56]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold tracking-wider text-white/90 uppercase mt-1">
                    5 Stars on Google
                  </span>
                </div>
              </div>

              {/* Bottom Row: 3 Overlapping Avatars (No white borders) + Gold '+' Circle + "Happy Patients" */}
              <div className="flex items-center gap-3 mt-4 pt-3 border-t border-white/15">
                <div className="flex -space-x-2 items-center">
                  <img
                    className="inline-block h-8 w-8 rounded-full object-cover shadow-xs"
                    src="https://framerusercontent.com/images/9gdMO0EKkG7W1OBcGZAwBXIuo8g.webp"
                    alt="Happy dental patient"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full object-cover shadow-xs"
                    src="https://framerusercontent.com/images/v7FLt5yFNxQX39JCIs6nhVWrIzw.webp"
                    alt="Happy dental patient"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full object-cover shadow-xs"
                    src="https://framerusercontent.com/images/CfBcMJ0p003UgtKDz0N8pcwfZY.webp"
                    alt="Happy dental patient"
                    referrerPolicy="no-referrer"
                  />
                  {/* Plus Badge */}
                  <div className="w-7 h-7 rounded-full bg-[#C59B56] flex items-center justify-center text-white font-bold text-sm shadow-xs shrink-0">
                    +
                  </div>
                </div>

                <div className="text-white text-xs font-medium leading-tight">
                  <span className="block font-semibold">Happy</span>
                  <span className="block text-white/80">Patients</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
