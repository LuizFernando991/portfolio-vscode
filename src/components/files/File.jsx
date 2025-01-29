import { FileIcon } from './FileIcon'

export function File({ name, extension }) {
  return (
    <div className="flex items-center text-sm w-full">
      <FileIcon fileType={extension} />
      <span>
        {name}.{extension}
      </span>
    </div>
  )
}
