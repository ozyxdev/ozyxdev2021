import Head from 'next/head'
import styled from 'styled-components'
import StickyCTA from '../components/shared/StickyCTA'

const FakeContent = styled.div`
  background: var(--color-offBackground);
  width: 100%;
  height: 200px;
  border-radius: 3rem;
  margin: 8rem 0;
`
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Omar Syx Website</title>
      </Head>

      <main>
        <h1>Home</h1>
        <StickyCTA />
        {[1, 2, 3, 4, 5].map((item) => (
          <FakeContent key={item} />
        ))}
      </main>

      <footer />
    </div>
  )
}
