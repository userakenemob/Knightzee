import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a solar installation take?",
    answer: "Residential installations typically take 3-5 days, while commercial projects can range from 1-8 weeks depending on system size and complexity. We provide detailed timelines during the initial consultation."
  },
  {
    question: "What is the lifespan of solar panels?",
    answer: "Quality solar panels last 25-30 years with minimal degradation. Most manufacturers guarantee 80-90% performance after 25 years. Inverters typically need replacement after 10-15 years."
  },
  {
    question: "Will solar work during cloudy days or power outages?",
    answer: "Solar panels still generate power on cloudy days, though at reduced capacity (30-50%). For power outages, you'll need a battery storage system to continue operating independently from the grid."
  },
  {
    question: "How much can I save with solar energy?",
    answer: "Most clients save 60-80% on electricity bills. Exact savings depend on your current consumption, system size, and local electricity rates. Use our solar calculator for personalized estimates."
  },
  {
    question: "Do you provide maintenance services?",
    answer: "Yes! We offer comprehensive maintenance plans including regular inspections, cleaning, performance monitoring, and repairs. Solar systems require minimal maintenance but benefit from professional care."
  },
  {
    question: "What financing options are available?",
    answer: "We offer various payment options including cash purchase, solar loans, and power purchase agreements (PPAs). Our team can help you find the best financing solution for your budget."
  },
  {
    question: "Can I expand my solar system later?",
    answer: "Absolutely! We design systems with future expansion in mind. You can add more panels as your energy needs grow or your budget allows. Just ensure adequate roof space during initial planning."
  },
  {
    question: "What warranties do you provide?",
    answer: "We provide comprehensive warranties: 25 years on solar panels, 10-15 years on inverters, and 5-10 years on workmanship. All major components are covered by manufacturer warranties."
  }
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600">Everything you need to know about solar energy</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
            >
              <span className="text-xl font-semibold text-gray-900 pr-8">{faq.question}</span>
              <ChevronDown
                className={`w-6 h-6 text-[#36AC43] flex-shrink-0 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="px-8 pb-6">
                <p className="text-lg text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <p className="text-lg text-gray-600 mb-6">Still have questions?</p>
        <button className="px-10 py-4 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-xl transition-all duration-300 font-bold text-xl transform hover:-translate-y-1">
          Contact Our Experts
        </button>
      </div>
    </div>
  );
}
