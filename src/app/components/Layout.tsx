import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { WhatsAppButton } from "./WhatsAppButton";
import { ScrollProgress } from "./ScrollProgress";
import { useEffect } from "react";

export function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          // Adjust scroll position for the fixed header
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}
