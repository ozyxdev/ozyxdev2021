import { createContext, useContext, useEffect, useState } from 'react'
import { COLORS, INITIAL_COLOR_MODE_CSS_PROP } from '../constants/colors'

// Cart State Hook and Provider using context
const LocalStateContext = createContext()
const LocalStateProvider = LocalStateContext.Provider

// eslint-disable-next-line react/prop-types
function ThemeProvider({ children }) {
  const [colorMode, rawSetColorMode] = useState(undefined)

  // useEffect to run on client side
  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    )

    rawSetColorMode(initialColorValue)
  }, [])

  function setColorMode(newValue) {
    const root = window.document.documentElement
    // 1. Update React color-mode state
    rawSetColorMode(newValue)
    // 2. Update localStorage
    localStorage.setItem('color-mode', newValue)
    // 3. Update each color
    Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color-${name}`

      root.style.setProperty(cssVarName, colorByTheme[newValue])
    })
  }
  return (
    <LocalStateProvider value={{ colorMode, setColorMode }}>
      {children}
    </LocalStateProvider>
  )
}

// make custom hook for accessing the cart local state
function useTheme() {
  // we use a consumer here to access the local state
  const all = useContext(LocalStateContext)
  return all
}

export { ThemeProvider, useTheme }
