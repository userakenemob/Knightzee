import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Linkedin, Mail, X } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  linkedin: string;
  email: string;
}

export function TeamCarousel() {
  const team: TeamMember[] = [
    {
      name: "Francis Romano",
      role: "MD & CEO of Knights Energy",
      image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779355446/Remove_the_circle_on_the_202605211220_txyrek.jpg",
      description: "Over 15 years of pioneering leadership in renewable energy, driving the region's transition to clean power solutions.",
      linkedin: "https://www.linkedin.com/in/francis-romano-763683248/",
      email: "mailto:romano@knightsandapps.com",
    },
    {
      name: "June Moraa",
      role: "COO",
      image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779355773/1712713886662_rf4fst.jpg",
      description: "Expert in operations management and scaling sustainable business processes with a focus on project execution and service delivery.",
      linkedin: "https://www.linkedin.com/in/june-nyandwaki-890bb0212/",
      email: "mailto:hse@knightsandapps.com",
    },
    {
      name: "David Mwangi",
      role: "Head of Solar Engineering",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop",
      description: "Leading our engineering teams to design and implement highly efficient commercial, industrial, and institutional solar systems.",
      linkedin: "#",
      email: "mailto:david@knightsenergy.co.ke",
    },
    {
      name: "Sarah Wambui",
      role: "Chief Financial Officer (CFO)",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=400&fit=crop",
      description: "Financial strategist specializing in clean-tech investments, power purchase agreements (PPAs), and regional financial operations.",
      linkedin: "#",
      email: "mailto:sarah@knightsenergy.co.ke",
    },
    {
      name: "John Ochieng",
      role: "Head of Electric Mobility",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=400&fit=crop",
      description: "Driving our EV integration initiative, designing charging infrastructure ecosystems, and spearheading electric fleet transitions.",
      linkedin: "#",
      email: "mailto:john@knightsenergy.co.ke",
    },
    {
      name: "Amina Yusuf",
      role: "Head of Customer Success",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&h=400&fit=crop",
      description: "Committed to delivering outstanding client support, system performance monitoring, and ensuring long-term environmental impact.",
      linkedin: "#",
      email: "mailto:amina@knightsenergy.co.ke",
    },
  ];

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedMember]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="team-carousel pb-12">
      <Slider {...settings}>
        {team.map((member, index) => (
          <div key={index} className="py-4 px-3 sm:px-4">
            <div
              onClick={() => setSelectedMember(member)}
              className="relative bg-white rounded-3xl cursor-pointer shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100/80 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-gray-200/60 transition-all duration-500 transform hover:-translate-y-1 p-6 sm:p-8 flex flex-col justify-between min-h-[480px] h-full group overflow-hidden"
            >
              <div>
                {/* Non-circle, portrait rectangular frame with glassmorphic social overlay */}
                <div className="relative aspect-[4/5] w-full rounded-2xl mb-6 shadow-sm overflow-hidden bg-gray-50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover brightness-95 group-hover:brightness-100 transition-all duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  {/* Glassmorphic dynamic social media hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-between p-6">
                    <span className="text-white text-xs font-semibold uppercase tracking-widest bg-[#36AC43] px-3 py-1 rounded-full shadow-md transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      View Bio
                    </span>
                    <div
                      className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/90 backdrop-blur-md hover:bg-white text-gray-900 p-2.5 rounded-full shadow-lg hover:text-[#36AC43] hover:scale-110 transition-all duration-200"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.email}
                        className="bg-white/90 backdrop-blur-md hover:bg-white text-gray-900 p-2.5 rounded-full shadow-lg hover:text-[#36AC43] hover:scale-110 transition-all duration-200"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-1 text-gray-900 group-hover:text-[#36AC43] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#36AC43] font-semibold text-xs sm:text-sm uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-2">
                  {member.description}
                </p>
              </div>

              {/* Bottom brand-green hover progression accent bar */}
              <div className="absolute bottom-0 left-0 h-1 bg-[#36AC43] w-0 group-hover:w-full transition-all duration-500 rounded-b-3xl" />
            </div>
          </div>
        ))}
      </Slider>

      {/* Dynamic Team Member Biography Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          ></div>
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row animate-in zoom-in-95 duration-300 overflow-hidden border border-gray-100">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 bg-black/10 hover:bg-black/25 text-gray-800 hover:text-black p-2.5 rounded-full backdrop-blur-md transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Side: Portrait Image */}
            <div className="w-full md:w-2/5 aspect-[4/5] md:aspect-auto md:h-auto relative bg-gray-50 flex-shrink-0">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Right Side: Details & Biography */}
            <div className="w-full md:w-3/5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-[#36AC43] font-semibold text-xs sm:text-sm uppercase tracking-wider block mb-2">
                  {selectedMember.role}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  {selectedMember.name}
                </h2>
                
                {/* Visual Accent bar */}
                <div className="w-12 h-1 bg-[#36AC43] rounded-full mb-6" />

                <h4 className="text-gray-900 font-bold mb-2">Professional Biography</h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedMember.description} Knights Energy relies on key visionaries to pioneer clean tech initiatives, and this leader stands at the forefront of East Africa's sustainable evolution. With specialized expertise and active project management, they ensure long-term efficiency, robust performance, and regional excellence.
                </p>
                
                {/* Highlights list to add visual richness */}
                <div className="mb-6">
                  <h4 className="text-gray-900 font-bold mb-2">Core Leadership Pillars</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#36AC43]" />
                      Exceptional strategic planning & execution
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#36AC43]" />
                      Leading large-scale C&I solar project portfolios
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#36AC43]" />
                      Fostering clean energy innovations & regional partnerships
                    </li>
                  </ul>
                </div>
              </div>

              {/* Interactive buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center border-t border-gray-100 pt-6 mt-4">
                <a
                  href={selectedMember.email}
                  className="w-full sm:w-auto text-center px-6 py-3 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white font-bold rounded-xl hover:shadow-lg transition-all duration-300 text-sm flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Connect via Email
                </a>
                <a
                  href={selectedMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-colors duration-300 text-sm flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4 text-[#0077B5]" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
