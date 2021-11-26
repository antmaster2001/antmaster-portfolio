import Head from 'next/head'
import { Footer, Nav, ProjectPageTemplate} from "../src"

export default function Bitvavo_darker() {
	return (
		<ProjectPageTemplate data={data}/>
	)
}

const data = {
	title: "Bitvavo Darker",
	headImage: "/Images/BG_Darker_Big.jpg",
	quote: "A chrome darktheme extension",
	used: ["Javascript", "CSS"],
	links: [
		{
			url: "https://github.com/antmaster2001/Bitvavo-Darker",
			display: "antmaster2001/Bitvavo-Darker",
			logo: "/Images/GitHub32px.png"
		},
		{
			url: "https://chrome.google.com/webstore/detail/bitvavo-darker/onmgeopeamjlblpjlkleilnbclfdnkol",
			display: "Install link",
			logo: "/Images/Chrome_Store_icon.png"
		}
	],
	desc: "Bitvavo Darker is a Chrome extension that turns the whole UI into a darktheme.",
	otherImgs: [
		"https://github.com/antmaster2001/Bitvavo-Darker/raw/main/img/Screenshot_102.png",
		"https://lh3.googleusercontent.com/db_dFUcIHXTp4ISoY9dF-qhpCVPyW69ZLP3cuq5Tb_FgZT4TXMcKDfzE2_Ye3eSuxMXNEizWNI-WNNM5dUWqmd4wNA=w640-h400-e365-rj-sc0x00ffffff"
	]
}