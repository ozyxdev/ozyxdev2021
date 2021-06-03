import Link from 'next/link'
import Icon from '../Icon'

import { NavIemStyles } from './styles/NavStyles'

const NavItem = ({ item }) => (
  <Link href="/">
    <NavIemStyles key={item.id}>
      <Icon id={item.icon} />
      <span>{item.id}</span>
    </NavIemStyles>
  </Link>
)
export default NavItem
