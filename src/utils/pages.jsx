import { Dashboard } from '../pages/Dashboard'
import { Github } from '../pages/Github'
import { Linkedin } from '../pages/Linkedin'
import { Blog } from '../pages/Blog'
import { PinRepositories } from '../components/sideMenuContents/githubSideContent/PinRepositories'
import { HiOutlineDocumentDuplicate } from 'react-icons/hi2'
import { FaGithub } from 'react-icons/fa'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import { SiRss } from 'react-icons/si'
import { Files } from '../components/sideMenuContents/dashboardSideContent/Files'
import { BlogPosts } from '../components/sideMenuContents/blogSideContent/BlogPosts'

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
  },
  {
    name: 'blog',
    component: <Blog />,
    explorerComponent: <BlogPosts />,
    icon: SiRss
  }
]
