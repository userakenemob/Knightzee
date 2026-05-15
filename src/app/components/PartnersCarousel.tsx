import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function PartnersCarousel() {
  const partners = [
    { name: "Molo Rivers Roses", logo: "https://via.placeholder.com/200x100/36AC43/FFFFFF?text=Molo+Rivers" },
    { name: "Missionary Benedictines", logo: "https://via.placeholder.com/200x100/36AC43/FFFFFF?text=Benedictines" },
    { name: "MEGA PACK", logo: "https://via.placeholder.com/200x100/36AC43/FFFFFF?text=MEGA+PACK" },
    { name: "KLM Air France", logo: "https://via.placeholder.com/200x100/36AC43/FFFFFF?text=KLM" },
    { name: "KICC", logo: "https://via.placeholder.com/200x100/36AC43/FFFFFF?text=KICC" },
    { name: "Standard Chartered", logo: "https://via.placeholder.com/200x100/36AC43/FFFFFF?text=Standard+Chartered" },
    { name: "IBER Africa", logo: "https://via.placeholder.com/200x100/36AC43/FFFFFF?text=IBER+Africa" },
    { name: "BAT Kenya", logo: "https://via.placeholder.com/200x100/36AC43/FFFFFF?text=BAT" },
    { name: "TotalEnergies", logo: "https://via.placeholder.com/200x100/36AC43/FFFFFF?text=Total" },
    { name: "Elly's Pharmaceuticals", logo: "https://via.placeholder.com/200x100/36AC43/FFFFFF?text=Ellys" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="partners-carousel">
      <Slider {...settings}>
        {partners.map((partner, index) => (
          <div key={index} className="px-4">
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center h-32">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
