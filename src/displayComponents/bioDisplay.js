import { GoodHeader } from "../index"

const BioDisplay = () => {

	const BioLine = (data) => {
		return (
			<div>
				<div className="flex">
					<h3 className="text-white mr-4 font-bold">{data.data.year}</h3>
					<p className="text-gray-300">{data.data.text}</p>

				</div>
				{data.data.sub ? data.data.sub.map((dataSub, index) => (
					<div className="ml-6 flex">
						<h3 className="text-white mr-4 font-bold">{dataSub.year}</h3>
						<p className="text-gray-300">{dataSub.text}</p>
					</div>
				)) : <></>}
			</div>
		)
	}

	return (
		<div className="mt-10">
			<div className="mt-10">
				<GoodHeader title='Bio' />
				{
					BioData.map((data) => <BioLine data={data} />)
				}
			</div>
		</div>
	)
}

const BioData = [
	{
		year: 2001,
		text: "Born Leiderdorp, Netherlands"
	},
	{
		year: 2013,
		text: " Leeuwenhorst, Noordwijkerhout - VMBO-t"
	},
	{
		year: 2018,
		text: "MBO Rijnland, Applicatie- en mediaontwikkeling",
		sub: [
			{
				year: 2020,
				text: "Internship at a local tech store. I redesigned logos and created a mexican food ordering website with vanilla PHP."
			},
			{
				year: 2021,
				text: "School internship, creating an app for a local news/radiostation. All programmed in React Native."
			}
		]
	},
	{
		year: "2022 - Present",
		text: "Bitvavo, Amsterdam - Fulltime Software Engineer"
	},
]

export default BioDisplay;