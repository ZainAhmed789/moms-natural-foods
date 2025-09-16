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
    


    '/assets/about4.jpeg',
    '/assets/bg3.jpg',
    '/assets/about2.jpeg',
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
          <h2 className="text-3xl font-bold text-dark mb-6">Our Vision</h2>
          <p className="text-gray-600 mb-4">
           We are in pursuit of additive-free, plant based food. We maintain a small batch oven baked artisanal process. We increased the richness of the oat with fruits, nuts and seeds.
            We used evaporated apple juice instead of refined sugar and added one of the most valuable foods in nature: wheat germ.
          </p>
          <p className="text-gray-600 mb-6">
            We roasted our granola using extra virgin olive oil. We never use any preservatives, sweeteners, or aromas in our granola. You may prepare it with milk, yoghurt, ice cream or, if you wish, with added fresh fruits of your choice. Or as we often prefer to do; that is, by the handful.
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