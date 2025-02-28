import { useRef } from 'react'
import Lottie from 'lottie-react'
import { Minimap } from '../Minimap'
import { Section } from '../Section'
import { projects } from '../../utils/projects'
import { ProjectItem } from './ProjectItem'
import animationData from '../../assets/animations/coding.json'
import classNames from 'classnames'

export function Projects() {
  const containerRef = useRef(null)

  const component = (animated) => (
    <div className="relative grow max-w-[800px] z-10 pt-2 ">
      <div
        className={classNames('flex flex-col gap-40 mt-20', {
          'animate-fade': animated
        })}
      >
        {projects.map((project, index) => (
          <Section key={index}>
            <ProjectItem {...project} />
          </Section>
        ))}
      </div>
    </div>
  )

  return (
    <div
      ref={containerRef}
      className="px-2 md:pl-10 md:px-0 pb-10 flex w-full justify-between gap-1 overflow-y-auto overflow-hidden"
    >
      {component(true)}
      <div className="w-52 z-10 sticky top-0 hidden lg:block pr-4">
        <Minimap
          of={component(false)}
          scrollContainerRef={containerRef}
          scale={0.14}
        />
      </div>
      <div className="fixed top-0 left-50 w-full -z-100 h-full hidden xl:block opacity-[1%]">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  )
}
