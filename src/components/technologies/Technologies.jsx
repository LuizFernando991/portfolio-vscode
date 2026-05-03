import { useRef } from 'react'
import { useBreakpoint } from '../../hooks/useBreakPoint'
import { Header } from '../Header'
import { Section } from '../Section'
import { useTranslation } from 'react-i18next'
import { Minimap } from '../Minimap'
import { MarkdownButton } from '../MarkdownButton'
import { TechnologyItem } from './TecItem'
import { technologyGroups, actuallyStuding } from '../../utils/technologies'
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
    <div className="relative grow max-w-[900px] z-10 pt-2">
      <Header
        headingLevel="1"
        text={t('technologies.title')}
        className="text-xl md:text-2xl text-soft-blue mb-2"
      />

      <Section>
        <Header
          headingLevel="1"
          text={t('technologies.subtitle')}
          className="text-sm text-white-75a mb-4"
        />
        <div className="flex flex-col gap-6">
          {technologyGroups.map((group) => (
            <div key={group.label}>
              <div className="flex items-center gap-3 mb-2">
                <span
                  className={`text-xs font-mono px-2 py-0.5 rounded border ${groupLabelColors[group.color] ?? ''}`}
                >
                  {group.label}
                </span>
                <div className="h-px flex-1 bg-dark-400/60" />
              </div>
              <div className="grid gap-2 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
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
        <div className="flex items-center gap-2 mb-4">
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
        <div className="grid gap-2 grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {actuallyStuding.map((tec) => (
            <TechnologyItem
              Icon={tec.icon}
              name={tec.name}
              key={tec.name}
              color="yellow"
            />
          ))}
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
          className="text-sm text-white-75a"
        />
        <MarkdownButton
          as="a"
          href="https://github.com/LuizFernando991"
          target="_blank"
          rel="noreferrer"
        >
          [GitHub]
        </MarkdownButton>
      </Section>
    </div>
  )

  const renderComponent = component()
  return (
    <div
      ref={containerRef}
      className="px-2 md:pl-10 md:px-0 pb-10 flex w-full justify-between gap-1 overflow-y-auto overflow-hidden font-mono"
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
