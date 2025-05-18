import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, ShoppingBag, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-serif font-bold text-primary">LUXE SCENTS</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-secondary">Home</Link>
            <Link to="/shop" className="text-sm font-medium text-gray-700 hover:text-secondary">Shop</Link>
            <Link to="/shop?category=new" className="text-sm font-medium text-gray-700 hover:text-secondary">New Arrivals</Link>
            <Link to="/shop?category=bestsellers" className="text-sm font-medium text-gray-700 hover:text-secondary">Bestsellers</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-secondary p-1">
              <Search size={20} />
            </button>
            <Link to="/cart" className="text-gray-500 hover:text-secondary p-1 relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
            </Link>
            <button 
              className="md:hidden text-gray-500 hover:text-secondary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 z-50 bg-white">
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-500 hover:text-secondary"
              >
                <X size={24} />
              </button>
            </div>
            <div className="px-4 pt-2 pb-4 space-y-6">
              <Link 
                to="/" 
                className="block text-center py-2 text-base font-medium text-gray-700 hover:text-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="block text-center py-2 text-base font-medium text-gray-700 hover:text-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/shop?category=new" 
                className="block text-center py-2 text-base font-medium text-gray-700 hover:text-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                New Arrivals
              </Link>
              <Link 
                to="/shop?category=bestsellers" 
                className="block text-center py-2 text-base font-medium text-gray-700 hover:text-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                Bestsellers
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
 