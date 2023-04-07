import NavbarButton from "@/components/NavbarButton";
import { FC } from "react";

const Navbar: FC = () => {
	return (
		<nav className='bg-transparent w-full items-center pt-10 px-20 shadow md:flex md:items-center md:justify-between'>
			<div className="w-full px-5 pb-5 text-4xl uppercase">Krypto</div>
			<ul className="md:flex md:items-center">
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
