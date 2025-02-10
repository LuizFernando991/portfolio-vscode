import Lottie from 'lottie-react'
import { useTranslation } from 'react-i18next'
import { SocialPage } from '../components/SocialPage'
import { Text } from '../components/Text'
import { MarkdownButton } from '../components/MarkdownButton'
import animationData from '../assets/animations/linkedin.json'

export function Linkedin() {
  const { t } = useTranslation()
  return (
    <div className="w-full h-full pt-6 animate-fade font-mono overflow-y-auto">
      <SocialPage
        icon={<Lottie animationData={animationData} loop={true} />}
        title="LinkedIn"
        subtitle="in/lfernandor991"
        buttonLink="https://github.com/LuizFernando991"
        buttonTitle={t('linkedin.button')}
      >
        <div className="mt-10 max-w-320 flex flex-col gap-4">
          <Text>{t('linkedin.p-1')}</Text>
          <Text>{t('linkedin.p-2')}</Text>
          <MarkdownButton
            as="a"
            href="https://www.linkedin.com/in/lfernandor991/"
            target="_blank"
          >
            [{t('linkedin.link-button')}]
          </MarkdownButton>
        </div>
      </SocialPage>
    </div>
  )
}
