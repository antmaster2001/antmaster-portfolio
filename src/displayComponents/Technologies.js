import { GoodHeader } from "../index"

const Technologies = () => {
	return (
		<div className="mt-10">
			<GoodHeader title='Technologies' />
			<p className="text-gray-300 mb-5">These are some technologies I'm experienced in or have a very big interest for:</p>
			<ul className="list-inside list-disc">
				<li className="text-white">React</li>
				<li className="text-white">React Native</li>
				<li className="text-white">Node.JS</li>
				<li className="text-white">Express.JS</li>
				<li className="text-white">GraphQL</li>
				<li className="text-white">MySQL</li>
				<li className="text-white">MongoDB</li>
			</ul>
			<p className="text-gray-300 mb-5 mt-8">Most used languages:</p>
			<ul className="list-inside list-disc">
				<li className="text-white">Typescript</li>
				<li className="text-white">Javascript</li>
				<li className="text-white">Python</li>
			</ul>
		</div>
	)
}

export default Technologies;