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
		"NestJS",
		"Kafka",
		"Express.JS",
		"Node.JS",
		"MySQL",
		"Blockchain Knowledge",
		"Blockchain Payment Integration/Implementation",
		"React",
		"React Native",
		"Electron",
		"GraphQL",
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
		"Mobile Design",
		"Web Design",
	]
}

export default Technologies;