import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade";
  delay?: number;
  className?: string;
}

export function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  className = ""
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animationClasses = {
    "fade-up": inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
    "fade-down": inView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12",
    "fade-left": inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
    "fade-right": inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
    "zoom-in": inView ? "opacity-100 scale-100" : "opacity-0 scale-95",
    "fade": inView ? "opacity-100" : "opacity-0",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${animationClasses[animation]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
