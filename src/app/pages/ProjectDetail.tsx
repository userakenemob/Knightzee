import { useParams, Link } from "react-router";
import { ArrowLeft, MapPin, Calendar, Zap } from "lucide-react";
import { projects } from "../data/projects";
import { AnimatedSection } from "../components/AnimatedSection";
import { useState } from "react";
import { ImageLightbox } from "../components/ImageLightbox";

export function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-[#36AC43] hover:underline text-lg">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero */}
      <section
        className="relative min-h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('${project.image}')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-white w-full py-28">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-white hover:text-[#36AC43] transition-colors mb-8 text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
          <AnimatedSection animation="fade-up">
            <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl border border-white/20 max-w-3xl">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">{project.name}</h1>
              <div className="flex items-center gap-3 text-xl">
                <span className="px-4 py-2 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] rounded-lg font-bold">
                  {project.category}
                </span>
                <span className="text-gray-200">{project.type}</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Plant Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <AnimatedSection animation="fade-up">
            <div className="bg-gradient-to-br from-gray-50 to-white p-12 rounded-3xl shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-bold mb-10 text-gray-900">Plant Details</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {project.size && (
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1 text-lg">Plant Size</p>
                      <p className="text-2xl font-bold text-gray-900">{project.size}</p>
                    </div>
                  </div>
                )}
                {project.location && (
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1 text-lg">Location</p>
                      <p className="text-2xl font-bold text-gray-900">{project.location}</p>
                    </div>
                  </div>
                )}
                {project.date && (
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-500 mb-1 text-lg">Commissioning Date</p>
                      <p className="text-2xl font-bold text-gray-900">{project.date}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-xl text-gray-700 leading-relaxed">{project.description}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Gallery */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <AnimatedSection animation="fade-up">
              <h2 className="text-3xl font-bold mb-12 text-gray-900 text-center">Project Gallery</h2>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.galleryImages.map((image, index) => (
                <AnimatedSection key={index} animation="zoom-in" delay={index * 50}>
                  <div
                    onClick={() => {
                      setLightboxIndex(index);
                      setLightboxOpen(true);
                    }}
                    className="relative h-80 overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <img
                      src={image}
                      alt={`${project.name} - Image ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client Testimonial */}
      {project.testimonial && (
        <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">Perfect Choice !!</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] mx-auto"></div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-12 rounded-3xl border border-white/20">
                <div className="text-3xl text-[#36AC43] mb-6">"</div>
                <p className="text-white text-xl leading-relaxed mb-8 italic">
                  {project.testimonial.quote}
                </p>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <p className="font-bold text-white text-2xl mb-1">{project.testimonial.author}</p>
                    <p className="text-[#36AC43] text-lg mb-1">{project.testimonial.position}</p>
                    <p className="text-gray-300">{project.testimonial.organization}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-[#36AC43] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">
            Let us help you achieve energy independence with our proven solar solutions
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-5 bg-white text-[#36AC43] rounded-xl hover:bg-gray-100 font-bold text-xl shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      <ImageLightbox
        images={project.galleryImages || []}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setLightboxIndex((prev) => (prev + 1) % (project.galleryImages?.length || 1))
        }
        onPrev={() =>
          setLightboxIndex(
            (prev) => (prev - 1 + (project.galleryImages?.length || 1)) % (project.galleryImages?.length || 1)
          )
        }
      />
    </div>
  );
}
