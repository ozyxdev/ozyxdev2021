import styled from 'styled-components'

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

export default MenuSheetItemStyles
