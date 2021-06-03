import { useRef, useState } from 'react'
import MenuIcon from '../icons/MenuIcon'
import MenuSheet from './MenuSheet'
import NavItem from './NavItem'
import { NavContainer, NavStyles, NavIemStyles } from './styles/NavStyles'

// eslint-disable-next-line react/display-name

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

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(true)

  const toggleMenu = (_e) => {
    setMenuOpen(!menuOpen)
  }
  const constraintsRef = useRef(null)

  return (
    <NavContainer ref={constraintsRef}>
      <MenuSheet menuOpen={menuOpen} setMenuOpen={setMenuOpen}>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
        <p>About</p>
      </MenuSheet>
      <NavStyles>
        {navItems.map((item) => (
          <NavItem item={item} key={item.id} />
        ))}
        <NavIemStyles onClick={toggleMenu}>
          <MenuIcon />
          <span>Menu</span>
        </NavIemStyles>
      </NavStyles>
    </NavContainer>
  )
}
