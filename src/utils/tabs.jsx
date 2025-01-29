import { Contact } from '../components/Contact'

export const tabsContent = {
  home: { name: 'Home', type: 'file', extension: 'js' },
  about: { name: 'About', type: 'file', extension: 'js' },
  projects: { name: 'Projects', type: 'file', extension: 'js' },
  technologies: { name: 'Technologies', type: 'file', extension: 'js' },
  index: { name: 'index', type: 'file', extension: 'js' },
  contact: {
    name: 'Contact',
    type: 'file',
    extension: 'json',
    component: <Contact />
  }
}
