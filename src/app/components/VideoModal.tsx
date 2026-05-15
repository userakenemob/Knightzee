import { X } from "lucide-react";
import { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export function VideoModal({ isOpen, onClose, videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ" }: VideoModalProps) {
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
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white hover:text-gray-300 transition-colors z-10"
      >
        <X className="w-10 h-10" />
      </button>
      <div
        className="relative w-full max-w-5xl mx-4 aspect-video animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={videoUrl}
          className="w-full h-full rounded-2xl shadow-2xl"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
