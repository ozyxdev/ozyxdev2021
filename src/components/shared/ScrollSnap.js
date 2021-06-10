import styled from 'styled-components'
import Image from 'next/image'

const ScrollSnapStyles = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;
  overflow-y: auto;
  overscroll-behavior-x: contain;
  scroll-snap-type: x mandatory;
  -ms-overflow-style: none;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  :first-of-type::before {
    content: '';
    width: 0.01rem;
  }

  :last-of-type::after {
    content: '';
    width: 0.01rem;
  }

  .scroll-item {
    background: lightblue;
    scroll-snap-align: center;
    width: calc(100vw - 10rem);
    height: calc(70vw - 10rem);
    object-fit: contain;
    border-radius: 2rem;
    position: relative;
    overflow: hidden;

    :nth-child(1) {
      background: #ffdfe3;
    }
    :nth-child(2) {
      background: #e7e6fd;
    }
    :nth-child(3) {
      background: #d6f6ee;
    }
  }

  .browser {
    position: absolute;
    height: 100%;
    width: 90%;
    left: 5%;
    top: 20%;
  }

  .mobile {
    position: absolute;
    left: -50%;
    top: -100%;
    height: 300%;
    width: 200%;
  }
`

const items = [
  {
    title: 'yoga',
    src: '/img/yoga.png',
    styleClass: 'browser',
  },
  {
    title: 'wikibits',
    src: '/img/wikibits.png',
    styleClass: 'mobile',
  },
  {
    title: 'koddy',
    src: '/img/koddy.png',
    styleClass: 'browser',
  },
]

function ScrollSnap() {
  return (
    <ScrollSnapStyles className="full-width">
      {items.map((item) => (
        <div className="scroll-item">
          <div className={item.styleClass}>
            <Image src={item.src} layout="fill" />
          </div>
        </div>
      ))}
    </ScrollSnapStyles>
  )
}

export default ScrollSnap
