import  { Link } from 'react-router-dom';
import { ArrowRight, Star, Gift, Package } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { perfumes } from '../data/perfumes';

const Home = () => {
  const featuredPerfumes = perfumes.filter(p => p.isBestseller).slice(0, 3);
  const newArrivals = perfumes.filter(p => p.isNew).slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1590156220728-bea5ba090f82?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlc3xlbnwwfHx8fDE3NDcyMzg5NTR8MA&ixlib=rb-4.1.0)`,
            opacity: 0.7
          }}
        />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
                Discover Your Signature Scent
              </h1>
              <p className="mt-4 text-lg text-white">
                Explore our collection of luxury fragrances from the world's most prestigious perfume houses.
              </p>
              <div className="mt-8">
                <Link 
                  to="/shop" 
                  className="inline-flex items-center px-6 py-3 bg-white text-primary border border-transparent text-sm font-medium hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                >
                  Shop Now
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif font-medium">Bestsellers</h2>
            <Link to="/shop?category=bestsellers" className="text-sm font-medium text-secondary flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPerfumes.map(perfume => (
              <ProductCard key={perfume.id} perfume={perfume} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-serif font-medium">New Arrivals</h2>
            <Link to="/shop?category=new" className="text-sm font-medium text-secondary flex items-center">
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newArrivals.map(perfume => (
              <ProductCard key={perfume.id} perfume={perfume} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Star size={24} className="text-secondary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Authentic Products</h3>
              <p className="text-sm text-gray-300">
                All our fragrances are 100% authentic, sourced directly from official distributors.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Package size={24} className="text-secondary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Free Shipping</h3>
              <p className="text-sm text-gray-300">
                Enjoy free shipping on all orders over $75. Fast and secure delivery.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Gift size={24} className="text-secondary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Complimentary Samples</h3>
              <p className="text-sm text-gray-300">
                Receive two complimentary fragrance samples with every order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-serif font-medium mb-4">Join Our Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to receive updates on new arrivals, special offers and exclusive events.
          </p>
          
          <form className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 min-w-0 px-4 py-2 border border-gray-300 focus:ring-secondary focus:border-secondary"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
 