import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Home } from '../components/Home'

export const tabsContent = {
  home: { name: 'Home', type: 'file', extension: 'js', component: <Home /> },
  about: { name: 'About', type: 'file', extension: 'js', component: <About /> },
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
