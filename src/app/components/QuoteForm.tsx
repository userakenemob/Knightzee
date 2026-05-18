import { useState, FormEvent } from "react";
import { toast } from "sonner";

export function QuoteForm() {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		address: "",
		systemInstaller: "",
		projectCompletedBy: "",
		monthlyUsage: "",
		systemType: "",
		panelsPlace: "",
		roofMaterials: "",
		contactMethod: "all",
	});

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		if (!formData.name || !formData.email) {
			toast.error("Please fill in at least your name and email.");
			setIsSubmitting(false);
			return;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			toast.error("Please enter a valid email address.");
			setIsSubmitting(false);
			return;
		}

		// Construct email body
		const subject = "New Quote Request";
		const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
System Installer: ${formData.systemInstaller}
Project Completed By: ${formData.projectCompletedBy}
Monthly Electric Usage (kWh): ${formData.monthlyUsage}
Solar System Type: ${formData.systemType}
Solar Panels Place: ${formData.panelsPlace}
Roof Materials: ${formData.roofMaterials}
Preferred Contact Method: ${formData.contactMethod}`;

		// Open user's email client
		window.location.href = `mailto:info@knightsandapps.com?subject=${encodeURIComponent(
			subject,
		)}&body=${encodeURIComponent(body)}`;

		toast.success("Opening your email client...");

		setFormData({
			name: "",
			email: "",
			phone: "",
			address: "",
			systemInstaller: "",
			projectCompletedBy: "",
			monthlyUsage: "",
			systemType: "",
			panelsPlace: "",
			roofMaterials: "",
			contactMethod: "all",
		});
		setIsSubmitting(false);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white p-8 lg:p-10 rounded-3xl shadow-2xl space-y-6">
			<div className="grid md:grid-cols-2 gap-6">
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
					placeholder="Name *"
					className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
					required
				/>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="Email *"
					className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
					required
				/>
			</div>
			<div className="grid md:grid-cols-2 gap-6">
				<input
					type="tel"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
					placeholder="Phone"
					className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
				/>
				<input
					type="text"
					name="address"
					value={formData.address}
					onChange={handleChange}
					placeholder="Address"
					className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
				/>
			</div>
			<div className="grid md:grid-cols-2 gap-6">
				<select
					name="systemInstaller"
					value={formData.systemInstaller}
					onChange={handleChange}
					className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg bg-white"
				>
					<option value="" disabled>System Installer?</option>
					<option value="Myself">Myself</option>
					<option value="A local contractor">A local contractor</option>
					<option value="Other - Friend/Neighbor/Family">Other - Friend/Neighbor/Family</option>
				</select>
				<select
					name="projectCompletedBy"
					value={formData.projectCompletedBy}
					onChange={handleChange}
					className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg bg-white"
				>
					<option value="" disabled>Project completed by?</option>
					<option value="Undecided">Undecided</option>
					<option value="0-3 Months">0-3 Months</option>
					<option value="3-6 Months">3-6 Months</option>
					<option value="6+ Months">6+ Months</option>
				</select>
			</div>
			<div className="grid md:grid-cols-2 gap-6">
				<input
					type="number"
					name="monthlyUsage"
					value={formData.monthlyUsage}
					onChange={handleChange}
					placeholder="Monthly electric usage in kWh?"
					className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg"
				/>
				<select
					name="systemType"
					value={formData.systemType}
					onChange={handleChange}
					className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg bg-white"
				>
					<option value="" disabled>Solar system type?</option>
					<option value="Off Grid">Off Grid</option>
					<option value="Grid Tie">Grid Tie</option>
					<option value="Grid Tie w/ Backup">Grid Tie w/ Backup</option>
					<option value="Other">Other</option>
				</select>
			</div>
			<div className="grid md:grid-cols-2 gap-6">
				<select
					name="panelsPlace"
					value={formData.panelsPlace}
					onChange={handleChange}
					className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg bg-white"
				>
					<option value="" disabled>Solar panels place?</option>
					<option value="Roof Mounted">Roof Mounted</option>
					<option value="Ground Mounted">Ground Mounted</option>
					<option value="To Be Determined">To Be Determined</option>
				</select>
				<select
					name="roofMaterials"
					value={formData.roofMaterials}
					onChange={handleChange}
					className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#36AC43] focus:ring-4 focus:ring-[#36AC43]/10 transition-all duration-300 text-lg bg-white"
				>
					<option value="" disabled>Materials on your roof?</option>
					<option value="Comp Shingle">Comp Shingle</option>
					<option value="Tile">Tile</option>
					<option value="Metal">Metal</option>
					<option value="Other">Other</option>
				</select>
			</div>
			<div>
				<label className="block text-gray-700 font-semibold mb-4 text-xl">
					Preferred Contact Method
				</label>
				<div className="flex gap-6">
					<label className="flex items-center gap-3 cursor-pointer">
						<input
							type="radio"
							name="contactMethod"
							value="all"
							checked={formData.contactMethod === "all"}
							onChange={handleChange}
							className="w-5 h-5 text-[#36AC43]"
						/>
						<span className="text-gray-700 text-lg">All</span>
					</label>
					<label className="flex items-center gap-3 cursor-pointer">
						<input
							type="radio"
							name="contactMethod"
							value="email"
							checked={formData.contactMethod === "email"}
							onChange={handleChange}
							className="w-5 h-5 text-[#36AC43]"
						/>
						<span className="text-gray-700 text-lg">Email</span>
					</label>
					<label className="flex items-center gap-3 cursor-pointer">
						<input
							type="radio"
							name="contactMethod"
							value="phone"
							checked={formData.contactMethod === "phone"}
							onChange={handleChange}
							className="w-5 h-5 text-[#36AC43]"
						/>
						<span className="text-gray-700 text-lg">Phone</span>
					</label>
				</div>
			</div>
			<button
				type="submit"
				disabled={isSubmitting}
				className="w-full px-8 py-5 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-2xl text-xl font-bold transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
				{isSubmitting ? "Sending..." : "Submit Request"}
			</button>
		</form>
	);
}
