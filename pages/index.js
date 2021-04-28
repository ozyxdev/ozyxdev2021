import Head from 'next/head'
import DarkToggle from '../components/DarkToggle'
import Title from '../components/styles/Title'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Omar Syx Website</title>
      </Head>

      <main>
        <DarkToggle />
        <Title>Omar Syx</Title>
      </main>

      <footer />
    </div>
  )
}
