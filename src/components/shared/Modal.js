import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import styled from 'styled-components'
import CloseIcon from './icons/CloseIcon'

const ModalStyles = styled.div`
  .modal-container {
    z-index: var(--modal-z-index);
    position: fixed;
    bottom: 15rem;
    border-radius: 2rem;
    box-sizing: border-box;
    padding: 2rem;
    margin: auto 1rem;
    width: calc(100% - 6rem);
    background: var(--color-modal);
    transform-origin: top right;
  }

  .close-cta {
    cursor: pointer;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: conic-gradient(
      transparent 0% 50%,
      var(--color-modal) 50% 75%,
      transparent 75% 100%
    );
    border: 2px solid var(--color-danger);
    position: absolute;
    right: -1.5rem;
    top: -1.5rem;

    svg {
      fill: var(--color-danger);
    }
  }
`

const ModalBackdropStyles = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: var(--color-transparent2);
  z-index: var(--modal-z-index);
`
const modalAnimation = {
  hidden: { x: '-100vh' },
  visible: {
    x: 0,
  },
  exit: { x: '100vh', transition: { delay: 0.3, duration: 0.3 } },
}
const backdropAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
  exit: { opacity: 0 },
}
function Modal({ isModalOpen, setModalOpen, children }) {
  return (
    <ModalStyles>
      <AnimatePresence>
        {isModalOpen && (
          <>
            <ModalBackdropStyles
              key="modal-backdrop"
              role="button"
              tabIndex="0"
              aria-label="Dismiss modal"
              onClick={(e) => {
                e.stopPropagation()
                setModalOpen(!isModalOpen)
              }}
              initial="hidden"
              animate={isModalOpen ? 'visible' : 'hidden'}
              exit="exit"
              variants={backdropAnimation}
            />
            <motion.div
              key="modal"
              className="modal-container"
              initial="hidden"
              animate={isModalOpen ? 'visible' : 'hidden'}
              exit="exit"
              variants={modalAnimation}
            >
              <div
                onClick={() => setModalOpen(!isModalOpen)}
                role="button"
                tabIndex="0"
                className="close-cta"
              >
                <CloseIcon fill />
              </div>
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </ModalStyles>
  )
}

export default Modal
