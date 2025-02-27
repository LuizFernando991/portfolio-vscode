import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Home } from '../components/Home'
import { Projects } from '../components/projects/Projects'
import { Technologies } from '../components/technologies/Technologies'

export const tabsContent = {
  home: { name: 'Home', type: 'file', extension: 'js', component: <Home /> },
  about: { name: 'About', type: 'file', extension: 'js', component: <About /> },
  projects: {
    name: 'Projects',
    type: 'file',
    extension: 'js',
    component: <Projects />
  },
  technologies: {
    name: 'Technologies',
    type: 'file',
    extension: 'js',
    component: <Technologies />
  },
  index: { name: 'index', type: 'file', extension: 'js' },
  contact: {
    name: 'Contact',
    type: 'file',
    extension: 'json',
    component: <Contact />
  }
}
