import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

export const contactData = {
  contact: {
    email: {
      display: 'lfernando.r991@gmail.com',
      url: 'mailto:lfernando.r991@gmail.com'
    },
    social: [
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/lfernandor991',
        icon: <FaLinkedin className="inline mr-1" />
      },
      {
        name: 'GitHub',
        url: 'https://github.com/LuizFernando991',
        icon: <FaGithub className="inline mr-1" />
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/lfernando.r991/',
        icon: <FaInstagram className="inline mr-1" />
      }
    ],
    phone: {
      display: '+55 (37) 991701381',
      url: 'tel:+5537991701381'
    }
  }
}
