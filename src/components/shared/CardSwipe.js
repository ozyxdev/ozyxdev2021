import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion'
import { useState } from 'react'
import styled from 'styled-components'

const CardSwipeContainer = styled.div`
  position: relative;
  max-width: 100%;
`
const CardSwipeItemStyles = styled(motion.div)`
  width: calc(100vw - 6rem);
  height: calc(100vw - 6rem);
  border-radius: 8%;
  padding: 4rem;
  /* grid-row: 1 / span 1; */

  position: relative;
  display: inline-block;
  background: white;
  margin: 2rem 1rem;
  cursor: pointer;
  position: absolute;
  left: 0px;
  top: 0px;
`
const colors = ['#FFBE0B', '#FB5607', '#FF006E', '#8338EC', '#3A86FF']

const CardSwipeItem = ({ card, style, onDragEnd, animate }) => (
  <CardSwipeItemStyles
    className="card"
    drag="x"
    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    onDragEnd={onDragEnd}
    animate={animate}
    style={{ ...style, background: card.background }}
    transition={{ ease: [0.6, 0.05, -0.01, 0.9] }}
    whileTap={{ scale: 0.85 }}
  >
    <p>{card.text}</p>
  </CardSwipeItemStyles>
)

function CardSwipe() {
  const [cards, setCards] = useState([
    { text: 'Up or down', background: colors[0] },
    { text: 'Left or right', background: colors[1] },
    { text: 'Swipe me!', background: colors[2] },
  ])

  const [dragStart, setDragStart] = useState({
    animation: { x: 0 },
  })

  const x = useMotionValue(0)
  const xOffset = 327 // prev 175
  const scale = useTransform(x, [-xOffset, 0, xOffset], [1, 0.5, 1])
  const shadowBlur = useTransform(x, [-xOffset, 0, xOffset], [0, 25, 0])
  const shadowOpacity = useTransform(x, [-xOffset, 0, xOffset], [0, 0.2, 0])
  const boxShadow = useMotionTemplate`0 ${shadowBlur}px 25px -5px rgba(0, 0, 0, ${shadowOpacity})`
  const animateCardSwipe = (animation) => {
    setDragStart({ animation })
    setTimeout(() => {
      setDragStart({ animation: { x: 0 } })
      x.set(0)
      const currentCard = cards.pop()
      console.log('cards', cards)
      console.log('currentCard', currentCard)
      setCards([currentCard, ...cards])
    }, 200)
  }

  const onDragEnd = (info) => {
    if (info.offset.x >= 100) animateCardSwipe({ x: xOffset })
    else if (info.offset.x <= -100) animateCardSwipe({ x: -xOffset })
  }

  const renderCards = () =>
    cards.map((card, index) => {
      if (index === cards.length - 1) {
        return (
          <CardSwipeItem
            card={card}
            key={index}
            style={{ x, zIndex: index }}
            onDragEnd={(e, info) => onDragEnd(info)}
            animate={dragStart.animation}
          />
        )
      }
      return (
        <CardSwipeItem
          card={card}
          key={index}
          style={{
            scale,
            boxShadow,
            zIndex: index,
          }}
        />
      )
    })

  return <CardSwipeContainer>{renderCards()}</CardSwipeContainer>
}

export default CardSwipe
