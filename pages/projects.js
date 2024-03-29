import Head from 'next/head'
import { Footer, Nav, BioDisplay, MyProfile, HeadPreset} from "../src"

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen py-2 container mx-auto">
			<HeadPreset title="Projects" contentType="website"/>

			<Nav />
			<main className="flex flex-col w-full flex-1 px-20 min-h-screen">
				<div className='flex md:justify-center w-100 mt-10'><div className='md:w-6/12 mb-4'><h1 className='text-lg text-white font-bold'>Projects</h1></div></div>
				<section className='flex justify-center w-100'>
					<article className='grid md:grid-cols-2 md:w-6/12 w-100'>
						{projects.map((data, index) => (
							<a href={data.link}>
								<div className='flex flex-col items-center mb-10 text-center hover:bg-gray-800 md:p-11 rounded' key={index}>
									<img src={data.img} width={600} height={400} className="rounded" />
									<h3 className='text-gray-300 text-lg font-bold'>{data.name}</h3>
									<p className='text-gray-300 mt-2'>{data.desc}</p>
								</div>
							</a>
						))}
					</article>
				</section>
			</main>

			<Footer />
		</div>
	)
}

const projects = [
	{
		name: "Bitvavo Darker",
		img: "/Images/BV_darker.png",
		link: "projects/bitvavo_darker",
		desc: "A dark theme chrome extension for the bitvavo website"
	},
	{
		name: "Feel Good Radio App",
		img: "/Images/FeelGoodDesign.png",
		link: "projects/feelgoodradio",
		desc: "An IOS/ANDROID app deployed in stores"
	},
	{
		name: "Portfolio Website",
		img: "/Images/portfolio_main.png",
		link: "projects/portfolio",
		desc: "The portfolio website you are currently on :)"
	}
]
