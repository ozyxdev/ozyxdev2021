import Link from 'next/link'
import { useRef } from 'react'
import styled from 'styled-components'
import useOnScreen from '../../lib/isVisible'
import PenIcon from './icons/PenIcon'

const StickyCTAStyles = styled.div`
  height: 6rem;
  position: relative;
  pointer-events: none;

  .sticky-cta-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }

  button {
    pointer-events: all;
    box-sizing: border-box;
    background-color: var(--color-primary);
    border: none;
    border-radius: 1rem;
    padding: 1.5rem 2.5rem;
    display: grid;
    grid-gap: 1.5rem;
    grid-template-columns: auto auto;
    align-items: center;
    color: var(--color-offBackground);
    cursor: pointer;
    font-weight: 600;
    transition: all linear 200ms;

    position: absolute;
  }

  svg {
    fill: var(--color-offBackground);
  }

  [data-is-visible='true'] {
    top: 0;
    left: 0;
    visibility: visible;
  }

  [data-is-visible='false'] {
    grid-gap: 0;
    padding: 1.5rem;
    position: fixed;
    left: calc(100% - 8rem);
    top: 2rem;
    span {
      display: none;
      visibility: hidden;
    }
  }
`

function StickyCTA() {
  const ref = useRef()
  const isVisible = useOnScreen(ref)
  console.log('isVisible', isVisible)
  return (
    <StickyCTAStyles>
      <div className="sticky-cta-wrapper">
        <div ref={ref} className="ref" />
        <Link href="/contact">
          <button type="button" data-is-visible={isVisible}>
            <span>Get in touch</span>
            <PenIcon fill />
          </button>
        </Link>
      </div>
    </StickyCTAStyles>
  )
}

export default StickyCTA
