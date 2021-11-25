export default function Footer() {
	let year = new Date;
	return (
		<footer className=" pt-20 px-6 w-full text-center" >
			<div className="w-full">
				<div className="flex justify-center">
					<div className="md:flex block">
						<div className="md:mr-4 ml-0 mb-5">
							<a href="mailto:gijsbakker@hotmail.nl">
								<h3 className="text-white hover:text-blue-500">gijsbakker@hotmail.nl</h3>
							</a>
						</div>
						<div className="md:mr-4 ml-0 flex mb-5">
							<img src="/Images/LIInBug.png" className="w-6 h-6 mr-3" />
							<a href="https://www.linkedin.com/in/gijs-bakker-2001/">
								<h3 className="text-white hover:text-blue-500">@GijsBakker</h3>
							</a>
						</div>
						<div className="md:mr-4 ml-0 flex align-middle mb-5">
							<img src="/Images/GitHub32px.png" className="w-6 h-6 mr-3" />
							<a href="https://github.com/antmaster2001">
								<h3 className="text-white hover:text-blue-500">@antmaster2001</h3>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full mb-5">
				<p className="text-gray-500">© {year.getFullYear()} antmaster2001. All Rights Reserved.</p>
			</div>
		</footer>
	)
}
