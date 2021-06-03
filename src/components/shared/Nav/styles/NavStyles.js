import styled from 'styled-components'

const NavContainer = styled.div`
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

const NavStyles = styled.nav`
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

export { NavContainer, NavStyles, NavIemStyles }
