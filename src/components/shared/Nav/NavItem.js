import Link from 'next/link'
import AboutIcon from '../icons/AboutIcon'
import HomeIcon from '../icons/HomeIcon'
import MenuIcon from '../icons/MenuIcon'
import ProjectIcon from '../icons/ProjectIcon'
import { NavIemStyles } from './styles/NavStyles'

const NavItem = ({ item }) => (
  <Link href="/">
    <NavIemStyles key={item.id}>
      {item.id === 'home' && <HomeIcon />}
      {item.id === 'about' && <AboutIcon />}
      {item.id === 'projects' && <ProjectIcon />}
      {item.id === 'menu' && <MenuIcon />}
      <span>{item.id}</span>
    </NavIemStyles>
  </Link>
)
export default NavItem
