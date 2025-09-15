// components/Products.tsx
import Image from 'next/image';
import Link from 'next/link';

const Products = () => {
  const products = [
    {
      id: 1,
      title: 'Fresh Produce',
      description: 'Locally sourced organic fruits and vegetables',
      image: '/assets/product1.jpeg',
      alt: 'Fresh Produce'
    },
    {
      id: 2,
      title: 'Natural Groceries',
      description: 'Pantry staples without artificial ingredients',
      image: '/assets/product2.jpeg',
      alt: 'Natural Groceries'
    },
    {
      id: 3,
      title: 'Health Products',
      description: 'Supplements and natural remedies',
      image: '/assets/product3.jpeg',
      alt: 'Health Products'
    },
    {
      id: 4,
      title: 'Specialty Items',
      description: 'Unique, hard-to-find organic products',
      image: '/assets/product4.jpeg',
      alt: 'Specialty Items'
    }
  ];

  return (
    <section id="products" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-dark mb-4">Our Products</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our wide range of organic and natural products that will transform your eating habits and improve your health.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md food-card">
              <div className="h-48 overflow-hidden relative">
                <Image 
                  src={product.image} 
                  alt={product.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link href="/products" className="text-primary font-medium flex items-center">
                  Explore
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/products" className="bg-primary text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;