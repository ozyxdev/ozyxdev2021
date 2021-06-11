import Link from 'next/link'
import Icon from '../Icon'

import { NavigationItemStyles } from './styles/NavigationStyles'

const NavigationItem = ({ item }) => (
  <Link href={item.href}>
    <NavigationItemStyles key={item.id}>
      <Icon id={item.icon} />
      <span>{item.id}</span>
    </NavigationItemStyles>
  </Link>
)
export default NavigationItem
