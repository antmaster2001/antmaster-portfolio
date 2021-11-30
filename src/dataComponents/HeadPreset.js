import Head from 'next/head'
import { useRouter } from 'next/router' 
export default function ProjectPageTemplate(data) {
	const router = useRouter()
	return (
		<Head>
			<title>antmaster2001 - {data.title}</title>
			<link rel="icon" href="/favicon.ico" />
			<meta name="description" content="The antmaster2001 portfolio and CV website. A display of projects and skills!" />
			<meta property="og:title" content={"antmaster2001 - " + data.title} />
			<meta property="og:url" content={"https://www.antmaster2001.nl/" + router.pathname} />
			<meta property="og:site_name" content="antmaster2001.nl" />
			<meta property="og:description" content="The antmaster2001 portfolio and CV website. A display of projects and skills!" />
			<meta property="og:image" content={"https://www.antmaster2001.nl/Images/" + data.ogImg} />
			<meta property="og:type" content={data.contentType} />
			<meta property="og:locale" content="en_US" />
			<meta name="theme-color" content="#111111"/>
			<meta name="google-site-verification" content="THGgfVCa6v_axA9eFciniwfEXT-UGbCLS1dPkCOEAM8" />
		</Head>
	)
}