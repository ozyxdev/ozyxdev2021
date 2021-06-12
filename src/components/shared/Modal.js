import { motion } from 'framer-motion'
import { useEffect } from 'react'
import styled from 'styled-components'

const ModalStyles = styled.div`
  left: 0;
  .modal-container {
    z-index: var(--modal-z-index);
    position: fixed;
    bottom: 15rem;
    border-radius: 2rem;
    box-sizing: border-box;
    padding: 2rem;
    margin: auto;
    width: calc(100% - 4rem);
    background: var(--color-modal);
    transform-origin: top right;
  }
`

const ModalBackdropStyles = styled.div`
  position: fixed;
  display: ${(props) => (props.isModalOpen ? 'block' : 'none')};
  /* top: 0;
  left: 0; */
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: var(--color-transparent2);
  z-index: var(--modal-z-index);
`
const modalAnimation = {
  hidden: { y: '-100vh' },
  visible: {
    y: 0,
  },
}
function Modal({ isModalOpen, setModalOpen, children }) {
  return (
    <ModalStyles>
      <ModalBackdropStyles
        isModalOpen={isModalOpen}
        role="button"
        tabIndex="0"
        aria-label="Dismiss modal"
        onClick={() => setModalOpen(!isModalOpen)}
      />
      <motion.div
        className="modal-container"
        initial="hidden"
        animate={isModalOpen ? 'visible' : 'hidden'}
        variants={modalAnimation}
      >
        {children}
      </motion.div>
    </ModalStyles>
  )
}

export default Modal
