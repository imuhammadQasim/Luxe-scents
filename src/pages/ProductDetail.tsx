import  { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, Heart, Share2 } from 'lucide-react';
import { perfumes } from '../data/perfumes';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const perfume = perfumes.find(p => p.id === parseInt(id || '0'));
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!perfume) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-2xl font-medium mb-4">Product Not Found</h2>
        <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/shop" 
          className="inline-flex items-center px-4 py-2 bg-secondary text-white border border-transparent text-sm font-medium hover:bg-opacity-90"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  const relatedProducts = perfumes
    .filter(p => p.id !== perfume.id && 
      (p.brand === perfume.brand || 
       p.category.some(cat => perfume.category.includes(cat))))
    .slice(0, 3);

  const handleQuantityChange = (newQty: number) => {
    if (newQty >= 1 && newQty <= 10) {
      setQuantity(newQty);
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumbs */}
        <nav className="mb-8">
          <ol className="flex text-sm">
            <li className="flex items-center">
              <Link to="/" className="text-gray-500 hover:text-secondary">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="flex items-center">
              <Link to="/shop" className="text-gray-500 hover:text-secondary">Shop</Link>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="text-gray-900 font-medium">{perfume.name}</li>
          </ol>
        </nav>
        
        {/* Product Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-accent rounded-lg overflow-hidden">
            <img 
              src={perfume.image} 
              alt={perfume.name} 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Product Info */}
          <div>
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-1">{perfume.brand}</p>
              <h1 className="text-3xl font-serif font-medium mb-4">{perfume.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={`${i < Math.floor(perfume.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {perfume.rating} ({perfume.reviews} reviews)
                </span>
              </div>
              
              <p className="text-2xl font-medium mb-6">${perfume.price}</p>
              
              <div className="mb-6">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {perfume.description}
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Key Notes:</h3>
                <div className="flex flex-wrap gap-2">
                  {perfume.notes.map((note, index) => (
                    <span 
                      key={index} 
                      className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full capitalize"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-2">Size:</h3>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 border-2 border-secondary text-primary text-sm font-medium">
                    {perfume.size}
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium">
                    100ml
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center border border-gray-300">
                  <button 
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary"
                  >
                    <Minus size={16} />
                  </button>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                    className="w-12 h-10 text-center border-x border-gray-300"
                  />
                  <button 
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <button className="flex-1 bg-primary hover:bg-secondary text-white py-3 px-6 font-medium flex items-center justify-center transition-colors">
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Cart
                </button>
                
                <button className="w-12 h-12 border border-gray-300 flex items-center justify-center text-gray-600 hover:text-secondary">
                  <Heart size={18} />
                </button>
              </div>
              
              <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
                <div>
                  <span className="text-sm text-gray-600">Categories: </span>
                  {perfume.category.map((cat, index) => (
                    <span key={index} className="text-sm capitalize">
                      {cat}{index < perfume.category.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
                <button className="flex items-center text-gray-600 hover:text-secondary">
                  <Share2 size={16} className="mr-1" />
                  <span className="text-sm">Share</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mt-16 border-t border-gray-200">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'description'
                  ? 'border-b-2 border-secondary text-secondary'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'details'
                  ? 'border-b-2 border-secondary text-secondary'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Details
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-4 px-6 text-sm font-medium ${
                activeTab === 'reviews'
                  ? 'border-b-2 border-secondary text-secondary'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Reviews ({perfume.reviews})
            </button>
          </div>
          
          <div className="py-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  {perfume.description}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A captivating fragrance that combines the finest ingredients to create a unique olfactory experience. 
                  Crafted by master perfumers, this exquisite scent is designed to evolve throughout the day, 
                  revealing different facets of its sophisticated composition.
                </p>
              </div>
            )}
            
            {activeTab === 'details' && (
              <div>
                <h3 className="text-lg font-medium mb-4">Product Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="border-b border-gray-200 pb-2">
                    <p className="text-sm text-gray-500">Brand</p>
                    <p className="font-medium">{perfume.brand}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-2">
                    <p className="text-sm text-gray-500">Size</p>
                    <p className="font-medium">{perfume.size}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-2">
                    <p className="text-sm text-gray-500">Concentration</p>
                    <p className="font-medium">Eau de Parfum</p>
                  </div>
                  <div className="border-b border-gray-200 pb-2">
                    <p className="text-sm text-gray-500">Gender</p>
                    <p className="font-medium capitalize">{perfume.gender}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-2">
                    <p className="text-sm text-gray-500">Top Notes</p>
                    <p className="font-medium capitalize">{perfume.notes.slice(0, 2).join(', ')}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-2">
                    <p className="text-sm text-gray-500">Heart Notes</p>
                    <p className="font-medium capitalize">{perfume.notes.slice(2, 4).join(', ')}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-2">
                    <p className="text-sm text-gray-500">Base Notes</p>
                    <p className="font-medium capitalize">{perfume.notes.slice(4).join(', ')}</p>
                  </div>
                  <div className="border-b border-gray-200 pb-2">
                    <p className="text-sm text-gray-500">Year</p>
                    <p className="font-medium">2021</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-medium">Customer Reviews</h3>
                  <button className="text-sm font-medium text-secondary hover:text-primary">Write a Review</button>
                </div>
                
                <div className="space-y-8">
                  <div className="pb-6 border-b border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={`${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">Verified Purchase</span>
                    </div>
                    <h4 className="text-base font-medium mb-1">Absolutely wonderful</h4>
                    <p className="text-sm text-gray-500 mb-2">By Sarah J. - March 15, 2023</p>
                    <p className="text-sm text-gray-700">
                      This fragrance is truly exquisite. The scent is sophisticated and long-lasting, 
                      perfect for special occasions. I receive compliments every time I wear it!
                    </p>
                  </div>
                  
                  <div className="pb-6 border-b border-gray-200">
                    <div className="flex items-center mb-2">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            size={14} 
                            className={`${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">Verified Purchase</span>
                    </div>
                    <h4 className="text-base font-medium mb-1">Beautiful scent</h4>
                    <p className="text-sm text-gray-500 mb-2">By Michael T. - February 2, 2023</p>
                    <p className="text-sm text-gray-700">
                      I bought this as a gift for my wife and she loves it. The fragrance is elegant and 
                      not overwhelming. Great longevity too!
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <button className="text-sm font-medium text-primary border border-gray-300 px-4 py-2 hover:bg-gray-50">
                    Load More Reviews
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-medium mb-8">You May Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map(product => (
              <ProductCard key={product.id} perfume={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
 