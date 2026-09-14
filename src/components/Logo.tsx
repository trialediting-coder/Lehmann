import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  const isLight = variant === 'light';

  // Height mappings for actual logo image
  const heightClass = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-14',
  }[size];

  if (isLight) {
    return (
      <div
        id="practice-logo"
        className={`inline-flex items-center px-3 py-1.5 rounded-xl bg-white/95 hover:bg-white border border-white/25 shadow-sm transition-all duration-200 select-none ${className}`}
      >
        <img
          src="/logo.png"
          alt="Lehmann Family Dental Logo"
          className={`${heightClass} w-auto object-contain`}
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div
      id="practice-logo"
      className={`inline-flex items-center select-none transition-transform hover:scale-[1.01] ${className}`}
    >
      <img
        src="/logo.png"
        alt="Lehmann Family Dental Logo"
        className={`${heightClass} w-auto object-contain`}
        loading="eager"
      />
    </div>
  );
};

