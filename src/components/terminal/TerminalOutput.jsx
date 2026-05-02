import { useTranslation } from 'react-i18next'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'

const PROMPT = 'luiz@portfolio:~$'

function WelcomeOutput() {
  const { t } = useTranslation()
  return (
    <div className="mb-2">
      <p className="text-purple text-xs">
        ╔══════════════════════════════════════╗
      </p>
      <p className="text-purple text-xs">
        ║{'   '}
        <span className="text-pink font-bold">Luiz Fernando&apos;s Portfolio</span>
        {'         '}║
      </p>
      <p className="text-purple text-xs">
        ╚══════════════════════════════════════╝
      </p>
      <p className="text-white-50a text-xs mt-1">
        {t('terminal.welcome', {
          defaultValue: 'Welcome! Type /help to see available commands.'
        })}
      </p>
    </div>
  )
}

function CommandOutput({ text }) {
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="text-green shrink-0">{PROMPT}</span>
      <span className="text-white">{text}</span>
    </div>
  )
}

function HelpOutput({ items }) {
  const { t } = useTranslation()
  return (
    <div className="mt-1 mb-2 text-xs">
      <p className="text-white-75a mb-1">{t('terminal.help.title')}</p>
      <div className="flex flex-col gap-0.5 pl-2">
        {items.map(({ cmd, descKey }) => (
          <div key={cmd} className="flex gap-3">
            <span className="text-yellow w-24 shrink-0">{cmd}</span>
            <span className="text-white-50a">— {t(descKey)}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function WhoamiOutput() {
  const { t } = useTranslation()
  return (
    <div className="mt-1 mb-2 text-xs space-y-0.5">
      <p>
        <span className="text-pink font-bold">Luiz Fernando</span>
        <span className="text-white-50a"> · {t('terminal.whoami.role')}</span>
      </p>
      <p className="text-white-50a">{t('terminal.whoami.location')}</p>
      <p className="text-white-50a">{t('terminal.whoami.passion')}</p>
      <p className="text-soft-blue mt-1">{t('terminal.whoami.quote')}</p>
    </div>
  )
}

function AboutOutput() {
  const { t } = useTranslation()
  return (
    <div className="mt-1 mb-2 text-xs space-y-1">
      <p className="text-white-75a">
        {t('terminal.about.p1', {
          role: <span className="text-pink">{t('terminal.whoami.role')}</span>
        })}
      </p>
      <p className="text-white-75a">{t('terminal.about.p2')}</p>
      <p className="text-white-75a">{t('terminal.about.p3')}</p>
      <p className="text-white-50a text-xs">{t('terminal.about.tip')}</p>
    </div>
  )
}

function SkillsOutput({ technologies, studying }) {
  const { t } = useTranslation()
  return (
    <div className="mt-1 mb-2 text-xs">
      <p className="text-white-75a mb-1">{t('terminal.skills.title')}</p>
      <div className="flex flex-wrap gap-1 pl-2 mb-2">
        {technologies.map(({ name }) => (
          <span
            key={name}
            className="text-soft-blue border border-dark-300 rounded px-1.5 py-0.5"
          >
            {name}
          </span>
        ))}
      </div>
      <p className="text-white-75a mb-1">{t('terminal.skills.studying')}</p>
      <div className="flex flex-wrap gap-1 pl-2">
        {studying.map(({ name }) => (
          <span
            key={name}
            className="text-yellow border border-dark-300 rounded px-1.5 py-0.5"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectsOutput({ items }) {
  const { t } = useTranslation()
  return (
    <div className="mt-1 mb-2 text-xs space-y-2">
      <p className="text-white-75a">{t('terminal.projects.title')}</p>
      {items.map((project, i) => (
        <div key={project.title} className="pl-2">
          <p>
            <span className="text-purple">[{i + 1}]</span>{' '}
            <span className="text-pink font-semibold">{project.title}</span>
          </p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              → {project.link}
            </a>
          )}
          {project.codeLink && (
            <p>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noreferrer"
                className="text-soft-blue hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                ⌥ {project.codeLink}
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

function ContactOutput({ data }) {
  const { t } = useTranslation()
  const socialIcons = { LinkedIn: FaLinkedin, GitHub: FaGithub, Instagram: FaInstagram }

  return (
    <div className="mt-1 mb-2 text-xs space-y-1">
      <p className="text-white-75a">{t('terminal.contact.title')}</p>
      <div className="pl-2 space-y-0.5">
        <div className="flex gap-3">
          <span className="text-yellow w-16 shrink-0">{t('terminal.contact.email')}</span>
          <a
            href={data.email.url}
            className="text-soft-blue hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            {data.email.display}
          </a>
        </div>
        <div className="flex gap-3">
          <span className="text-yellow w-16 shrink-0">{t('terminal.contact.phone')}</span>
          <a
            href={data.phone.url}
            className="text-white-50a hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            {data.phone.display}
          </a>
        </div>
        {data.social.map(({ name, url }) => {
          const Icon = socialIcons[name]
          return (
            <div key={name} className="flex gap-3">
              <span className="text-yellow w-16 shrink-0">{name}</span>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="text-soft-blue hover:underline flex items-center gap-1"
                onClick={(e) => e.stopPropagation()}
              >
                {Icon && <Icon className="inline" />}
                {url.replace('https://', '')}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ErrorOutput({ cmd, errorKey }) {
  const { t } = useTranslation()
  return (
    <p className="text-red text-xs mt-0.5 mb-1">
      {t(errorKey, { cmd, defaultValue: `command not found: ${cmd}` })}
    </p>
  )
}

export function TerminalOutput({ entry }) {
  switch (entry.type) {
    case 'welcome':
      return <WelcomeOutput />
    case 'command':
      return <CommandOutput text={entry.text} />
    case 'help':
      return <HelpOutput items={entry.items} />
    case 'whoami':
      return <WhoamiOutput />
    case 'about':
      return <AboutOutput />
    case 'skills':
      return <SkillsOutput technologies={entry.technologies} studying={entry.studying} />
    case 'projects':
      return <ProjectsOutput items={entry.items} />
    case 'contact':
      return <ContactOutput data={entry.data} />
    case 'error':
      return <ErrorOutput cmd={entry.cmd} errorKey={entry.errorKey} />
    default:
      return null
  }
}
