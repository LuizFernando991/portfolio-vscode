import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import Lottie from 'lottie-react'
import { Minimap } from './Minimap'
import { Header } from './Header'
import { BreakLine } from './BreakLine'
import { Section } from './Section'
import { Text } from './Text'
import { TabLink } from './TabLink'
import { MarkdownButton } from './MarkdownButton'
import { tabsContent } from '../utils/tabs'
import animationData from '../assets/animations/coding.json'
import ptResume from '../assets/resume/CurrículoLuiz.pdf'
import enResume from '../assets/resume/ResumeLuiz.pdf'

export function About() {
  const { t, i18n } = useTranslation()
  const containerRef = useRef(null)

  const resume = i18n.language === 'pt' ? ptResume : enResume

  const component = (animate = false) => (
    <div className="relative grow max-w-[1200px] z-10 pt-2">
      <Section>
        <Header
          headingLevel="1"
          text={t('about.title')}
          className="text-3xl md:text-5xl"
        />
        <BreakLine />
        <Text className="mb-10">
          {t('about.p1')}
          <TabLink
            className="font-bold text-yellow cursor-pointer"
            tab={tabsContent.projects}
          >
            {t('tabs.Projects')}.js
          </TabLink>
          .
        </Text>
        <Text className="mb-10">
          {t('about.p2')}
          <TabLink
            className="font-bold text-yellow cursor-pointer"
            tab={tabsContent.contact}
          >
            {t('tabs.Contact')}.md
          </TabLink>
          .
        </Text>

        <Text>
          {t('about.p3')}
          {animate && (
            <span className="animate-blink text-white-75a text-[1.1rem]">
              |
            </span>
          )}
        </Text>
      </Section>
      <BreakLine />
      <Section>
        <Header
          headingLevel="2"
          text={t('about.title-2')}
          className="text-xl md:text-3xl"
        />
        <Text>{t('about.p4')}</Text>
        <MarkdownButton as="a" href={resume} target="_blank" rel="noreferrer">
          {t('about.download-button')}
        </MarkdownButton>
      </Section>
    </div>
  )

  return (
    <div
      ref={containerRef}
      className="px-2 md:pl-10 md:px-0 pb-10 flex w-full justify-between gap-1 overflow-y-auto overflow-hidden font-mono"
    >
      {component(true)}
      <div className="w-52 z-10 sticky top-0 hidden lg:block">
        <Minimap of={component()} scrollContainerRef={containerRef} />
      </div>
      <div className="fixed top-0 left-0 right-0 w-full -z-100 h-full hidden lg:block opacity-[1%]">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  )
}
