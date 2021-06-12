import { useState } from 'react'
import styled from 'styled-components'
import PenIcon from '../icons/PenIcon'
import StickyCTA from '../StickyCTA'
import Modal from '../Modal'
import ContactForm from '../ContactForm'

const HeroStyles = styled.div`
  h1 {
    margin-bottom: 1rem;
  }
`

function Hero() {
  const [isModalOpen, setModalOpen] = useState(true)
  return (
    <HeroStyles>
      <h1>Home</h1>

      <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen}>
        <ContactForm setModalOpen={setModalOpen} isModalOpen={isModalOpen} />
      </Modal>
      <StickyCTA>
        <button type="button" onClick={() => setModalOpen(!isModalOpen)}>
          <>
            <span>Get in touch</span>
            <PenIcon fill />
          </>
        </button>
      </StickyCTA>
    </HeroStyles>
  )
}

export default Hero
