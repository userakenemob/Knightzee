import { Link, useLocation } from "react-router";
import {
	Mail,
	Clock,
	MapPin,
	Phone,
	ShoppingCart,
	CreditCard,
	Menu,
} from "lucide-react";
import { useState, useEffect } from "react";
import { MobileMenu } from "./MobileMenu";
import { ShopifyCartDrawer } from "./ShopifyCartDrawer";
import { useShopify } from "../contexts/ShopifyContext";

export function Header() {
	const location = useLocation();
	const [activeMenu, setActiveMenu] = useState<string | null>(null);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const { totalItems } = useShopify();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isActive = (path: string) => {
		return (
			location.pathname === path || location.pathname.startsWith(path + "/")
		);
	};

	return (
		<>
			<header
				className={`w-full bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : "shadow-md"}`}>
				{/* Top Utility Bar - Hidden on mobile */}
				<div className="hidden md:block bg-gradient-to-r from-gray-50 to-white border-b border-gray-100">
					<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
						<div className="flex justify-between items-center py-3 text-sm">
							<div className="flex items-center gap-4 xl:gap-6">
								<a
									href="mailto:info@knightsandapps.com"
									className="flex items-center gap-2 hover:opacity-80 transition-opacity">
									<Mail className="w-4 h-4" style={{ color: "#36AC43" }} />
									<span className="text-gray-700 hidden lg:inline">
										info@knightsandapps.com
									</span>
								</a>
								<div className="hidden lg:flex items-center gap-2">
									<Clock className="w-4 h-4" style={{ color: "#36AC43" }} />
									<span className="text-gray-700">Mon-Fri: 8am–5pm</span>
								</div>
								<a
									href="https://www.google.com/maps/search/?api=1&query=Well+Mall+Karen+Nairobi+Kenya"
									target="_blank"
									rel="noopener noreferrer"
									className="hidden xl:flex items-center gap-2 hover:opacity-80 transition-opacity">
									<MapPin className="w-4 h-4" style={{ color: "#36AC43" }} />
									<span className="text-gray-700">Get Direction</span>
								</a>
							</div>
							<div className="flex items-center gap-3">
								<a
									href="https://twitter.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-600 hover:text-[#36AC43] transition-colors">
									<svg
										className="w-4 h-4"
										fill="currentColor"
										viewBox="0 0 24 24">
										<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
									</svg>
								</a>
								<a
									href="https://facebook.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-600 hover:text-[#36AC43] transition-colors">
									<svg
										className="w-4 h-4"
										fill="currentColor"
										viewBox="0 0 24 24">
										<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
									</svg>
								</a>
								<a
									href="https://linkedin.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-600 hover:text-[#36AC43] transition-colors">
									<svg
										className="w-4 h-4"
										fill="currentColor"
										viewBox="0 0 24 24">
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
									</svg>
								</a>
								<div className="flex items-center gap-2 border-l border-gray-300 pl-3">
									<div className="flex -space-x-1">
										<img
											src="https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778846571/kenya_vz3m6n.png"
											alt="Kenya"
											className="h-6 w-6 rounded-full bg-white p-0.5 shadow-sm object-contain"
										/>

										<img
											src="https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778846570/uganda_y7d3hx.png"
											alt="Uganda"
											className="h-6 w-6 rounded-full bg-white p-0.5 shadow-sm object-contain"
										/>

										<img
											src="https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778846570/tanzania_ejmexs.png"
											alt="Tanzania"
											className="h-6 w-6 rounded-full bg-white p-0.5 shadow-sm object-contain"
										/>
									</div>

									<span className="text-sm text-gray-600">
										East Africa Coverage
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Main Navigation */}
				<div className="bg-white">
					<div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
						<div className="flex justify-between items-center py-6">
							{/* Logo */}
							<Link to="/" className="flex items-center group">
								<img
									src="https://res.cloudinary.com/dfrbkwdzf/image/upload/q_auto/f_auto/v1778835819/KNIGHTS-ENERGY-LOGO_wn9tdh.png"
									alt="Knights Energy Logo"
									className="h-14 w-auto transition-all duration-300 hover:scale-105"
								/>
							</Link>

							{/* Navigation Menu */}
							<nav className="hidden lg:flex items-center gap-10">
								<Link
									to="/"
									className={`relative text-gray-700 hover:text-[#36AC43] transition-colors font-medium text-base pb-1 ${
										isActive("/") && location.pathname === "/"
											? "text-[#36AC43]"
											: ""
									}`}>
									Home
									{isActive("/") && location.pathname === "/" && (
										<span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#36AC43]"></span>
									)}
								</Link>

								<div
									className="relative"
									onMouseEnter={() => setActiveMenu("about")}
									onMouseLeave={() => setActiveMenu(null)}>
									<Link
										to="/about"
										className={`relative text-gray-700 hover:text-[#36AC43] transition-colors font-medium text-base pb-1 ${
											isActive("/about") ? "text-[#36AC43]" : ""
										}`}>
										About Us
										{isActive("/about") && (
											<span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#36AC43]"></span>
										)}
									</Link>
									{activeMenu === "about" && (
										<div className="absolute top-full left-0 mt-4 w-72 bg-white shadow-2xl rounded-2xl py-4 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
											<Link
												to="/about"
												className="block px-6 py-3 text-gray-700 hover:bg-[#36AC43]/5 hover:text-[#36AC43] rounded-lg transition-all duration-200 font-medium">
												About Us
											</Link>
											<Link
												to="/about#advantage"
												className="block px-6 py-3 text-gray-700 hover:bg-[#36AC43]/5 hover:text-[#36AC43] rounded-lg transition-all duration-200 font-medium">
												Our Competitive Advantage
											</Link>
											<Link
												to="/about#team"
												className="block px-6 py-3 text-gray-700 hover:bg-[#36AC43]/5 hover:text-[#36AC43] rounded-lg transition-all duration-200 font-medium">
												Leadership Team
											</Link>
											<Link
												to="/about#awards"
												className="block px-6 py-3 text-gray-700 hover:bg-[#36AC43]/5 hover:text-[#36AC43] rounded-lg transition-all duration-200 font-medium">
												Awards & Recognition
											</Link>
											<Link
												to="/about#careers"
												className="block px-6 py-3 text-gray-700 hover:bg-[#36AC43]/5 hover:text-[#36AC43] rounded-lg transition-all duration-200 font-medium">
												Careers
											</Link>
										</div>
									)}
								</div>

								<div
									className="relative"
									onMouseEnter={() => setActiveMenu("services")}
									onMouseLeave={() => setActiveMenu(null)}>
									<Link
										to="/services"
										className={`relative text-gray-700 hover:text-[#36AC43] transition-colors font-medium text-base pb-1 ${
											isActive("/services") ? "text-[#36AC43]" : ""
										}`}>
										Services
										{isActive("/services") && (
											<span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#36AC43]"></span>
										)}
									</Link>
									{activeMenu === "services" && (
										<div className="absolute top-full left-0 mt-4 w-80 bg-white shadow-2xl rounded-2xl py-4 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
											<Link
												to="/services#residential"
												className="block px-6 py-3 text-gray-700 hover:bg-[#36AC43]/5 hover:text-[#36AC43] rounded-lg transition-all duration-200 font-medium">
												Residential Solar Solutions
											</Link>
											<Link
												to="/services#commercial"
												className="block px-6 py-3 text-gray-700 hover:bg-[#36AC43]/5 hover:text-[#36AC43] rounded-lg transition-all duration-200 font-medium">
												Commercial & Industrial Solar
											</Link>
											<Link
												to="/services#minigrids"
												className="block px-6 py-3 text-gray-700 hover:bg-[#36AC43]/5 hover:text-[#36AC43] rounded-lg transition-all duration-200 font-medium">
												Mini-grids & Off-grid Projects
											</Link>
											<Link
												to="/services#emobility"
												className="block px-6 py-3 text-gray-700 hover:bg-[#36AC43]/5 hover:text-[#36AC43] rounded-lg transition-all duration-200 font-medium">
												Electric Mobility
											</Link>
											<Link
												to="/services#waterheating"
												className="block px-6 py-3 text-gray-700 hover:bg-[#36AC43]/5 hover:text-[#36AC43] rounded-lg transition-all duration-200 font-medium">
												Solar Water Heating
											</Link>
											<Link
												to="/services#maintenance"
												className="block px-6 py-3 text-gray-700 hover:bg-[#36AC43]/5 hover:text-[#36AC43] rounded-lg transition-all duration-200 font-medium">
												Operation and Maintenance
											</Link>
										</div>
									)}
								</div>

								<Link
									to="/projects"
									className={`relative text-gray-700 hover:text-[#36AC43] transition-colors font-medium text-base pb-1 ${
										isActive("/projects") ? "text-[#36AC43]" : ""
									}`}>
									Projects
									{isActive("/projects") && (
										<span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#36AC43]"></span>
									)}
								</Link>

								<div
									className="relative"
									onMouseEnter={() => setActiveMenu("media")}
									onMouseLeave={() => setActiveMenu(null)}>
									<Link
										to="/media"
										className={`relative text-gray-700 hover:text-[#36AC43] transition-colors font-medium text-base pb-1 ${
											isActive("/media") ? "text-[#36AC43]" : ""
										}`}>
										Media
										{isActive("/media") && (
											<span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#36AC43]"></span>
										)}
									</Link>
									{activeMenu === "media" && (
										<div className="absolute top-full left-0 mt-4 w-56 bg-white shadow-2xl rounded-2xl py-4 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
											<Link
												to="/media#blog"
												className="block px-6 py-3 text-gray-700 hover:bg-[#36AC43]/5 hover:text-[#36AC43] rounded-lg transition-all duration-200 font-medium">
												Blog
											</Link>
											<Link
												to="/media#gallery"
												className="block px-6 py-3 text-gray-700 hover:bg-[#36AC43]/5 hover:text-[#36AC43] rounded-lg transition-all duration-200 font-medium">
												Gallery
											</Link>
										</div>
									)}
								</div>

								<Link
									to="/shop"
									className={`relative text-gray-700 hover:text-[#36AC43] transition-colors font-medium text-base pb-1 ${
										isActive("/shop") ? "text-[#36AC43]" : ""
									}`}>
									Shop
									{isActive("/shop") && (
										<span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#36AC43]"></span>
									)}
								</Link>

								<Link
									to="/contact"
									className={`relative text-gray-700 hover:text-[#36AC43] transition-colors font-medium text-base pb-1 ${
										isActive("/contact") ? "text-[#36AC43]" : ""
									}`}>
									Contact Us
									{isActive("/contact") && (
										<span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#36AC43]"></span>
									)}
								</Link>
							</nav>

							{/* Right Side Actions */}
							<div className="flex items-center gap-6">
								<a
									href="tel:+254788220607"
									className="hidden md:flex items-center gap-2 text-gray-700 hover:text-[#36AC43] transition-colors font-semibold">
									<Phone className="w-5 h-5" />
									<span>+254 788220607</span>
								</a>
								<button
									onClick={() => setCartDrawerOpen(true)}
									className="relative text-gray-700 hover:text-[#36AC43] transition-colors transform hover:scale-110 duration-200">
									<ShoppingCart className="w-6 h-6" />
									{totalItems > 0 && (
										<span className="absolute -top-2 -right-2 bg-[#36AC43] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
											{totalItems}
										</span>
									)}
								</button>
								<Link
									to="/checkout"
									className="hidden sm:block text-gray-700 hover:text-[#36AC43] transition-colors transform hover:scale-110 duration-200">
									<CreditCard className="w-6 h-6" />
								</Link>
								<button
									onClick={() => setMobileMenuOpen(true)}
									className="lg:hidden text-gray-700 hover:text-[#36AC43] transition-colors">
									<Menu className="w-7 h-7" />
								</button>
							</div>
						</div>
					</div>
				</div>
			</header>

			<MobileMenu
				isOpen={mobileMenuOpen}
				onClose={() => setMobileMenuOpen(false)}
			/>
			<ShopifyCartDrawer
				isOpen={cartDrawerOpen}
				onClose={() => setCartDrawerOpen(false)}
			/>
		</>
	);
}
