import { VscCode, VscBracketDot, VscCheckAll } from 'react-icons/vsc'
import { FaCodeBranch } from 'react-icons/fa'
import { GrPowerCycle } from 'react-icons/gr'

export function FinalLine() {
  return (
    <div className="w-full h-6 flex items-center justify-between bg-dark-800">
      <div className="flex items-center">
        <span className="h-full flex items-center justify-center font-extralight gap-1 text-sm px-2 bg-purple">
          <VscCode className="text-md" />
          WSL: Ubunto
        </span>
        <span className="h-full items-center justify-center font-extralight gap-1 text-sm px-2 hidden sm:flex ">
          <FaCodeBranch />
          main*
          <GrPowerCycle />
        </span>
      </div>
      <div className="flex">
        <span className="h-full flex items-center justify-center font-semibold gap-1 text-sm px-2 text-white-75a">
          <VscCheckAll className="text-md" />
          Prettier
        </span>
        <span className="h-full flex items-center justify-center font-semibold gap-1 text-sm px-2 text-white-75a">
          <VscBracketDot className="text-md" />
          Luiz Fernando
        </span>
      </div>
    </div>
  )
}
