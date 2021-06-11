import styled from 'styled-components'
import ArrowCTAIcon from './ArrowCTAIcon'

const LinkCTAStyles = styled.a`
  display: inline-block;
  margin-top: 2rem;
  transition: background-position 0.5s ease-out, color 0.5s ease-out;
  text-decoration: none;
  color: #9758fd;
  background-color: #9758fd;
  background-image: linear-gradient(90deg, #9758fd, #4c66f8, #9758fd);
  background-position: 100% 0%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  background-size: 200% 100%;
  font-size: 2.5rem;
  font-weight: bold;
  -webkit-text-fill-color: transparent;

  :hover {
    color: #4c66f8;
    background-position: 0% 0%;

    svg {
      transform: translateX(5px);
    }
  }

  svg {
    transition: 0.2s transform ease-in-out;
    fill: currentColor;
    margin-left: 1.5rem;
  }
`
export default function LinkCTA({ href, arrow, children }) {
  return (
    <LinkCTAStyles href={href}>
      {children}
      {arrow && <ArrowCTAIcon />}
      <span />
    </LinkCTAStyles>
  )
}
