import { IoIosArrowForward } from 'react-icons/io'
import {
  Disclosure,
  DisclosurePanel,
  DisclosureButton
} from '@headlessui/react'
import classNames from 'classnames'
import { DirectoryList } from './DirectoryList'
import { useDiretoryStateContext } from '../../../hooks/useDirectoryContext'

export function Directory({ directory, level }) {
  const diretoryState = useDiretoryStateContext()

  const paddingLeft = `${level * 14}px`
  const marginLeft = `${(level + 1) * 10}px`

  return (
    <Disclosure
      as="div"
      className="w-full cursor-pointer"
      defaultOpen={directory.open}
    >
      {({ open }) => (
        <>
          <DisclosureButton
            className={classNames(
              'w-full py-1 outline-none focus:shadow-item-selected focus:bg-white-5a focus:z-20 relative cursor-pointer hover:bg-white-5a font-medium',
              {
                'pt-2': level === 0
              }
            )}
            style={{ paddingLeft: paddingLeft }}
            onClick={() =>
              diretoryState.changeDefaultOpen(
                !directory.open,
                level,
                directory.name
              )
            }
          >
            <span className="flex items-center gap-1">
              <IoIosArrowForward
                className={`text-white-50a h-4 w-4 ${open ? 'rotate-90 transform' : ''}`}
              />
              {directory.name}
            </span>
          </DisclosureButton>
          <DisclosurePanel className="relative ">
            {level > 0 && (
              <div
                className="absolute z-30 border-l border-l-white-10a h-full group-hover:border-l-dark-200 transition-colors"
                style={{ marginLeft: marginLeft }}
              />
            )}
            <DirectoryList directory={directory.children} level={level + 1} />
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
