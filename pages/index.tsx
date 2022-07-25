import type { NextPage } from 'next'
import Head from 'next/head'
import PostBox from '../components/PostBox'
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Reddit Clone | James Hyatt Development</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* PostBox */}
      <PostBox />

      <div>
        {/* Feed */}
      </div>
      
    </div>
  )
}

export default Home
