import { useTheme } from '../lib/themeState'

export default function DarkToggle() {
  const { colorMode, setColorMode } = useTheme()

  if (!colorMode) {
    return null
  }
  console.log('colorMode', colorMode)

  return (
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
      Dark
    </label>
  )
}
