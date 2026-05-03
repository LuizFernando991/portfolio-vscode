import { useTranslation } from 'react-i18next'
import { SiGithub } from 'react-icons/si'
import { BiLink } from 'react-icons/bi'
import { VscCircleFilled } from 'react-icons/vsc'

const statusStyles = {
  live: 'text-green border-green/30 bg-green/10',
  'in-progress': 'text-yellow border-yellow/30 bg-yellow/10',
  'open-source': 'text-blue border-blue/30 bg-blue/10'
}

const statusDot = {
  live: 'text-green',
  'in-progress': 'text-yellow animate-pulse',
  'open-source': 'text-blue'
}

export function ProjectItem({
  title,
  descriptionKey,
  highlightsKey,
  stack,
  status,
  link,
  githubLink
}) {
  const { t } = useTranslation()
  const highlights = t(highlightsKey, { returnObjects: true })

  return (
    <article className="border border-dark-400/50 rounded-md overflow-hidden bg-dark-500/20 hover:border-dark-400/80 transition-colors duration-200">
      {/* header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-dark-400/50 bg-dark-500/50">
        <div className="flex items-center gap-3">
          <span className="text-base font-mono font-semibold text-white-75a">
            #{title}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 text-xs font-mono px-2 py-0.5 rounded border ${statusStyles[status] ?? ''}`}
          >
            <VscCircleFilled
              className={`text-[10px] ${statusDot[status] ?? ''}`}
            />
            {t(`projects.status.${status}`)}
          </span>
        </div>
        <div className="flex items-center gap-2">
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 border border-dark-400/60 bg-dark-500/40 text-white-50a rounded hover:border-soft-blue/40 hover:text-white-75a transition-all duration-150"
            >
              <SiGithub className="text-sm" />
              code
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 border border-dark-400/60 bg-dark-500/40 text-white-50a rounded hover:border-soft-blue/40 hover:text-white-75a transition-all duration-150"
            >
              <BiLink className="text-sm" />
              site
            </a>
          )}
        </div>
      </div>

      {/* description */}
      <div className="px-4 pt-4 pb-3">
        <p className="text-sm font-mono text-white-50a leading-relaxed">
          {t(descriptionKey)}
        </p>
      </div>

      {/* highlights */}
      {Array.isArray(highlights) && highlights.length > 0 && (
        <div className="px-4 pb-4">
          <span className="text-xs font-mono text-white-30a block mb-2">
            {'// highlights'}
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
            {highlights.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-xs font-mono text-white-50a"
              >
                <span className="text-soft-blue mt-0.5 shrink-0">›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* stack */}
      <div className="flex flex-wrap items-center gap-3 px-4 py-3 border-t border-dark-400/50 bg-dark-500/30">
        {stack.map(({ icon: Icon, name }) => (
          <span
            key={name}
            className="flex items-center gap-1.5 text-xs font-mono text-white-30a hover:text-white-50a transition-colors duration-150"
          >
            <Icon className="text-sm" />
            {name}
          </span>
        ))}
      </div>
    </article>
  )
}
