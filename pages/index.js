import Head from 'next/head'
import Hero from '../components/Hero';
import Header from './../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

export default function Home({destinations, countries}) {

  return (
    <div>
      <Head>
        <title>AIRBNB</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v<YOUR_MAPBOX_VERSION>/mapbox-gl.css' rel='stylesheet' />
      </Head>
      <Header/>
      <Hero />

      <main className='p-3 max-w-6xl mx-auto md:px-8 '>
        <Main destinations={destinations} countries={countries} />
      </main>

     <Footer />
    </div>
  )
}


export async function getStaticProps() {
  const res = await fetch('https://links.papareact.com/pyp')
  const destinations = await res.json()

  const resp = await fetch('https://links.papareact.com/zp1')
  const countries = await resp.json()

  return {
    props:{
      destinations,
      countries
    }
  }
}
