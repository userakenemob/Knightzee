import { Link } from "react-router";
import { Home, Building2, Zap, Battery, Droplet, Wrench, FlaskConical, Camera } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

export function Services() {
  const services = [
    {
      id: "residential",
      icon: Home,
      title: "Residential Solar Solutions",
      description: "Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way. Besides offering great savings on electricity bills, we provide complete residential solar installations tailored to your home's energy needs.",
      image: "https://images.unsplash.com/photo-1615630859219-0459703c34e6?w=800",
    },
    {
      id: "commercial",
      icon: Building2,
      title: "Commercial & Industrial Solar Solutions",
      description: "We offer a complete commercial and industrial solar solution designed to reduce operational costs and improve energy efficiency for businesses of all sizes. Our systems are scalable and designed for maximum ROI.",
      image: "https://images.unsplash.com/photo-1629726797843-618688139f5a?w=800",
    },
    {
      id: "minigrids",
      icon: Battery,
      title: "Mini-grids & Off-grid Solar Projects",
      description: "Looking for ways to Save Energy costs? Looking to invest in an Energy System for your own consumption. Our mini-grid and off-grid solutions provide reliable power in remote locations without access to the main grid.",
      image: "https://images.unsplash.com/photo-1774927334511-c2d1cf654b08?w=800",
    },
    {
      id: "emobility",
      icon: Zap,
      title: "Electric Mobility",
      description: "Our current transport sector has to break away from energy- and carbon-intensive development paths that have resulted in higher energy costs. We provide comprehensive e-mobility solutions including EV charging infrastructure.",
      image: "https://images.unsplash.com/photo-1726221062287-fda475b85493?w=800",
    },
    {
      id: "waterheating",
      icon: Droplet,
      title: "Solar Water Heating Systems",
      description: "Hot water accounts for a big percentage of energy consumption. Solar Water heaters are a very effective method of using natural energy to heat water for domestic and commercial use, reducing electricity costs significantly.",
      image: "https://images.unsplash.com/photo-1670519808728-335b1eb2ef52?w=800",
    },
    {
      id: "waterpumping",
      icon: Droplet,
      title: "Solar Water Pumping Systems",
      description: "Our Solar Water Pumping System/Waterbox is specially designed for water supply in agricultural, residential, and commercial applications. These systems are reliable, cost-effective, and require minimal maintenance.",
      image: "https://images.unsplash.com/photo-1776918570438-886f538edd93?w=800",
    },
    {
      id: "maintenance",
      icon: Wrench,
      title: "Operation and Maintenance",
      description: "Knights Energy carry out regular maintenance and inspection of the entire PV system to ensure optimal performance. Our O&M services include monitoring, cleaning, repairs, and performance optimization.",
      image: "https://images.unsplash.com/photo-1774542916400-77f2dd1744d7?w=800",
    },
    {
      id: "testing",
      icon: FlaskConical,
      title: "Power Plant Testing and Commissioning",
      description: "Knights Energy offers independent third-party End-to-End testing and commissioning services to ensure your solar power plant meets all technical specifications and performance guarantees.",
      image: "https://images.unsplash.com/photo-1771178301028-49a922aefccd?w=800",
    },
    {
      id: "surveillance",
      icon: Camera,
      title: "Surveillance Installation",
      description: "We offer complete CCTV surveillance and security system installation for commercial and industrial facilities. Our systems integrate seamlessly with solar power installations for uninterrupted operation.",
      image: "https://images.unsplash.com/photo-1726221062299-88f27b653c59?w=800",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="relative min-h-[500px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1774927334511-c2d1cf654b08?w=1600')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-white w-full text-center py-28">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-3xl text-gray-200 mb-4">
            Fostering the Growth of Solar Energy Market
          </p>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A Leading Supplier Of Solar Materials For Manufacturers, Installers & Contractors
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-32">
            {services.map((service, index) => (
              <AnimatedSection key={service.id} animation={index % 2 === 0 ? "fade-right" : "fade-left"}>
                <div
                  id={service.id}
                  className={`grid md:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-xl">
                    <service.icon className="w-12 h-12 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">{service.title}</h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                  <Link
                    to="/contact"
                    className="inline-block px-10 py-4 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-xl transform hover:-translate-y-1"
                  >
                    Learn More
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="relative">
                    <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#36AC43]/10 rounded-full"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-3xl shadow-2xl w-full h-[500px] object-cover relative z-10"
                    />
                    <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#36AC43]/10 rounded-full"></div>
                  </div>
                </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            What our clients have to say!
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="text-[#36AC43] text-3xl">★★★★★</div>
                </div>
                <p className="text-white text-xl mb-8 leading-relaxed">
                  "Knights Energy delivered an exceptional solar solution for our facility. The team was professional, and the installation exceeded our expectations."
                </p>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#36AC43] to-[#2d8c36] rounded-full mr-4"></div>
                  <div>
                    <p className="font-bold text-white text-xl">Client Name</p>
                    <p className="text-gray-300 text-base">Company Name</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Request A Quote</h2>
            <p className="text-xl text-gray-600">
              Receive an accurate quote within 3-5 days when you fill out the form below. Or, give us a call:{" "}
              <a href="tel:+254788220607" className="text-[#36AC43] font-bold">
                +254 788220607
              </a>
            </p>
          </div>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43] text-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43] text-lg"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43] text-lg"
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43] text-lg"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="System Installer?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43] text-lg"
              />
              <input
                type="text"
                placeholder="Project completed by?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43] text-lg"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="number"
                placeholder="Monthly electric usage in kWh?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43] text-lg"
              />
              <input
                type="text"
                placeholder="Solar system type?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43] text-lg"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Solar panels place?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43] text-lg"
              />
              <input
                type="text"
                placeholder="Materials on your roof?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#36AC43] text-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 text-base">Preferred Contact Method</label>
              <div className="flex gap-4 text-base">
                <label className="flex items-center gap-2">
                  <input type="radio" name="contact" value="all" className="text-[#36AC43]" defaultChecked />
                  <span>All</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="contact" value="email" className="text-[#36AC43]" />
                  <span>Email</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="contact" value="phone" className="text-[#36AC43]" />
                  <span>Phone</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-[#36AC43] text-white rounded-lg hover:bg-[#2d8c36] text-xl font-semibold"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
