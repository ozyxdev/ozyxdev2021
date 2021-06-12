import styled from 'styled-components'
import useForm from '../../lib/useForm'
import { ButtonPrimary } from '../styles/Button'
import FormStyles from '../styles/FormStyles'
import ContactIcon from './icons/ContactIcon'

const ContactFormStyles = styled(FormStyles)`
  padding: 1.5rem;
  h3,
  fieldset {
    color: var(--color-offBackgroundReverse);
  }
`

function ContactForm({ setModalOpen }) {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    name: '',
  })

  async function handleSubmit(e) {
    e.preventDefault()
    setModalOpen(false)
    resetForm()
  }

  return (
    <ContactFormStyles method="POST" onSubmit={handleSubmit}>
      <h3>Contact</h3>

      <fieldset>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Your Email Address"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="message">
          Message
          <textarea
            rows="5"
            id="message"
            name="message"
            autoComplete="message"
            placeholder="Your message"
            value={inputs.message}
            onChange={handleChange}
          />
        </label>
        <ButtonPrimary type="submit">
          <span>Send</span>
          <ContactIcon fill />
        </ButtonPrimary>
      </fieldset>
    </ContactFormStyles>
  )
}

export default ContactForm
