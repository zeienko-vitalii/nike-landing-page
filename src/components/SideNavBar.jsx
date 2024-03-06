import { close, hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const SideNavBar = () => {
	const [showSideMenu, setShowSideMenu] = useState(false);

	const menuPressedCallback = () => {
		setShowSideMenu(!showSideMenu);
	};
	return (
		<>
			<div className="padding-x py-8 absolute z-30 w-full flex justify-end">
				{showSideMenu ? (
					<div
						className="cursor-pointer flex justify-end"
						onClick={menuPressedCallback}
					>
						<img src={close} alt="Close" width={25} height={25} />
					</div>
				) : (
					<div
						className="lg:hidden cursor-pointer "
						onClick={menuPressedCallback}
					>
						<img src={hamburger} alt="Hamburger" width={25} height={25} />
					</div>
				)}
			</div>

			<div
				className={`absolute z-20 min-h-screen min-w-full bg-white padding-x py-8 flex flex-col-reverse justify-start ease-in-out duration-300 ${
					showSideMenu ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<ul className="flex-1 flex flex-col justify-center items-center gap-10">
					{navLinks.map((item) => (
						<li key={item.label}>
							<a
								href={item.href}
								onClick={menuPressedCallback}
								className="font-montserrat leading-normal text-3xl text-black"
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default SideNavBar;
