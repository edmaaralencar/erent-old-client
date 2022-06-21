import Header from 'components/Header'
import type { NextPage } from 'next'
import Head from 'next/head'
import HomeTemplate from 'templates/Home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Boilerplate</title>
        <meta
          name="description"
          content="Boilerplate generated by Edmar Alencar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HomeTemplate />
    </>
  )
}

export default Home
