import { Link } from "react-router";
import {
	Award,
	Users,
	Briefcase,
	HelpCircle,
	FileText,
	UserPlus,
} from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { JobModal, JobData } from "../components/JobModal";
import { useState } from "react";
import { Calendar } from "lucide-react";

export function About() {
	const [selectedJob, setSelectedJob] = useState<JobData | null>(null);
	const [isJobModalOpen, setIsJobModalOpen] = useState(false);

	const handleReadMoreJob = (job: JobData) => {
		setSelectedJob(job);
		setIsJobModalOpen(true);
	};
	const jobs: JobData[] = [
		{
			title: "Senior Solar Engineer",
			experience: "5+ Years",
			education: "Bachelor's Degree in Engineering or related field",
			deadline: "October 30, 2026",
			description: "We are looking for an experienced Solar Engineer to lead our commercial and industrial solar installations. The ideal candidate will have a strong background in PV system design, project management, and a passion for renewable energy.",
			fullDescription: [
				"We are looking for an experienced Solar Engineer to lead our commercial and industrial solar installations.",
				"Key Responsibilities:",
				"- Design and review complex solar PV systems (on-grid, off-grid, and hybrid).",
				"- Conduct site assessments, feasibility studies, and energy yield analyses.",
				"- Oversee the technical implementation of projects to ensure they meet quality and safety standards.",
				"- Collaborate with the sales and project management teams to deliver customized solutions for our clients.",
				"- Ensure compliance with local electrical codes and regulatory requirements.",
				"Requirements:",
				"- Bachelor's Degree in Electrical Engineering, Renewable Energy, or a related field.",
				"- Minimum of 5 years of experience in solar PV system design and installation.",
				"- Proficiency in PVsyst, AutoCAD, and other design software.",
				"- Strong analytical and problem-solving skills.",
			]
		},
		{
			title: "Sales & Business Development Manager",
			experience: "3-5 Years",
			education: "Bachelor's Degree in Business, Marketing, or equivalent",
			deadline: "November 15, 2026",
			description: "Join our dynamic sales team to drive growth in East Africa. You will be responsible for identifying new market opportunities, building relationships with key stakeholders, and closing B2B solar and e-mobility projects.",
			fullDescription: [
				"Join our dynamic sales team to drive growth in East Africa. You will be responsible for identifying new market opportunities, building relationships with key stakeholders, and closing B2B solar and e-mobility projects.",
				"Key Responsibilities:",
				"- Identify and generate new business opportunities in the commercial, industrial, and residential sectors.",
				"- Develop and maintain strong relationships with key decision-makers and prospective clients.",
				"- Prepare and present tailored proposals and financial analyses to clients.",
				"- Meet and exceed quarterly and annual sales targets.",
				"- Stay updated on industry trends, competitor activities, and regulatory changes.",
				"Requirements:",
				"- Bachelor's Degree in Business, Marketing, or a related field.",
				"- 3-5 years of proven B2B sales experience, preferably in the renewable energy sector.",
				"- Excellent communication, negotiation, and presentation skills.",
				"- Ability to work independently and as part of a collaborative team.",
			]
		},
		{
			title: "Electrical Technician",
			experience: "2+ Years",
			education: "Diploma in Electrical Engineering or equivalent certification",
			deadline: "December 01, 2026",
			description: "We are seeking a hands-on Electrical Technician to assist with the installation, maintenance, and troubleshooting of solar panels, inverters, and battery storage systems across residential and commercial sites.",
			fullDescription: [
				"We are seeking a hands-on Electrical Technician to assist with the installation, maintenance, and troubleshooting of solar panels, inverters, and battery storage systems across residential and commercial sites.",
				"Key Responsibilities:",
				"- Perform installation and wiring of solar panels, inverters, and battery storage systems.",
				"- Conduct routine maintenance, inspections, and troubleshooting of existing solar power plants.",
				"- Ensure all electrical work complies with national and local safety regulations.",
				"- Maintain accurate records of materials used and work performed.",
				"- Provide excellent customer service during site visits.",
				"Requirements:",
				"- Diploma or Certificate in Electrical Engineering or a relevant trade certification.",
				"- At least 2 years of practical experience in electrical installations, preferably in solar energy.",
				"- Strong understanding of electrical safety procedures and regulations.",
				"- Ability to work at heights and in various outdoor conditions.",
			]
		}
	];

	return (
		<div className="w-full">
			{/* Hero */}
			<section
				className="relative min-h-[500px] bg-cover bg-center flex items-center"
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1726221062299-88f27b653c59?w=1600')`,
				}}>
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-white w-full text-center py-28">
					<h1 className="text-5xl lg:text-6xl font-bold mb-6">
						About Knights Energy
					</h1>
					<p className="text-xl text-gray-200 max-w-3xl mx-auto">
						Leading Solar Energy Solutions Provider in East Africa
					</p>
				</div>
			</section>

			{/* Main About Content */}
			<section className="py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="grid md:grid-cols-2 gap-16 items-center mb-24">
						<AnimatedSection animation="fade-right">
							<div className="relative">
								<div className="absolute -top-6 -left-6 w-40 h-40 bg-[#36AC43]/10 rounded-full"></div>
								<img
									src="https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779091984/KNIGHTS-ENERGY-ABOUT-US-870x448_afavyw.jpg"
									alt="About Knights Energy"
									className="rounded-3xl shadow-2xl w-full h-[500px] object-cover relative z-10"
								/>
								<div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#36AC43]/10 rounded-full"></div>
							</div>
						</AnimatedSection>
						<AnimatedSection animation="fade-left" delay={200}>
							<div>
								<h2 className="text-4xl font-bold mb-8 text-gray-900 leading-tight">
									Sustainable, Reliable & Affordable Energy!
								</h2>
								<p className="text-xl text-gray-600 mb-6 leading-relaxed">
									Knights Energy provides solar solutions for industrial,
									commercial & residential applications, that enable individuals
									& organizations to be part of a sustainable green energy
									powered world.
								</p>
								<p className="text-xl text-gray-700 mb-4">
									The Company has the capacity to realize projects of variable
									complexity and provide the expertise to fully supply and
									install simple to complex on-grid and off-grid photovoltaic
									power plants with verifiable experience in the task at hand.
								</p>
								<p className="text-xl text-gray-700">
									Over the years, the Company has become one of the biggest
									installers and maintenance partners for medium and large-scale
									solar installations in the region with a considerable number
									of solutions for domestic and Industrial projects.
								</p>
							</div>
						</AnimatedSection>
					</div>

					{/* Quick Links Grid */}
					<div className="grid md:grid-cols-3 gap-10" id="advantage">
						<Link
							to="#advantage"
							className="bg-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-300 shadow-lg transform hover:-translate-y-2 border border-gray-100 group">
							<div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
								<Briefcase className="w-10 h-10 text-white" />
							</div>
							<h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-[#36AC43] transition-colors">
								Our Competitive Advantage
							</h3>
							<p className="text-gray-600 text-xl leading-relaxed">
								Unmatched expertise and cutting-edge technology in renewable
								energy solutions.
							</p>
						</Link>

						<Link
							to="#team"
							className="bg-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-300 shadow-lg transform hover:-translate-y-2 border border-gray-100 group">
							<div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
								<Users className="w-10 h-10 text-white" />
							</div>
							<h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-[#36AC43] transition-colors">
								Leadership Team
							</h3>
							<p className="text-gray-600 text-xl leading-relaxed">
								Meet our experienced team of energy experts and industry
								leaders.
							</p>
						</Link>

						<Link
							to="#awards"
							className="bg-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-300 shadow-lg transform hover:-translate-y-2 border border-gray-100 group">
							<div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
								<Award className="w-10 h-10 text-white" />
							</div>
							<h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-[#36AC43] transition-colors">
								Awards & Recognition
							</h3>
							<p className="text-gray-600 text-xl leading-relaxed">
								Recognized for excellence in renewable energy implementation.
							</p>
						</Link>

						<Link
							to="#faq"
							className="bg-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-300 shadow-lg transform hover:-translate-y-2 border border-gray-100 group">
							<div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
								<HelpCircle className="w-10 h-10 text-white" />
							</div>
							<h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-[#36AC43] transition-colors">
								Help & FAQs
							</h3>
							<p className="text-gray-600 text-xl leading-relaxed">
								Find answers to commonly asked questions about our services.
							</p>
						</Link>

						<Link
							to="#manuals"
							className="bg-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-300 shadow-lg transform hover:-translate-y-2 border border-gray-100 group">
							<div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
								<FileText className="w-10 h-10 text-white" />
							</div>
							<h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-[#36AC43] transition-colors">
								Company Manuals
							</h3>
							<p className="text-gray-600 text-xl leading-relaxed">
								Access our comprehensive documentation and guidelines.
							</p>
						</Link>

						<Link
							to="#careers"
							className="bg-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-300 shadow-lg transform hover:-translate-y-2 border border-gray-100 group">
							<div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
								<UserPlus className="w-10 h-10 text-white" />
							</div>
							<h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-[#36AC43] transition-colors">
								Careers
							</h3>
							<p className="text-gray-600 text-xl leading-relaxed">
								Join our team and be part of the clean energy revolution.
							</p>
						</Link>
					</div>
				</div>
			</section>

			{/* Leadership Team Section */}
			<section className="py-24 bg-gray-50" id="team">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-6 text-gray-900">
							Leadership Team
						</h2>
						<p className="text-xl text-gray-600">
							Meet the experts driving our vision forward
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-10">
						{[1, 2, 3, 4, 5, 6].map((_, index) => (
							<AnimatedSection
								key={index}
								animation="zoom-in"
								delay={index * 100}>
								<div className="bg-white p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
									<div className="w-40 h-40 bg-gradient-to-br from-[#36AC43] to-[#2d8c36] rounded-full mx-auto mb-6"></div>
									<h3 className="text-3xl font-bold mb-3 text-gray-900">
										Team Member {index + 1}
									</h3>
									<p className="text-[#36AC43] mb-4 font-semibold text-xl">
										Position Title
									</p>
									<p className="text-gray-600 text-xl leading-relaxed">
										Expert in renewable energy solutions with extensive
										experience in the field.
									</p>
								</div>
							</AnimatedSection>
						))}
					</div>
				</div>
			</section>

			{/* Awards Section */}
			<section className="py-16 bg-white" id="awards">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-bold mb-4 text-gray-900">
							Awards & Recognition
						</h2>
						<p className="text-xl text-gray-600">
							Celebrating our achievements and milestones
						</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							"Best Solar EPC Company 2025",
							"Innovation in Clean Energy",
							"Customer Excellence Award",
							"Sustainability Champion",
						].map((award, index) => (
							<div
								key={index}
								className="bg-gray-50 p-6 rounded-lg text-center">
								<Award className="w-16 h-16 text-[#36AC43] mx-auto mb-4" />
								<h3 className="text-xl font-bold text-gray-900">{award}</h3>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Careers Section */}
			<section
				className="py-24 bg-gradient-to-br from-[#36AC43] to-[#2d8c36]"
				id="careers">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="text-center mb-16 text-white">
						<h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
						<p className="text-2xl max-w-3xl mx-auto leading-relaxed text-white/90">
							Be part of East Africa's leading renewable energy company and help
							build a sustainable future.
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-8">
						{jobs.map((job, index) => (
							<div key={index} className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full text-left">
								<h3 className="text-2xl font-bold text-gray-900 mb-4">{job.title}</h3>
								
								<div className="space-y-3 mb-6">
									<div className="flex items-start gap-3">
										<Briefcase className="w-5 h-5 text-[#36AC43] flex-shrink-0 mt-0.5" />
										<span className="text-gray-700"><strong>Experience:</strong> {job.experience}</span>
									</div>
									<div className="flex items-start gap-3">
										<Award className="w-5 h-5 text-[#36AC43] flex-shrink-0 mt-0.5" />
										<span className="text-gray-700"><strong>Education:</strong> {job.education}</span>
									</div>
									<div className="flex items-start gap-3">
										<Calendar className="w-5 h-5 text-[#36AC43] flex-shrink-0 mt-0.5" />
										<span className="text-gray-700 font-semibold text-[#36AC43]">Apply by: {job.deadline}</span>
									</div>
								</div>
								
								<p className="text-gray-600 leading-relaxed mb-8 flex-grow">
									{job.description}
								</p>
								
								<button
									onClick={() => handleReadMoreJob(job)}
									className="mt-auto block w-full text-center px-6 py-4 border-2 border-[#36AC43] text-[#36AC43] rounded-xl hover:bg-[#36AC43] hover:text-white font-bold text-lg transition-all duration-300"
								>
									Read More & Apply
								</button>
							</div>
						))}
					</div>

					<div className="text-center mt-12 text-white">
						<p className="text-xl">
							Don't see a position that fits? Send your CV to <a href="mailto:hr@knightsandapps.com" className="font-bold underline hover:text-gray-200">hr@knightsandapps.com</a>
						</p>
					</div>
				</div>
			</section>

			<JobModal
				isOpen={isJobModalOpen}
				onClose={() => setIsJobModalOpen(false)}
				job={selectedJob}
			/>
		</div>
	);
}
