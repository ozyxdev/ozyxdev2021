import Link from 'next/link'
import Icon from '../Icon'

import { NavigationItemMobileStyles } from './styles/NavigationMobileStyles'

const NavigationItemMobile = ({ item }) => (
  <Link href={item.href}>
    <NavigationItemMobileStyles key={item.id}>
      <Icon id={item.icon} />
      <span>{item.id}</span>
    </NavigationItemMobileStyles>
  </Link>
)
export default NavigationItemMobile
