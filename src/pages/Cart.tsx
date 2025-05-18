import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ChevronLeft, ShoppingBag, CreditCard } from 'lucide-react';
import { perfumes } from '../data/perfumes';

interface CartItem {
  id: number;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, quantity: 1 },
    { id: 3, quantity: 1 }
  ]);
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  
  const cartItemsData = cartItems.map(item => {
    const perfume = perfumes.find(p => p.id === item.id);
    return {
      ...item,
      perfume
    };
  });
  
  const subtotal = cartItemsData.reduce((sum, item) => 
    sum + (item.perfume?.price || 0) * item.quantity, 0
  );
  
  const shipping = 12;
  const total = subtotal + shipping;

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-serif font-medium mb-8">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <Link 
              to="/shop" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white border border-transparent text-sm font-medium hover:bg-secondary"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="border-b border-gray-200 pb-4 mb-4 hidden md:flex">
                <div className="w-1/2 text-sm font-medium text-gray-600">Product</div>
                <div className="w-1/6 text-sm font-medium text-gray-600 text-center">Price</div>
                <div className="w-1/6 text-sm font-medium text-gray-600 text-center">Quantity</div>
                <div className="w-1/6 text-sm font-medium text-gray-600 text-right">Total</div>
              </div>
              
              <div className="space-y-6">
                {cartItemsData.map(item => (
                  <div key={item.id} className="border-b border-gray-200 pb-6">
                    <div className="flex flex-col md:flex-row md:items-center">
                      <div className="flex md:w-1/2 mb-4 md:mb-0">
                        <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden mr-4">
                          <img 
                            src={item.perfume?.image} 
                            alt={item.perfume?.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium mb-1">{item.perfume?.name}</h3>
                          <p className="text-sm text-gray-500 mb-2">{item.perfume?.brand}</p>
                          <p className="text-xs text-gray-500 mb-2">{item.perfume?.size}</p>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-xs text-gray-500 flex items-center hover:text-secondary md:hidden"
                          >
                            <Trash2 size={14} className="mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                      
                      <div className="md:w-1/6 md:text-center mb-4 md:mb-0">
                        <div className="flex justify-between md:justify-center">
                          <span className="text-sm font-medium md:hidden">Price:</span>
                          <span className="text-sm">${item.perfume?.price}</span>
                        </div>
                      </div>
                      
                      <div className="md:w-1/6 md:text-center mb-4 md:mb-0">
                        <div className="flex justify-between md:justify-center items-center">
                          <span className="text-sm font-medium md:hidden">Quantity:</span>
                          <div className="flex items-center border border-gray-300 w-24">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 flex items-center justify-center text-gray-600"
                            >
                              -
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                              className="w-12 h-8 text-center text-sm border-x border-gray-300"
                            />
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 flex items-center justify-center text-gray-600"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="md:w-1/6 md:text-right">
                        <div className="flex justify-between md:justify-end">
                          <span className="text-sm font-medium md:hidden">Total:</span>
                          <span className="text-sm font-medium">
                            ${((item.perfume?.price || 0) * item.quantity).toFixed(2)}
                          </span>
                        </div>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="text-xs text-gray-500 flex items-center hover:text-secondary mt-2 justify-end hidden md:flex"
                        >
                          <Trash2 size={14} className="mr-1" />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/shop" 
                  className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-secondary"
                >
                  <ChevronLeft size={16} className="mr-1" />
                  Continue Shopping
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-6 rounded">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Subtotal</span>
                    <span className="text-sm font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Shipping</span>
                    <span className="text-sm font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="text-base font-medium">Total</span>
                      <span className="text-base font-medium">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full bg-primary hover:bg-secondary text-white py-3 px-4 font-medium flex items-center justify-center mb-4 transition-colors">
                  <CreditCard size={18} className="mr-2" />
                  Proceed to Checkout
                </button>
                
                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-2">Promotional Code</h3>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 min-w-0 px-3 py-2 border border-gray-300 text-sm"
                    />
                    <button className="bg-gray-900 text-white px-4 py-2 text-sm font-medium">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
 