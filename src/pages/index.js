import Head from 'next/head'
import DarkToggle from '../components/DarkToggle'
import LinkCTA from '../components/shared/LinkCTA'
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
        <LinkCTA>Get in touch</LinkCTA>
      </main>

      <footer />
    </div>
  )
}
