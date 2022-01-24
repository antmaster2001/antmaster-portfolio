import { GoodHeader } from "../index"

const Technologies = () => {
	return (
		<div className="mt-10">
			<GoodHeader title='Technologies' />
			<p className="text-gray-300 mb-5">These are some technologies I'm experienced in or have a very big interest for:</p>
			<ul className="list-inside list-disc">
				{Tech["Main"].map(data => (
					<li className="text-white">{data}</li>
				))}
			</ul>
			<p className="text-gray-300 mb-5 mt-8">Most used languages:</p>
			<ul className="list-inside list-disc">
				{Tech["Lang"].map(data => (
					<li className="text-white">{data}</li>
				))}
			</ul>
			<p className="text-gray-300 mb-5 mt-8">Other:</p>
			<ul className="list-inside list-disc">
				{Tech["Other"].map(data => (
					<li className="text-white">{data}</li>
				))}
			</ul>
		</div>
	)
}

const Tech = {
	Main: [
		"React",
		"React Native",
		"Electron",
		"Node.JS",
		"Express.JS",
		"GraphQL",
		"MySQL",
		"MongoDB",
		"Web Scraping",
		"Web Extension Programming",
		"Run.db/SmartContracts",
	],
	Lang: [
		"Typescript",
		"Javascript",
		"Python",
	],
	Other: [
		"VIM",
		"Tailwind CSS",
		"Bootstrap",
		"HTML",
		"JSON",
		"PHP",
		"Logo Design",
		"Mobile Design",
		"Web Design",
	]
}

export default Technologies;