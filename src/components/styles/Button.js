import styled from 'styled-components'

const Button = styled.button`
  color: inherit;
  font-size: 2.2rem;
  padding: 1.5rem 2.5rem;
  outline: 0;
  border: none;
  border-radius: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: scale 200ms ease-in-out;

  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto;
  grid-gap: 1rem;
  align-items: center;

  :hover {
    scale: 1.1;
  }
`

const ButtonPrimary = styled(Button)`
  background: var(--color-primary);
  color: var(--color-offBackground);

  svg {
    fill: var(--color-offBackground);
  }
`

export { Button, ButtonPrimary }
