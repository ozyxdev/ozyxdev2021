import Head from 'next/head'
import DarkToggle from '../components/DarkToggle'
import ScrollSnap from '../components/shared/ScrollSnap'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Omar Syx Website</title>
      </Head>

      <main>
        <DarkToggle />
        <ScrollSnap />
      </main>

      <footer />
    </div>
  )
}
