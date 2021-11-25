import Head from 'next/head'
import {Footer, Nav, BioDisplay, MyProfile, ProjectPageTemplate} from "../src"

export default function Home() {
	return (
		<ProjectPageTemplate data={data}/>
	)
}

const data = {
	title: "Feel Good Radio App",
	headImage: "/Images/BG_Darker_Big.jpg",
	quote: "The cross platform IOS and Android phone app for feel good radio",
	used: ["React Native", "Expo", "TypeScript"],
	links: [
		{
			url: "",
			display: "Soon In store",
			logo: "/Images/app-store-logo.png"
		},
		{
			url: "",
			display: "Soon In store",
			logo: "/Images/google-play-logo.png"
		},
		{
			url: "https://civ-smarttechnology.nl/lancering-feelgood-radio-app/",
			display: "Promotion civ",
			logo: ""
		},
	],
	desc: "Bitvavo Darker is a Chrome extension that turns the whole UI into a darktheme.",
	otherImgs: [
		"https://github.com/antmaster2001/Bitvavo-Darker/raw/main/img/Screenshot_102.png",
		"https://lh3.googleusercontent.com/db_dFUcIHXTp4ISoY9dF-qhpCVPyW69ZLP3cuq5Tb_FgZT4TXMcKDfzE2_Ye3eSuxMXNEizWNI-WNNM5dUWqmd4wNA=w640-h400-e365-rj-sc0x00ffffff"
	]
}