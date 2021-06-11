import { useEffect, useRef, useState } from 'react'
import { MenuSheetStyles, MenuSheetBackdrop } from './styles/MenuSheetStyles'

export default function MenuSheet({
  setMenuOpen,
  toggleMenu,
  menuOpen,
  children,
}) {
  const sheetRef = useRef(null)
  const [dragStart, setDragStart] = useState(0)
  const [menuSheetHeight, setMenuSheetHeight] = useState(0)

  useEffect(() => {
    // 15 * 8 is the padding bottom 15rem
    setMenuSheetHeight(sheetRef.current.clientHeight - 15 * 8)
  }, [menuSheetHeight])

  const modifyTarget = (_target) => {
    const delta = dragStart - sheetRef.current.getBoundingClientRect().top
    console.log('delta', delta)
    if (delta > 40) {
      console.log(`open`)
      setMenuOpen(true)
      return -menuSheetHeight
    }
    console.log(`close`)
    setMenuOpen(false)
    return 0
  }

  const menuSheetVariants = {
    open: { y: -menuSheetHeight },
    close: { y: 0 },
  }
  const transition = {
    min: 0,
    max: -menuSheetHeight,
    timeConstant: 80,
    bounceStiffness: 600,
    bounceDamping: 13,
    velocity: 2,
    modifyTarget,
  }
  return (
    <>
      <MenuSheetBackdrop menuOpen={menuOpen} onClick={toggleMenu} />
      <MenuSheetStyles
        onClick={toggleMenu}
        initial="close"
        animate={menuOpen ? 'open' : 'close'}
        variants={menuSheetVariants}
        drag="y"
        ref={sheetRef}
        dragTransition={transition}
        dragConstraints={{ top: -menuSheetHeight, bottom: 200 }}
        onTapStart={() => {
          setDragStart(sheetRef.current.getBoundingClientRect().top)
        }}
      >
        {children}
      </MenuSheetStyles>
    </>
  )
}
