import { GoodHeader } from "../index"

const MyProfile = () => {
	return (
		<div className="mt-10" id="about">
			<GoodHeader title='My Profile' />
			<p className="text-gray-300 text-justify">Hello! My name is Gijs 20 years old and raised in Noordwijk. Since I was a kid, I always wanted to be a programmer.
				For me it is not only programming, but creating things in general. Seeing people use the things you created is a great feeling.
			</p>
		</div>
	)
}

export default MyProfile;