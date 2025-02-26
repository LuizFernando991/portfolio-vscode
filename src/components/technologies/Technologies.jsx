import { useRef } from 'react'
import Lottie from 'lottie-react'
import { Header } from '../Header'
import { Section } from '../Section'
import { useTranslation } from 'react-i18next'
import { Minimap } from '../Minimap'
import { MarkdownButton } from '../MarkdownButton'
import { TechnologyItem } from './TecItem'
import { technologies, actuallyStuding } from '../../utils/technologies'
import animationData from '../../assets/animations/coding.json'

export function Technologies() {
  const { t } = useTranslation()
  const containerRef = useRef(null)

  const component = () => (
    <div className="relative grow max-w-[1200px] z-10 pt-2">
      <Section>
        <Header
          headingLevel="1"
          text={t('technologies.title')}
          className="text-xl md:text-3xl text-soft-blue mb-8"
        />
        <Header
          headingLevel="1"
          text={t('technologies.subtitle')}
          className="text-md md:text-md text-white-75a"
        />
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4 max-w-[800px] mb-10">
          {technologies.map((tec) => (
            <TechnologyItem Icon={tec.icon} name={tec.name} key={tec.name} />
          ))}
        </div>
      </Section>
      <Section>
        <Header
          headingLevel="1"
          text={t('technologies.subtitle-2')}
          className="text-md md:text-md text-white-75a"
        />
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4 max-w-[800px]">
          {actuallyStuding.map((tec) => (
            <TechnologyItem
              small
              Icon={tec.icon}
              name={tec.name}
              key={tec.name}
            />
          ))}
        </div>
      </Section>
      <Section className="pb-20 pt-5">
        <Header
          headingLevel="1"
          text="GitHub"
          className="text-xl md:text-3xl text-soft-blue"
        />
        <Header
          headingLevel="1"
          text={t('technologies.github')}
          className="text-md md:text-md text-white-75a"
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

  return (
    <div
      ref={containerRef}
      className="px-2 md:pl-10 md:px-0 pb-10 flex w-full justify-between gap-1 overflow-y-auto overflow-hidden font-mono"
    >
      {component()}
      <div className="w-52 z-10 sticky top-0 hidden lg:block pr-4">
        <Minimap of={component()} scrollContainerRef={containerRef} />
      </div>
      <div className="fixed top-0 left-100 w-full -z-100 h-full hidden lg:block opacity-[1%]">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  )
}
