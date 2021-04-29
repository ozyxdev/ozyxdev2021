import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from '../constants/colors'

function setColorByTheme() {
  const colors = '🌈'
  const colorModeKey = '🔑'
  const colorModeCssProp = '🚀'

  // see if the user already has a preferred color mode
  const mql = window.matchMedia('(prefers-color-scheme: dark)')
  const prefersDarkModeFromMQ = mql.matches
  const persistedPreference = localStorage.getItem(colorModeKey)

  // set color mode default to light
  let colorMode = 'light'

  const hadUsedToggle = typeof persistedPreference === 'string'

  if (hadUsedToggle) {
    colorMode = persistedPreference
  } else {
    colorMode = prefersDarkModeFromMQ ? 'dark' : 'light'
  }

  const root = document.documentElement

  root.style.setProperty(colorModeCssProp, colorMode)

  // generate css variable from color constant
  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`

    root.style.setProperty(cssVarName, colorByTheme[colorMode])
  })
}

const MagicScriptTag = () => {
  const setColorByThemeFnString = String(setColorByTheme)
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace('🔑', COLOR_MODE_KEY)
    .replace('🚀', INITIAL_COLOR_MODE_CSS_PROP)

  const codeToRunOnClient = `(${setColorByThemeFnString})()`

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set, everything will be default
 * black and white.
 * We can solve for this by injecting a `<style>` tag into the head of the
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */
const FallbackStyles = () => {
  // Create a string holding each CSS variable:
  /*
    `--color-text: black;
    --color-background: white;`
  */

  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) =>
      `${acc}\n--color-${name}: ${colorByTheme.light};`,
    ''
  )

  const wrappedInSelector = `root { ${cssVariableString} }`

  return <style>{wrappedInSelector}</style>
}

export { MagicScriptTag, FallbackStyles }
