import { FileIcon } from './FileIcon'

export function File({ name, extension }) {
  return (
    <div className="flex align-center text-base">
      <FileIcon fileType={extension} />
      {name}.{extension}
    </div>
  )
}
