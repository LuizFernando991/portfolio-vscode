import { useTranslation } from 'react-i18next'
import { useTabContext } from '../hooks/useTabContext'
import { MarkdownButton } from './MarkdownButton'
import { tabsContent } from '../utils/tabs'
import profile from '../assets/images/Profile.png'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export function Home() {
  const { t } = useTranslation()
  const tabs = useTabContext()

  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center gap-6 overflow-x-hidden overflow-y-auto px-4">
      {/* image */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple/50 via-soft-blue/30 to-pink/25 blur-2xl scale-125 -z-10" />
        <div className="p-[3px] rounded-full bg-gradient-to-br from-purple via-soft-blue to-pink">
          <div className="rounded-full overflow-hidden bg-dark-600 w-36 h-36 md:w-44 md:h-44">
            <img
              className="w-full h-full object-cover"
              src={profile}
              alt="profile-image"
            />
          </div>
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-dark-700 border border-green/40 rounded-full text-xs font-mono text-green shadow-lg whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
          available
        </div>
      </div>

      {/* text */}
      <div className="flex flex-col items-center gap-2 text-center mt-2">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-mono text-purple">
          # Luiz Fernando
        </h1>
        <h2 className="text-lg md:text-2xl lg:text-3xl font-extralight font-mono text-purple opacity-50">
          ## Full-stack developer
          <span className="animate-blink opacity-100">|</span>
        </h2>
      </div>

      {/* actions */}
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-4">
          <MarkdownButton
            onClick={() => tabs.addTab(tabsContent.about)}
            className="cursor-pointer text-lg md:text-2xl lg:text-3xl"
          >
            {t('home.about-button')}
          </MarkdownButton>
          <div className="relative">
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-soft-blue opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-soft-blue" />
            </span>
            <MarkdownButton
              onClick={() => tabs.addTab(tabsContent.index)}
              className="cursor-pointer text-lg md:text-2xl lg:text-3xl"
            >
              {t('home.guide-button')}
            </MarkdownButton>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/LuizFernando991"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 border border-dark-300/60 hover:border-white/40 hover:bg-dark-400/40 rounded text-white-50a hover:text-white transition-all duration-200 text-sm font-mono"
          >
            <SiGithub className="text-base" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/lfernandor991"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 border border-dark-300/60 hover:border-blue/50 hover:bg-blue/10 rounded text-white-50a hover:text-blue transition-all duration-200 text-sm font-mono"
          >
            <SiLinkedin className="text-base" />
            LinkedIn
          </a>
        </div>
      </div>

      {/* background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* dot grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #6e738d 1px, transparent 1px)',
            backgroundSize: '28px 28px'
          }}
        />
        {/* color blobs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-purple/10 blur-3xl" />
        <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-blue/8 blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-72 h-72 rounded-full bg-green/7 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-pink/8 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-yellow/6 blur-3xl" />
      </div>
    </div>
  )
}
