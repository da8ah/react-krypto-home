import HeroButton from "@/components/HeroButton";
import Navbar from "@/components/Navbar";

export default function App() {
	return (
		<div id="App" className="w-full h-full items-center text-white">
			<svg
				className="z-[-1] absolute opacity-50 blur-3xl"
				viewBox="-30 100 500 500"
			>
				<defs>
					<radialGradient id="myGradient">
						<stop offset="2%" stopColor="white" />
						<stop offset="20%" stopColor="#7E80D7" />
						<stop offset="30%" stopColor="#01003C" />
					</radialGradient>
				</defs>
				<circle fill="url('#myGradient')" cx={100} cy={10} r={1000} />
			</svg>
			<Navbar />
			<main
				id="hero"
				className="w-full items-center md:px-20 text-center md:text-left"
			>
				<div className="flex flex-col-reverse md:flex-row mt-16 items-center">
					<div className="w-full md:w-[50%] items-center">
						<h1 className="text-3xl md:text-7xl  font-bold">
							Discover
							<br className="hidden md:block" /> And Collect
							<br /> Rare NFTs
						</h1>
						<p className="my-5 md:my-10">
							The most secure marketplace for buying <br />
							and selling unique crypto assets.
						</p>
						<div className="w-full md:flex md:items-center">
							<HeroButton>BUY NFTs</HeroButton>
							<HeroButton outlined>SELL NFTs</HeroButton>
						</div>
					</div>
					<div className="flex w-full md:w-[50%] justify-center">
						<img
							className="object-contain w-[20%] md:w-full"
							src="src/assets/img-1.png"
							alt="A colorful PC graphic"
						/>
					</div>
				</div>
			</main>
		</div>
	);
}
