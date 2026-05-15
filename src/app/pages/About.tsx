import { Link } from "react-router";
import { Award, Users, Briefcase, HelpCircle, FileText, UserPlus } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

export function About() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="relative min-h-[500px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1726221062299-88f27b653c59?w=1600')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-white w-full text-center py-28">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">About Knights Energy</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">Leading Solar Energy Solutions Provider in East Africa</p>
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
                src="https://images.unsplash.com/photo-1660330589243-4c640d878052?w=800"
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
                Knights Energy provides solar solutions for industrial, commercial & residential applications, that enable individuals & organizations to be part of a sustainable green energy powered world.
              </p>
              <p className="text-xl text-gray-700 mb-4">
                The Company has the capacity to realize projects of variable complexity and provide the expertise to fully supply and install simple to complex on-grid and off-grid photovoltaic power plants with verifiable experience in the task at hand.
              </p>
              <p className="text-xl text-gray-700">
                Over the years, the Company has become one of the biggest installers and maintenance partners for medium and large-scale solar installations in the region with a considerable number of solutions for domestic and Industrial projects.
              </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Quick Links Grid */}
          <div className="grid md:grid-cols-3 gap-10" id="advantage">
            <Link
              to="#advantage"
              className="bg-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-300 shadow-lg transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Briefcase className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-[#36AC43] transition-colors">Our Competitive Advantage</h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Unmatched expertise and cutting-edge technology in renewable energy solutions.
              </p>
            </Link>

            <Link
              to="#team"
              className="bg-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-300 shadow-lg transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-[#36AC43] transition-colors">Leadership Team</h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Meet our experienced team of energy experts and industry leaders.
              </p>
            </Link>

            <Link
              to="#awards"
              className="bg-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-300 shadow-lg transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-[#36AC43] transition-colors">Awards & Recognition</h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Recognized for excellence in renewable energy implementation.
              </p>
            </Link>

            <Link
              to="#faq"
              className="bg-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-300 shadow-lg transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <HelpCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-[#36AC43] transition-colors">Help & FAQs</h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Find answers to commonly asked questions about our services.
              </p>
            </Link>

            <Link
              to="#manuals"
              className="bg-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-300 shadow-lg transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-[#36AC43] transition-colors">Company Manuals</h3>
              <p className="text-gray-600 text-xl leading-relaxed">
                Access our comprehensive documentation and guidelines.
              </p>
            </Link>

            <Link
              to="#careers"
              className="bg-white p-10 rounded-3xl hover:shadow-2xl transition-all duration-300 shadow-lg transform hover:-translate-y-2 border border-gray-100 group"
            >
              <div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <UserPlus className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-[#36AC43] transition-colors">Careers</h3>
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
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the experts driving our vision forward</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((_, index) => (
              <AnimatedSection key={index} animation="zoom-in" delay={index * 100}>
                <div className="bg-white p-8 rounded-3xl shadow-xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-40 h-40 bg-gradient-to-br from-[#36AC43] to-[#2d8c36] rounded-full mx-auto mb-6"></div>
                <h3 className="text-3xl font-bold mb-3 text-gray-900">Team Member {index + 1}</h3>
                <p className="text-[#36AC43] mb-4 font-semibold text-xl">Position Title</p>
                <p className="text-gray-600 text-xl leading-relaxed">
                  Expert in renewable energy solutions with extensive experience in the field.
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
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Awards & Recognition</h2>
            <p className="text-xl text-gray-600">Celebrating our achievements and milestones</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Best Solar EPC Company 2025",
              "Innovation in Clean Energy",
              "Customer Excellence Award",
              "Sustainability Champion",
            ].map((award, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <Award className="w-16 h-16 text-[#36AC43] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">{award}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-24 bg-gradient-to-br from-[#36AC43] to-[#2d8c36] text-white" id="careers">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-8">Join Our Team</h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Be part of East Africa's leading renewable energy company and help build a sustainable future.
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-5 bg-white text-[#36AC43] rounded-xl hover:bg-gray-100 font-bold text-xl shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            View Open Positions
          </Link>
        </div>
      </section>
    </div>
  );
}
