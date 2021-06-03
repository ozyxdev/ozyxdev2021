import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const MenuSheetStyles = styled(motion.div)`
  top: -3rem;
  left: 1rem;
  right: 1rem;
  border-radius: 2rem;
  background: #e2eafc;
  padding: 3rem 0 15rem 0;
  z-index: -1;
  position: absolute;

  ::after {
    content: '';
    background: #abc4ff;
    width: 8rem;
    height: 0.5rem;
    border-radius: 2px;
    position: absolute;
    top: 8px;
    left: calc(50vw - 4rem);
  }

  .menu-sheet-container {
    width: 100%;
  }
`

const MenuSheetBackdrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.01);
  z-index: -1;
  display: ${(props) => (props.menuOpen ? 'block' : 'none')};
`

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
      setMenuOpen(true)
      return -menuSheetHeight
    }
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
      <MenuSheetBackdrop
        // role="button"
        // tabIndex={0}
        // aria-label="Close menu"
        // className="menu-sheet-backdrop"
        menuOpen={menuOpen}
        onClick={toggleMenu}
      />
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
