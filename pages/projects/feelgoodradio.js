import Head from 'next/head'
import {Footer, Nav, BioDisplay, MyProfile, ProjectPageTemplate} from "../../src"

export default function Home() {
	return (
		<ProjectPageTemplate data={data}/>
	)
}

const data = {
	title: "Feel Good Radio App",
	headImage: "/Images/FeelGoodDesign.png",
	ogImage: "FeelGoodDesign.png",
	quote: "The cross platform IOS and Android phone app for feel good radio",
	used: ["React Native", "Expo", "TypeScript"],
	links: [
		{
			url: "https://apps.apple.com/nl/app/feel-good-radio-nieuws-radio/id1586472720?l=en",
			display: "Apple Appstore",
			logo: "/Images/app-store-logo.png"
		},
		{
			url: "https://play.google.com/store/apps/details?id=com.feelgoodradio.app",
			display: "Google Playstore ",
			logo: "/Images/google-play-logo.png"
		},
		{
			url: "https://civ-smarttechnology.nl/lancering-feelgood-radio-app/",
			display: "Promotion civ",
			logo: ""
		},
	],
	desc: "The FeelGoodRadio app is a mobile application launched on IOS and Android.",
	otherImgs: [
		"/Images/Settings_FG.png",
		"/Images/Playlist_FG.png"
	]
}