import { Calendar, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { AnimatedSection } from "../components/AnimatedSection";
import { ImageLightbox } from "../components/ImageLightbox";
import { blogs } from "../data/blogs";

export function Media() {
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState(0);

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
				className="relative min-h-[500px] bg-cover bg-center flex items-center"
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1779112951/IMG_2197-min-min--scaled_bkuubx.jpg')`,
				}}>
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-white w-full text-center py-28">
					<h1 className="text-5xl lg:text-6xl font-bold mb-6">Media Center</h1>
					<p className="text-2xl text-gray-200 max-w-3xl mx-auto">
						Latest news, insights, and project galleries from Knights Energy
					</p>
				</div>
			</section>

			{/* Blog Section */}
			<section
				className="py-24 bg-gradient-to-b from-white to-gray-50"
				id="blog">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-6 text-gray-900">
							Recent Articles
						</h2>
						<p className="text-xl text-gray-600">
							News & Announcements from the renewable energy sector
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
						{blogs.map((post, index) => (
							<AnimatedSection
								key={post.id}
								animation="fade-up"
								delay={index * 100}>
								<Link
									to={`/blog/${post.id}`}
									className="block bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group">
									<div className="relative h-64 overflow-hidden">
										<img
											src={post.image}
											alt={post.title}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
									</div>
									<div className="p-8">
										<div className="flex items-center gap-2 text-base text-gray-500 mb-4">
											<Calendar className="w-5 h-5 text-[#36AC43]" />
											<span>{post.date}</span>
										</div>
										<h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#36AC43] transition-colors leading-tight">
											{post.title}
										</h3>
										<p className="text-gray-600 mb-6 leading-relaxed text-xl">
											{post.excerpt}
										</p>
										<span className="text-[#36AC43] font-bold hover:gap-2 flex items-center gap-1 transition-all duration-300 text-xl">
											Read More →
										</span>
									</div>
								</Link>
							</AnimatedSection>
						))}
					</div>

					<div className="text-center mt-16">
						<button className="px-12 py-5 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-xl transform hover:-translate-y-1">
							Load More Articles
						</button>
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="py-24 bg-white" id="gallery">
				<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-6 text-gray-900">Gallery</h2>
						<p className="text-xl text-gray-600">
							Explore our completed projects and installations across East
							Africa
						</p>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
									className="relative h-80 overflow-hidden rounded-2xl group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
									<img
										src={image}
										alt={`Gallery image ${index + 1}`}
										className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
										<ImageIcon className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110" />
									</div>
								</div>
							</AnimatedSection>
						))}
					</div>

					<div className="text-center mt-12">
						<button className="px-8 py-4 bg-[#36AC43] text-white rounded-lg hover:bg-[#2d8c36] text-xl font-semibold transition-all duration-300">
							View Full Gallery
						</button>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 bg-[#36AC43] text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="text-4xl font-bold mb-6">
						Stay Updated with Our Latest News
					</h2>
					<p className="text-2xl mb-8">
						Subscribe to our newsletter for industry insights, project updates,
						and exclusive offers
					</p>
					<div className="max-w-md mx-auto flex gap-4">
						<input
							type="email"
							placeholder="Enter your email"
							className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white text-lg"
						/>
						<button className="px-8 py-3 bg-white text-[#36AC43] rounded-lg hover:bg-gray-100 font-semibold text-lg transition-all duration-300">
							Subscribe
						</button>
					</div>
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
