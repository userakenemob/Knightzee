import { X, Briefcase, Award, Calendar } from "lucide-react";
import { useEffect } from "react";

export interface JobData {
	title: string;
	experience: string;
	education: string;
	deadline: string;
	description: string;
	fullDescription: string[];
}

interface JobModalProps {
	isOpen: boolean;
	onClose: () => void;
	job: JobData | null;
}

export function JobModal({ isOpen, onClose, job }: JobModalProps) {
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	if (!isOpen || !job) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-300">
			<div
				className="absolute inset-0 bg-black/70 backdrop-blur-sm"
				onClick={onClose}></div>
			<div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col animate-in zoom-in-95 duration-300">
				{/* Header */}
				<div className="relative bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white p-6 sm:p-10 rounded-t-3xl flex-shrink-0 z-20">
					<button
						onClick={onClose}
						className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white backdrop-blur-md transition-colors z-30">
						<X className="w-5 h-5 sm:w-6 sm:h-6" />
					</button>

					<h2 className="text-2xl sm:text-4xl font-bold pr-8 sm:pr-12 mb-4">
						{job.title}
					</h2>

					<div className="flex flex-wrap gap-4 sm:gap-6 text-white/90 text-sm sm:text-base">
						<div className="flex items-center gap-2">
							<Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
							<span>{job.experience}</span>
						</div>
						<div className="flex items-center gap-2">
							<Award className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
							<span>{job.education}</span>
						</div>
						<div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full font-semibold">
							<Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
							<span>Apply by: {job.deadline}</span>
						</div>
					</div>
				</div>

				{/* Content */}
				<div className="p-6 sm:p-10 flex-grow">
					<h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900">
						Job Description
					</h3>
					<div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-10">
						{job.fullDescription.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>

					{/* Action */}
					<div className="mt-auto pt-6 sm:pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-3 sm:gap-4">
						<a
							href={`mailto:hr@knightsandapps.com?subject=Application for ${encodeURIComponent(
								job.title,
							)}`}
							className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-xl transition-all duration-300 font-bold text-base sm:text-lg inline-flex items-center justify-center gap-2">
							Apply via Email
						</a>
						<button
							onClick={onClose}
							className="w-full sm:w-auto text-center px-6 sm:px-8 py-3.5 sm:py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 font-bold text-base sm:text-lg">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
