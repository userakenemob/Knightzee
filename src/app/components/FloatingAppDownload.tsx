import { useState } from "react";
import { X, Smartphone } from "lucide-react";

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.namp.echarge";
const APP_STORE_URL = "https://apps.apple.com/us/app/echarge-africa/id6448098088";

function GooglePlayIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-11.58L13.2 8.8 3.18 23.76z" fill="#EA4335"/>
      <path d="M20.56 10.4 17.1 8.4l-3.9 3.58 3.9 3.58 3.5-2.02a1.5 1.5 0 0 0 0-2.6-.04-.02-.04-.04 0 0z" fill="#FBBC04"/>
      <path d="M3.18.24A1.5 1.5 0 0 0 2.5 1.5v21a1.5 1.5 0 0 0 .68 1.26l.1.06L16.77 12 3.28.18l-.1.06z" fill="#4285F4"/>
      <path d="M4.17.04 17.1 8.4l-3.9 3.58L3.18.24a1.5 1.5 0 0 1 .99-.2z" fill="#34A853"/>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  );
}

export function FloatingAppDownload() {
  const [open, setOpen] = useState(false);
  const [badgeDismissed, setBadgeDismissed] = useState(false);

  return (
    <div
      className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      {/* Expanded popup */}
      {open && (
        <div
          className="rounded-2xl overflow-hidden shadow-2xl w-72"
          style={{ border: "1px solid rgba(0,0,0,0.1)" }}
        >
          {/* Header */}
          <div
            className="px-4 py-4 flex items-center justify-between"
            style={{ background: "linear-gradient(135deg, #36ac43 0%, #1a7a26 100%)" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <Smartphone size={20} color="#fff" />
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-tight">eCharge Africa</p>
                <p className="text-white/80 text-xs">Smart EV Charging App</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* App preview */}
          <div className="p-5" style={{ background: "#f9f9f9" }}>
            <div
              className="rounded-xl p-4 mb-4 text-center"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"
                style={{ background: "linear-gradient(135deg, #36ac43, #1a7a26)" }}
              >
                <Smartphone size={28} color="#fff" />
              </div>
              <p className="font-bold text-black text-sm mb-1">eCharge Africa</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                Find, use & pay for EV charging stations across Africa — right from your phone.
              </p>
              <div className="flex items-center justify-center gap-1 mt-3">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#f59e0b">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
                <span className="text-xs text-gray-400 ml-1">4.8 · 2k+ reviews</span>
              </div>
            </div>

            {/* App features */}
            <div className="space-y-2 mb-4">
              {[
                "📍 Find nearby EV charging stations",
                "⚡ Start & stop charging sessions",
                "💳 Seamless in-app payment",
                "📊 Track energy usage & costs",
              ].map((f) => (
                <p key={f} className="text-xs text-gray-600 flex items-start gap-2">{f}</p>
              ))}
            </div>

            {/* Download buttons */}
            <div className="flex flex-col gap-2.5">
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-md"
                style={{ background: "#000", color: "#fff" }}
              >
                <GooglePlayIcon />
                <div className="text-left">
                  <p className="text-white/70 text-[10px] leading-none mb-0.5">GET IT ON</p>
                  <p className="text-white font-semibold text-sm leading-none">Google Play</p>
                </div>
              </a>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-md"
                style={{ background: "#000", color: "#fff" }}
              >
                <AppleIcon />
                <div className="text-left">
                  <p className="text-white/70 text-[10px] leading-none mb-0.5">DOWNLOAD ON THE</p>
                  <p className="text-white font-semibold text-sm leading-none">App Store</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Teaser badge */}
      {!open && !badgeDismissed && (
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-xl shadow-lg cursor-pointer transition-all hover:scale-105"
          style={{ background: "#36ac43" }}
          onClick={() => { setOpen(true); setBadgeDismissed(true); }}
        >
          <Smartphone size={14} color="#fff" />
          <span className="text-white text-xs font-semibold">Download our app!</span>
          <button
            onClick={(e) => { e.stopPropagation(); setBadgeDismissed(true); }}
            className="text-white/70 hover:text-white ml-1"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Main FAB */}
      <button
        onClick={() => { setOpen(!open); setBadgeDismissed(true); }}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 relative"
        style={{ background: "linear-gradient(135deg, #36ac43 0%, #1a7a26 100%)" }}
        aria-label="Download eCharge Africa app"
      >
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-20"
          style={{ background: "#36ac43" }}
        />
        <Smartphone size={26} color="#fff" />
      </button>
    </div>
  );
}
