import { useRef } from 'react'
import Lottie from 'lottie-react'
import { useBreakpoint } from '../../hooks/useBreakPoint'
import { Header } from '../Header'
import { Section } from '../Section'
import { useTranslation } from 'react-i18next'
import { Minimap } from '../Minimap'
import { MarkdownButton } from '../MarkdownButton'
import { TechnologyItem } from './TecItem'
import { technologies, actuallyStuding } from '../../utils/technologies'
import animationData from '../../assets/animations/coding.json'
import classNames from 'classnames'

export function Technologies() {
  const { t } = useTranslation()
  const containerRef = useRef(null)

  const { isBreakpoint } = useBreakpoint(containerRef)

  const isBiggerThanLgBreakPoint = isBreakpoint('lg')

  const tecnologiesFilter = isBiggerThanLgBreakPoint
    ? actuallyStuding
    : actuallyStuding.slice(0, 4)

  const component = () => (
    <div className="relative grow max-w-[1200px] z-10 pt-2">
      <Header
        headingLevel="1"
        text={t('technologies.title')}
        className="text-xl md:text-2xl text-soft-blue mb-2"
      />
      <Section
        className={classNames('flex gap-8', {
          'flex-col': !isBiggerThanLgBreakPoint
        })}
      >
        <div>
          <Header
            headingLevel="1"
            text={t('technologies.subtitle')}
            className="text-sm text-white-75a"
          />
          <div className="grid gap-2 grid-cols-2 md:grid-cols-4 max-w-[800px]">
            {technologies.map((tec) => (
              <TechnologyItem Icon={tec.icon} name={tec.name} key={tec.name} />
            ))}
          </div>
        </div>
        <div>
          <Header
            headingLevel="1"
            text={t('technologies.subtitle-2')}
            className="text-sm text-white-75a"
          />
          <div
            className={classNames('grid gap-2 max-w-[800px]', {
              'grid-cols-1 ': isBiggerThanLgBreakPoint,
              'grid-cols-2 md:grid-cols-4': !isBiggerThanLgBreakPoint
            })}
          >
            {tecnologiesFilter.map((tec) => (
              <TechnologyItem Icon={tec.icon} name={tec.name} key={tec.name} />
            ))}
          </div>
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
      <div className="fixed top-0 left-100 w-full -z-100 h-full hidden xl:block opacity-[1%]">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  )
}
