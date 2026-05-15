import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useShopify } from "../contexts/ShopifyContext";

interface ShopifyCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShopifyCartDrawer({ isOpen, onClose }: ShopifyCartDrawerProps) {
  const { checkout, updateQuantity, removeFromCart, proceedToCheckout, totalItems } = useShopify();

  if (!isOpen) return null;

  const lineItems = checkout?.lineItems || [];
  const totalPrice = parseFloat(checkout?.totalPrice.amount || "0");

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Shopping Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {lineItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="w-24 h-24 text-gray-300 mb-4" />
              <p className="text-xl text-gray-500 mb-2">Your cart is empty</p>
              <p className="text-gray-400 mb-6">Add some products to get started!</p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-[#36AC43] text-white rounded-lg hover:bg-[#2d8c36] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {lineItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-2xl p-4 flex gap-4 hover:shadow-md transition-shadow"
                >
                  {item.variant.image && (
                    <img
                      src={item.variant.image.src}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-[#36AC43] font-bold mb-3">
                      KSh {parseFloat(item.variant.price.amount).toLocaleString()}
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 bg-white border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {lineItems.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-white">
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Items:</span>
                <span className="font-semibold">{totalItems}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-lg font-bold">Total:</span>
                <span className="text-lg font-bold text-[#36AC43]">
                  KSh {totalPrice.toLocaleString()}
                </span>
              </div>
            </div>
            <button
              onClick={() => {
                proceedToCheckout();
                onClose();
              }}
              className="w-full block text-center px-6 py-4 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-xl transition-all duration-300 font-bold mb-3"
            >
              Checkout with Shopify
            </button>
            <p className="text-xs text-center text-gray-500">
              Secure checkout powered by Shopify
            </p>
          </div>
        )}
      </div>
    </>
  );
}
