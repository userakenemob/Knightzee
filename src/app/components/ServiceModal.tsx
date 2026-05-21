import { X } from "lucide-react";
import { useEffect } from "react";
import { AnimatedSection } from "./AnimatedSection";

export interface ServiceData {
  id: string;
  icon: any;
  title: string;
  description: string;
  image: string;
  longDescription?: string;
  benefits?: string[];
}

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceData | null;
}

export function ServiceModal({ isOpen, onClose, service }: ServiceModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col animate-in zoom-in-95 duration-300">
        
        {/* Header / Hero Image */}
        <div className="relative h-60 sm:h-80 w-full flex-shrink-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white backdrop-blur-md transition-colors z-30"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="absolute bottom-0 left-0 p-5 sm:p-8 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 w-full">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#36AC43] rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white drop-shadow-md">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 flex-grow">
          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
            {service.longDescription || service.description}
          </p>

          {service.benefits && service.benefits.length > 0 && (
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">Key Features & Benefits</h3>
              <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#36AC43]/10 text-[#36AC43] flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-base sm:text-lg text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a 
              href="/contact"
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-xl transition-all duration-300 font-bold text-base sm:text-lg inline-block"
            >
              Request a Quote for this Service
            </a>
            <button
              onClick={onClose}
              className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 sm:py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 font-bold text-base sm:text-lg"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
