import  { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { perfumes, Perfume } from '../data/perfumes';

const Shop = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  const genderParam = queryParams.get('gender');

  const [filteredPerfumes, setFilteredPerfumes] = useState<Perfume[]>(perfumes);
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || '');
  const [selectedGender, setSelectedGender] = useState<string>(genderParam || '');
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['floral', 'woody', 'oriental', 'fresh', 'citrus', 'aquatic', 'aldehyde', 'luxury', 'classic', 'modern'];
  const brands = Array.from(new Set(perfumes.map(p => p.brand)));
  const genders = ['women', 'men', 'unisex'];

  useEffect(() => {
    let result = [...perfumes];
    
    if (categoryParam === 'new') {
      result = result.filter(p => p.isNew);
      setSelectedCategory('new');
    } else if (categoryParam === 'bestsellers') {
      result = result.filter(p => p.isBestseller);
      setSelectedCategory('bestsellers');
    } else if (selectedCategory && selectedCategory !== 'new' && selectedCategory !== 'bestsellers') {
      result = result.filter(p => p.category.includes(selectedCategory));
    }
    
    if (selectedGender) {
      result = result.filter(p => p.gender === selectedGender);
    }
    
    if (selectedBrand) {
      result = result.filter(p => p.brand === selectedBrand);
    }
    
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);
    
    setFilteredPerfumes(result);
  }, [categoryParam, selectedCategory, selectedGender, selectedBrand, priceRange]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const handleGenderChange = (gender: string) => {
    setSelectedGender(gender === selectedGender ? '' : gender);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrand(brand === selectedBrand ? '' : brand);
  };

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };

  const clearFilters = () => {
    setSelectedCategory('');
    setSelectedGender('');
    setSelectedBrand('');
    setPriceRange([0, 500]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-serif font-medium mb-8">Shop Perfumes</h1>
      
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-gray-600">
          Showing {filteredPerfumes.length} results
        </p>
        <button 
          className="md:hidden flex items-center text-sm font-medium"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Filter size={16} className="mr-2" />
          {showFilters ? 'Hide Filters' : 'Show Filters'}
        </button>
        <div className="hidden md:block">
          <select className="border-gray-300 rounded-md text-sm">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
            <option>Bestselling</option>
          </select>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row">
        {/* Filters - Mobile */}
        <div className={`md:hidden ${showFilters ? 'block' : 'hidden'} w-full mb-6`}>
          <div className="bg-white p-4 border rounded mb-4">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Categories</h3>
                <ChevronDown size={16} />
              </div>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedCategory === category}
                      onChange={() => handleCategoryChange(category)}
                      className="h-4 w-4 text-secondary"
                    />
                    <span className="ml-2 text-sm capitalize">{category}</span>
                  </label>
                ))}
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategory === 'new'}
                    onChange={() => handleCategoryChange('new')}
                    className="h-4 w-4 text-secondary"
                  />
                  <span className="ml-2 text-sm">New Arrivals</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategory === 'bestsellers'}
                    onChange={() => handleCategoryChange('bestsellers')}
                    className="h-4 w-4 text-secondary"
                  />
                  <span className="ml-2 text-sm">Bestsellers</span>
                </label>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Gender</h3>
                <ChevronDown size={16} />
              </div>
              <div className="space-y-2">
                {genders.map(gender => (
                  <label key={gender} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedGender === gender}
                      onChange={() => handleGenderChange(gender)}
                      className="h-4 w-4 text-secondary"
                    />
                    <span className="ml-2 text-sm capitalize">{gender}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Brands</h3>
                <ChevronDown size={16} />
              </div>
              <div className="space-y-2">
                {brands.map(brand => (
                  <label key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedBrand === brand}
                      onChange={() => handleBrandChange(brand)}
                      className="h-4 w-4 text-secondary"
                    />
                    <span className="ml-2 text-sm">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Price Range</h3>
                <ChevronDown size={16} />
              </div>
              <div className="pt-2">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(priceRange[0], parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={clearFilters}
              className="w-full py-2 text-sm text-secondary hover:text-primary"
            >
              Clear All Filters
            </button>
          </div>
        </div>
        
        {/* Filters - Desktop */}
        <div className="hidden md:block w-64 pr-8">
          <div className="sticky top-24">
            <div className="mb-6">
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedCategory === category}
                      onChange={() => handleCategoryChange(category)}
                      className="h-4 w-4 text-secondary"
                    />
                    <span className="ml-2 text-sm capitalize">{category}</span>
                  </label>
                ))}
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategory === 'new'}
                    onChange={() => handleCategoryChange('new')}
                    className="h-4 w-4 text-secondary"
                  />
                  <span className="ml-2 text-sm">New Arrivals</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCategory === 'bestsellers'}
                    onChange={() => handleCategoryChange('bestsellers')}
                    className="h-4 w-4 text-secondary"
                  />
                  <span className="ml-2 text-sm">Bestsellers</span>
                </label>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Gender</h3>
              <div className="space-y-2">
                {genders.map(gender => (
                  <label key={gender} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedGender === gender}
                      onChange={() => handleGenderChange(gender)}
                      className="h-4 w-4 text-secondary"
                    />
                    <span className="ml-2 text-sm capitalize">{gender}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Brands</h3>
              <div className="space-y-2">
                {brands.map(brand => (
                  <label key={brand} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedBrand === brand}
                      onChange={() => handleBrandChange(brand)}
                      className="h-4 w-4 text-secondary"
                    />
                    <span className="ml-2 text-sm">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="pt-2">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={priceRange[1]}
                  onChange={(e) => handlePriceChange(priceRange[0], parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={clearFilters}
              className="w-full py-2 text-sm text-secondary hover:text-primary"
            >
              Clear All Filters
            </button>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="flex-1">
          {filteredPerfumes.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No products found matching your criteria.</p>
              <button
                onClick={clearFilters}
                className="mt-4 text-sm font-medium text-secondary hover:text-primary"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPerfumes.map(perfume => (
                <ProductCard key={perfume.id} perfume={perfume} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
 