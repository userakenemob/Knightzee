import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { useShopify } from "../contexts/ShopifyContext";

export function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useShopify();

  const products = [
    { id: "flir-vp50-2", name: "FLIR VP50-2", price: 1000, image: "https://images.unsplash.com/photo-1615630859219-0459703c34e6?w=400" },
    { id: "l-feets-80mm", name: "L Feets 80mm", price: 0, image: "https://images.unsplash.com/photo-1629726797843-618688139f5a?w=400" },
    { id: "solar-300n", name: "Solar 300N", price: 3000, image: "https://images.unsplash.com/photo-1774927334511-c2d1cf654b08?w=400" },
    { id: "fluke-1735", name: "Fluke 1735 Power Logger", price: 3000, image: "https://images.unsplash.com/photo-1670519808728-335b1eb2ef52?w=400" },
    { id: "fluke-1732", name: "Fluke 1732 Energy Logger", price: 3000, image: "https://images.unsplash.com/photo-1776918570438-886f538edd93?w=400" },
    { id: "fluke-1730", name: "Fluke 1730 Energy Logger", price: 3000, image: "https://images.unsplash.com/photo-1771178301028-49a922aefccd?w=400" },
    { id: "evse-adapter", name: "EVSE Adapter", price: 2000, image: "https://images.unsplash.com/photo-1774542916400-77f2dd1744d7?w=400" },
    { id: "eva-500", name: "EVA 500 UK AMPROBE", price: 2000, image: "https://images.unsplash.com/photo-1756511332583-99fc0d4bf7cf?w=400" },
    { id: "ev-charge-check", name: "EV Charge Check", price: 2000, image: "https://images.unsplash.com/photo-1726221062287-fda475b85493?w=400" },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="relative min-h-[500px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1670519808728-335b1eb2ef52?w=1600')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-white w-full text-center py-28">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Quality solar equipment and accessories for your renewable energy needs
          </p>
        </div>
      </section>

      {/* Filter and Sort */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p className="text-base text-gray-600">Showing 1–9 of 39 results</p>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43] text-base">
              <option>Sort by latest</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
              <option>Sort by popularity</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <AnimatedSection key={product.id} animation="fade-up" delay={index * 100}>
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="relative h-80 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#36AC43] transition-colors">{product.name}</h3>
                  <p className="text-2xl font-bold text-[#36AC43] mb-6">
                    KSh {product.price.toLocaleString()}.00
                  </p>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-xl transition-all duration-300 font-bold text-xl transform hover:-translate-y-1"
                  >
                    <ShoppingCart className="w-6 h-6" />
                    Add to Cart
                  </button>
                </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-3 mt-16">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-14 h-14 rounded-xl font-bold text-xl transition-all duration-300 ${
                  currentPage === page
                    ? "bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white shadow-lg scale-110"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
