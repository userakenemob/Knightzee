import { X } from "lucide-react";
import { useEffect } from "react";

interface EcoHubModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: {
    description: string;
    benefits: string[];
    details: string[];
  };
}

export function EcoHubModal({ isOpen, onClose, title, content }: EcoHubModalProps) {
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300">
        <div className="sticky top-0 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white p-8 rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-gray-200 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <h2 className="text-4xl font-bold pr-12">{title}</h2>
        </div>
        <div className="p-8 lg:p-12">
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            {content.description}
          </p>

          <h3 className="text-2xl font-bold mb-6 text-gray-900">Key Benefits</h3>
          <ul className="space-y-4 mb-8">
            {content.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#36AC43] text-white flex items-center justify-center flex-shrink-0 mt-1 font-bold text-sm">
                  ✓
                </span>
                <span className="text-lg text-gray-700 leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-bold mb-6 text-gray-900">How It Works</h3>
          <div className="space-y-4">
            {content.details.map((detail, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {detail}
              </p>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-gray-200">
            <button
              onClick={onClose}
              className="w-full px-8 py-4 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-xl transition-all duration-300 font-bold text-xl"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
