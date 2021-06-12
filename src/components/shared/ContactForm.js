import useForm from '../../lib/useForm'

function ContactForm() {
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
    name: '',
  })

  async function handleSubmit(e) {
    e.preventDefault()
    console.log(`${e.target.value}`)
    resetForm()
  }

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <h2>Contact</h2>

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
          <input
            type="text"
            name="message"
            autoComplete="message"
            placeholder="Your message"
            value={inputs.message}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Contact</button>
      </fieldset>
    </form>
  )
}

export default ContactForm
