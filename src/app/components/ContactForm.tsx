import { useState, FormEvent } from "react";
import { toast } from "sonner";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! We'll get back to you soon.");

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Name *"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
          required
        />
        <input
          type="email"
          placeholder="Email *"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
          required
        />
      </div>
      <input
        type="tel"
        placeholder="Phone *"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
        required
      />
      <select
        value={formData.service}
        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
      >
        <option value="">Select Your services</option>
        <option>Residential Solar Solutions</option>
        <option>Commercial & Industrial Solar Solutions</option>
        <option>Mini-grids & Off-grid Solar Projects</option>
        <option>Electric Mobility</option>
        <option>Solar Water Heating Systems</option>
        <option>Solar Water Pumping Systems</option>
        <option>Operation and Maintenance</option>
        <option>Power Plant Testing and Commissioning</option>
      </select>
      <textarea
        placeholder="Additional Details!"
        rows={6}
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
      ></textarea>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-5 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-2xl text-xl font-bold transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {isSubmitting ? "Sending..." : "Submit Request"}
      </button>
    </form>
  );
}
