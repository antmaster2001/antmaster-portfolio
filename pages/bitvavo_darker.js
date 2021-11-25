import Head from 'next/head'
import { Footer, Nav, BioDisplay, MyProfile } from "../src"

export default function Bitvavo_darker() {
	return (
		<div className="flex flex-col min-h-screen py-2 container mx-auto">
			<Head>
				<title>antmaster2001 - Bitvavo</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="min-h-screen">
				<div className='flex flex-col w-full flex-1 '>
					<Nav />
				</div>
				<section className='flex justify-center pt-9 px-3 md:px-20'>
					<article className='flex flex-col items-center mx-auto md:w-6/12'>
						<h1 className='text-3xl text-white mb-4'>Bitvavo darker</h1>
						<img src="/Images/BG_Darker_Big.jpg" className="rounded w-screen" />
						<p className='text-gray-300'>A chrome darktheme extension</p>
						<div className='w-full px-1 md:px-0 pt-8'>
							<div className='flex'>
								<p className='text-gray-300 bg-gray-600 rounded inline-block p-0.5 px-2'>Used</p>
								<p className='text-gray-300 ml-2'>Javascript, CSS</p>
							</div>
							<div className='flex my-3'>
								<p className='text-gray-300 bg-gray-600 rounded inline-block p-0.5 px-2'>Link(s)</p>
								<div className='flex justify-center'>
									<img src="/Images/GitHub32px.png" className="w-6 h-6 ml-3" />
									<a href="https://github.com/antmaster2001/Bitvavo-Darker"><p className='text-blue-300 ml-2'>antmaster2001/Bitvavo-Darker</p></a>
								</div>
							</div>
							<hr className='text-white my-3' />
							<h3 className='text-white text-lg'>Description</h3>
							<p className='text-gray-400'>Bitvavo Darker is a Chrome extension that turns the whole UI into a darktheme. </p>
							<hr className='text-white my-3' />
							<img src="https://github.com/antmaster2001/Bitvavo-Darker/raw/main/img/Screenshot_102.png" className="w-full my-2" />
							<img src="https://lh3.googleusercontent.com/db_dFUcIHXTp4ISoY9dF-qhpCVPyW69ZLP3cuq5Tb_FgZT4TXMcKDfzE2_Ye3eSuxMXNEizWNI-WNNM5dUWqmd4wNA=w640-h400-e365-rj-sc0x00ffffff" className="w-full" />
						</div>
					</article>
				</section>
			</main>

			<Footer />
		</div>
	)
}
