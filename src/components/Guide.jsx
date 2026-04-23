import { useTranslation } from 'react-i18next'
import { BreakLine } from './BreakLine'
import { Header } from './Header'
import { MarkdownButton } from './MarkdownButton'
import { Minimap } from './Minimap'
import { Section } from './Section'
import { Text } from './Text'
import { useRef } from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import { VscTerminal } from 'react-icons/vsc'

export function Guide() {
  const { t } = useTranslation()
  const containerRef = useRef(null)

  const component = (animate = false) => (
    <div className="relative grow max-w-[1200px] z-10 pt-2">
      <Section>
        <Header
          headingLevel="1"
          text={t('guide.title')}
          className="text-2xl text-purple mb-4"
        />
        <Text className="mb-10">
          {t('guide.p1')}{' '}
          <MarkdownButton
            as="a"
            target="_blank"
            href="https://luizfernandodev.netlify.app"
          >
            My website
          </MarkdownButton>
        </Text>
        <Header
          headingLevel="2"
          text={t('guide.subtitle')}
          className="text-md text-purple"
        />
        <Text className="mb-2">* {t('guide.p2')}</Text>
        <Text className="mb-2">* {t('guide.p3')}</Text>
        <Text>* {t('guide.p4')}</Text>
        <Text className="mb-2">* {t('guide.p5')}</Text>
        <Text className="mb-2">* {t('guide.p6')}</Text>
        <Text className="mb-2">* {t('guide.p7')}</Text>
        <Text className="mb-4">
          * {t('guide.p8')} <IoSettingsOutline className="inline" />
          {animate && (
            <span className="animate-blink text-white-75a text-[1.1rem]">
              |
            </span>
          )}
        </Text>
        <BreakLine />
        <Header
          headingLevel="2"
          text={t('guide.terminal-title')}
          className="text-md text-purple"
        />
        <Text className="mb-2">
          * {t('guide.terminal-p1')} <VscTerminal className="inline" />
        </Text>
        <Text className="mb-2">* {t('guide.terminal-p2')}</Text>
        <Text className="mb-2">* {t('guide.terminal-p3')}</Text>
        <Text className="mb-2">* {t('guide.terminal-p4')}</Text>
        <Text className="mb-4">* {t('guide.terminal-p5')}</Text>
        <BreakLine />
        <Header
          headingLevel="3"
          text={t('guide.footer')}
          className="text-sm text-purple"
        />
      </Section>
    </div>
  )

  return (
    <div
      ref={containerRef}
      className="px-2 md:pl-10 md:px-0 pb-10 flex w-full justify-between gap-1 overflow-y-auto overflow-hidden font-mono"
    >
      {component(true)}
      <div className="w-52 z-10 sticky top-0 hidden lg:block pr-4">
        <Minimap of={component(false)} scrollContainerRef={containerRef} />
      </div>
    </div>
  )
}
