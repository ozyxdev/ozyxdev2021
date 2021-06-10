import Head from 'next/head'
import DarkToggle from '../components/DarkToggle'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Omar Syx Website</title>
      </Head>

      <main>
        <DarkToggle />
      </main>

      <footer />
    </div>
  )
}
