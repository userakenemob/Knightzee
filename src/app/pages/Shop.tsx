import { useState, useMemo, useEffect } from "react";
import { ShoppingCart, Search, Filter } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { useShopify } from "../contexts/ShopifyContext";

export function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { addToCart } = useShopify();

  const allProducts = [
    { id: "flir-vp50-2", name: "FLIR VP50-2", category: "Test & Measurement", price: 1000, image: "https://images.unsplash.com/photo-1615630859219-0459703c34e6?w=400" },
    { id: "l-feets-80mm", name: "L Feets 80mm", category: "Solar Mounting", price: 500, image: "https://images.unsplash.com/photo-1629726797843-618688139f5a?w=400" },
    { id: "solar-300n", name: "Solar 300N", category: "Solar Panels", price: 3000, image: "https://images.unsplash.com/photo-1774927334511-c2d1cf654b08?w=400" },
    { id: "fluke-1735", name: "Fluke 1735 Power Logger", category: "Test & Measurement", price: 3000, image: "https://images.unsplash.com/photo-1670519808728-335b1eb2ef52?w=400" },
    { id: "fluke-1732", name: "Fluke 1732 Energy Logger", category: "Test & Measurement", price: 3000, image: "https://images.unsplash.com/photo-1776918570438-886f538edd93?w=400" },
    { id: "fluke-1730", name: "Fluke 1730 Energy Logger", category: "Test & Measurement", price: 3000, image: "https://images.unsplash.com/photo-1771178301028-49a922aefccd?w=400" },
    { id: "evse-adapter", name: "EVSE Adapter", category: "E-Mobility", price: 2000, image: "https://images.unsplash.com/photo-1774542916400-77f2dd1744d7?w=400" },
    { id: "eva-500", name: "EVA 500 UK AMPROBE", category: "E-Mobility", price: 2000, image: "https://images.unsplash.com/photo-1756511332583-99fc0d4bf7cf?w=400" },
    { id: "ev-charge-check", name: "EV Charge Check", category: "E-Mobility", price: 2000, image: "https://images.unsplash.com/photo-1726221062287-fda475b85493?w=400" },
    { id: "sunpower-maxeon", name: "SunPower Maxeon 3", category: "Solar Panels", price: 45000, image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400" },
    { id: "sma-sunny-boy", name: "SMA Sunny Boy Inverter", category: "Inverters", price: 120000, image: "https://images.unsplash.com/photo-1559302504-64aae6ca381f?w=400" },
    { id: "victron-multiplus", name: "Victron MultiPlus-II", category: "Inverters", price: 85000, image: "https://images.unsplash.com/photo-1584484080173-1954fbc0f448?w=400" },
  ];

  const categories = ["All", "Solar Panels", "Inverters", "E-Mobility", "Test & Measurement", "Solar Mounting"];

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, allProducts]);

  const ITEMS_PER_PAGE = 6;
  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / ITEMS_PER_PAGE));
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Hero */}
      <section
        className="relative min-h-[300px] md:min-h-[400px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1670519808728-335b1eb2ef52?w=1600')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-white w-full text-center py-16 sm:py-20">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">Our Shop</h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto">
            Quality solar equipment, inverters, e-mobility accessories, and measurement tools for your energy needs.
          </p>
        </div>
      </section>

      {/* Controls & Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Sidebar / Filters */}
            <div className="w-full lg:w-1/4 space-y-6 sm:space-y-8">
              {/* Search */}
              <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-[#36AC43]" /> Search
                </h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-[#36AC43] text-gray-700 placeholder-gray-400 transition-shadow text-sm sm:text-base"
                  />
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white p-5 sm:p-6 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-[#36AC43]" /> Categories
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`text-left px-3 py-2.5 sm:px-4 sm:py-3 rounded-xl transition-all duration-300 font-medium text-xs sm:text-sm md:text-base ${
                        selectedCategory === category 
                          ? "bg-[#36AC43] text-white shadow-md" 
                          : "text-gray-600 hover:bg-gray-50 hover:text-[#36AC43]"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full lg:w-3/4">
              {/* Header */}
              <div className="bg-white px-6 py-4 sm:px-8 rounded-3xl shadow-md border border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8">
                <p className="text-gray-600 font-medium text-sm sm:text-base">
                  Showing <span className="text-[#36AC43] font-bold">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span>–
                  <span className="text-[#36AC43] font-bold">{Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)}</span> of{" "}
                  <span className="text-gray-900 font-bold">{filteredProducts.length}</span> results
                </p>
                <select className="bg-gray-50 border-none px-4 py-2 rounded-xl focus:ring-2 focus:ring-[#36AC43] text-gray-700 font-medium cursor-pointer text-sm sm:text-base w-full sm:w-auto">
                  <option>Sort by latest</option>
                  <option>Price: low to high</option>
                  <option>Price: high to low</option>
                </select>
              </div>

              {/* Products Grid */}
              {currentProducts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                  {currentProducts.map((product, index) => (
                    <AnimatedSection key={product.id} animation="fade-up" delay={index * 50}>
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group flex flex-col h-full border border-gray-100">
                        <div className="relative h-48 sm:h-64 bg-gray-100 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#36AC43] uppercase tracking-wider shadow-sm">
                            {product.category}
                          </div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 group-hover:text-[#36AC43] transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                          <div className="mt-auto pt-4">
                            <p className="text-xl sm:text-2xl font-bold text-[#36AC43] mb-6">
                              KSh {product.price.toLocaleString()}.00
                            </p>
                            <button
                              onClick={() => addToCart(product.id)}
                              className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#36AC43] text-white rounded-xl hover:bg-[#2d8c36] hover:shadow-lg transition-all duration-300 font-bold text-base sm:text-lg"
                            >
                              <ShoppingCart className="w-5 h-5" />
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-6 sm:p-16 text-center">
                  <Search className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">No products found</h3>
                  <p className="text-gray-500 text-sm sm:text-lg">Try adjusting your search or category filter to find what you're looking for.</p>
                  <button 
                    onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                    className="mt-6 px-5 py-2.5 sm:px-6 sm:py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 font-bold transition-colors text-sm sm:text-base"
                  >
                    Clear Filters
                  </button>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-12">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-12 h-12 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center ${
                        currentPage === page
                          ? "bg-[#36AC43] text-white shadow-lg transform -translate-y-1"
                          : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-[#36AC43] hover:text-[#36AC43]"
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
