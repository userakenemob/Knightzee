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
    image: "https://images.unsplash.com/photo-1726221062287-fda475b85493?w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1726221062287-fda475b85493?w=800",
      "https://images.unsplash.com/photo-1726221062299-88f27b653c59?w=800",
      "https://images.unsplash.com/photo-1660330589243-4c640d878052?w=800",
      "https://images.unsplash.com/photo-1629726797843-618688139f5a?w=800",
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
    image: "https://images.unsplash.com/photo-1629726797843-618688139f5a?w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1629726797843-618688139f5a?w=800",
      "https://images.unsplash.com/photo-1774927334511-c2d1cf654b08?w=800",
      "https://images.unsplash.com/photo-1670519808728-335b1eb2ef52?w=800",
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
    image: "https://images.unsplash.com/photo-1774927334511-c2d1cf654b08?w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1774927334511-c2d1cf654b08?w=800",
      "https://images.unsplash.com/photo-1670519808728-335b1eb2ef52?w=800",
      "https://images.unsplash.com/photo-1776918570438-886f538edd93?w=800",
      "https://images.unsplash.com/photo-1771178301028-49a922aefccd?w=800",
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
    image: "https://images.unsplash.com/photo-1670519808728-335b1eb2ef52?w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1670519808728-335b1eb2ef52?w=800",
      "https://images.unsplash.com/photo-1776918570438-886f538edd93?w=800",
      "https://images.unsplash.com/photo-1771178301028-49a922aefccd?w=800",
      "https://images.unsplash.com/photo-1774542916400-77f2dd1744d7?w=800",
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
    image: "https://images.unsplash.com/photo-1776918570438-886f538edd93?w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1776918570438-886f538edd93?w=800",
      "https://images.unsplash.com/photo-1771178301028-49a922aefccd?w=800",
      "https://images.unsplash.com/photo-1774542916400-77f2dd1744d7?w=800",
      "https://images.unsplash.com/photo-1756511332583-99fc0d4bf7cf?w=800",
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
    image: "https://images.unsplash.com/photo-1771178301028-49a922aefccd?w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1771178301028-49a922aefccd?w=800",
      "https://images.unsplash.com/photo-1774542916400-77f2dd1744d7?w=800",
      "https://images.unsplash.com/photo-1756511332583-99fc0d4bf7cf?w=800",
      "https://images.unsplash.com/photo-1726221062415-9c403cd9aea5?w=800",
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
    image: "https://images.unsplash.com/photo-1774542916400-77f2dd1744d7?w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1774542916400-77f2dd1744d7?w=800",
      "https://images.unsplash.com/photo-1756511332583-99fc0d4bf7cf?w=800",
      "https://images.unsplash.com/photo-1726221062415-9c403cd9aea5?w=800",
      "https://images.unsplash.com/photo-1660330589782-83776f89dd1e?w=800",
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
    image: "https://images.unsplash.com/photo-1756511332583-99fc0d4bf7cf?w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1756511332583-99fc0d4bf7cf?w=800",
      "https://images.unsplash.com/photo-1726221062415-9c403cd9aea5?w=800",
      "https://images.unsplash.com/photo-1660330589782-83776f89dd1e?w=800",
      "https://images.unsplash.com/photo-1726221062287-fda475b85493?w=800",
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
    image: "https://images.unsplash.com/photo-1726221062415-9c403cd9aea5?w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1726221062415-9c403cd9aea5?w=800",
      "https://images.unsplash.com/photo-1660330589782-83776f89dd1e?w=800",
      "https://images.unsplash.com/photo-1726221062287-fda475b85493?w=800",
      "https://images.unsplash.com/photo-1726221062299-88f27b653c59?w=800",
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
    image: "https://images.unsplash.com/photo-1660330589782-83776f89dd1e?w=800",
    galleryImages: [
      "https://images.unsplash.com/photo-1660330589782-83776f89dd1e?w=800",
      "https://images.unsplash.com/photo-1726221062287-fda475b85493?w=800",
      "https://images.unsplash.com/photo-1726221062299-88f27b653c59?w=800",
      "https://images.unsplash.com/photo-1660330589243-4c640d878052?w=800",
    ],
    testimonial: {
      quote: "The CCTV surveillance system installed by Knights Energy has significantly enhanced our security infrastructure. Their ICT expertise combined with solar integration provides us with a comprehensive and sustainable security solution.",
      author: "Robert Ssemakula",
      position: "Security Manager",
      organization: "Atex Uganda",
    },
  },
];
