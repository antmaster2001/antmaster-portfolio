import Head from 'next/head'
import { Footer, Nav, BioDisplay, MyProfile, UserPfShow, HobbiesDisplay, Technologies} from "../src"

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen py-2 container mx-auto">
			<Head>
				<title>antmaster2001 - Home</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Nav />
			<main className="flex flex-col w-full  min-h-screen">
				<section className='flex justify-center w-100'>
					<article className='md:w-10/12 w-100 pt-10 flex-1'>
						<div className='lg:w-5/12 md:w-6/12 w-10/12 mx-auto'>
							<UserPfShow />
							<MyProfile />
							<BioDisplay />
							<HobbiesDisplay />
							<Technologies />
						</div>
					</article>
				</section>
			</main>

			<Footer />
		</div>
	)
}
