import { Dashboard } from '../pages/Dashboard'
import { Github } from '../pages/Github'
import { PinRepositories } from '../components/sideMenuContents/githubSideContent/PinRepositories'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import { Files } from '../components/sideMenuContents/dashboardSideContent/Files'
import { Linkedin } from '../pages/Linkedin'

export const pages = [
  {
    name: 'dashboard',
    component: <Dashboard />,
    explorerComponent: <Files />,
    icon: HiOutlineDocumentDuplicate
  },
  {
    name: 'linkedin',
    component: <Linkedin />,
    icon: BiLogoLinkedinSquare
  },
  {
    name: 'github',
    component: <Github />,
    explorerComponent: <PinRepositories />,
    icon: FaGithub
  }
]
