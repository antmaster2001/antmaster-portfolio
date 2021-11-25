import { GoodHeader } from "../index"

const MyProfile = () => {
	const Phat = (text) => <span className="text-white-50 mx-1 font-bold">{text.children}</span>

	return (
		<div className="mt-10" id="about">
			<GoodHeader title='My Profile' />
			<p className="text-gray-300 text-justify mb-10">My name is Gijs, I am twenty years old and currently live in Noordwijk. Since I was little I’ve aspired to become a programmer.
				For me, it is not only about programming, but creating things in general. Seeing people use the things you created is a great feeling.
			</p>
			<GoodHeader title='Skills' />
			<p className="text-gray-300">Fluent in
				<Phat>Dutch</Phat>
				and
				<Phat>English.</Phat><br />
				Multiple years of experience with <Phat>Windows</Phat>, <Phat>Linux</Phat> and <Phat>Mac OSX</Phat><br />
				Small Team experience with <Phat>Git Project managing</Phat>, <Phat>Scrum</Phat>, <Phat>Agile</Phat>, <Phat>SMART</Phat>
			</p>
		</div>
	)
}

export default MyProfile;