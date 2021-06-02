import { motion } from 'framer-motion'
import Link from 'next/link'
import { forwardRef, useState } from 'react'
import styled from 'styled-components'
import AboutIcon from './icons/AboutIcon'
import HomeIcon from './icons/HomeIcon'
import MenuIcon from './icons/MenuIcon'
import ProjectIcon from './icons/ProjectIcon'

const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: white;
  border-top: 1px solid #f9fafe;

  .menu-sheet-backdrop {
    background-color: rgba(0, 0, 0, 0.05);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    display: ${(props) => (props.menuOpen ? 'block' : 'none')};
  }
`

const NavigationStyles = styled.nav`
  max-width: var(--max-width);
  background: white;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
`

const NavIemStyles = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    text-decoration: none;
  }

  svg {
    fill: #212d40;
    height: 2rem;
  }

  span {
    color: #212d40;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`

// eslint-disable-next-line react/display-name
const NavItem = ({ item }) => (
  <Link href="/">
    <NavIemStyles key={item.id}>
      {item.id === 'home' && <HomeIcon />}
      {item.id === 'about' && <AboutIcon />}
      {item.id === 'projects' && <ProjectIcon />}
      {item.id === 'menu' && <MenuIcon />}
      <span>{item.id}</span>
    </NavIemStyles>
  </Link>
)

const navItems = [
  {
    id: 'home',
    path: '/',
  },
  {
    id: 'about',
    path: '/',
  },
  {
    id: 'projects',
    path: '/',
  },
]

const MenuSheet = styled(motion.div)`
  top: -3rem;
  left: 1rem;
  right: 1rem;
  border-radius: 2rem;
  background: #e2eafc;
  padding: 0.5rem 2rem;
  z-index: -1;
  position: absolute;

  ::after {
    content: '';
    background: #abc4ff;
    width: 8rem;
    height: 0.5rem;
    border-radius: 2px;
    /* display: block; */
    position: absolute;
    top: 8px;
    left: calc(50vw - 4rem);
  }

  .menu-sheet-container {
    width: 100%;
  }
`

const menuSheetVariants = {
  open: { y: '-80%' },
  close: { y: 0 },
}

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = (e) => {
    setMenuOpen(!menuOpen)
  }
  return (
    <NavigationContainer menuOpen={menuOpen}>
      <div
        role="button"
        tabIndex={0}
        aria-label="Close menu"
        className="menu-sheet-backdrop"
        onClick={toggleMenu}
      />
      <MenuSheet
        initial="close"
        animate={menuOpen ? 'open' : 'close'}
        variants={menuSheetVariants}
        onClick={toggleMenu}
      >
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
      </MenuSheet>
      <NavigationStyles>
        {navItems.map((item) => (
          <NavItem item={item} key={item.id} />
        ))}
        <NavIemStyles onClick={toggleMenu}>
          <MenuIcon />
          <span>Menu</span>
        </NavIemStyles>
      </NavigationStyles>
    </NavigationContainer>
  )
}
