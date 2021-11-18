import Head from "next/head"
import {Footer, Nav} from "../src"

export default function Links(){

  return (
    <div>
      <Head>
        <title>Links </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <Nav />
        <h1> test </h1>
      </main>
      <Footer />
    </div>
  )

}
