// components/About.tsx
import Image from 'next/image';

const About = () => {
  const stats = [
    { value: '25+', label: 'Years Serving' },
    { value: '500+', label: 'Organic Products' },
    { value: '100%', label: 'Satisfaction' }
  ];

  const images = [
    '/assets/about1.jpeg',
    '/assets/about2.jpeg',
    '/assets/about3.jpeg',
    '/assets/product5.jpeg'
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <div className="grid grid-cols-2 gap-4">
            {images.map((src, index) => (
              <div key={index} className="rounded-lg overflow-hidden h-48 md:h-64 relative">
                <Image 
                  src={src} 
                  alt="About Moms Natural Foods" 
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-bold text-dark mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Since 1998, Moms Natural Foods has been providing our community with the highest quality organic and natural products. 
            What started as a small neighborhood health food store has grown into a beloved community hub for health-conscious shoppers.
          </p>
          <p className="text-gray-600 mb-6">
            We're committed to supporting local farmers and sustainable agriculture practices. Our knowledgeable staff is always 
            available to help you make the best choices for your health and wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <span className="block text-3xl font-bold text-primary">{stat.value}</span>
                <span className="text-gray-600">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;