import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "",
    company: "Molo Rivers Roses",
    role: "Operations Director",
    text: "Knights Energy transformed our energy costs. The 450kW solar installation has reduced our electricity bills by 75%. Their professional team handled everything from design to commissioning flawlessly.",
    rating: 5
  },
  {
    name: "",
    company: "Standard Chartered Bank",
    role: "Facilities Manager",
    text: "Outstanding service from start to finish. The solar system at our headquarters has been performing exceptionally well. We're impressed by their technical expertise and ongoing support.",
    rating: 5
  },
  {
    name: "",
    company: "IBER Africa",
    role: "Sustainability Officer",
    text: "The 575kW installation exceeded our expectations. Knights Energy delivered on time, within budget, and their system is generating even more power than projected. Highly recommend!",
    rating: 5
  },
  {
    name: "",
    company: "Daughters of Charity",
    role: "Administrator",
    text: "We've been running on solar for two years now and couldn't be happier. The savings allow us to invest more in our mission. Knights Energy's maintenance service keeps everything running perfectly.",
    rating: 5
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#36AC43]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#36AC43]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">What Our Clients Say</h3>
          <p className="text-base sm:text-xl text-gray-600">Trusted by businesses across East Africa</p>
        </div>

        {/* Testimonial Content */}
        <div className="relative flex items-center justify-center min-h-[250px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-500 w-full ${index === currentIndex
                ? "relative z-10 opacity-100 translate-x-0"
                : "absolute inset-0 z-0 opacity-0 pointer-events-none"
                }`}
            >
              <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-2">
                {/* Quote Icon */}
                <div className="w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] rounded-full flex items-center justify-center mb-6 sm:mb-8 shadow-lg">
                  <Quote className="w-6 h-6 sm:w-10 sm:h-10 text-white" />
                </div>

                {/* Testimonial Text */}
                <p className="text-lg sm:text-2xl text-gray-700 leading-relaxed mb-6 sm:mb-8 italic">
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className="flex gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#36AC43]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="text-left">
                    <h4 className="text-base sm:text-xl font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-xs sm:text-base text-gray-600">{testimonial.role}</p>
                    <p className="text-xs sm:text-base text-[#36AC43] font-semibold">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mt-8 sm:mt-12">
          <button
            onClick={goToPrev}
            className="w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-700 hover:text-[#36AC43] transition-all duration-300 transform hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2 sm:gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${index === currentIndex
                  ? "w-8 sm:w-12 h-2.5 sm:h-3 bg-[#36AC43]"
                  : "w-2.5 sm:w-3 h-2.5 sm:h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center text-gray-700 hover:text-[#36AC43] transition-all duration-300 transform hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
