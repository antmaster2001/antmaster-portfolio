export default function Footer() {
	return (
		<footer className=" pt-20 px-6 w-full text-center justify-center" >
			<div className="w-full">
				<div className="w-full md:flex block">
					<div className="md:mr-4 ml-0">
						<p className="text-white mt-4">Email: </p>
						<a href="mailto:gijsbakker@hotmail.nl">
							<h3 className="text-white hover:text-blue-500">gijsbakker@hotmail.nl</h3>
						</a>
					</div>
					<div className="md:mr-4 ml-0">
						<p className="text-white mt-4">LinkedIn: </p>
						<a href="https://www.linkedin.com/in/gijs-bakker-2001/">
							<h3 className="text-white hover:text-blue-500">@GijsBakker</h3>
						</a>
					</div>
					<div className="md:mr-4 ml-0">
						<p className="text-white mt-4">GitHub: </p>
						<a href="https://github.com/antmaster2001">
							<h3 className="text-white hover:text-blue-500">@antmaster2001</h3>
						</a>
					</div>

				</div>
			</div>
			<div className="w-full my-5">
				<p className="text-gray-500">© 2021 antmaster2001. All Rights Reserved.</p>
			</div>
		</footer>
	)
}
