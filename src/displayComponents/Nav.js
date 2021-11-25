import Image from "next/image"
import { useState } from "react"

export default function Nav() {
	const [hamMenu, sethamMenu] = useState(false);
	return (
		<nav className="flex justify-between pt-5 md:px-20 px-6">
			<a href="/" className="flex">
				<h3 className="text-gray-50 font-bold">GIJS BAKKER</h3>
			</a>
			<div className="hidden md:flex">
				<a href="/#about" className="mx-3">
					<h3 className="text-gray-50 font-bold text-lg"> About</h3>
				</a>
				<a href="/projects" className="mx-3">
					<h3 className="text-gray-50 font-bold text-lg">Projecten</h3>
				</a>
			</div>
			<div onClick={() => sethamMenu((e) => !e)} className="md:hidden block">
				<svg class="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			</div>

			{hamMenu ?
				<div className="z-50 min-h-screen max-h-screen bg-black absolute top-0 min-w-full max-w-max left-0 pt-5 px-6">
					<div className="flex justify-between pt-2 md:hidden" onClick={() => sethamMenu((e) => !e)}>
						<div></div>
						<svg class="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" aria-hidden="true">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</div>
					<div className="">
						<a href="/">
							<p className="text-white mt-5 text-xl">Home</p>
						</a>
						<a href="/#about" onClick={() => sethamMenu(false)}> 
							<p className="text-white mt-5 text-xl">About</p>
						</a>
						<a href="/projects">
							<p className="text-white mt-5 text-xl">Projecten</p>
						</a>
					</div>
				</div> :
				<></>}
		</nav>
	)
}
