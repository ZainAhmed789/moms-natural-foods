// components/CTA.tsx
const CTA = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Our Community of Health-Conscious Shoppers</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Sign up for our newsletter to receive updates on new products, special offers, and health tips.
        </p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-grow px-4 py-3 rounded-md text-dark focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button className="bg-accent text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;