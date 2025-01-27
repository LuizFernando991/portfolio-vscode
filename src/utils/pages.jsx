import { Dashboard } from '../pages/Dashboard'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa'
import { BiLogoLinkedinSquare } from 'react-icons/bi'

export const pages = [
  {
    name: 'dashboard',
    component: <Dashboard />,
    explorerComponent: <>explorer component</>,
    icon: HiOutlineDocumentDuplicate
  },
  {
    name: 'linkedin',
    component: <></>,
    icon: BiLogoLinkedinSquare
  },
  {
    name: 'github',
    component: <></>,
    icon: FaGithub
  }
]
