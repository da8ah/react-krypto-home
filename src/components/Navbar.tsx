import NavbarButton from "@/components/NavbarButton";
import { FC, useState } from "react";
import { HiOutlineRectangleStack, HiOutlineXCircle } from "react-icons/hi2";

const Navbar: FC = () => {
	const [isMenuOpen, setMenuState] = useState<boolean>(false);

	return (
		<nav className='bg-transparent w-full items-center pt-2 md:pt-10 md:px-20 md:flex md:items-center md:justify-between'>
			<div className="w-full px-5 pb-5 flex items-center justify-between">
				<a href="" className="text-white text-4xl uppercase no-underline">
					Krypto
				</a>
				{isMenuOpen ? (
					<HiOutlineXCircle
						className="cursor-pointer md:hidden"
						size={35}
						onClick={() => setMenuState(false)}
					/>
				) : (
					<HiOutlineRectangleStack
						className="cursor-pointer md:hidden"
						size={35}
						onClick={() => setMenuState(true)}
					/>
				)}
			</div>
			<ul
				id="nabvar-items"
				hidden={!isMenuOpen}
				className="w-full md:flex md:items-center md:static absolute bg-[#01003C] bg-opacity-90 md:bg-transparent shadow md:shadow-none"
			>
				<li className="mx-4">
					<NavbarButton>About</NavbarButton>
				</li>
				<li className="mx-4">
					<NavbarButton>Pricing</NavbarButton>
				</li>
				<li className="mx-4">
					<NavbarButton>Contact</NavbarButton>
				</li>
				<li className="mx-4">
					<NavbarButton>Buy NFTs</NavbarButton>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
