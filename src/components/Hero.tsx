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
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Organic & Natural Foods for a Healthier You
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            We offer the freshest organic produce, natural groceries, and health products to nourish your body and soul.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/products" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition text-center">
              Shop Products
            </Link>
            <Link href="/about" className="border border-primary text-primary px-6 py-3 rounded-md font-medium hover:bg-primary hover:text-white transition text-center">
              Learn More
            </Link>
          </div>
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