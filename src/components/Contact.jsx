import { FaPhone } from 'react-icons/fa'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const contactData = {
  contact: {
    email: {
      display: 'lfernando.r991@gmail.com',
      url: 'mailto:lfernando.r991@gmail.com',
      icon: null
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
      url: 'tel:+5537991701381',
      icon: <FaPhone className="inline mr-1" />
    }
  }
}

function Item({ name, url, display, icon }) {
  return (
    <div>
      <span className="text-soft-blue">&quot;{name}&quot;</span>: {'{'}
      <div className="pl-2 md:pl-8">
        <div>
          <span className="text-soft-blue">&quot;value&quot;</span>:{' '}
          <a
            href={url}
            className="text-yellow hover:text-blue-300 cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            {icon}
            <span className="text-yellow">&quot;{display}&quot;</span>
          </a>
          ,
        </div>
        <div>
          <span className="text-soft-blue">&quot;url&quot;</span>:{' '}
          <a
            className="text-yellow"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            &quot;{url}&quot;
          </a>
        </div>
      </div>
      {'},'}
    </div>
  )
}

export function Contact() {
  return (
    <div className="font-mono text-xs md:text-base text-gray-100 w-full h-full">
      <div className="text-purple-400">{'{'}</div>

      {/* Contact Section */}
      <div className="pl-4 md:pl-8">
        <span className="text-soft-blue">&quot;contact&quot;</span>: {'{'}
        <div className="pl-2 md:pl-8">
          {/* Email */}
          <Item
            name="email"
            display={contactData.contact.email.display}
            url={contactData.contact.email.url}
          />

          {/* Social Media */}
          <div>
            <span className="text-soft-blue">&quot;social&quot;</span>: [
            <div className="pl-2 md:pl-8">
              {contactData.contact.social.map((social, index) => (
                <div key={social.name}>
                  {'{'}
                  <div className="pl-2 md:pl-8">
                    <div>
                      <span className="text-soft-blue">&quot;name&quot;</span>:{' '}
                      <span className="text-yellow">
                        <span className="text-white">{social.icon}</span>
                        &quot;{social.name}&quot;
                      </span>
                      ,
                    </div>
                    <div>
                      <span className="text-soft-blue">&quot;url&quot;</span>:{' '}
                      <a
                        href={social.url}
                        target="_blank"
                        className="hover:text-blue-300"
                        rel="noreferrer"
                      >
                        <span className="text-yellow">
                          &quot;{social.url}&quot;
                        </span>
                      </a>
                    </div>
                  </div>
                  {'}'}
                  {index < contactData.contact.social.length - 1 ? ',' : ''}
                </div>
              ))}
            </div>
            ],
          </div>

          {/* Phone */}
          <Item
            name="phone"
            display={contactData.contact.phone.display}
            url={contactData.contact.phone.url}
          />
        </div>
        {'}'}
      </div>

      <div className="text-purple-400">
        {'}'}
        <span className="animate-blink text-white-75a">|</span>
      </div>
    </div>
  )
}
