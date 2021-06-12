import { useState } from 'react'
import PenIcon from '../icons/PenIcon'
import StickyCTA from '../StickyCTA'
import Modal from '../Modal'

function Hero() {
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <div>
      <h1>Home</h1>
      <Modal isModalOpen={isModalOpen} setModalOpen={setModalOpen} />
      <StickyCTA>
        <button type="button" onClick={() => setModalOpen(!isModalOpen)}>
          <>
            <span>Get in touch</span>
            <PenIcon fill />
          </>
        </button>
      </StickyCTA>
    </div>
  )
}

export default Hero
