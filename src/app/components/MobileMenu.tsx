import { Link } from "react-router";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-[#36AC43]">KNIGHTS ENERGY</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-6 space-y-2 overflow-y-auto h-[calc(100vh-80px)]">
          <Link
            to="/"
            onClick={onClose}
            className="block px-4 py-3 text-gray-700 hover:bg-[#36AC43]/10 hover:text-[#36AC43] rounded-lg font-medium transition-colors"
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setExpandedMenu(expandedMenu === "about" ? null : "about")}
              className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-[#36AC43]/10 hover:text-[#36AC43] rounded-lg font-medium transition-colors"
            >
              About Us
              <ChevronDown className={`w-5 h-5 transition-transform ${expandedMenu === "about" ? "rotate-180" : ""}`} />
            </button>
            {expandedMenu === "about" && (
              <div className="ml-4 mt-2 space-y-1">
                <Link to="/about" onClick={onClose} className="block px-4 py-2 text-gray-600 hover:text-[#36AC43]">About Us</Link>
                <Link to="/about#advantage" onClick={onClose} className="block px-4 py-2 text-gray-600 hover:text-[#36AC43]">Competitive Advantage</Link>
                <Link to="/about#team" onClick={onClose} className="block px-4 py-2 text-gray-600 hover:text-[#36AC43]">Leadership Team</Link>
                <Link to="/about#awards" onClick={onClose} className="block px-4 py-2 text-gray-600 hover:text-[#36AC43]">Awards & Recognition</Link>
                <Link to="/about#careers" onClick={onClose} className="block px-4 py-2 text-gray-600 hover:text-[#36AC43]">Careers</Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setExpandedMenu(expandedMenu === "services" ? null : "services")}
              className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-[#36AC43]/10 hover:text-[#36AC43] rounded-lg font-medium transition-colors"
            >
              Services
              <ChevronDown className={`w-5 h-5 transition-transform ${expandedMenu === "services" ? "rotate-180" : ""}`} />
            </button>
            {expandedMenu === "services" && (
              <div className="ml-4 mt-2 space-y-1">
                <Link to="/services#residential" onClick={onClose} className="block px-4 py-2 text-gray-600 hover:text-[#36AC43]">Residential Solar</Link>
                <Link to="/services#commercial" onClick={onClose} className="block px-4 py-2 text-gray-600 hover:text-[#36AC43]">Commercial & Industrial</Link>
                <Link to="/services#emobility" onClick={onClose} className="block px-4 py-2 text-gray-600 hover:text-[#36AC43]">Electric Mobility</Link>
                <Link to="/services#maintenance" onClick={onClose} className="block px-4 py-2 text-gray-600 hover:text-[#36AC43]">Maintenance</Link>
              </div>
            )}
          </div>

          <Link
            to="/projects"
            onClick={onClose}
            className="block px-4 py-3 text-gray-700 hover:bg-[#36AC43]/10 hover:text-[#36AC43] rounded-lg font-medium transition-colors"
          >
            Projects
          </Link>

          <Link
            to="/media"
            onClick={onClose}
            className="block px-4 py-3 text-gray-700 hover:bg-[#36AC43]/10 hover:text-[#36AC43] rounded-lg font-medium transition-colors"
          >
            Media
          </Link>

          <Link
            to="/shop"
            onClick={onClose}
            className="block px-4 py-3 text-gray-700 hover:bg-[#36AC43]/10 hover:text-[#36AC43] rounded-lg font-medium transition-colors"
          >
            Shop
          </Link>

          <Link
            to="/contact"
            onClick={onClose}
            className="block px-4 py-3 text-gray-700 hover:bg-[#36AC43]/10 hover:text-[#36AC43] rounded-lg font-medium transition-colors"
          >
            Contact Us
          </Link>

          <a
            href="tel:+254788220607"
            className="block px-4 py-3 mt-4 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-lg font-semibold text-center"
          >
            +254 788220607
          </a>
        </nav>
      </div>
    </div>
  );
}
