const about = {
  id: 'about',
  icon: 'about',
  text: 'About',
  href: '/about',
}
const home = {
  id: 'home',
  icon: 'home',
  text: 'Home',
  href: '/',
}
const contact = {
  id: 'contact',
  icon: 'contact',
  text: 'contact',
  href: '/contact',
}
const projects = {
  id: 'projects',
  icon: 'project',
  text: 'projects',
  href: '/projects',
}
const services = {
  id: 'services',
  icon: 'service',
  text: 'services',
  href: '/services',
}
const mainNavItems = [home, about, contact, projects, services]

const mobileNavItems = [about, home, projects]

const desktopNavItems = [home, about, services, projects]

const socialNavItems = [
  {
    id: 'twitter',
    text: 'twitter',
    icon: 'twitter',
    href: '/',
  },
  {
    id: 'linkedin',
    text: 'linkedin',
    icon: 'linkedin',
    href: '/',
  },
  {
    id: 'email',
    text: 'email',
    icon: 'email',
    href: '/',
  },
  {
    id: 'twitter',
    text: 'twitter',
    icon: 'twitter',
    href: '/',
  },
  {
    id: 'github',
    text: 'github',
    icon: 'github',
    href: '/',
  },
]

export { mainNavItems, mobileNavItems, socialNavItems, desktopNavItems }
