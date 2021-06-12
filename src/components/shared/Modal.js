import { motion } from 'framer-motion'
import styled from 'styled-components'

const ModalStyles = styled.div`
  /* position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.05);
  display: flex; */

  .modal-container {
    position: fixed;
    top: calc(50% - 10rem);
    border-radius: 3rem 3rem 3rem 3rem;
    box-sizing: border-box;
    padding: 4rem;
    margin: auto;
    width: calc(100% - 4rem);
    height: calc(50% - 4rem);
    background: var(--color-primary);
    transform-origin: top right;
  }
`
const duration = 0.3
const modalAnimation = {
  hidden: { y: '-100vh' },
  visible: {
    y: 0,
  },
}
function Modal({ isModalOpen }) {
  console.log('isModalOpen', isModalOpen)
  return (
    <ModalStyles>
      <motion.div
        className="modal-container"
        initial="hidden"
        animate={isModalOpen ? 'visible' : 'hidden'}
        variants={modalAnimation}
      >
        <h1>Modal</h1>
      </motion.div>
    </ModalStyles>
  )
}

export default Modal
