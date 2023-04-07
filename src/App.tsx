import Navbar from "@/components/Navbar";
import HeroButton from "@/components/HeroButton";

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
			<main id="hero" className="w-full items-center px-20">
				<div className="mt-16 md:flex md:items-center">
					<div className="w-[50%] items-center">
						<h1 className="text-5xl md:text-7xl font-bold">
							Discover
							<br /> And Collect
							<br /> Rare NFTs
						</h1>
						<p className="my-10">
							The most secure marketplace for buying <br />
							and selling unique crypto assets.
						</p>
						<div className="w-full md:flex md:items-center">
							<HeroButton>BUY NFTs</HeroButton>
							<HeroButton outlined>SELL NFTs</HeroButton>
						</div>
					</div>
					<div className="w-[50%] justify-items-end">
						<img
							className="object-contain"
							src="src/assets/img-1.png"
							alt="A PC colorful graphic"
						/>
					</div>
				</div>
			</main>
		</div>
	);
}
