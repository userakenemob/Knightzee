import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ImageLightbox({ images, currentIndex, isOpen, onClose, onNext, onPrev }: ImageLightboxProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors z-10"
      >
        <X className="w-10 h-10" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-8 text-white hover:text-gray-300 transition-colors z-10 p-4 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-8 text-white hover:text-gray-300 transition-colors z-10 p-4 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div
        className="relative max-w-7xl max-h-[90vh] mx-4 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
