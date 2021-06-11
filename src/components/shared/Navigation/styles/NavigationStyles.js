import styled from 'styled-components'

const NavigationMobileStyles = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  .menu-sheet-backdrop {
    background-color: var(--color-transparent);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    display: ${(props) => (props.menuOpen ? 'block' : 'none')};
  }

  .settings-container {
    display: flex;
    justify-content: flex-end;
    padding: 0 3rem 1rem;
  }
`

const NavigationContainerStyles = styled.nav`
  background: var(--color-navigation);
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  position: relative;
  z-index: var(--nav-z-index);
  box-shadow: var(--nav-drop-shadow);
`

const NavigationItemStyles = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover {
    text-decoration: none;
  }

  svg {
    fill: var(--color-text);
    height: 2rem;
  }

  span {
    color: var(--color-text);
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: 500;
  }
`

export {
  NavigationMobileStyles,
  NavigationContainerStyles,
  NavigationItemStyles,
}
