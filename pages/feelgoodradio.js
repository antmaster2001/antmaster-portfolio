import Head from 'next/head'
import {Footer, Nav, BioDisplay, MyProfile, ProjectPageTemplate} from "../src"

export default function Home() {
	return (
		<ProjectPageTemplate data={data}/>
	)
}

const data = {
	title: "Feel Good Radio App",
	headImage: "/Images/FeelGoodDesign.png",
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
	desc: "The FeelGoodRadio app is a mobile application launched on IOS and Android.",
	otherImgs: [
		"/Images/Settings_FG.png",
		"/Images/Playlist_FG.png"
	]
}