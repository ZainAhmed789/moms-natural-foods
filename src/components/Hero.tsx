// components/Hero.tsx
'use client';

import Link from 'next/link';
import ProductFeatures from './animations/hero/product-features';

const Hero = () => {
  return (
    <section className="hero-pattern py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-600 text-center">
            Why Mom’s Natural Foods?
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
           We make MOM’S natural foods for people that won’t compromise between healthy and delicious. We want our product to be affordable and widely available for everyone. All ingredients that we use could be easily read, understood, and pronounced. Mom’s doesn’t have any chemical additives, coloring, flavoring, and sugar. We believe that it is very important to read the ingredients of the product carefully before you buy one. So we created types of granola, muesli & cookie as simple as, delicious, and as original as prepared by mothers.
          </p>
       
        </div>

        {/* Animated Product Features */}
        <div className="md:w-1/2 flex justify-center relative">
          <ProductFeatures />
        </div>
      </div>
    </section>
  );
};

export default Hero;