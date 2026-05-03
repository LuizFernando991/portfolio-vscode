import { useTranslation } from 'react-i18next'
import { SocialPage } from '../components/SocialPage'
import { MarkdownButton } from '../components/MarkdownButton'
import { SiRss } from 'react-icons/si'

const topics = [
  { key: 'typescript', color: 'text-blue border-blue/30 bg-blue/5' },
  { key: 'nodejs', color: 'text-green border-green/30 bg-green/5' },
  { key: 'architecture', color: 'text-purple border-purple/30 bg-purple/5' },
  { key: 'devops', color: 'text-yellow border-yellow/30 bg-yellow/5' },
  { key: 'curiosities', color: 'text-pink border-pink/30 bg-pink/5' },
  { key: 'career', color: 'text-soft-blue border-soft-blue/30 bg-soft-blue/5' }
]

const BLOG_URL = 'https://dev.to/luizfernando991'

export function Blog() {
  const { t } = useTranslation()
  return (
    <div className="w-full h-full animate-fade font-mono overflow-y-auto">
      <SocialPage
        icon={
          <div className="w-full h-full flex items-center justify-center text-soft-blue">
            <SiRss className="text-3xl" />
          </div>
        }
        title="Blog"
        subtitle={t('blog.subtitle')}
        buttonLink={BLOG_URL}
        buttonTitle={t('blog.button')}
      >
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-xs text-white-50a font-mono mb-3">
              {t('blog.section-topics')}
            </p>
            <div className="flex flex-wrap gap-2">
              {topics.map(({ key, color }) => (
                <span
                  key={key}
                  className={`px-3 py-1 border rounded-full text-xs font-mono ${color}`}
                >
                  {t(`blog.topics.${key}`)}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs text-white-50a mb-1">
              {t('blog.section-about')}
            </p>
            <p className="text-white-75a text-sm leading-relaxed">
              {t('blog.p-1')}
            </p>
            <p className="text-white-75a text-sm leading-relaxed">
              {t('blog.p-2')}
            </p>
            <MarkdownButton
              as="a"
              href={BLOG_URL}
              target="_blank"
              rel="noreferrer"
            >
              [{t('blog.link-button')}]
            </MarkdownButton>
          </div>
        </div>
      </SocialPage>
    </div>
  )
}
