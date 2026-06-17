import { Link } from "react-router";
import {
	Home,
	Building2,
	Zap,
	Battery,
	Droplet,
	Wrench,
	FlaskConical,
	Camera,
} from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { QuoteForm } from "../components/QuoteForm";
import { ServiceModal, ServiceData } from "../components/ServiceModal";
import { useState } from "react";

export function Services() {
	const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleReadMore = (service: ServiceData) => {
		setSelectedService(service);
		setIsModalOpen(true);
	};

	const services: ServiceData[] = [
		{
			id: "residential",
			icon: Home,
			title: "Residential Solar Solutions",
			description:
				"Our Eco Smart Home System ensures that the solar power you produce is used in the best possible way. Besides offering great savings on electricity bills, we provide complete residential solar installations tailored to your home's energy needs.",
			image:
				"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779091985/KNIGTHS-ENERGY-RESIDENTIAL-SOLAR-SOLUTIONS-570x464_muajpq.jpg",
		},
		{
			id: "commercial",
			icon: Building2,
			title: "Commercial & Industrial Solar Solutions",
			description:
				"We offer a complete commercial and industrial solar solution designed to reduce operational costs and improve energy efficiency for businesses of all sizes. Our systems are scalable and designed for maximum ROI.",
			image:
				"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779091985/KNIGTHS-ENERGY-COMMERCIAL-INDUSTRIAL-SOLAR-SOLUTIONS-570x464_ptivn3.jpg",
		},
		{
			id: "minigrids",
			icon: Battery,
			title: "Mini-grids & Off-grid Solar Projects",
			description:
				"Looking for ways to Save Energy costs? Looking to invest in an Energy System for your own consumption. Our mini-grid and off-grid solutions provide reliable power in remote locations without access to the main grid.",
			image:
				"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779091985/KNIGTHS-ENERGY-MINIGRIDS-OFFGRIDS-570x464_dmqe8s.jpg",
		},
		{
			id: "emobility",
			icon: Zap,
			title: "Electric Mobility",
			description:
				"Our current transport sector has to break away from energy- and carbon-intensive development paths that have resulted in higher energy costs. We provide comprehensive e-mobility solutions including EV charging infrastructure.",
			image:
				"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779091984/KNIGTHS-ENERGY-EMOBILITY-570x464_zlayw6.jpg",
		},
		{
			id: "waterheating",
			icon: Droplet,
			title: "Solar Water Heating Systems",
			description:
				"Hot water accounts for a big percentage of energy consumption. Solar Water heaters are a very effective method of using natural energy to heat water for domestic and commercial use, reducing electricity costs significantly.",
			image:
				"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835829/KNIGTHS-ENERGY-WATER-PUMPING-2-570x464_k1mgmq.jpg",
		},
		{
			id: "waterpumping",
			icon: Droplet,
			title: "Solar Water Pumping Systems",
			description:
				"Our Solar Water Pumping System/Waterbox is specially designed for water supply in agricultural, residential, and commercial applications. These systems are reliable, cost-effective, and require minimal maintenance.",
			image:
				"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1781702967/solar-water-pumping-system_bxjme5.jpg",
		},
		{
			id: "maintenance",
			icon: Wrench,
			title: "Operation and Maintenance",
			description:
				"Knights Energy carry out regular maintenance and inspection of the entire PV system to ensure optimal performance. Our O&M services include monitoring, cleaning, repairs, and performance optimization.",
			image:
				"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779091984/KNIGHTS-ENERGY-OM-570x464_ejbl6j.jpg",
		},
		{
			id: "testing",
			icon: FlaskConical,
			title: "Power Plant Testing and Commissioning",
			description:
				"Knights Energy offers independent third-party End-to-End testing and commissioning services to ensure your solar power plant meets all technical specifications and performance guarantees.",
			image:
				"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835821/KNIGHTS-ENERGY-PLANT-TESTING-570x464_hjbi9v.jpg",
		},
		{
			id: "surveillance",
			icon: Camera,
			title: "Surveillance Installation",
			description:
				"We offer complete CCTV surveillance and security system installation for commercial and industrial facilities. Our systems integrate seamlessly with solar power installations for uninterrupted operation.",
			image:
				"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779093954/Knights-Atex-770x527_olzz5n.jpg",
		},
	];

	return (
		<div className="w-full">
			{/* Hero */}
			<section
				className="relative min-h-[300px] md:min-h-[500px] bg-cover bg-center flex items-center"
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1774927334511-c2d1cf654b08?w=1600')`,
				}}>
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-white w-full text-center py-16 sm:py-28">
					<h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
					<p className="text-xl sm:text-2xl lg:text-3xl text-gray-200 mb-4">
						Fostering the Growth of Solar Energy Market
					</p>
					<p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
						A Leading Supplier Of Solar Materials For Manufacturers, Installers
						& Contractors
					</p>
				</div>
			</section>

			{/* Services Grid */}
			<section className="py-12 sm:py-24 bg-gradient-to-b from-white to-gray-50">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
						{services.map((service) => (
							<AnimatedSection key={service.id} animation="fade-up">
								<div
									id={service.id}
									className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 relative">

									{/* Image Section */}
									<div className="relative overflow-hidden">
										<img
											src={service.image}
											alt={service.title}
											className="w-full h-52 sm:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
										/>

										{/* Overlay */}
										<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
									</div>

									{/* Content */}
									<div className="p-6 sm:p-8 flex flex-col h-auto sm:h-[320px]">
										<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-snug transition-colors duration-300 group-hover:text-[#36AC43]">
											{service.title}
										</h2>

										<p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 line-clamp-4">
											{service.description}
										</p>

										{/* Button */}
										<div className="mt-auto">
											<button
												onClick={() => handleReadMore(service)}
												className="inline-flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 
												bg-[#36AC43] text-white rounded-xl font-semibold
												transition-all duration-300
												group-hover:bg-[#2d8c36]
												group-hover:shadow-lg">

												<span>Read More</span>

												<span className="transition-transform duration-300 group-hover:translate-x-1">
													→
												</span>
											</button>
										</div>
									</div>

									{/* Bottom Accent Line */}
									<div className="h-1 w-0 bg-[#36AC43] transition-all duration-500 group-hover:w-full"></div>
								</div>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>

			{/* Quote Form */}
			<section className="py-12 sm:py-16 bg-white">
				<div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="text-center mb-8">
						<h2 className="text-2xl sm:text-4xl font-bold mb-4 text-gray-900">
							Request A Quote
						</h2>
						<p className="text-lg sm:text-xl text-gray-600">
							Receive an accurate quote within 3-5 days when you fill out the
							form below. Or, give us a call:{" "}
							<a href="tel:+254788220607" className="text-[#36AC43] font-bold">
								+254 788220607
							</a>
						</p>
					</div>
					<QuoteForm />
				</div>
			</section>

			<ServiceModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				service={selectedService}
			/>
		</div>
	);
}
