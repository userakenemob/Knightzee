export interface Project {
  id: string;
  name: string;
  category: string;
  type: string;
  size?: string;
  location?: string;
  date?: string;
  description: string;
  image: string;
  galleryImages?: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    organization: string;
  };
}

export const projects: Project[] = [
  {
    id: "missionary-benedictine-karen",
    name: "Missionary Benedictine Karen",
    category: "Solar",
    type: "Projects",
    size: "103kW",
    location: "Karen, Nairobi Priory",
    date: "21/12/2022",
    description: "Solar Carport and Ground Mount Solar Plant",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779094347/KNIGTHS-ENERGY-Missionary-Benedictine-Sisters-Karen_gd4enw.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779094676/KNIGHTS-ENERGY-MISSIONARY-OF-BENEDICTINE-12_l6pyyt.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779094676/KNIGHTS-ENERGY-MISSIONARY-OF-BENEDICTINE-13-570x570_dfmwje.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779094675/KNIGHTS-ENERGY-MISSIONARY-OF-BENEDICTINE-7_qw9hlq.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779094675/KNIGHTS-ENERGY-MISSIONARY-OF-BENEDICTINE-5_kzh8i8.jpg",
    ],
    testimonial: {
      quote: "I wholeheartedly recommend Knights Energy to any organization seeking reliable, sustainable, and cost-effective energy solutions. Their commitment to excellence, customer-centric approach, and exceptional results makes them the perfect choice for energy-related needs. Trust Knights Energy to exceed your expectations and help you confidently navigate the ever-changing energy landscape.",
      author: "Rev Fr. Rector Edward Etengu OSB",
      position: "Rector",
      organization: "Missionary Benedictines sisters, Nairobi",
    },
  },
  {
    id: "standard-chartered-bank-hq",
    name: "Standard Chartered Bank HQ",
    category: "Solar",
    type: "Projects",
    size: "102.00 KWp",
    location: "Nairobi",
    description: "Rooftop Solar",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779095018/KNIGHTS-ENERGY-STANDARD-BANK-HQ-1_pxc4tu.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779095018/KNIGHTS-ENERGY-STANDARD-BANK-HQ-2_rdptju.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779095018/KNIGHTS-ENERGY-SCB-3_aalgid.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779095018/KNIGHTS-ENERGY-STANDARD-BANK-HQ-1_pxc4tu.jpg",
      "https://images.unsplash.com/photo-1776918570438-886f538edd93?w=800",
    ],
    testimonial: {
      quote: "Knights Energy delivered an exceptional solar installation for our headquarters. The project was completed on time, within budget, and has significantly reduced our operational costs. Their technical expertise and professionalism were outstanding throughout the entire process.",
      author: "John Kamau",
      position: "Facilities Manager",
      organization: "Standard Chartered Bank Kenya",
    },
  },
  {
    id: "megapack",
    name: "Megapack",
    category: "Solar",
    type: "Projects",
    size: "313.34kW",
    location: "Nakuru",
    description: "Rooftop Solar",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779096529/KNIGHTS-ENERGY-MEGAPACK-4_cfecvq.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779096530/KNIGHTS-ENERGY-MEGAPACK-1_ogcclf.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779096530/KNIGTHS-ENERGY-Megapack_ldlorb.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779096531/KNIGHTS-ENERGY-MEGAPACK-2_yxsx0z.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779096532/KNIGHTS-ENERGY-MEGAPACK-5_mg3qt0.jpg",
    ],
    testimonial: {
      quote: "The solar installation has transformed our energy costs and reliability. Knights Energy's team demonstrated exceptional technical knowledge and delivered a solution that exceeded our expectations. We're now saving significantly on electricity bills.",
      author: "Sarah Wanjiku",
      position: "Operations Director",
      organization: "Megapack Ltd",
    },
  },
  {
    id: "iber-africa",
    name: "IBER Africa",
    category: "Solar",
    type: "Projects",
    size: "575kW",
    location: "Nairobi",
    description: "Rooftop Solar",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097682/KNIGHTS-ENERGY-IBER-AFRICA-3_znl3es.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097682/KNIGHTS-ENERGY-IBER-AFRICA-4_vw8xzi.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097682/KNIGHTS-ENERGY-IBER-AFRICA-5_ubuqgo.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097683/KNIGTHS-ENERGY-IBER-Africa_xyuibp.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097682/KNIGHTS-ENERGY-IBER-AFRICA-2_uqcfdg.jpg",
    ],
    testimonial: {
      quote: "As our largest solar installation partner, Knights Energy has been instrumental in achieving our energy independence goals. The 575kW system is performing beyond expectations, and their ongoing maintenance support ensures optimal performance year-round.",
      author: "Michael Omondi",
      position: "CEO",
      organization: "IBER Africa",
    },
  },
  {
    id: "daughters-of-charity",
    name: "Daughters of Charity",
    category: "Solar",
    type: "Projects",
    location: "Nairobi",
    description: "Rooftop Solar",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097797/KNIGHTS-ENERGY-DAUGHTERS-OF-CHARITY-2_fbatpe.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097797/KNIGTHS-ENERGY-Daughters-of-Charity_fm3zue.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097797/KNIGHTS-ENERGY-DAUGHTERS-OF-CHARITY-3_vyqjmk.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097797/KNIGHTS-ENERGY-DAUGHTERS-OF-CHARITY-4_qjwzqo.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097797/KNIGHTS-ENERGY-DAUGHTERS-OF-CHARITY-5_kxqjlm.jpg",
    ],
    testimonial: {
      quote: "Knights Energy has been a blessing to our organization. Their solar solution allows us to redirect funds previously spent on electricity to our charitable work. Their team's dedication and professionalism made the entire process seamless.",
      author: "Sister Mary Achieng",
      position: "Administrator",
      organization: "Daughters of Charity, Nairobi",
    },
  },
  {
    id: "bat-thika",
    name: "BAT Thika",
    category: "Solar",
    type: "Projects",
    location: "Thika and Likoni",
    description: "Industrial Solar Installation",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097871/KNIGTHS-ENERGY-BAT-Thika_yzcllm.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097870/KNIGHTS-ENERGY-BAT-THIKA-1_mgolvi.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097870/KNIGHTS-ENERGY-BAT-LIKONI-3_lzed7a.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097869/KNIGHTS-ENERGY-BAT-LIKONI-1_tsdkci.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097870/KNIGHTS-ENERGY-BAT-LIKONI-4_n97o9k.jpg",
    ],
    testimonial: {
      quote: "Knights Energy delivered world-class industrial solar installations across our facilities. Their understanding of large-scale industrial requirements and commitment to quality has made them our trusted partner for renewable energy solutions.",
      author: "David Mwangi",
      position: "Energy Manager",
      organization: "British American Tobacco Kenya",
    },
  },
  {
    id: "ellys-pharmaceuticals",
    name: "ELLY'S PHARMACEUTICALS",
    category: "Solar",
    type: "Projects",
    size: "330.63kW",
    location: "Nairobi",
    description: "Rooftop Solar",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097988/KNIGHTS-ENERGY-ELLYS-4_brwh47.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097988/KNIGHTS-ENERGY-ELLYS-6_ar2c1e.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097988/KNIGHTS-ENERGY-ELLYS-5_npvjx3.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097987/KNIGHTS-ENERGY-ELLYS-3_edmv5u.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779097987/KNIGHTS-ENERGY-ELLYS-1_jsgji8.jpg",
    ],
    testimonial: {
      quote: "For our pharmaceutical operations, reliable power is critical. Knights Energy designed and installed a solar system that not only meets our strict requirements but also provides significant cost savings. Their expertise in commercial installations is unmatched.",
      author: "Dr. James Otieno",
      position: "Managing Director",
      organization: "Elly's Pharmaceuticals",
    },
  },
  {
    id: "total-gigiri",
    name: "Total Gigiri",
    category: "Solar",
    type: "Projects",
    location: "Gigiri, Nairobi",
    description: "Commercial Solar Installation",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779098116/KNIGHTS-ENERGY-GIGIRI_z3spgk.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779098116/KNIGHTS-ENERGY-TOTAL-GIGIRI-1-570x570_lhrydt.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779098115/DJI_0214-570x570_hgdtcd.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779098115/DJI_0216-570x570_firzou.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779098114/DJI_0206-570x570_k0rd9n.jpg",
    ],
    testimonial: {
      quote: "Knights Energy's commercial solar solution has transformed our energy profile. The installation was completed with minimal disruption to our operations, and the system performance has been exceptional. A truly professional team.",
      author: "Peter Ngugi",
      position: "Station Manager",
      organization: "TotalEnergies Kenya",
    },
  },
  {
    id: "solar-ev-chargers",
    name: "Solar EV Chargers Installed",
    category: "E-Mobility",
    type: "Projects",
    description: "Electric Vehicle Charging Infrastructure",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779098480/KNIGHTS-ENERGY-SOLAR-EV-CHARGERS-3_jlxafi.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779098480/KNIGHTS-ENERGY-SOLAR-EV-CHARGERS-2_tozwji.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779098480/KNIGHTS-ENERGY-SOLAR-EV-CHARGERS-3_1_vx8y77.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779098483/KNIGHTS-ENERGY-SOLAR-EV-CHARGERS-5_wpiu36.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779098484/KNIGHTS-ENERGY-SOLAR-EV-CHARGERS-4_ugr3dp.jpg",
    ],
    testimonial: {
      quote: "Knights Energy has been at the forefront of Kenya's e-mobility revolution. Their solar-powered EV charging infrastructure is innovative, reliable, and perfectly positioned for the future of transportation. We're proud to partner with them.",
      author: "Catherine Njeri",
      position: "Sustainability Director",
      organization: "Green Mobility Kenya",
    },
  },
  {
    id: "cctv-surveillance-uganda",
    name: "CCTV SURVEILLANCE INSTALLATION PROJECT",
    category: "ICT",
    type: "Projects",
    location: "Uganda",
    date: "February 2022",
    description: "Atex CCTV and Motion Sensor installation project",
    image: "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779098634/KNIGHTS-ENERGY-SURVEILLANCE-INSTALLATION-COVER-1-570x527_jjn1nm.jpg",
    galleryImages: [
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779098634/KNIGHTS-ENERGY-SURVEILLANCE-INSTALLATION-6_hpzcuj.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779098633/KNIGHTS-ENERGY-SURVEILLANCE-INSTALLATION-5_ys6wns.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779098632/KNIGHTS-ENERGY-SURVEILLANCE-INSTALLATION-4_zlsobz.jpg",
      "https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779098634/KNIGHTS-ENERGY-SURVEILLANCE-INSTALLATION-7_sqqmon.jpg",
    ],
    testimonial: {
      quote: "The CCTV surveillance system installed by Knights Energy has significantly enhanced our security infrastructure. Their ICT expertise combined with solar integration provides us with a comprehensive and sustainable security solution.",
      author: "Robert Ssemakula",
      position: "Security Manager",
      organization: "Atex Uganda",
    },
  },
];
