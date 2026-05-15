import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { AnimatedSection } from "../components/AnimatedSection";
import { projects } from "../data/projects";

export function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Solar", "E-Mobility", "ICT"];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="relative min-h-[500px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1771178301028-49a922aefccd?w=1600')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-white w-full text-center py-28">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Our Reference Projects are testament to our success in delivering world-class solar power plants to leading investors in the PV sector.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-10 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-xl shadow-md ${
                  filter === category
                    ? "bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 hover:shadow-lg transform hover:-translate-y-1"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={index} animation="zoom-in" delay={index * 50}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white px-4 py-2 rounded-lg text-base font-bold shadow-lg">
                    {project.category}, {project.type}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-[#36AC43] transition-colors">{project.name}</h3>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="space-y-3 text-xl text-gray-700 mb-6">
                    {project.size && (
                      <p className="flex items-start">
                        <span className="font-bold text-[#36AC43] mr-2">Plant Size:</span>
                        <span>{project.size}</span>
                      </p>
                    )}
                    {project.location && (
                      <p className="flex items-start">
                        <span className="font-bold text-[#36AC43] mr-2">Location:</span>
                        <span>{project.location}</span>
                      </p>
                    )}
                    {project.date && (
                      <p className="flex items-start">
                        <span className="font-bold text-[#36AC43] mr-2">Date:</span>
                        <span>{project.date}</span>
                      </p>
                    )}
                  </div>
                  <Link
                    to={`/projects/${project.id}`}
                    className="flex items-center gap-2 text-[#36AC43] hover:text-[#2d8c36] font-bold text-xl group-hover:gap-3 transition-all duration-300"
                  >
                    Explore More
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <AnimatedSection animation="zoom-in">
              <div className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <p className="text-4xl font-bold text-[#36AC43] mb-4">317+</p>
                <p className="text-2xl text-white font-semibold">Projects Completed</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={200}>
              <div className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <p className="text-4xl font-bold text-[#36AC43] mb-4">12+</p>
                <p className="text-2xl text-white font-semibold">Years Experience</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="zoom-in" delay={400}>
              <div className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <p className="text-4xl font-bold text-[#36AC43] mb-4">99.9%</p>
                <p className="text-2xl text-white font-semibold">Client Satisfaction</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
