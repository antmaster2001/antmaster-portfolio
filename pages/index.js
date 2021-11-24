import Head from 'next/head'
import {Footer, Nav, BioDisplay} from "../src"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2 container mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 px-20 min-h-screen">
        <Nav />
        <BioDisplay />
      </main>

      <Footer />
    </div>
  )
}
