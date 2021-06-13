import styled from 'styled-components'

const FormStyles = styled.form`
  width: 100%;
  margin: auto;

  label {
    display: block;
    margin-bottom: 1.5rem;
  }

  input,
  textarea {
    width: 100%;
    margin-top: 0.5rem;
    padding: 1rem;
    border-radius: 1rem;
    transition: all ease-in-out 200ms;
    border: 1px solid transparent;

    &:focus,
    &:focus-visible,
    &:active {
      border: 1px solid var(--color-primary);
      outline: 0;
      box-shadow: 0 0 0 4px var(--color-accent);
    }
  }

  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
  }
`

export default FormStyles
