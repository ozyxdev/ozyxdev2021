import { motion } from 'framer-motion'
import styled from 'styled-components'

const MenuSheetStyles = styled(motion.div)`
  top: -3.5rem;
  left: 1rem;
  right: 1rem;
  border-radius: 2rem;
  background: var(--color-sheet);
  padding: 4rem 0 15rem 0;
  position: absolute;
  z-index: var(--nav-sheet-z-index);

  ::after {
    content: '';
    background: var(--color-accent);
    width: 8rem;
    height: 0.5rem;
    border-radius: 2px;
    position: absolute;
    top: 1.5rem;
    left: calc(50vw - 4rem);
  }

  .menu-sheet-container {
    width: 100%;
  }
`

const MenuSheetItemStyles = styled.div`
  padding: 1rem 3rem;
  color: var(--color-text);
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 2rem;
  align-items: center;
  text-transform: capitalize;
  font-weight: 600;
  svg {
    fill: var(--color-accent);
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

export { MenuSheetItemStyles, MenuSheetStyles, MenuSheetBackdrop }
