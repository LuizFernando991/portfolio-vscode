import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useBreakpoint } from '../../hooks/useBreakPoint'
import { Minimap } from '../Minimap'
import { Header } from '../Header'
import { Section } from '../Section'
import { projects } from '../../utils/projects'
import { ProjectItem } from './ProjectItem'
import classNames from 'classnames'

export function Projects() {
  const { t } = useTranslation()
  const containerRef = useRef(null)
  const { isBreakpoint } = useBreakpoint(containerRef)
  const isBiggerThanLgBreakPoint = isBreakpoint('lg')

  const component = () => (
    <div className="relative grow max-w-[900px] z-10 pt-2 font-mono">
      <Header
        headingLevel="1"
        text={t('projects.title')}
        className="text-xl md:text-2xl text-soft-blue mb-2"
      />
      <Section>
        <Header
          headingLevel="1"
          text={t('projects.subtitle')}
          className="text-sm text-white-75a mb-4"
        />
        <div className="flex flex-col gap-4">
          {projects.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </div>
      </Section>
    </div>
  )

  const renderComponent = component()
  return (
    <div
      ref={containerRef}
      className="px-2 md:pl-10 md:px-0 pb-10 flex w-full justify-between gap-1 overflow-y-auto overflow-x-hidden"
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
        <div className="absolute -bottom-16 right-1/4 w-80 h-80 rounded-full bg-green/6 blur-3xl" />
      </div>
    </div>
  )
}
