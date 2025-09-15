// app/about/page.tsx
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-dark mb-8">About Moms Natural Foods</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Since 1998, Moms Natural Foods has been providing our community with the highest quality organic and natural products. 
            What started as a small neighborhood health food store has grown into a beloved community hub for health-conscious shoppers.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We're committed to supporting local farmers and sustainable agriculture practices. Our knowledgeable staff is always 
            available to help you make the best choices for your health and wellness journey.
          </p>
          <h2 className="text-2xl font-bold text-dark mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6">
            To provide our community with access to the highest quality organic and natural foods while promoting sustainable 
            agriculture and healthy living practices.
          </p>
          <h2 className="text-2xl font-bold text-dark mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
            <li>Quality: We source only the best organic and natural products</li>
            <li>Sustainability: We support local farmers and eco-friendly practices</li>
            <li>Community: We're committed to being a positive force in our community</li>
            <li>Education: We help our customers make informed choices about their health</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}