import Image from "next/image"

const UserPfShow = () => {

	return (
		<div className="flex justify-between">
			<div className="text-left mr-8">
				<h1 className="text-white text-2xl">Gijs Bakker</h1>
				<p className="text-white">Full-Stack programmer</p>
				<p className="text-white mt-2 font-bold underline">AKA: <span className="line-through ">antmaster2001</span></p>
			</div>
			<div>
				<Image src="https://noop/pf.jpg" width="100" height="100" className="rounded-full" />
			</div>
		</div>
	)
}

export default UserPfShow;