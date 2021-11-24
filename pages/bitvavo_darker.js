import Head from 'next/head'
import { Footer, Nav, BioDisplay, MyProfile } from "../src"

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen py-2 container mx-auto">
			<Head>
				<title>antmaster2001 - Bitvavo</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col w-full flex-1 px-20 min-h-screen">
				<Nav />
				<section className='flex justify-center pt-9'>
					<article className='flex flex-col'>
						<h1 className='text-3xl text-white'>Bitvavo darker</h1>
						<p className=''>A chrome darktheme extension</p>
					</article>
				</section>
			</main>

			<Footer />
		</div>
	)
}
