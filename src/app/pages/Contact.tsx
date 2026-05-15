import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";
import { ContactForm } from "../components/ContactForm";
import { PartnersCarousel } from "../components/PartnersCarousel";

export function Contact() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Get in touch with our team across East Africa
          </p>
        </div>
      </section>

      {/* Location Cards */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {/* Kenya */}
            <AnimatedSection animation="fade-up">
              <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-6">🇰🇪</div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">KENYA</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#36AC43] mt-1" />
                  <p className="text-xl text-gray-700">Great Jubilee Centre, Nairobi</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#36AC43] mt-1" />
                  <div>
                    <a href="tel:+254788220607" className="text-xl text-gray-700 hover:text-[#36AC43] block">
                      +254 788 220 607
                    </a>
                    <a href="tel:+254722953976" className="text-xl text-gray-700 hover:text-[#36AC43] block">
                      +254 722 953 976
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#36AC43] mt-1" />
                  <a href="mailto:info@knightsandapps.com" className="text-xl text-gray-700 hover:text-[#36AC43]">
                    info@knightsandapps.com
                  </a>
                </div>
              </div>
              </div>
            </AnimatedSection>

            {/* Uganda */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-6">🇺🇬</div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">UGANDA</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#36AC43] mt-1" />
                  <p className="text-xl text-gray-700">Sempagala Zone, Kisaasi Rd</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#36AC43] mt-1" />
                  <div>
                    <a href="tel:+256708468276" className="text-xl text-gray-700 hover:text-[#36AC43] block">
                      +256 708 468 276
                    </a>
                    <a href="tel:+256781725896" className="text-xl text-gray-700 hover:text-[#36AC43] block">
                      +256 781 725 896
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#36AC43] mt-1" />
                  <a href="mailto:info@knightsandapps.com" className="text-xl text-gray-700 hover:text-[#36AC43]">
                    info@knightsandapps.com
                  </a>
                </div>
              </div>
              </div>
            </AnimatedSection>

            {/* Tanzania */}
            <AnimatedSection animation="fade-up" delay={400}>
              <div className="bg-white p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-4xl mb-6">🇹🇿</div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">TANZANIA</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#36AC43] mt-1" />
                  <p className="text-xl text-gray-700">Old Bagamoyo Rd, Opp Kawe Police Station</p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#36AC43] mt-1" />
                  <a href="tel:+255747364514" className="text-xl text-gray-700 hover:text-[#36AC43]">
                    +255 747 364 514
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#36AC43] mt-1" />
                  <a href="mailto:info@knightsandapps.com" className="text-xl text-gray-700 hover:text-[#36AC43]">
                    info@knightsandapps.com
                  </a>
                </div>
              </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Contact Form */}
            <AnimatedSection animation="fade-right">
              <div className="bg-white p-10 rounded-3xl shadow-2xl">
                <h2 className="text-4xl font-bold mb-4 text-gray-900">Get In Touch</h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We take great pride in everything that we do, complete control over products allows us to ensure our customers receive the best quality service.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>

            {/* Right - Contact Information */}
            <AnimatedSection animation="fade-left" delay={200}>
              <div className="space-y-8">
                {/* Office Hours */}
                <div className="bg-gradient-to-br from-[#36AC43] to-[#2d8c36] p-10 rounded-3xl shadow-2xl text-white">
                  <h3 className="text-3xl font-bold mb-6">Office Hours</h3>
                  <div className="space-y-4 text-xl">
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6" />
                      <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6" />
                      <span>Saturday: Closed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-6 h-6" />
                      <span>Sunday: Closed</span>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-white p-10 rounded-3xl shadow-2xl">
                  <h3 className="text-4xl font-bold mb-6 text-gray-900">Why Choose Us?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#36AC43] flex-shrink-0 mt-1" />
                      <span className="text-xl text-gray-700">Over 317 successful projects across East Africa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#36AC43] flex-shrink-0 mt-1" />
                      <span className="text-xl text-gray-700">12+ years of industry experience</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#36AC43] flex-shrink-0 mt-1" />
                      <span className="text-xl text-gray-700">99.9% customer satisfaction rate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#36AC43] flex-shrink-0 mt-1" />
                      <span className="text-xl text-gray-700">Expert team of certified engineers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#36AC43] flex-shrink-0 mt-1" />
                      <span className="text-xl text-gray-700">24/7 customer support available</span>
                    </li>
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="bg-white p-10 rounded-3xl shadow-2xl">
                  <h3 className="text-4xl font-bold mb-6 text-gray-900">Quick Contact</h3>
                  <div className="space-y-4">
                    <a href="tel:+254788220607" className="flex items-center gap-3 text-xl text-gray-700 hover:text-[#36AC43] transition-colors">
                      <Phone className="w-6 h-6 text-[#36AC43]" />
                      <span>+254 788 220 607</span>
                    </a>
                    <a href="mailto:info@knightsandapps.com" className="flex items-center gap-3 text-xl text-gray-700 hover:text-[#36AC43] transition-colors">
                      <Mail className="w-6 h-6 text-[#36AC43]" />
                      <span>info@knightsandapps.com</span>
                    </a>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Well+Mall+Karen+Nairobi+Kenya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-xl text-gray-700 hover:text-[#36AC43] transition-colors"
                    >
                      <MapPin className="w-6 h-6 text-[#36AC43]" />
                      <span>Well Mall, Karen, Nairobi</span>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Partners Logos */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Our Trusted Partners</h2>
            <PartnersCarousel />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
