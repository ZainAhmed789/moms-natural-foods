import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
import About from '../components/About';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}