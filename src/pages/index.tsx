import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card/Card'

import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>dWord</title>
        <meta name="description" content="dWord" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div className={styles.container}>
     {/* <Card color='Orange' smallMargin>
        This is Orange
      </Card>

      <Card color="Primary" smallMargin>
        This is Primary
      </Card> */}

     
     <Image src='/const.png' height={300} width={300} 
      className={styles.img} alt='png' />
      <h1> 
        Under Construction
      </h1>
     </div>

    </div>
  )
}

export default Home
