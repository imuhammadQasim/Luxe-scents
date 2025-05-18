import  { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-serif mb-4">LUXE SCENTS</h3>
            <p className="text-sm text-gray-300 mb-4">
              Discover the finest fragrances crafted by master perfumers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary">
                <Facebook size={18} />
              </a>
              <a href="mailto:info@luxescents.com" className="text-gray-300 hover:text-secondary">
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm text-gray-300 hover:text-secondary">All Perfumes</Link></li>
              <li><Link to="/shop?category=new" className="text-sm text-gray-300 hover:text-secondary">New Arrivals</Link></li>
              <li><Link to="/shop?category=bestsellers" className="text-sm text-gray-300 hover:text-secondary">Bestsellers</Link></li>
              <li><Link to="/shop?gender=women" className="text-sm text-gray-300 hover:text-secondary">Women</Link></li>
              <li><Link to="/shop?gender=men" className="text-sm text-gray-300 hover:text-secondary">Men</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-secondary">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-secondary">Contact</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-300 hover:text-secondary">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-sm text-gray-300 hover:text-secondary">FAQ</Link></li>
              <li><Link to="/shipping" className="text-sm text-gray-300 hover:text-secondary">Shipping & Returns</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-300 hover:text-secondary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-300 hover:text-secondary">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-300 text-center">
            &copy; {new Date().getFullYear()} Luxe Scents. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 