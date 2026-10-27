import React from 'react';

interface AppLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  className?: string;
  withShadow?: boolean;
}

export const AppLogo: React.FC<AppLogoProps> = ({ 
  size = 'md', 
  className = '', 
  withShadow = true 
}) => {
  let dimensionClass = 'w-10 h-10';
  let pixelSize: number | undefined;

  if (typeof size === 'number') {
    pixelSize = size;
  } else {
    switch (size) {
      case 'sm':
        dimensionClass = 'w-8 h-8';
        break;
      case 'md':
        dimensionClass = 'w-11 h-11';
        break;
      case 'lg':
        dimensionClass = 'w-16 h-16';
        break;
      case 'xl':
        dimensionClass = 'w-24 h-24 sm:w-28 sm:h-28';
        break;
    }
  }

  const style = pixelSize ? { width: pixelSize, height: pixelSize } : undefined;

  return (
    <div 
      style={style}
      className={`relative inline-flex items-center justify-center shrink-0 rounded-full bg-white p-0.5 ${
        withShadow ? 'shadow-md shadow-slate-900/10' : ''
      } ${dimensionClass} ${className}`}
    >
      <img
        src="/logo_app.svg"
        alt="Logo I.I.S. don Lorenzo Milani Gragnano"
        className="w-full h-full object-contain rounded-full"
        loading="eager"
      />
    </div>
  );
};
