import Lottie from 'lottie-react'
import { useTabContext } from '../hooks/useTabContext'
import { Header } from './Header'
import { MarkdownButton } from './MarkdownButton'
import { tabsContent } from '../utils/tabs'
import animationData from '../assets/animations/coding.json'
import profile from '../assets/images/Profile.png'

export function Home() {
  const tabs = useTabContext()

  return (
    <div className="w-full h-full relative flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center overflow-x-hidden gap-8 lg:gap-2 overflow-y-auto">
      <div className="flex flex-col gap-4 md:pl-10">
        <Header
          text="Luiz Fernando"
          headingLevel={1}
          className="text-3xl lg:text-6xl font-extrabold font-mono"
        />

        <Header
          text="Full-stack developer"
          headingLevel={2}
          className="text-2xl lg:text-4xl font-extralight font-mono break-words opacity-50"
        >
          <span className="animate-blink text-purple font-extralight opacity-50">
            |
          </span>
        </Header>
        <div className="flex gap-4">
          <MarkdownButton
            onClick={() => tabs.addTab(tabsContent.about)}
            className="cursor-pointer text-xl lg:text-3xl xl:text-4xl"
          >
            [About Me]
          </MarkdownButton>
          <MarkdownButton
            onClick={() => tabs.addTab(tabsContent.contact)}
            className="cursor-pointer text-xl lg:text-3xl xl:text-4xl"
          >
            [Contact Me]
          </MarkdownButton>
        </div>
      </div>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full -z-100 h-full opacity-[1%]">
        <Lottie
          className="w-full h-full"
          animationData={animationData}
          loop={true}
        />
      </div>
      <div className="w-[50%] lg:w-120 rounded-full md:-mr-16 relative">
        <img
          className="rounded-full h-full w-full"
          src={profile}
          alt="profile-image"
        />
        <div className="w-full h-full right-2 -bottom-2 absolute bg-[#672c55] rounded-full -z-10 shadow-lg shadow-white-5a" />
      </div>
    </div>
  )
}
