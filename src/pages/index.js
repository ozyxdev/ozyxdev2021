import Head from 'next/head'
import DarkToggle from '../components/DarkToggle'
import CardSwipe from '../components/shared/CardSwipe'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Omar Syx Website</title>
      </Head>

      <main>
        <DarkToggle />
        <CardSwipe />
      </main>

      <footer />
    </div>
  )
}
