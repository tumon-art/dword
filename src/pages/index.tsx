import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>dWord</title>
        <meta name="description" content="dWord" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.h1}>
        Hello World!
        <Image src="/vercel.svg" height='64' width='83' alt='img' />
        <Link href='https://www.google.com/'> Google </Link>
      </h1>
    </div>
  )
}

export default Home
