import NavbarButton from "@/components/NavbarButton";
import { FC, useState } from "react";
import { HiOutlineRectangleStack, HiOutlineXCircle } from "react-icons/hi2";

const Navbar: FC = () => {
	const [isMenuOpen, setMenuState] = useState<boolean>(false);

	return (
		<nav
			className={`z-10 isolate transition-all ${
				isMenuOpen ? "bg-opacity-100 bg-[#01003C]" : "delay-300 bg-transparent"
			} fixed top-0 md:bg-transparent md:relative w-full items-center md:pt-10 md:px-20 md:flex md:items-center md:justify-between`}
		>
			<div className="w-full px-5 py-2 flex items-center justify-between">
				<a
					href=""
					className="text-white text-4xl font-bold uppercase no-underline"
				>
					Krypto
				</a>
				{isMenuOpen ? (
					<HiOutlineXCircle
						focusable={false}
						className="cursor-pointer md:hidden"
						size={35}
						onClick={() => setMenuState(false)}
					/>
				) : (
					<HiOutlineRectangleStack
						focusable={false}
						className="cursor-pointer md:hidden"
						size={35}
						onClick={() => setMenuState(true)}
					/>
				)}
			</div>
			<ul
				id="nabvar-items"
				className={`fixed transition-all ${
					isMenuOpen ? "visible" : "invisible"
				} h-full w-full top-18 md:visible md:static md:flex md:items-center shadow md:shadow-none`}
			>
				<li
					className={`${
						isMenuOpen ? "delay-0" : "delay-150"
					} px-4 py-1 bg-[#01003C] md:bg-transparent`}
				>
					<NavbarButton>About</NavbarButton>
				</li>
				<li
					className={`${
						isMenuOpen ? "delay-75" : "delay-100"
					} px-4 py-1 bg-[#01003C] md:bg-transparent`}
				>
					<NavbarButton>Pricing</NavbarButton>
				</li>
				<li
					className={`${
						isMenuOpen ? "delay-100" : "delay-75"
					} px-4 py-1 bg-[#01003C] md:bg-transparent`}
				>
					<NavbarButton>Contact</NavbarButton>
				</li>
				<li
					className={`${
						isMenuOpen ? "delay-150" : "delay-0"
					} px-4 py-1 bg-[#01003C] md:bg-transparent`}
				>
					<NavbarButton>Buy NFTs</NavbarButton>
				</li>
				<li
					className={`${
						isMenuOpen ? "delay-200" : "delay-0"
					} w-full h-1 bg-gradient-to-r from-[#88F8FF] to-[#5B5BF1] md:hidden`}
				/>
			</ul>
		</nav>
	);
};

export default Navbar;
