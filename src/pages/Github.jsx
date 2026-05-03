import Lottie from 'lottie-react'
import { useTranslation } from 'react-i18next'
import { SocialPage } from '../components/SocialPage'
import { MarkdownButton } from '../components/MarkdownButton'
import animationData from '../assets/animations/github.json'
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiDocker,
  SiPostgresql
} from 'react-icons/si'
import { FaNode } from 'react-icons/fa'
import { FaGolang } from 'react-icons/fa6'

const stack = [
  {
    Icon: SiTypescript,
    label: 'TypeScript',
    color: 'text-blue border-blue/30 bg-blue/5'
  },
  {
    Icon: FaNode,
    label: 'Node.js',
    color: 'text-green border-green/30 bg-green/5'
  },
  {
    Icon: SiReact,
    label: 'React',
    color: 'text-soft-blue border-soft-blue/30 bg-soft-blue/5'
  },
  {
    Icon: SiNextdotjs,
    label: 'Next.js',
    color: 'text-white-75a border-dark-300/40 bg-dark-500/30'
  },
  { Icon: SiNestjs, label: 'NestJS', color: 'text-red border-red/30 bg-red/5' },
  {
    Icon: FaGolang,
    label: 'Golang',
    color: 'text-soft-blue border-soft-blue/30 bg-soft-blue/5'
  },
  {
    Icon: SiDocker,
    label: 'Docker',
    color: 'text-blue border-blue/30 bg-blue/5'
  },
  {
    Icon: SiPostgresql,
    label: 'PostgreSQL',
    color: 'text-blue border-blue/30 bg-blue/5'
  }
]

export function Github() {
  const { t } = useTranslation()
  return (
    <div className="w-full h-full animate-fade font-mono overflow-y-auto">
      <SocialPage
        icon={<Lottie animationData={animationData} loop={true} />}
        title="GitHub"
        subtitle="@LuizFernando991"
        buttonLink="https://github.com/LuizFernando991"
        buttonTitle={t('github.button')}
      >
        <div className="flex flex-col gap-8">
          <div>
            <p className="text-xs text-white-50a font-mono mb-3"># stack</p>
            <div className="flex flex-wrap gap-2">
              {stack.map(({ Icon, label, color }) => (
                <span
                  key={label}
                  className={`flex items-center gap-1.5 px-3 py-1 border rounded-full text-xs font-mono ${color}`}
                >
                  <Icon className="text-sm" />
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xs text-white-50a mb-1"># sobre</p>
            <p className="text-white-75a text-sm leading-relaxed">
              {t('github.p-1')}
            </p>
            <p className="text-white-75a text-sm leading-relaxed">
              {t('github.p-2')}
            </p>
            <MarkdownButton
              as="a"
              href="https://github.com/LuizFernando991"
              target="_blank"
              rel="noreferrer"
            >
              [{t('github.link-button')}]
            </MarkdownButton>
          </div>
        </div>
      </SocialPage>
    </div>
  )
}
