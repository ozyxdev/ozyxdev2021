import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MenuIcon from '../icons/MenuIcon'
import MenuSheet from './MenuSheet'
import NavItem from './NavItem'
import { NavContainer, NavStyles, NavIemStyles } from './styles/NavStyles'
import {
  mobileNavItems,
  mainNavItems,
} from '../../../constants/navigation-constants'
import MenuSheetItemStyles from './styles/MenuSheetStyles'
import Icon from '../Icon'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(true)

  const toggleMenu = (_e) => {
    setMenuOpen(!menuOpen)
  }
  const constraintsRef = useRef(null)

  // close menu on route change
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', () => setMenuOpen(false))
  })

  useEffect(() => {
    setTimeout(() => {
      setMenuOpen(false)
    }, 1000)
  })

  return (
    <NavContainer ref={constraintsRef}>
      <MenuSheet
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        toggleMenu={toggleMenu}
      >
        {mainNavItems.map((item) => (
          <Link href={item.href} key={item.id}>
            <MenuSheetItemStyles item={item}>
              <Icon id={item.icon} fill />
              {item.text}
              <Icon id="chevron-right" />
            </MenuSheetItemStyles>
          </Link>
        ))}
      </MenuSheet>
      <NavStyles>
        {mobileNavItems.map((item) => (
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
