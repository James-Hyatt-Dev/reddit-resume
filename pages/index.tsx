import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reddit Clone | James Hyatt Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Header />
      </main>
      
    </div>
  )
}

export default Home
