import { Link } from "react-router";
import { Mail, Clock, MapPin, Phone, Download } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Top Section - Brand & Description */}
        <div className="mb-12 pb-12 border-b border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Link to="/" className="inline-block mb-4">
                <div className="text-4xl font-bold tracking-tight transition-all duration-300 hover:scale-105" style={{ color: '#36AC43' }}>
                  KNIGHTS ENERGY
                </div>
              </Link>
              <p className="text-gray-300 text-xl leading-relaxed max-w-xl">
                East Africa's leading Solar Energy solutions provider, delivering sustainable and innovative renewable energy systems across Kenya, Uganda, and Tanzania.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a
                href="#"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>
                <span className="font-semibold text-lg">App Store</span>
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/></svg>
                <span className="font-semibold text-lg">Google Play</span>
              </a>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about#team" className="text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link to="/about#awards" className="text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  Awards & Recognition
                </Link>
              </li>
              <li>
                <Link to="/about#careers" className="text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#residential" className="text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  Residential Solar
                </Link>
              </li>
              <li>
                <Link to="/services#commercial" className="text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  Commercial & Industrial
                </Link>
              </li>
              <li>
                <Link to="/services#minigrids" className="text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  Mini-grids & Off-grid
                </Link>
              </li>
              <li>
                <Link to="/services#emobility" className="text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  Electric Mobility
                </Link>
              </li>
              <li>
                <Link to="/services#waterheating" className="text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  Solar Water Heating
                </Link>
              </li>
              <li>
                <Link to="/services#maintenance" className="text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/media#blog" className="text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/media#gallery" className="text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  Shop
                </Link>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  <Download className="w-4 h-4" />
                  Product Catalogue
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-[#36AC43] transition-colors text-base">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Get in Touch</h3>
            <div className="space-y-4">
              <a href="tel:+254788220607" className="flex items-center gap-3 text-gray-300 hover:text-[#36AC43] transition-colors text-base group">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-[#36AC43] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+254 788 220 607</span>
              </a>
              <a href="tel:+254722953976" className="flex items-center gap-3 text-gray-300 hover:text-[#36AC43] transition-colors text-base group">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-[#36AC43] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+254 722 953 976</span>
              </a>
              <a href="mailto:info@knightsandapps.com" className="flex items-center gap-3 text-gray-300 hover:text-[#36AC43] transition-colors text-base group">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-[#36AC43] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@knightsandapps.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300 text-base">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <span>Mon-Fri: 8am – 5pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Locations Section */}
        <div className="mb-12 pb-12 border-b border-gray-700">
          <h3 className="text-2xl font-bold mb-6 text-white text-center">Our Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🇰🇪</span>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-lg">Kenya</h4>
                  <p className="text-base text-gray-300">Great Jubilee Centre, Nairobi</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🇺🇬</span>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-lg">Uganda</h4>
                  <p className="text-base text-gray-300">Sempagala Zone, Kampala</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-2xl p-6 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🇹🇿</span>
                <div>
                  <h4 className="font-semibold text-white mb-1 text-lg">Tanzania</h4>
                  <p className="text-base text-gray-300">Old Bagamoyo Rd, Dar es Salaam</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Well+Mall+Karen+Nairobi+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#36AC43] hover:text-[#2d8c36] font-semibold transition-colors text-base"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-base text-gray-400">
          <p>© 2026 Knights Energy. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#36AC43] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#36AC43] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#36AC43] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">Design by Nexora Labs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
