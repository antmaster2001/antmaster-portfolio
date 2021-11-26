import Head from 'next/head'
import { Footer, Nav, HeadPreset} from "../index"

export default function ProjectPageTemplate(data) {
    let pageData = data.data
	return (
		<div className="flex flex-col min-h-screen py-2 container mx-auto">
			<HeadPreset title={pageData.title} contentType="article" ogImg={pageData.headImage}/>
			<main className="min-h-screen">
				<div className='flex flex-col w-full flex-1 '>
					<Nav />
				</div>
				<section className='flex justify-center pt-9 px-3 md:px-20'>
					<article className='flex flex-col items-center mx-auto md:w-6/12'>
						<h1 className='text-3xl text-white mb-4'>{pageData.title}</h1>
						<img src={pageData.headImage} className="rounded w-screen" />
						<p className='text-gray-300'>{pageData.quote}</p>
						<div className='w-full px-1 md:px-0 pt-8'>
							<div className='flex'>
								<p className='text-gray-300 bg-gray-600 rounded inline-block p-0.5 px-2'>Used</p>
								<p className='text-gray-300 ml-2'>
                                {pageData.used.map((data, index) => (index !== pageData.used.length -1 ? data + ", " : data))}</p>
							</div>
							<div className='flex my-3'>
								<div>
									<p className='text-gray-300 bg-gray-600 rounded p-0.5 px-2'>Link(s)</p>
								</div>
								<div>
                                {pageData.links.map(data => (
                                    <div className='flex mb-3'>
										{data.logo.length > 0 ?
                                        <img src={data.logo} className="w-6 h-6 ml-3" />
										: <div className="w-6 h-6 ml-3"></div>}
                                        <a href={data.url}><p className='text-blue-300 hover:text-blue-500 ml-2'>{data.display}</p></a>
                                    </div>
                                    ))}
								</div>
							</div>
							<hr className='text-white my-3' />
							<h3 className='text-white text-lg'>Description</h3>
							<p className='text-gray-400'>{pageData.desc}</p>
							<hr className='text-white my-3' />
                            {
                                pageData.otherImgs.map(data => (
                                    <img src={data} className="w-full my-2" />
                                    ))
                            }
						</div>
					</article>
				</section>
			</main>

			<Footer />
		</div>
	)
}
