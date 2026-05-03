import Lottie from 'lottie-react'
import { useTranslation } from 'react-i18next'
import { SocialPage } from '../components/SocialPage'
import { MarkdownButton } from '../components/MarkdownButton'
import animationData from '../assets/animations/linkedin.json'

const focus = [
  { label: 'Full-stack', color: 'text-purple border-purple/30 bg-purple/5' },
  { label: 'TypeScript', color: 'text-blue border-blue/30 bg-blue/5' },
  { label: 'Microservices', color: 'text-green border-green/30 bg-green/5' },
  { label: 'Cloud / AWS', color: 'text-yellow border-yellow/30 bg-yellow/5' },
  { label: 'Clean Architecture', color: 'text-pink border-pink/30 bg-pink/5' },
  {
    label: 'API Design',
    color: 'text-soft-blue border-soft-blue/30 bg-soft-blue/5'
  }
]

export function Linkedin() {
  const { t } = useTranslation()
  return (
    <div className="w-full h-full animate-fade font-mono overflow-y-auto">
      <SocialPage
        icon={<Lottie animationData={animationData} loop={true} />}
        title="LinkedIn"
        subtitle="in/lfernandor991"
        buttonLink="https://www.linkedin.com/in/lfernandor991/"
        buttonTitle={t('linkedin.button')}
      >
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-xs text-white-50a font-mono mb-3"># foco</p>
            <div className="flex flex-wrap gap-2">
              {focus.map(({ label, color }) => (
                <span
                  key={label}
                  className={`px-3 py-1 border rounded-full text-xs font-mono ${color}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs text-white-50a mb-1"># sobre</p>
            <p className="text-white-75a text-sm leading-relaxed">
              {t('linkedin.p-1')}
            </p>
            <p className="text-white-75a text-sm leading-relaxed">
              {t('linkedin.p-2')}
            </p>
            <MarkdownButton
              as="a"
              href="https://www.linkedin.com/in/lfernandor991/"
              target="_blank"
              rel="noreferrer"
            >
              [{t('linkedin.link-button')}]
            </MarkdownButton>
          </div>
        </div>
      </SocialPage>
    </div>
  )
}
