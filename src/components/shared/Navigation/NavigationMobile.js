import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MenuIcon from '../icons/MenuIcon'
import MenuSheet from './MenuSheet'
import NavigationItemMobile from './NavigationItemMobile'
import {
  NavigationMobileStyles,
  NavigationContainerStyles,
  NavigationItemMobileStyles,
} from './styles/NavigationStyles'
import {
  mobileNavItems,
  mainNavItems,
} from '../../../constants/navigation-constants'
import { MenuSheetItemStyles } from './styles/MenuSheetStyles'
import Icon from '../Icon'
import DarkModeToggle from '../DarkModeToggle'

export default function NavigationMobile() {
  const [menuOpen, setMenuOpen] = useState(true)
  const [loaded, setLoaded] = useState(false)

  const toggleMenu = (_e) => {
    setMenuOpen(!menuOpen)
  }
  const dragConstrainRef = useRef(null)

  // close menu on route change
  const router = useRouter()
  useEffect(() => {
    router.events.on('routeChangeStart', () => setMenuOpen(false))
  })

  useEffect(() => {
    setLoaded(true)
    setTimeout(() => {
      if (!loaded) {
        setMenuOpen(false)
      }
    }, 1000)
  }, [loaded])

  return (
    <NavigationMobileStyles ref={dragConstrainRef}>
      <MenuSheet
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        toggleMenu={toggleMenu}
      >
        <div className="settings-container">
          <DarkModeToggle />
        </div>
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
      <NavigationContainerStyles>
        {mobileNavItems.map((item) => (
          <NavigationItemMobile item={item} key={item.id} />
        ))}
        <NavigationItemMobileStyles onClick={toggleMenu}>
          <MenuIcon />
          <span>Menu</span>
        </NavigationItemMobileStyles>
      </NavigationContainerStyles>
    </NavigationMobileStyles>
  )
}
