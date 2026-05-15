import { useShopify } from "../contexts/ShopifyContext";
import { Link } from "react-router";
import { ArrowLeft, CreditCard, Truck, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export function Checkout() {
  const { checkout, proceedToCheckout } = useShopify();
  const items = checkout?.lineItems || [];
  const totalPrice = parseFloat(checkout?.totalPrice.amount || "0");

  useEffect(() => {
    // If user lands on checkout page with items, they likely want to proceed to Shopify
    if (items.length > 0) {
      toast.info("Redirecting to secure Shopify checkout...");
      setTimeout(() => {
        proceedToCheckout();
      }, 2000);
    }
  }, []);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    paymentMethod: "mpesa",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Shopify checkout instead of processing locally
    proceedToCheckout();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <CreditCard className="w-16 h-16 text-gray-400" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h1>
          <p className="text-gray-600 mb-8">Add some products to proceed to checkout</p>
          <Link
            to="/shop"
            className="inline-block px-8 py-4 bg-[#36AC43] text-white rounded-xl hover:bg-[#2d8c36] transition-colors font-bold"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-[#36AC43] transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Continue Shopping
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Billing Details</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43]"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43]"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-semibold">
                  Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43]"
                  placeholder="Street address"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43]"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-semibold">Region</label>
                  <select
                    value={formData.region}
                    onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43]"
                  >
                    <option value="">Select Region</option>
                    <option value="nairobi">Nairobi</option>
                    <option value="mombasa">Mombasa</option>
                    <option value="kisumu">Kisumu</option>
                    <option value="nakuru">Nakuru</option>
                    <option value="eldoret">Eldoret</option>
                  </select>
                </div>
              </div>

              <div className="mb-8">
                <label className="block text-gray-700 mb-4 font-semibold">Payment Method</label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#36AC43] transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="mpesa"
                      checked={formData.paymentMethod === "mpesa"}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                      className="text-[#36AC43]"
                    />
                    <span className="font-semibold">M-Pesa</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#36AC43] transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                      className="text-[#36AC43]"
                    />
                    <span className="font-semibold">Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-[#36AC43] transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={formData.paymentMethod === "cod"}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                      className="text-[#36AC43]"
                    />
                    <span className="font-semibold">Cash on Delivery</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-xl transition-all duration-300 font-bold text-lg"
              >
                Continue to Shopify Checkout
              </button>
              <p className="text-xs text-center text-gray-500 mt-3">
                You'll be redirected to our secure Shopify checkout
              </p>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    {item.variant.image && (
                      <img
                        src={item.variant.image.src}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      <p className="text-[#36AC43] font-bold">
                        KSh {(parseFloat(item.variant.price.amount) * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">KSh {totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-900 pt-3 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-[#36AC43]">KSh {totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Truck className="w-5 h-5 text-[#36AC43]" />
                  <span>Free delivery on orders over KSh 5,000</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="w-5 h-5 text-[#36AC43]" />
                  <span>Secure payment processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
