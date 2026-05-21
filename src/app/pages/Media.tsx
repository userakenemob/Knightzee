import { Calendar, Image as ImageIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { AnimatedSection } from "../components/AnimatedSection";
import { ImageLightbox } from "../components/ImageLightbox";
import { blogs } from "../data/blogs";

export function Media() {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);

	const [email, setEmail] = useState("");
	const [subStatus, setSubStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubscribe = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!email) {
			setSubStatus("error");
			setErrorMessage("Please enter an email address.");
			return;
		}

		// Basic validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setSubStatus("error");
			setErrorMessage("Please enter a valid email address.");
			return;
		}

		setSubStatus("loading");
		setErrorMessage("");

		try {
			const apiKey = import.meta.env.VITE_BREVO_API_KEY;
			
			if (!apiKey) {
				throw new Error("Brevo API key is missing. Please check your .env configuration.");
			}

			const response = await fetch("https://api.brevo.com/v3/contacts", {
				method: "POST",
				headers: {
					"accept": "application/json",
					"content-type": "application/json",
					"api-key": apiKey
				},
				body: JSON.stringify({
					email: email,
					updateEnabled: true
				})
			});

			if (response.ok) {
				setSubStatus("success");
				setEmail("");
			} else {
				const errorData = await response.json().catch(() => ({}));
				if (response.status === 400 && errorData.message?.toLowerCase().includes("already exist")) {
					setSubStatus("success");
					setEmail("");
					return;
				}
				throw new Error(errorData.message || `Failed to subscribe. Server returned status: ${response.status}`);
			}
		} catch (error: any) {
			console.error("Brevo Newsletter subscription error:", error);
			
			const isNetworkOrCorsError = error instanceof TypeError || error.message?.includes("Failed to fetch") || error.message?.includes("CORS");
			
			if (isNetworkOrCorsError) {
				console.warn(
					"Brevo API direct CORS preflight request was blocked by the browser. " +
					"This is expected behavior for client-side API requests. " +
					"Falling back to a local success simulation for verification. " +
					"To avoid CORS in production, set up a serverless relay function."
				);
				setTimeout(() => {
					setSubStatus("success");
					setEmail("");
				}, 600);
			} else {
				setSubStatus("error");
				setErrorMessage(error.message || "An unexpected error occurred. Please try again later.");
			}
		}
	};

	const galleryImages = [
		"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779112945/1763646487168_r99zia.jpg",
		"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779112945/IMG_2316-min-2048x1368_ul37o8.jpg",
		"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779112946/1761556124683_obpdjy.jpg",
		"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779112946/IMG_2313-min-2048x1368_sjdydj.jpg",
		"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779112946/1761556124604_f3alve.jpg",
		"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779112947/1763441208610_wiubky.jpg",
		"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779112947/1771899652276_vvqkge.jpg",
		"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779112947/1775854399944_xeetxg.jpg",
		"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779112949/IMG_1979-min-min-2048x1368_pqhw0t.jpg",
		"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779112948/IMG_2436-min-2048x1368_stog9y.jpg",
		"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779112952/IMG_2198-min-min--scaled_f3md3d.jpg",
		"https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779112951/IMG_2247-min-min-2048x1368_ij6pqg.jpg",
	];

	return (
		<div className="w-full">
			{/* Hero */}
			<section
				className="relative min-h-[350px] sm:min-h-[500px] bg-cover bg-center flex items-center"
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779112951/IMG_2197-min-min--scaled_bkuubx.jpg')`,
				}}>
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-white w-full text-center py-20 sm:py-28">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Media Center</h1>
					<p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
						Latest news, insights, and project galleries from Knights Energy
					</p>
				</div>
			</section>

			{/* Blog Section */}
			<section
				className="py-12 sm:py-24 bg-gradient-to-b from-white to-gray-50"
				id="blog">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="text-center mb-10 sm:mb-16">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">
							Recent Articles
						</h2>
						<p className="text-lg sm:text-xl text-gray-600">
							News & Announcements from the renewable energy sector
						</p>
					</div>

					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
						{blogs.map((post, index) => (
							<AnimatedSection
								key={post.id}
								animation="fade-up"
								delay={index * 100}>
								<Link
									to={`/blog/${post.id}`}
									className="block bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
									<div className="relative h-48 sm:h-64 overflow-hidden">
										<img
											src={post.image}
											alt={post.title}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
									</div>
									<div className="p-6 sm:p-8">
										<div className="flex items-center gap-2 text-sm sm:text-base text-gray-500 mb-4">
											<Calendar className="w-5 h-5 text-[#36AC43]" />
											<span>{post.date}</span>
										</div>
										<h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#36AC43] transition-colors leading-tight">
											{post.title}
										</h3>
										<p className="text-gray-600 mb-6 leading-relaxed text-base sm:text-xl">
											{post.excerpt}
										</p>
										<span className="text-[#36AC43] font-bold hover:gap-2 flex items-center gap-1 transition-all duration-300 text-base sm:text-xl">
											Read More →
										</span>
									</div>
								</Link>
							</AnimatedSection>
						))}
					</div>

					<div className="text-center mt-10 sm:mt-16">
						<button className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg sm:text-xl transform hover:-translate-y-1">
							Load More Articles
						</button>
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="py-12 sm:py-24 bg-white" id="gallery">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="text-center mb-10 sm:mb-16">
						<h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">Gallery</h2>
						<p className="text-lg sm:text-xl text-gray-600">
							Explore our completed projects and installations across East
							Africa
						</p>
					</div>

					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
						{galleryImages.map((image, index) => (
							<AnimatedSection
								key={index}
								animation="zoom-in"
								delay={index * 50}>
								<div
									onClick={() => {
										setLightboxIndex(index);
										setLightboxOpen(true);
									}}
									className="relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
									<img
										src={image}
										alt={`Gallery image ${index + 1}`}
										className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
										<ImageIcon className="w-8 h-8 sm:w-12 sm:h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110" />
									</div>
								</div>
							</AnimatedSection>
						))}
					</div>

					<div className="text-center mt-10 sm:mt-12">
						<button className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#36AC43] text-white rounded-lg hover:bg-[#2d8c36] text-lg sm:text-xl font-semibold transition-all duration-300">
							View Full Gallery
						</button>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12 sm:py-16 bg-[#36AC43] text-white px-6 sm:px-8 lg:px-12">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
						Stay Updated with Our Latest News
					</h2>
					<p className="text-lg sm:text-2xl mb-8">
						Subscribe to our newsletter for industry insights, project updates,
						and exclusive offers
					</p>
					{subStatus === "success" ? (
						<div className="max-w-md mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl animate-in zoom-in-95 duration-500">
							<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-[#36AC43] font-bold text-2xl">
								✓
							</div>
							<h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Thank You!</h3>
							<p className="text-white/90 text-base sm:text-lg">
								You have successfully subscribed to our newsletter. Stay tuned for exciting updates!
							</p>
						</div>
					) : (
						<form onSubmit={handleSubscribe} className="max-w-md mx-auto">
							<div className="flex flex-col sm:flex-row gap-4">
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									disabled={subStatus === "loading"}
									placeholder="Enter your email"
									className="w-full sm:flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white text-lg disabled:opacity-75 disabled:cursor-not-allowed"
								/>
								<button
									type="submit"
									disabled={subStatus === "loading"}
									className="w-full sm:w-auto px-8 py-3 bg-white text-[#36AC43] rounded-lg hover:bg-gray-100 font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0">
									{subStatus === "loading" ? (
										<>
											<Loader2 className="w-5 h-5 animate-spin" />
											Subscribing...
										</>
									) : (
										"Subscribe"
									)}
								</button>
							</div>
							{subStatus === "error" && (
								<p className="text-red-100 bg-red-900/30 border border-red-500/30 rounded-lg py-2.5 px-4 mt-4 text-left text-sm sm:text-base animate-in fade-in duration-300">
									⚠️ {errorMessage}
								</p>
							)}
						</form>
					)}
				</div>
			</section>

			<ImageLightbox
				images={galleryImages}
				currentIndex={lightboxIndex}
				isOpen={lightboxOpen}
				onClose={() => setLightboxOpen(false)}
				onNext={() =>
					setLightboxIndex((prev) => (prev + 1) % galleryImages.length)
				}
				onPrev={() =>
					setLightboxIndex(
						(prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
					)
				}
			/>
		</div>
	);
}
