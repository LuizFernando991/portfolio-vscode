import { useRef } from 'react'
import { Minimap } from './Minimap'
import { contactData } from '../utils/contact'

function Item({ name, url, display }) {
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
  const containerRef = useRef(null)
  const component = (animate = false) => (
    <div className="font-mono text-[10px] md:text-base text-gray-100 w-full h-full">
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
        {animate && <span className="animate-blink text-white-75a">|</span>}
      </div>
    </div>
  )
  return (
    <div
      ref={containerRef}
      className="pl-1 pr-10 md:px-0 md:pl-10 pb-10 flex w-full justify-between gap-1 overflow-y-auto overflow-hidden font-mono"
    >
      {component(true)}
      <div className="w-40 xl:w-52 z-10 sticky top-0 hidden lg:block">
        <Minimap of={component()} scrollContainerRef={containerRef} />
      </div>
    </div>
  )
}
