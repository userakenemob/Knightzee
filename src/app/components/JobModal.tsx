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
				<div className="relative bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white p-8 sm:p-10 rounded-t-3xl flex-shrink-0">
					<button
						onClick={onClose}
						className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 p-2 rounded-full text-white backdrop-blur-md transition-colors">
						<X className="w-6 h-6" />
					</button>

					<h2 className="text-3xl sm:text-4xl font-bold pr-12 mb-4">
						{job.title}
					</h2>

					<div className="flex flex-wrap gap-6 text-white/90">
						<div className="flex items-center gap-2">
							<Briefcase className="w-5 h-5" />
							<span>{job.experience}</span>
						</div>
						<div className="flex items-center gap-2">
							<Award className="w-5 h-5" />
							<span>{job.education}</span>
						</div>
						<div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full font-semibold">
							<Calendar className="w-5 h-5" />
							<span>Apply by: {job.deadline}</span>
						</div>
					</div>
				</div>

				{/* Content */}
				<div className="p-8 sm:p-10 flex-grow">
					<h3 className="text-2xl font-bold mb-6 text-gray-900">
						Job Description
					</h3>
					<div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-10">
						{job.fullDescription.map((paragraph, index) => (
							<p key={index}>{paragraph}</p>
						))}
					</div>

					{/* Action */}
					<div className="mt-auto pt-8 border-t border-gray-100 flex flex-wrap gap-4">
						<a
							href={`mailto:hr@knightsandapps.com?subject=Application for ${encodeURIComponent(
								job.title,
							)}`}
							className="px-8 py-4 bg-gradient-to-r from-[#36AC43] to-[#2d8c36] text-white rounded-xl hover:shadow-xl transition-all duration-300 font-bold text-lg inline-flex items-center justify-center gap-2">
							Apply via Email
						</a>
						<button
							onClick={onClose}
							className="px-8 py-4 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300 font-bold text-lg">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
