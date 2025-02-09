import { BsPinAngleFill } from 'react-icons/bs'
import { FaRegFolder } from 'react-icons/fa6'
import { RiExternalLinkLine } from 'react-icons/ri'
import { repositories } from '../../../utils/repositories'

export function PinRepositories() {
  return (
    <div className="p-3 flex flex-col gap-2">
      <div className="flex gap-1 items-center">
        <BsPinAngleFill className="rotate-270" />
        <span>Pin Repositories</span>
      </div>
      <div className="flex flex-col gap-1">
        {repositories.map((repo, index) => (
          <a
            key={index}
            target="_blank"
            href={repo.link}
            className="w-full flex gap-2 justify-between items-center cursor-pointer text-white-75a hover:underline hover:text-white"
            rel="noreferrer"
          >
            <span className="flex items-center gap-1">
              <FaRegFolder />
              {repo.name}
            </span>
            <RiExternalLinkLine />
          </a>
        ))}
      </div>
    </div>
  )
}
