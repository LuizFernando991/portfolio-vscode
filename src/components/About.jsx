import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Minimap } from './Minimap'
import { Header } from './Header'
import { BreakLine } from './BreakLine'
import { Section } from './Section'
import { Text } from './Text'
import { TabLink } from './TabLink'
import { MarkdownButton } from './MarkdownButton'
import { tabsContent } from '../utils/tabs'
import { technologies } from '../utils/technologies'
import { contactData } from '../utils/contact'
import ptResume from '../assets/resume/CurrículoLuiz.pdf'
import enResume from '../assets/resume/ResumeLuiz.pdf'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { SiGithub, SiLinkedin } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'
import classNames from 'classnames'
import { useBreakpoint } from '../hooks/useBreakPoint'

const GITHUB_USER = 'LuizFernando991'
const YEARS_EXP = 3

export function About() {
  const { t, i18n } = useTranslation()
  const containerRef = useRef(null)
  const { isBreakpoint } = useBreakpoint(containerRef)
  const isBiggerThanLgBreakPoint = isBreakpoint('lg')

  const resume = i18n.language.startsWith('pt') ? ptResume : enResume

  const stats = [
    { value: `${YEARS_EXP}+`, label: t('about.stats.years') },
    { value: '∞', label: t('about.stats.hours') },
    { value: `${technologies.length}+`, label: t('about.stats.techs') }
  ]

  const socialLinks = [
    {
      icon: SiGithub,
      href: contactData.contact.social.find((s) => s.name === 'GitHub')?.url,
      label: 'GitHub'
    },
    {
      icon: SiLinkedin,
      href: contactData.contact.social.find((s) => s.name === 'LinkedIn')?.url,
      label: 'LinkedIn'
    },
    {
      icon: MdEmail,
      href: `mailto:${contactData.contact.email.display}`,
      label: contactData.contact.email.display
    }
  ]

  const component = (animate = false) => (
    <div className="relative grow max-w-[1200px] z-10 pt-2">

      <Section>
        <div className="flex flex-col sm:flex-row gap-5 items-start">
          <img
            src={`https://avatars.githubusercontent.com/${GITHUB_USER}`}
            alt="avatar"
            className="w-20 h-20 rounded-full border-2 border-dark-400/60 shrink-0"
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <Header
                headingLevel="1"
                text="Luiz Fernando"
                className="text-3xl md:text-4xl text-purple"
              />
              {animate && (
                <span className="animate-blink text-white-75a text-[1.3rem]">|</span>
              )}
            </div>
            <span className="text-sm font-mono text-soft-blue">
              {t('about.role')}
            </span>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-white-50a">
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt className="text-pink" />
                {t('about.location')}
              </span>
              <span className="flex items-center gap-1.5 text-green">
                <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse inline-block" />
                {t('about.available')}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono border border-dark-400/60 bg-dark-500/40 text-white-50a rounded hover:border-soft-blue/40 hover:text-white-75a hover:bg-dark-400/30 transition-all duration-150"
                >
                  <Icon className="text-sm" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-3 gap-3">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-0.5 py-3 border border-dark-400/50 rounded-md bg-dark-500/30"
            >
              <span className="text-xl font-mono font-bold text-soft-blue">{value}</span>
              <span className="text-xs font-mono text-white-30a text-center">{label}</span>
            </div>
          ))}
        </div>
      </Section>

      <BreakLine />

      <Section>
        <Header
          headingLevel="2"
          text={t('about.title')}
          className="text-xl md:text-2xl text-purple"
        />
        <Text className="text-white-75a text-sm leading-relaxed">
          {t('about.p1')}
          <TabLink
            className="font-bold text-yellow cursor-pointer"
            tab={tabsContent.projects}
          >
            {t('tabs.Projects')}.js
          </TabLink>
          .
        </Text>
        <Text className="text-white-75a text-sm leading-relaxed">
          {t('about.p5')}
          <TabLink
            className="font-bold text-yellow cursor-pointer"
            tab={tabsContent.technologies}
          >
            {t('tabs.Technologies')}.js
          </TabLink>
          .
        </Text>
        <Text className="text-white-75a text-sm leading-relaxed">
          {t('about.p2')}
          <TabLink
            className="font-bold text-yellow cursor-pointer"
            tab={tabsContent.contact}
          >
            {t('tabs.Contact')}.json
          </TabLink>
          .
        </Text>
        <Text className="text-white-75a text-sm leading-relaxed">
          {t('about.p3')}
        </Text>
      </Section>

      <BreakLine />

      <Section className="pb-2">
        <Header
          headingLevel="2"
          text={t('about.title-2')}
          className="text-xl md:text-2xl text-purple"
        />
        <Text className="text-white-75a text-sm">{t('about.p4')}</Text>
        <MarkdownButton as="a" href={resume} target="_blank" rel="noreferrer">
          {t('about.download-button')}
        </MarkdownButton>
      </Section>
    </div>
  )

  const renderComponent = component(true)
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
        <Minimap of={component()} scrollContainerRef={containerRef} />
      </div>
    </div>
  )
}
