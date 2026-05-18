import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function PartnersCarousel() {
  const partners = [
    { name: "Molo Rivers Roses", logo: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835841/Zena_rmk2bt.jpg" },
    { name: "Missionary Benedictines", logo: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835833/Missionary-Benedictines-sisters_coa2iu.jpg" },
    { name: "MEGA PACK", logo: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835832/MEGA-PACK_kmlozg.jpg" },
    { name: "KLM Air France", logo: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835839/wonderfeeds_ahv1dz.jpg" },
    { name: "KICC", logo: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835837/The-Well_vpnbl6.jpg" },
    { name: "Standard Chartered", logo: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835836/St-Scholastica-Uzima-Hospital_jm2uxf.jpg" },
    { name: "IBER Africa", logo: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835836/Signon-Aviation_zdk3ly.jpg" },
    { name: "BAT Kenya", logo: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835835/SIGMA-FEEDS_yvufpp.jpg" },
    { name: "TotalEnergies", logo: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779091988/TOTAL-LOGO_bhyxfo.png" },
    { name: "Elly's Pharmaceuticals", logo: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835835/Shell_nk8trx.jpg" },
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
