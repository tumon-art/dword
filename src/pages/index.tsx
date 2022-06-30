import type { NextPage } from 'next'
import Head from 'next/head'
import Card from '../components/Card/Card'

const Home: NextPage = () => {
  
  return (
    <div>
      <Head>
        <title>dWord</title>
        <meta name="description" content="dWord" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div>
     <Card color='Orange' smallMargin>
        This is Orange
      </Card>

      <Card color="Primary" smallMargin>
        This is Primary
      </Card>
     </div>

    </div>
  )
}

export default Home
