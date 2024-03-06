import { close } from "../assets/icons";
import { navLinks } from "../constants";

const SideNavBar = ({ isVisible, onClose }) => {
	const visibilityClass = isVisible ? "animate-translate-left" : "animate-translate-right";
	return (
		<section
			className={`${visibilityClass} absolute z-20 min-h-screen min-w-full bg-white padding-x py-8 flex flex-col-reverse justify-start`}
		>
			<ul className="flex-1 flex flex-col justify-center items-center gap-10">
				{navLinks.map((item) => (
					<li key={item.label}>
						<a
							href={item.href}
							onClick={onClose}
							className="font-montserrat leading-normal text-3xl text-black"
						>
							{item.label}
						</a>
					</li>
				))}
			</ul>
			<div
				className="lg:hidden cursor-pointer flex justify-end"
				onClick={onClose}
			>
				{/* <div className="hidden max-lg:block"> */}
				<img src={close} alt="Close" width={25} height={25} />
			</div>
		</section>
	);
};

export default SideNavBar;
