import Image from "next/image"
import { GoodHeader } from "../index"

const BioDisplay = () => {

	const BioLine = (data) => {
		return (
			<div className="flex">
				<h3 className="text-white mr-4">{data.data.year}</h3>
				<p className="text-white">{data.data.text}</p>
			</div>
		)
	}

	return (
		<div className="mt-10">
			<div className="flex items-center">
				<div className="text-left mr-8">
					<h1 className="text-white text-2xl">Gijs Bakker</h1>
					<p className="text-white">Full-Stack programmer</p>
				</div>
				<div>
					<Image src="/pf.jpg" width="100" height="100" className="rounded-full" />
				</div>
			</div>
			<div className="mt-10">
				
				<GoodHeader title='Bio' />
					{
						BioData.map((data) => <BioLine data={data}/>)
					}
			</div>
		</div>
	)
}

const BioData = [
	{
		year: 2001,
		text: "Born"
	}
]

export default BioDisplay;
