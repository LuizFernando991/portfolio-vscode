import pdfhelperImage from '../assets/images/mackbookiphonepdf.png'
import airbnbImage from '../assets/images/airbnbmackbookiphone.png'
import tiktokImage from '../assets/images/tiktokmackbookiphone.png'

import { FaNode } from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiReact,
  SiPrisma,
  SiTailwindcss,
  SiNestjs,
  SiPostgresql,
  SiGraphql,
  SiMysql,
  SiOpenai
} from 'react-icons/si'

export const projects = [
  {
    image: pdfhelperImage,
    title: 'IA PDFHelper',
    description: 'projects.pdfhelper.description',
    youtubeLink: 'https://www.youtube.com/embed/c52dNCwC7YQ',
    link: 'https://pdfhelper-alpha.vercel.app/',
    tecnologies: [
      SiTypescript,
      SiNextdotjs,
      SiTailwindcss,
      SiPrisma,
      SiMysql,
      SiOpenai
    ]
  },
  {
    image: airbnbImage,
    title: 'Airbnb Clone',
    description: 'projects.airbnb.description',
    youtubeLink: 'https://www.youtube.com/embed/PBqff_U9kr0',
    link: 'https://pdfhelper-alpha.vercel.app/',
    codeLink: 'https://github.com/LuizFernando991/Project_Airbnb',
    tecnologies: [SiTypescript, SiNextdotjs, SiMongodb, SiPrisma, SiTailwindcss]
  },
  {
    image: tiktokImage,
    title: 'TikTok Clone',
    description: 'projects.tiktok.description',
    youtubeLink: 'https://www.youtube.com/embed/4F-WcwPu9sw',
    codeLink: 'https://github.com/LuizFernando991/Project-Tiktok',
    tecnologies: [
      FaNode,
      SiNestjs,
      SiGraphql,
      SiTypescript,
      SiReact,
      SiTailwindcss,
      SiPrisma,
      SiPostgresql
    ]
  }
]
