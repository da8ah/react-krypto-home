import HeroButton from "@/components/HeroButton";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";

export default function App() {
	return (
		<div id="App" className="w-full h-full items-center text-white">
			<svg
				className="z-[-1] absolute opacity-50 blur-3xl"
				viewBox="-30 100 500 500"
			>
				<defs>
					<radialGradient id="top-gradient">
						<stop offset="2%" stopColor="white" />
						<stop offset="20%" stopColor="#7E80D7" />
						<stop offset="30%" stopColor="#01003C" />
					</radialGradient>
				</defs>
				<circle fill="url('#top-gradient')" cx={100} cy={10} r={1000} />
			</svg>
			<Navbar />
			<svg
				className="z-[-1] absolute opacity-50 blur-3xl"
				viewBox="-500 -200 500 500"
			>
				<defs>
					<radialGradient id="right-gradient">
						<stop offset="2%" stopColor="white" />
						<stop offset="20%" stopColor="#89D1D1" />
						<stop offset="30%" stopColor="#01003C" />
					</radialGradient>
				</defs>
				<circle fill="url('#right-gradient')" cx={50} cy={100} r={1000} />
			</svg>
			<main className="w-full items-center md:px-20 text-center md:text-left">
				<section id="hero" className="w-full my-20 md:my-28 items-center">
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
				</section>
				<section
					id="brands"
					className="hidden md:block w-full my-28 items-center"
				>
					<h2 className="my-5 text-1xl font-bold">FEATURED ON</h2>
					<div className="w-full rounded-md p-5 bg-[#261F64] bg-opacity-20 shadow">
						<ul className="w-full h-full flex items-center px-2 justify-between md:bg-transparent shadow md:shadow-none">
							<li>
								<img
									className="object-contain w-[20%] md:w-full"
									src="src/assets/brand-1.png"
									alt="tech crunch brand"
								/>
							</li>
							<li>
								<img
									className="object-contain w-[20%] md:w-full"
									src="src/assets/brand-2.png"
									alt="fast company brand"
								/>
							</li>
							<li>
								<img
									className="object-contain w-[20%] md:w-full"
									src="src/assets/brand-3.png"
									alt="M.I.T brand"
								/>
							</li>
							<li>
								<img
									className="object-contain w-[20%] md:w-full"
									src="src/assets/brand-4.png"
									alt="forbes brand"
								/>
							</li>
						</ul>
					</div>
				</section>
				<section id="features" className="w-full md:my-28 items-center">
					<div className="flex flex-col md:flex-row mt-16 items-center">
						<div className="flex w-full md:w-[50%] justify-center">
							<img
								className="object-contain w-[20%] md:w-full"
								src="src/assets/img-2.png"
								alt="A colorful PC graphic"
							/>
						</div>
						<div className="w-full md:w-[50%] items-center">
							<h2 className="text-3xl my-5">Analytics</h2>
							<h1 className="text-3xl md:text-5xl font-bold">
								Built-In Analytics
								<br className="hidden md:block" /> To Track Your NFTs
							</h1>
							<p className="my-5 md:my-10">
								Use our built-in analytics dashboard to pull
								<br />
								valuable insights and monitor the value of your
								<br />
								Krypto portfolio over time.
							</p>
							<div className="w-full md:flex md:items-center">
								<Button className="rounded-3xl md:rounded-full mx-2 py-2 px-5 md:p-5 md:w-80 bg-[#7E80D7] text-white hover:bg-[#DAB27A]">
									VIEW OUR PRICING
								</Button>
							</div>
						</div>
					</div>
					<div className="mt-20 md:mt-0 flex flex-col-reverse md:flex-row items-center">
						<div className="w-full md:pl-16 md:w-[50%] items-center">
							<h2 className="text-3xl my-5">Get our App</h2>
							<h1 className="text-3xl md:text-5xl font-bold">
								Browse NFTs From <br className="hidden md:block" /> Your
								Smartphone
							</h1>
							<p className="my-5 md:my-10">
								Our Krypto app is the easiest way to keep track of your{" "}
								<br className="hidden md:block" />
								assets when you’re on the go.
							</p>
							<div className="w-full md:flex md:items-center">
								<Button className="rounded-3xl md:rounded-full mx-2 py-2 px-5 md:p-5 md:w-80 bg-[#7E80D7] text-white hover:bg-[#DAB27A]">
									DOWNLOAD NOW
								</Button>
							</div>
						</div>
						<div className="flex w-full md:w-[50%] justify-center">
							<img
								className="object-contain w-[20%] md:w-full"
								src="src/assets/img-3.png"
								alt="A colorful PC graphic"
							/>
						</div>
					</div>
				</section>
				<section id="testimonials" className="w-full my-28 items-center">
					<h2 className="w-full my-5 text-center tracking-widest text-1xl font-bold">
						TESTIMONIALS
					</h2>
					<h1 className="my-2 md:mb-16 w-full text-center text-3xl md:text-5xl font-bold">
						Read What Others <br />
						Have To Say
					</h1>
					<div className="flex flex-col md:flex-row justify-center">
						<div className="flex flex-col md:w-[30%] mx-1 items-center">
							<img
								className="mix-blend-luminosity rounded-full object-contain mt-5 md:w-[40%]"
								src="src/assets/pfp-1.png"
								alt="A colorful PC graphic"
							/>
							<div className="lg:mt-[-50px] md:mt-[-50px] rounded-lg p-5 md:bg-white md:bg-opacity-[3%]">
								<h3 className="lg:mt-16 md:mt-10 my-1 text-2xl text-center tracking-widest uppercase">
									Olivia Cole
								</h3>
								<p className="px-10 md:px-0 lg:p-7 text-justify">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
									ullamcorper scelerisque mi, in malesuada felis malesuada vel.
								</p>
							</div>
						</div>
						<div className="flex flex-col md:w-[30%] mx-1 items-center">
							<img
								className="mix-blend-luminosity rounded-full object-contain mt-5 md:w-[40%]"
								src="src/assets/pfp-2.png"
								alt="A colorful PC graphic"
							/>
							<div className="lg:mt-[-50px] md:mt-[-50px] rounded-lg p-5 md:bg-white md:bg-opacity-[3%]">
								<h3 className="lg:mt-16 md:mt-10 my-1 text-2xl text-center tracking-widest uppercase">
									Evan White
								</h3>
								<p className="px-10 md:px-0 lg:p-7 text-justify">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
									ullamcorper scelerisque mi, in malesuada felis malesuada vel.
								</p>
							</div>
						</div>
						<div className="flex flex-col md:w-[30%] mx-1 items-center">
							<img
								className="mix-blend-luminosity rounded-full object-contain mt-5 md:w-[40%]"
								src="src/assets/pfp-3.png"
								alt="A colorful PC graphic"
							/>
							<div className="lg:mt-[-50px] md:mt-[-50px] rounded-lg p-5 md:bg-white md:bg-opacity-[3%]">
								<h3 className="lg:mt-16 md:mt-10 my-1 text-2xl truncate text-center tracking-widest uppercase">
									Jessica Page
								</h3>
								<p className="px-10 md:px-0 lg:p-7 text-justify">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
									ullamcorper scelerisque mi, in malesuada felis malesuada vel.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section
					id="call-to-action"
					className="w-full my-28 px-2 md:px-0 items-center lg:px-12"
				>
					<div className="rounded-2xl p-10 w-full text-center bg-gradient-to-r from-[#5B5BF1] to-[#88F8FF]">
						<h2 className="my-5 text-black text-2xl font-bold uppercase">
							Are you ready?
						</h2>
						<h1 className="my-10 text-3xl md:text-5xl font-bold capitalize">
							be a part of the <br className="hidden md:block" />
							next big thing
						</h1>
						<Button className="rounded-3xl md:rounded-full mx-2 py-2 px-5 md:p-5 md:w-80 bg-black text-white hover:bg-[#5B5BF1]">
							GET STARTED
						</Button>
					</div>
				</section>
			</main>
			<footer className="flex flex-col-reverse lg:flex-row justify-center w-full my-40 lg:px-32 md:px-20 text-center md:text-left">
				<h1 className="hidden lg:block lg:w-[10%] text-3xl font-bold">
					KRYPTO
				</h1>
				<ul className="lg:w-[60%] lg:mt-3 md:my-20 flex flex-row justify-around">
					<ul>
						<h2 className="mb-7 font-bold">KRYPTO</h2>
						<li>Home</li>
						<li>About</li>
						<li>Pricing</li>
						<li>Get started</li>
					</ul>
					<ul>
						<h2 className="mb-7 font-bold">MARKET</h2>
						<li>Browse NFTs</li>
						<li>Buy NFTs</li>
						<li>Sell NFTs</li>
					</ul>
					<ul>
						<h2 className="mb-7 font-bold">CONTACT</h2>
						<li>Email</li>
						<li>LinkedIn</li>
						<li>Instagram</li>
						<li>Twitter</li>
					</ul>
				</ul>
				<div className="mb-32 md:mb-10 lg:mb-0 md:mt-3 flex flex-col flex-wrap content-center lg:block lg:w-[30%] lg:pl-10">
					<h2 className="lg:mb-5 font-bold">Join our newsletter</h2>
					<div className="ml-[-10px] md:flex md:flex-row lg:mt-10 items-center">
						<div className="rounded-full bg-white bg-opacity-[3%] w-64 lg:w-72 my-2 py-1.5 px-5">
							<input
								type="email"
								placeholder="Email Address"
								className="bg-transparent w-full md:w-4/5 lg:w-full lg:pr-10 focus:outline-none"
							/>
						</div>
						<Button className="md:ml-[-50px] rounded-1xl md:rounded-full px-5 p-2 bg-[#5B5BF1] text-white hover:bg-black">
							Submit
						</Button>
					</div>
				</div>
			</footer>
			<div className="w-full h-2 bg-gradient-to-r from-[#5B5BF1] to-[#88F8FF]" />
		</div>
	);
}
