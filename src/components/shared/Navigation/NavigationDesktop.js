import { desktopNavItems } from '../../../constants/navigation'

function NavigationDesktop() {
  return (
    <div>
      {desktopNavItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </div>
  )
}

export default NavigationDesktop
