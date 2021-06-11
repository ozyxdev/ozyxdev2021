import { AnimateSharedLayout, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { desktopNavItems } from '../../../constants/navigation'
import DarkModeToggle from '../DarkModeToggle'
import Logo from '../Logo'

const NavigationDesktopStyles = styled.div`
  // hide for mobile and tablet
  display: none;

  // show on tablet up
  @media (min-width: 768px) {
    display: block;
  }

  background: var(--color-navigation);
  .container {
    max-width: var(--max-width);
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    padding: 2.5rem 2rem;
    align-items: center;
    grid-gap: 2rem;
  }

  .logo {
    display: flex;
    margin-right: 2rem;
    justify-content: center;
  }

  nav {
    max-width: var(--max-width);
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
    padding: 1rem 2rem;
    position: relative;
  }

  a {
    text-decoration: none;
    color: inherit;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 2.1rem;
  }

  .contact-cta {
    margin-right: 3rem;
  }

  .underline {
    position: absolute;
    top: 90%;
    left: 5%;
    width: 90%;
    height: 4px;
    border-radius: 15px;
    background: var(--color-primary);
    opacity: 0.85;
  }
`

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 30,
}
const NavigationItemDesktop = ({ item, onClick, selected }) => (
  <motion.li onClick={onClick} animate={{ opacity: selected ? 1 : 0.7 }}>
    <Link href={item.href}>{item.text}</Link>
    {selected && (
      <motion.div
        className="underline"
        layoutId="underline"
        transition={spring}
      />
    )}
  </motion.li>
)

function NavigationDesktop() {
  const router = useRouter()
  const [selected, setSelected] = useState(0)
  useEffect(() => {
    router.events.on('routeChangeComplete', (url) => {
      const index = desktopNavItems.findIndex((item) => item.href === url)
      setSelected(index)
    })
  })

  return (
    <NavigationDesktopStyles>
      <div className="container">
        <Link href="/">
          <a className="logo">
            <Logo />
          </a>
        </Link>
        <nav>
          <ul>
            <AnimateSharedLayout>
              {desktopNavItems.map((item, i) => (
                <NavigationItemDesktop
                  key={item.id}
                  item={item}
                  selected={selected === i}
                />
              ))}
            </AnimateSharedLayout>
          </ul>
        </nav>
        <Link href="/contact">
          <a className="contact-cta text-gradient">Hire me today!</a>
        </Link>
        <DarkModeToggle />
      </div>
    </NavigationDesktopStyles>
  )
}

export default NavigationDesktop
