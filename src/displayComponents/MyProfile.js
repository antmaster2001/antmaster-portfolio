import { GoodHeader } from "../index"

const MyProfile = () => {
	const Phat = (text) => <span className="text-white-50 mx-1 font-bold">{text.children}</span>

	return (
		<div className="mt-10" id="about">
			<GoodHeader title='My Profile' />
			<p className="text-gray-300 text-justify mb-10">My name is Gijs, I am twenty one years old and currently live in Noordwijk. Since I was little I’ve aspired to become a programmer.
				For me, it is not only about programming, but creating things in general. Seeing people use the things you created is a great feeling.
			</p>
			<GoodHeader title='Skills' />
			<ul className="list-inside list-disc rounded pl-3">
				<li className="text-gray-300">Fluent in <Phat>Dutch</Phat> and <Phat>English.</Phat></li>
				<li className="text-gray-300">Multiple years of experience with <Phat>Windows</Phat>, <Phat>Linux</Phat> and <Phat>Mac OSX</Phat></li>
				<li className="text-gray-300">Small Team experience with <Phat>Git Project managing, Scrum, Agile, SMART</Phat> and <Phat>Ticket/Bug handling</Phat></li>
			</ul>
		</div>
	)
}

export default MyProfile;