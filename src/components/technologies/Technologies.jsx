import { useRef } from 'react'
import { useBreakpoint } from '../../hooks/useBreakPoint'
import { Header } from '../Header'
import { Section } from '../Section'
import { useTranslation } from 'react-i18next'
import { Minimap } from '../Minimap'
import { MarkdownButton } from '../MarkdownButton'
import { TechnologyItem } from './TecItem'
import {
  technologyGroups,
  actuallyStuding,
  devTools,
  methodologies
} from '../../utils/technologies'
import classNames from 'classnames'

const groupLabelColors = {
  blue: 'text-blue border-blue/30 bg-blue/10',
  green: 'text-green border-green/30 bg-green/10',
  pink: 'text-pink border-pink/30 bg-pink/10',
  yellow: 'text-yellow border-yellow/30 bg-yellow/10',
  purple: 'text-purple border-purple/30 bg-purple/10'
}

export function Technologies() {
  const { t } = useTranslation()
  const containerRef = useRef(null)

  const { isBreakpoint } = useBreakpoint(containerRef)
  const isBiggerThanLgBreakPoint = isBreakpoint('lg')

  const component = () => (
    <div className="relative grow w-full min-w-0 max-w-[900px] z-10 pt-2">
      <Header
        headingLevel="1"
        text={t('technologies.title')}
        className="text-xl md:text-2xl text-soft-blue mb-2"
      />

      <Section>
        <Header
          headingLevel="1"
          text={t('technologies.subtitle')}
          className="text-sm text-white-75a mb-3"
        />
        <div className="w-full min-w-0 border border-dark-400/50 rounded-md overflow-hidden">
          {technologyGroups.map((group, i) => (
            <div
              key={group.label}
              className={i !== 0 ? 'border-t border-dark-400/50' : ''}
            >
              <div
                className={`flex items-center gap-2 px-3 py-1.5 bg-dark-500/60 ${groupLabelColors[group.color] ?? ''}`}
              >
                <span className="text-xs font-mono font-medium">
                  {group.label}
                </span>
                <span className="text-xs font-mono opacity-50">
                  ({group.items.length})
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-1 py-1 [&>*]:min-w-0">
                {group.items.map((tec) => (
                  <TechnologyItem
                    Icon={tec.icon}
                    name={tec.name}
                    key={tec.name}
                    color={group.color}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex items-center gap-2 mb-3">
          <Header
            headingLevel="1"
            text={t('technologies.subtitle-2')}
            className="text-sm text-white-75a"
          />
          <span className="flex items-center gap-1.5 px-2 py-0.5 bg-yellow/10 border border-yellow/30 rounded-full text-yellow text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow animate-pulse inline-block" />
            learning
          </span>
        </div>
        <div className="w-full min-w-0 border border-yellow/20 rounded-md overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-1 py-1 [&>*]:min-w-0">
            {actuallyStuding.map((tec) => (
              <TechnologyItem
                Icon={tec.icon}
                name={tec.name}
                key={tec.name}
                color="yellow"
              />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <Header
          headingLevel="1"
          text={t('technologies.subtitle-3')}
          className="text-sm text-white-75a mb-3"
        />
        <div className="w-full min-w-0 border border-dark-400/50 rounded-md overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-1 py-1 [&>*]:min-w-0">
            {devTools.map((tool) => (
              <TechnologyItem
                Icon={tool.icon}
                name={tool.name}
                key={tool.name}
                color="default"
              />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <Header
          headingLevel="1"
          text={t('technologies.subtitle-4')}
          className="text-sm text-white-75a mb-3"
        />
        <div className="flex flex-wrap gap-2">
          {methodologies.map((label) => (
            <span
              key={label}
              className="text-xs font-mono px-2.5 py-1 rounded border border-dark-400/60 bg-dark-500/40 text-white-50a hover:border-soft-blue/40 hover:text-white-75a hover:bg-soft-blue/5 transition-colors duration-150 cursor-default"
            >
              {label}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <Header
          headingLevel="1"
          text={t('technologies.subtitle-5')}
          className="text-sm text-white-75a mb-3"
        />
        <div className="border border-dark-400/50 rounded-md overflow-hidden">
          <div className="flex items-center gap-1.5 px-3 py-2 bg-dark-500/80 border-b border-dark-400/50">
            <span className="w-2.5 h-2.5 rounded-full bg-pink/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow/60" />
            <span className="w-2.5 h-2.5 rounded-full bg-green/60" />
            <span className="ml-2 text-xs font-mono text-white-30a">
              developer.config.json
            </span>
          </div>
          <pre className="text-xs font-mono leading-relaxed p-4 bg-dark-500/30 overflow-x-auto">
            <code>
              <span className="text-white-50a">{'{'}</span>
              {'\n'}
              {'  '}
              <span className="text-blue">&quot;focus&quot;</span>
              <span className="text-white-50a">: [</span>
              <span className="text-green">&quot;backend&quot;</span>
              <span className="text-white-50a">, </span>
              <span className="text-green">
                &quot;distributed systems&quot;
              </span>
              <span className="text-white-50a">, </span>
              <span className="text-green">&quot;APIs&quot;</span>
              <span className="text-white-50a">],</span>
              {'\n'}
              {'  '}
              <span className="text-blue">&quot;preferredStack&quot;</span>
              <span className="text-white-50a">: [</span>
              <span className="text-green">&quot;TypeScript&quot;</span>
              <span className="text-white-50a">, </span>
              <span className="text-green">&quot;Node.js&quot;</span>
              <span className="text-white-50a">, </span>
              <span className="text-green">&quot;Golang&quot;</span>
              <span className="text-white-50a">],</span>
              {'\n'}
              {'  '}
              <span className="text-blue">&quot;yearsOfExperience&quot;</span>
              <span className="text-white-50a">: </span>
              <span className="text-purple">+3</span>
              <span className="text-white-50a">,</span>
              {'\n'}
              {'  '}
              <span className="text-blue">&quot;openToWork&quot;</span>
              <span className="text-white-50a">: </span>
              <span className="text-yellow">true</span>
              <span className="text-white-50a">,</span>
              {'\n'}
              {'  '}
              <span className="text-blue">&quot;workStyle&quot;</span>
              <span className="text-white-50a">: [</span>
              <span className="text-green">&quot;remote&quot;</span>
              <span className="text-white-50a">, </span>
              <span className="text-green">&quot;async&quot;</span>
              <span className="text-white-50a">, </span>
              <span className="text-green">&quot;collaborative&quot;</span>
              <span className="text-white-50a">],</span>
              {'\n'}
              {'  '}
              <span className="text-blue">&quot;currentlyBuilding&quot;</span>
              <span className="text-white-50a">: </span>
              <span className="text-green">
                &quot;scalable backend systems&quot;
              </span>
              <span className="text-white-50a">,</span>
              {'\n'}
              {'  '}
              <span className="text-blue">&quot;alwaysLearning&quot;</span>
              <span className="text-white-50a">: </span>
              <span className="text-yellow">true</span>
              {'\n'}
              <span className="text-white-50a">{'}'}</span>
            </code>
          </pre>
        </div>
      </Section>

      <Section className="pb-2">
        <Header
          headingLevel="1"
          text="GitHub"
          className="text-xl text-soft-blue"
        />
        <Header
          headingLevel="1"
          text={t('technologies.github')}
          className="text-sm text-white-75a mb-3"
        />
        <a
          href="https://github.com/LuizFernando991"
          target="_blank"
          rel="noreferrer"
          className="group flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 p-4 border border-dark-400/50 rounded-md bg-dark-500/30 hover:border-soft-blue/40 hover:bg-dark-400/30 transition-all duration-150 w-full sm:w-fit"
        >
          <img
            src="https://avatars.githubusercontent.com/LuizFernando991"
            alt="GitHub avatar"
            className="w-12 h-12 rounded-full border border-dark-400/60 group-hover:border-soft-blue/40 transition-colors duration-150"
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-mono text-white-75a group-hover:text-white transition-colors duration-150">
              LuizFernando991
            </span>
            <span className="text-xs font-mono text-white-30a break-all">
              github.com/LuizFernando991
            </span>
          </div>
          <MarkdownButton as="span" className="sm:ml-2">
            [open]
          </MarkdownButton>
        </a>
      </Section>
    </div>
  )

  const renderComponent = component()
  return (
    <div
      ref={containerRef}
      className="px-2 md:pl-10 md:px-0 pb-10 flex w-full justify-between gap-1 overflow-y-auto overflow-x-hidden font-mono"
    >
      {renderComponent}
      <div
        className={classNames('w-52 z-10 sticky top-0 pr-4', {
          block: isBiggerThanLgBreakPoint,
          hidden: !isBiggerThanLgBreakPoint
        })}
      >
        <Minimap of={renderComponent} scrollContainerRef={containerRef} />
      </div>
      {/* background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #6e738d 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-blue/8 blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-72 h-72 rounded-full bg-purple/8 blur-3xl" />
        <div className="absolute top-0 right-1/3 w-64 h-64 rounded-full bg-green/6 blur-3xl" />
        <div className="absolute bottom-1/4 -left-16 w-72 h-72 rounded-full bg-pink/7 blur-3xl" />
        <div className="absolute -bottom-16 right-1/4 w-80 h-80 rounded-full bg-yellow/6 blur-3xl" />
      </div>
    </div>
  )
}
