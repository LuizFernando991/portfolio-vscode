import { useTranslation } from 'react-i18next'
import Lottie from 'lottie-react'
import { Header } from './Header'
import { BreakLine } from './BreakLine'
import { Section } from './Section'
import { Text } from './Text'
import { TabLink } from './TabLink'
import { MarkdownButton } from './MarkdownButton'
import { tabsContent } from '../utils/tabs'
import animationData from '../assets/animations/coding.json'
import pdf from '../assets/resume/CurrículoLuiz.pdf'

export function About() {
  const { t } = useTranslation()
  // TODO: resume with current language
  return (
    <div className="relative pt-4 pl-2 h-full flex">
      <div className="grow max-w-[1200px] z-10">
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
            <span className="animate-blink text-white-75a text-[1.1rem]">
              |
            </span>
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
          <MarkdownButton as="a" href={pdf} target="_blank" rel="noreferrer">
            {t('about.download-button')}
          </MarkdownButton>
        </Section>
      </div>
      <div className="absolute w-full h-full hidden lg:block opacity-[1%]  ">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  )
}
