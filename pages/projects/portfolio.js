import Head from 'next/head'
import {Footer, Nav, BioDisplay, MyProfile, ProjectPageTemplate} from "../../src"

export default function Home() {
	return (
		<ProjectPageTemplate data={data}/>
	)
}

const data = {
	title: "Portfolio Website",
	headImage: "/Images/portfolio_main.png",
	ogImage: "portfolio_main.png",
	quote: "A website displaying my competences in the field of programming.",
	used: ["NextJS", "Vercel", "Javascript", "Tailwind CSS"],
	links: [
		{
			url: "https://www.antmaster2001.nl/",
			display: "Website",
			logo: "/favicon.ico"
		},
		{
			url: "https://github.com/antmaster2001/antmaster-portfolio",
			display: "antmaster2001/antmaster-portfolio(Source Code)",
			logo: "/Images/GitHub32px.png"
		}
	],
	desc: "This is the project you are currently looking at, a website to show the big(ger) projects I'm work on or have worked on. ",
	otherImgs: [
		"/Images/portfolio_projects.png"
	]
}