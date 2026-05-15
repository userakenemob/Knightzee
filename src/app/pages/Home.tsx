import { Link } from "react-router";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { AnimatedSection } from "../components/AnimatedSection";
import { CountUp } from "../components/CountUp";
import { VideoModal } from "../components/VideoModal";
import { EcoHubModal } from "../components/EcoHubModal";
import { TestimonialCarousel } from "../components/TestimonialCarousel";
import { SolarCalculator } from "../components/SolarCalculator";
import { FAQAccordion } from "../components/FAQAccordion";

export function Home() {
	const [videoModalOpen, setVideoModalOpen] = useState(false);
	const [ecoHubModalOpen, setEcoHubModalOpen] = useState(false);
	const [selectedEcoHubItem, setSelectedEcoHubItem] = useState<number | null>(
		null,
	);
	const projects = [
		{
			name: "Missionary Benedictine Karen",
			category: "Solar, Projects",
			image:
				"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835828/KNIGTHS-ENERGY-Missionary-Benedictine-Sisters-Karen_shrn9l.jpg",
		},
		{
			name: "Standard Chartered Bank HQ",
			category: "Solar, Projects",
			image:
				"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835829/KNIGTHS-ENERGY-Standard-Chartered-Bank-Headquarters_osmeox.jpg",
		},
		{
			name: "Megapack",
			category: "Solar, Projects",
			image:
				"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835827/KNIGTHS-ENERGY-Megapack_uxse73.jpg",
		},
		{
			name: "IBER Africa",
			category: "Solar, Projects",
			image:
				"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835827/KNIGTHS-ENERGY-MINIGRIDS-OFFGRIDS-570x464_ag6q7t.jpg",
		},
		{
			name: "Daughters of Charity",
			category: "Solar, Projects",
			image:
				"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835824/KNIGTHS-ENERGY-Daughters-of-Charity_jsswlt.jpg",
		},
		{
			name: "BAT Thika",
			category: "Solar, Projects",
			image:
				"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835822/KNIGTHS-ENERGY-BAT-Thika_hudfeq.jpg",
		},
	];

	const partners = [
		"Molo Rivers Roses",
		"Missionary Benedictines sisters",
		"MEGA PACK",
		"KLM AIR FRANCE",
		"KICC",
	];

	const ecoHubItems = [
		{
			title: "Cost Reduction",
			desc: "Most energy consumers have aggressive cost reduction initiatives as well as sustainable goals for their utility budgets",
			content: {
				description:
					"Energy costs represent one of the largest operational expenses for businesses across East Africa. Our Eco-Hub concept delivers measurable cost reductions through intelligent energy management and solar-powered infrastructure.",
				benefits: [
					"Reduce electricity costs by up to 80% through solar generation",
					"Eliminate fuel expenses for electric vehicle fleets",
					"Lower maintenance costs with reliable solar technology",
					"Predictable energy costs improve financial planning",
					"Quick ROI with typical payback periods of 3-5 years",
				],
				details: [
					"The Eco-Hub integrates solar generation with energy storage and electric mobility to create a comprehensive cost-saving ecosystem. By producing clean energy on-site, businesses eliminate expensive grid electricity and volatile fuel costs.",
					"For transportation fleets, the savings are even more dramatic. Electric vehicles powered by solar energy cost 70-80% less to operate than traditional fuel-powered vehicles. With no oil changes, fewer moving parts, and lower maintenance requirements, operating costs drop significantly.",
					"Our energy management systems optimize consumption patterns, storing excess solar energy for use during peak demand periods when grid electricity is most expensive. This peak shaving capability can reduce demand charges by 40-60%.",
				],
			},
		},
		{
			title: "Unparalleled Expertise",
			desc: "Our expertise covers Energy generation, Energy Management & Electric Mobility which leads to generation",
			content: {
				description:
					"Knights Energy brings together three critical areas of expertise—solar energy generation, intelligent energy management, and electric mobility—to deliver integrated solutions that maximize efficiency and sustainability.",
				benefits: [
					"12+ years of experience in solar installations across East Africa",
					"317+ completed projects demonstrating proven track record",
					"Certified engineers and technicians with international training",
					"Comprehensive expertise from design through installation to maintenance",
					"Pioneer in electric mobility integration in the region",
				],
				details: [
					"Our energy generation expertise encompasses everything from residential rooftop systems to large-scale commercial installations exceeding 500kW. We've mastered the unique challenges of East African installations, including variable grid conditions, tropical weather patterns, and diverse building types.",
					"Energy management goes beyond simple monitoring. Our systems use advanced algorithms to predict energy usage, optimize battery charging cycles, and automatically adjust loads to maximize solar utilization. This intelligent approach ensures every kilowatt-hour of solar energy is used most effectively.",
					"Our electric mobility division is pioneering the adoption of EVs across East Africa. We design and install solar-powered charging infrastructure, consult on fleet electrification strategies, and provide complete EV ecosystem solutions. This integrated approach positions clients at the forefront of the transportation revolution.",
				],
			},
		},
		{
			title: "Climate Advantage",
			desc: "Due to greater financial pressures on manufacturers and climate changes goals, reducing the carbon footprint",
			content: {
				description:
					"Climate change demands urgent action. Our Eco-Hub concept helps businesses meet sustainability goals while positioning them as environmental leaders in their industries.",
				benefits: [
					"Eliminate hundreds of tons of CO2 emissions annually",
					"Achieve carbon neutrality for transportation and energy",
					"Meet international environmental standards and certifications",
					"Enhance brand reputation and customer loyalty",
					"Qualify for green financing and sustainability incentives",
				],
				details: [
					"Every kilowatt-hour of solar energy displaces grid electricity, which in East Africa is still largely generated from fossil fuels. A typical commercial solar installation prevents 100-400 tons of CO2 emissions annually—equivalent to planting thousands of trees.",
					"Electric vehicles powered by solar energy create a truly zero-emission transportation solution. A fleet of 10 electric vehicles powered by solar eliminates approximately 50 tons of CO2 annually compared to diesel vehicles, while also removing harmful local air pollutants.",
					"Beyond emissions reduction, our solutions help businesses achieve broader sustainability goals. Many international corporations require their suppliers to meet environmental standards. Our systems provide the measurable impact needed to secure and maintain these valuable partnerships.",
					"Climate leadership also drives customer preference. Studies show that consumers increasingly choose businesses demonstrating environmental responsibility. Solar-powered operations and electric delivery fleets become powerful marketing differentiators.",
				],
			},
		},
		{
			title: "Technical Expertise",
			desc: "Our experts begin by reviewing energy and fuel consumptions to identify cost savings and target processing areas",
			content: {
				description:
					"Technical excellence underpins every Eco-Hub installation. Our systematic approach ensures optimal performance, reliability, and long-term value for every client.",
				benefits: [
					"Comprehensive energy audits identify all optimization opportunities",
					"Advanced modeling predicts system performance and ROI",
					"Precision engineering ensures maximum efficiency",
					"Quality components from Tier 1 manufacturers",
					"Rigorous testing and commissioning protocols",
				],
				details: [
					"Every project begins with a detailed energy audit. Our engineers analyze 12+ months of electricity bills, conduct on-site assessments, and use thermal imaging to identify inefficiencies. This data-driven approach ensures we design the optimal system for each client's unique needs.",
					"Our design process employs sophisticated software that models solar production hour-by-hour throughout the year, accounting for local weather patterns, shading, and consumption profiles. This allows us to predict performance with exceptional accuracy and optimize system sizing.",
					"Installation quality directly impacts long-term performance. Our teams follow international best practices and manufacturer specifications precisely. Every connection is tested, every mounting point verified, and every safety protocol observed. This meticulous approach ensures systems operate reliably for 25+ years.",
					"Post-installation, we provide comprehensive training and performance monitoring. Our cloud-based platforms allow clients to track energy production in real-time, compare performance to predictions, and receive immediate alerts about any issues. This ongoing support maximizes system value throughout its lifetime.",
				],
			},
		},
	];

	return (
		<div className="w-full">
			{/* Hero Section */}
			<section
				className="relative min-h-[700px] bg-cover bg-center flex items-center"
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url('https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835817/Knights-Energy-870x448-1_juo7tj.jpg')`,
				}}>
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 text-white w-full">
					<div className="max-w-3xl">
						<p
							className="text-base font-semibold uppercase tracking-widest mb-6"
							style={{ color: "#36AC43" }}>
							Complete Commercial, Residential & Industrial Solar Systems
						</p>
						<h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
							Home of Renewable
							<br />
							Energy and Electrical
							<br />
							Contracting!
						</h1>
						<p className="text-2xl lg:text-3xl mb-12 text-gray-200 leading-relaxed">
							All our energy is generated from renewable sources. We will help
							you to reduce your energy consumption.
						</p>
						<div className="flex flex-wrap gap-6">
							<Link
								to="/about"
								className="px-10 py-4 bg-[#36AC43] text-white rounded-md hover:bg-[#2d8c36] transition-all duration-300 font-semibold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
								More About Us
							</Link>
							<Link
								to="/services"
								className="px-10 py-4 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-all duration-300 font-semibold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1">
								Our Services
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Welcome Section */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<AnimatedSection animation="fade-right">
							<div className="relative">
								<div className="absolute -top-6 -left-6 w-32 h-32 bg-[#36AC43]/10 rounded-full"></div>
								<img
									src="https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835820/KNIGHTS-ENERGY-OM-570x464_n6rjgd.jpg"
									alt="Fostering Growth"
									className="rounded-2xl shadow-2xl w-full h-[500px] object-cover relative z-10"
								/>
								<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#36AC43]/10 rounded-full"></div>
							</div>
						</AnimatedSection>
						<AnimatedSection animation="fade-left" delay={200}>
							<div>
								<p className="text-base font-bold uppercase tracking-widest mb-6 text-[#36AC43]">
									WELCOME TO KNIGHTS ENERGY
								</p>
								<h2 className="text-4xl font-bold mb-8 text-gray-900 leading-tight">
									Fostering Growth
									<br />
									of Solar Energy!
								</h2>
								<p className="text-xl text-gray-600 mb-6 leading-relaxed">
									We are committed to providing alternative solutions of the
									highest standards and address the energy cost factor.
								</p>
								<h3 className="text-3xl font-bold mb-6 text-gray-900">
									Sustainable, Reliable & Affordable Energy!
								</h3>
								<p className="text-xl text-gray-600 mb-5 leading-relaxed">
									Knights Energy provides solar solutions for industrial,
									commercial & residential applications, that enable individuals
									& organizations to be part of a sustainable green energy
									powered world.
								</p>
								<p className="text-xl text-gray-600 mb-8 leading-relaxed">
									Over the years, the Company has become one of the biggest
									installers and maintenance partners for medium and large-scale
									solar installations in the region with a considerable number
									of solutions for domestic and Industrial projects. We are also
									the leading clean mobility consultants in East Africa,
									specializing in eMobility.
								</p>
								<button
									onClick={() => setVideoModalOpen(true)}
									className="flex items-center gap-3 px-8 py-4 bg-[#36AC43] text-white rounded-md hover:bg-[#2d8c36] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg">
									<Play className="w-6 h-6" />
									Watch Our Intro!
								</button>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Value Proposition */}
			<section className="py-24 bg-gradient-to-br from-gray-50 to-white">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-6 text-gray-900 leading-tight">
							Improving The Performance Of Solar Energy.
						</h2>
						<p className="text-2xl text-gray-700 font-semibold">
							Energize Society With Sustainable And Reliable Energy Systems!
						</p>
					</div>
					<p className="text-xl text-gray-600 text-center max-w-5xl mx-auto mb-16 leading-relaxed">
						Our expertise covers Energy generation, energy management and
						electric mobility which leads to generation, consumption monitoring
						and reporting on energy usage and efficiency. Our Reference Projects
						are testament to our success in delivering world-class solar power
						plants to leading investors in the PV sector. We work to provide
						options that meet the specific customer needs and are consistent
						with ensuring Environmental Sustainability.
					</p>
					<div className="text-center">
						<Link
							to="/services"
							className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-xl transform hover:-translate-y-1">
							Explore All Features!
							<ArrowRight className="w-6 h-6" />
						</Link>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-4xl font-bold mb-10 text-gray-900 leading-tight">
								We drive the transition to more sustainable, reliable &
								affordable energy systems
							</h2>
							<div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] text-white p-10 rounded-3xl mb-10 shadow-2xl">
								<p className="text-3xl font-bold mb-4">99.9%</p>
								<p className="text-xl leading-relaxed">
									Customer Satisfaction based on 750+ reviews and 6,154
									Completed Projects.
								</p>
							</div>
							<Link
								to="/services"
								className="inline-flex items-center gap-3 px-10 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-bold text-xl">
								Find Your Solution
								<ArrowRight className="w-6 h-6" />
							</Link>
						</div>
						<div className="relative">
							<div className="absolute -top-8 -left-8 w-40 h-40 bg-[#36AC43]/10 rounded-full"></div>
							<img
								src="https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835816/Knights-Energy-1241x849-4-1-670x444_ytl2rl.jpg"
								alt="Solar Installation"
								className="rounded-3xl shadow-2xl w-full h-[600px] object-cover relative z-10"
							/>
							<div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#36AC43]/10 rounded-full"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Overview */}
			<section className="py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<AnimatedSection animation="fade-up">
						<div className="text-center mb-16">
							<p className="text-base font-bold uppercase tracking-widest mb-4 text-[#36AC43]">
								At Knights Energy Ltd
							</p>
							<h2 className="text-4xl font-bold mb-6 text-gray-900">
								Wide variety of solutions in
								<br />
								Power & IT Industry
							</h2>
						</div>
					</AnimatedSection>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								title: "Feasibility Studies",
								subtitle: "For Commercial & Industrial Clients",
							},
							{ title: "Solar Installation", subtitle: "& Construction" },
							{ title: "Operation", subtitle: "& Maintenance" },
							{ title: "Training", subtitle: "& Capacity Building" },
						].map((service, index) => (
							<AnimatedSection
								key={index}
								animation="fade-up"
								delay={index * 100}>
								<div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
									<div className="w-16 h-16 bg-gradient-to-br from-[#36AC43] to-[#2d8c36] rounded-xl mb-6 flex items-center justify-center text-white text-2xl font-bold shadow-md group-hover:shadow-lg transition-shadow">
										{index + 1}
									</div>
									<h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-[#36AC43] transition-colors">
										{service.title}
									</h3>
									<p className="text-gray-600 text-xl leading-relaxed">
										{service.subtitle}
									</p>
								</div>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>

			{/* Latest Projects */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<AnimatedSection animation="fade-up">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold mb-4 text-gray-900">
								Latest Projects
							</h2>
							<p className="text-xl text-gray-600">
								Showcasing excellence in solar energy implementation
							</p>
						</div>
					</AnimatedSection>
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
						{projects.map((project, index) => (
							<AnimatedSection
								key={index}
								animation="zoom-in"
								delay={index * 100}>
								<div className="group cursor-pointer">
									<div className="relative overflow-hidden rounded-2xl mb-6 h-80 shadow-xl">
										<img
											src={project.image}
											alt={project.name}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
										<div className="absolute top-6 left-6 bg-[#36AC43] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
											{project.category}
										</div>
									</div>
									<h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#36AC43] transition-colors">
										{project.name}
									</h3>
								</div>
							</AnimatedSection>
						))}
					</div>
					<div className="text-center mt-16">
						<Link
							to="/projects"
							className="inline-flex items-center gap-3 px-10 py-4 bg-[#36AC43] text-white rounded-md hover:bg-[#2d8c36] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg">
							Explore All Projects
							<ArrowRight className="w-5 h-5" />
						</Link>
					</div>
				</div>
			</section>

			{/* Eco-Hub Concept */}
			<section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="grid md:grid-cols-2 gap-16 items-center">
						<div>
							<h2 className="text-4xl font-bold mb-8 leading-tight">
								The Eco-Hub Concept
							</h2>
							<p className="text-2xl mb-8 text-gray-200">
								Revolutionizing Transport and Achieving Energy Security
							</p>
							<p className="text-xl text-gray-300 mb-12 leading-relaxed">
								We are proud to be pioneering the ECOHUB CONCEPT. A development
								of an integrated electro mobility ecosystem powered by solar
								implemented across various transport models resulting in a
								magnitude of energy and cost saving as well as environmental
								benefits.
							</p>
							<Link
								to="/projects"
								className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-xl transform hover:-translate-y-1">
								All Projects
								<ArrowRight className="w-6 h-6" />
							</Link>
						</div>
						<div className="grid grid-cols-2 gap-6">
							{ecoHubItems.map((item, index) => (
								<div
									key={index}
									className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
									<h3 className="text-2xl font-bold mb-4 text-white">
										{item.title}
									</h3>
									<p className="text-gray-300 mb-6 leading-relaxed text-lg">
										{item.desc}
									</p>
									<button
										onClick={() => {
											setSelectedEcoHubItem(index);
											setEcoHubModalOpen(true);
										}}
										className="text-[#36AC43] hover:text-[#2d8c36] font-semibold transition-colors text-lg">
										Read More →
									</button>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Experience Stats */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="grid md:grid-cols-2 gap-10 items-stretch">
						<AnimatedSection animation="fade-right">
							<div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] text-white p-12 lg:p-16 rounded-3xl shadow-2xl">
								<p className="text-4xl lg:text-5xl font-bold mb-6">
									<CountUp end={317} />
								</p>
								<p className="text-2xl font-semibold mb-8 leading-tight">
									Number Of Projects In Operations Across East Africa
								</p>
								<p className="text-xl mb-10 text-white/90 leading-relaxed">
									Yet those that embrace change are thriving, building bigger,
									better, faster, and stronger products than ever.
								</p>
								<div className="flex flex-wrap gap-4">
									<button className="px-8 py-4 bg-white text-[#36AC43] rounded-md hover:bg-gray-100 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
										Download Brochures
									</button>
									<button className="px-8 py-4 border-2 border-white text-white rounded-md hover:bg-white hover:text-[#36AC43] font-semibold transition-all duration-300 text-lg">
										Request Quote
									</button>
								</div>
							</div>
						</AnimatedSection>
						<AnimatedSection animation="fade-left" delay={200}>
							<div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-12 lg:p-16 rounded-3xl shadow-2xl">
								<p className="text-4xl lg:text-5xl font-bold mb-6">
									<CountUp end={12} />
								</p>
								<p className="text-2xl font-semibold mb-8 leading-tight">
									Years Of Experience On Renewable Energy
								</p>
								<p className="text-xl mb-10 text-gray-200 leading-relaxed">
									We embrace change and are thriving, building better, long
									lasting and more reliable solar solutions.
								</p>
								<div className="flex flex-wrap gap-4">
									<Link
										to="/about#team"
										className="px-8 py-4 bg-[#36AC43] text-white rounded-md hover:bg-[#2d8c36] font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
										Our Leadership Team
									</Link>
									<Link
										to="/about#careers"
										className="px-8 py-4 border-2 border-white text-white rounded-md hover:bg-white hover:text-gray-900 font-semibold transition-all duration-300 text-lg">
										Join Our Team
									</Link>
								</div>
							</div>
						</AnimatedSection>
					</div>
				</div>
			</section>

			{/* Process Section */}
			<section className="py-24 bg-gradient-to-b from-gray-50 to-white">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-6 text-gray-900">
							Discover independence through the power of solar
						</h2>
					</div>
					<div className="grid md:grid-cols-2 gap-10">
						<div className="bg-white p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
							<h3 className="text-3xl font-bold mb-6 text-gray-900">
								Design & Shipping
							</h3>
							<p className="text-xl text-gray-600 mb-8 leading-relaxed">
								We strive to produce unique designs, give the best solutions
								that match your needs and select the appropriate equipment at
								the appropriate moment.
							</p>
							<button className="px-10 py-4 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-xl transform hover:-translate-y-1">
								Schedule A Visit
							</button>
						</div>
						<div className="bg-white p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
							<h3 className="text-3xl font-bold mb-6 text-gray-900">
								Contract & Install
							</h3>
							<p className="text-xl text-gray-600 mb-8 leading-relaxed">
								If you choose self-installation, our organization will provide
								you with competitive and adaptable contracts to fit your
								management requirements.
							</p>
							<button className="px-10 py-4 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-xl transform hover:-translate-y-1">
								Request A Quote
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* CTA & Quote Form Combined Section */}
			<section className="py-24 bg-gradient-to-br from-gray-50 to-white">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="grid lg:grid-cols-2 gap-12 items-start">
						{/* Left Side - CTA Content */}
						<div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] text-white p-12 lg:p-16 rounded-3xl shadow-2xl">
							<h2 className="text-5xl font-bold mb-8 leading-tight">
								Save Money, Save The Environment!
							</h2>
							<p className="text-3xl mb-8 font-semibold">
								Let's Build a Greener Eco-friendly Environment
							</p>
							<p className="mb-10 text-xl leading-relaxed">
								Our Solar business now provides the preferred channel to market
								for some of the world's leading PV manufacturers and our solar
								professionals work jointly with partners on enhancing product
								features, lowering lead times and improving cash flow.
							</p>
							<div className="space-y-6">
								<div className="flex items-center gap-4">
									<CheckCircle2 className="w-8 h-8 text-white flex-shrink-0" />
									<p className="text-xl">
										Reduce your energy bills by up to 80%
									</p>
								</div>
								<div className="flex items-center gap-4">
									<CheckCircle2 className="w-8 h-8 text-white flex-shrink-0" />
									<p className="text-xl">
										Environmentally friendly & sustainable
									</p>
								</div>
								<div className="flex items-center gap-4">
									<CheckCircle2 className="w-8 h-8 text-white flex-shrink-0" />
									<p className="text-xl">12+ years of proven expertise</p>
								</div>
								<div className="flex items-center gap-4">
									<CheckCircle2 className="w-8 h-8 text-white flex-shrink-0" />
									<p className="text-xl">World-class installation & support</p>
								</div>
							</div>
							<Link
								to="/services"
								className="inline-flex items-center gap-3 px-12 py-5 bg-white text-[#36AC43] rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 font-bold text-xl mt-10">
								Explore Our Plans
								<ArrowRight className="w-6 h-6" />
							</Link>
						</div>

						{/* Right Side - Quote Form */}
						<div>
							<div className="mb-8">
								<h2 className="text-4xl font-bold mb-4 text-gray-900">
									Request A Quote
								</h2>
								<p className="text-xl text-gray-600">
									Get a customized solar solution for your needs
								</p>
							</div>
							<form className="bg-white p-8 lg:p-10 rounded-3xl shadow-2xl space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<input
										type="text"
										placeholder="Name"
										className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
									/>
									<input
										type="email"
										placeholder="Email"
										className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
									/>
								</div>
								<div className="grid md:grid-cols-2 gap-6">
									<input
										type="tel"
										placeholder="Phone"
										className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
									/>
									<input
										type="text"
										placeholder="Address"
										className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
									/>
								</div>
								<div className="grid md:grid-cols-2 gap-6">
									<input
										type="text"
										placeholder="System Installer?"
										className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
									/>
									<input
										type="text"
										placeholder="Project completed by?"
										className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
									/>
								</div>
								<div className="grid md:grid-cols-2 gap-6">
									<input
										type="number"
										placeholder="Monthly electric usage in kWh?"
										className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
									/>
									<input
										type="text"
										placeholder="Solar system type?"
										className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
									/>
								</div>
								<div className="grid md:grid-cols-2 gap-6">
									<input
										type="text"
										placeholder="Solar panels place?"
										className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
									/>
									<input
										type="text"
										placeholder="Materials on your roof?"
										className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
									/>
								</div>
								<div>
									<label className="block text-gray-700 font-semibold mb-4 text-xl">
										Preferred Contact Method
									</label>
									<div className="flex gap-6">
										<label className="flex items-center gap-3 cursor-pointer">
											<input
												type="radio"
												name="contact"
												value="all"
												className="w-5 h-5 text-[#36AC43]"
												defaultChecked
											/>
											<span className="text-gray-700 text-lg">All</span>
										</label>
										<label className="flex items-center gap-3 cursor-pointer">
											<input
												type="radio"
												name="contact"
												value="email"
												className="w-5 h-5 text-[#36AC43]"
											/>
											<span className="text-gray-700 text-lg">Email</span>
										</label>
										<label className="flex items-center gap-3 cursor-pointer">
											<input
												type="radio"
												name="contact"
												value="phone"
												className="w-5 h-5 text-[#36AC43]"
											/>
											<span className="text-gray-700 text-lg">Phone</span>
										</label>
									</div>
								</div>
								<button
									type="submit"
									className="w-full px-8 py-5 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-2xl text-xl font-bold transition-all duration-300 transform hover:-translate-y-1">
									Submit Request
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<AnimatedSection animation="fade-up">
						<TestimonialCarousel />
					</AnimatedSection>
				</div>
			</section>

			{/* Solar Calculator Section */}
			<section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<AnimatedSection animation="fade-up">
						<SolarCalculator />
					</AnimatedSection>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<AnimatedSection animation="fade-up">
						<FAQAccordion />
					</AnimatedSection>
				</div>
			</section>

			{/* Partners Section */}
			<section className="py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<AnimatedSection animation="fade-up">
						<h2 className="text-4xl font-bold mb-16 text-center text-gray-900">
							Trusted by Leading Organizations
						</h2>
					</AnimatedSection>
					<div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
						{partners.map((partner, index) => (
							<AnimatedSection
								key={index}
								animation="zoom-in"
								delay={index * 100}>
								<div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 text-center">
									<p className="text-gray-700 font-bold text-lg">{partner}</p>
								</div>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>

			<VideoModal
				isOpen={videoModalOpen}
				onClose={() => setVideoModalOpen(false)}
			/>
			<EcoHubModal
				isOpen={ecoHubModalOpen}
				onClose={() => setEcoHubModalOpen(false)}
				title={
					selectedEcoHubItem !== null
						? ecoHubItems[selectedEcoHubItem].title
						: ""
				}
				content={
					selectedEcoHubItem !== null
						? ecoHubItems[selectedEcoHubItem].content
						: { description: "", benefits: [], details: [] }
				}
			/>
		</div>
	);
}
