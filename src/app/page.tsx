import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProductCarousel from '../components/ProductCarousel';
import About from '../components/About';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main>
         <ProductCarousel />
        <Hero />
        <Features />
        
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
