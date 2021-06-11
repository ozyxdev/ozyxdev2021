import { motion } from 'framer-motion'
import styled from 'styled-components'
import { useTheme } from '../../lib/themeState'

const DarkModeSwitchStyles = styled.div`
  padding: 0.5rem;

  svg {
    cursor: pointer;
  }

  input {
    display: none;
  }

  circle {
    fill: var(--color-offBackgroundReverse);
  }

  .outline {
    fill: var(--color-offBackgroundReverse);
  }
`

const lightContainer = {
  dark: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
  light: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
}

const lightItem = {
  dark: { scale: 0 },
  light: { scale: 1 },
}
function DarkModeToggle() {
  const { colorMode, setColorMode } = useTheme()

  if (!colorMode) {
    return null
  }

  return (
    <DarkModeSwitchStyles>
      <label htmlFor="toggle-dark">
        <input
          type="checkbox"
          name="toggle-dark"
          id="toggle-dark"
          checked={colorMode === 'dark'}
          onChange={(e) => {
            setColorMode(e.target.checked ? 'dark' : 'light')
          }}
        />
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="outline"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 15.9071C7 18.4637 8.4077 20.6958 10.5 21.8901V21.9507C10.5 23.858 12.067 25.4042 14 25.4042C15.933 25.4042 17.5 23.858 17.5 21.9507V21.8901C19.5923 20.6958 21 18.4637 21 15.9071C21 12.0924 17.866 9 14 9C10.134 9 7 12.0924 7 15.9071ZM17.5 19.7683C18.5741 18.8198 19.25 17.4413 19.25 15.9071C19.25 13.0461 16.8995 10.7268 14 10.7268C11.1005 10.7268 8.75 13.0461 8.75 15.9071C8.75 17.4413 9.42594 18.8198 10.5 19.7683L12.25 19.7675V21.9508C12.25 22.9044 13.0335 23.6775 14 23.6775C14.9665 23.6775 15.75 22.9044 15.75 21.9507V19.7675L17.5 19.7683Z"
            fill="#1B1245"
          />
          <path
            className="outline"
            d="M12.25 26.2732V26.2677C12.7648 26.5615 13.3625 26.7297 14 26.7297C14.6375 26.7297 15.2352 26.5615 15.75 26.2677V26.2732C15.75 27.2269 14.9665 28 14 28C13.0335 28 12.25 27.2269 12.25 26.2732Z"
            fill="#1B1245"
          />
          <motion.g
            variants={lightContainer}
            initial="dark"
            animate={colorMode === 'dark' ? 'dark' : 'light'}
          >
            <motion.path
              variants={lightItem}
              d="M17.5 19.7683C18.5741 18.8198 19.25 17.4413 19.25 15.9071C19.25 13.0461 16.8995 10.7268 14 10.7268C11.1005 10.7268 8.75 13.0461 8.75 15.9071C8.75 17.4413 9.42594 18.8198 10.5 19.7683L12.25 19.7675V21.9508C12.25 22.9044 13.0335 23.6775 14 23.6775C14.9665 23.6775 15.75 22.9044 15.75 21.9507V19.7675L17.5 19.7683Z"
              fill="#FFEDA3"
            />
            <motion.circle
              variants={lightItem}
              cx="25.5"
              cy="13.5"
              r="1.5"
              fill="#FFEDA3"
            />
            <motion.circle
              variants={lightItem}
              cx="22.5"
              cy="6.5"
              r="2.5"
              fill="#FFEDA3"
            />
            <motion.circle
              variants={lightItem}
              cx="14"
              cy="3"
              r="3"
              fill="#FFEDA3"
            />
            <motion.circle
              variants={lightItem}
              cx="5.5"
              cy="6.5"
              r="2.5"
              fill="#FFEDA3"
            />
            <motion.circle
              variants={lightItem}
              cx="2.5"
              cy="13.5"
              r="1.5"
              fill="#FFEDA3"
            />
          </motion.g>
        </svg>
      </label>
    </DarkModeSwitchStyles>
  )
}

export default DarkModeToggle
