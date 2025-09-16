// components/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Moms Natural Foods</h3>
            <p className="text-gray-400">Providing organic and natural foods to health-conscious families since 1998.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link href="/products" className="text-gray-400 hover:text-white transition">Products</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-400">
              <p>Güzeller OSB. Alp Tegin Sok. No:7 Gebze 41400 Kocaeli | TURKEY</p>
              <p className="mt-2">Phone:+902122812801</p>
              <p>Email: umit@momsnaturalfoods.com.tr
  
</p>
            </address>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Store Hours</h4>
            <p className="text-gray-400">Monday-Friday: 8am-8pm</p>
            <p className="text-gray-400">Saturday: 9am-7pm</p>
            <p className="text-gray-400">Sunday: 10am-6pm</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2023 Moms Natural Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;