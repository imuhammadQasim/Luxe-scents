import  { Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { Perfume } from '../data/perfumes';

interface ProductCardProps {
  perfume: Perfume;
}

const ProductCard = ({ perfume }: ProductCardProps) => {
  return (
    <div className="group card-hover bg-white rounded-lg overflow-hidden shadow-sm">
      <Link to={`/product/${perfume.id}`} className="block relative">
        <div className="aspect-w-3 aspect-h-4 overflow-hidden">
          <img 
            src={perfume.image} 
            alt={perfume.name} 
            className="w-full h-[320px] object-cover transform group-hover:scale-105 transition duration-500"
          />
        </div>
        {perfume.isNew && (
          <span className="absolute top-2 left-2 bg-secondary text-white text-xs px-2 py-1 rounded">
            NEW
          </span>
        )}
        {perfume.isBestseller && (
          <span className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
            BESTSELLER
          </span>
        )}
      </Link>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs text-gray-500 mb-1">{perfume.brand}</p>
            <h3 className="text-sm font-medium mb-1">
              <Link to={`/product/${perfume.id}`} className="hover:text-secondary">
                {perfume.name}
              </Link>
            </h3>
            <p className="font-medium text-primary">${perfume.price}</p>
          </div>
          <div className="flex space-x-1 items-center">
            <Star size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs text-gray-600">{perfume.rating}</span>
          </div>
        </div>
        
        <div className="mt-3 flex justify-between items-center">
          <div className="flex flex-wrap gap-1">
            {perfume.category.slice(0, 2).map((cat, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {cat}
              </span>
            ))}
          </div>
          <button className="p-2 rounded-full bg-primary text-white hover:bg-secondary transition-colors">
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
 