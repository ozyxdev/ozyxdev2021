import AboutIcon from './icons/AboutIcon'
import ChevronRight from './icons/ChevronRight'
import ContactIcon from './icons/ContactIcon'
import HomeIcon from './icons/HomeIcon'
import MenuIcon from './icons/MenuIcon'
import ProjectIcon from './icons/ProjectIcon'
import ServiceIcon from './icons/ServiceIcon'

export default function Icon({ id, fill }) {
  return (
    <>
      {id === 'home' && <HomeIcon fill={fill} />}
      {id === 'about' && <AboutIcon fill={fill} />}
      {id === 'menu' && <MenuIcon fill={fill} />}
      {id === 'project' && <ProjectIcon fill={fill} />}
      {id === 'service' && <ServiceIcon fill={fill} />}
      {id === 'contact' && <ContactIcon fill={fill} />}
      {id === 'chevron-right' && <ChevronRight fill={fill} />}
    </>
  )
}
