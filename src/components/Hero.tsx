import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage = '/images/hero-bg.jpg'
}) => {
  return (
    <section className="relative bg-[#005670] text-white py-20 md:py-32">
      {/* Overlay para garantir legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#005670] to-[#005670]/80 z-10"></div>
      
      {/* Conteúdo */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={ctaLink} className="btn btn-secondary">
              {ctaText}
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link href={secondaryCtaLink} className="btn btn-outline text-white border-white hover:bg-white hover:text-[#005670]">
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
