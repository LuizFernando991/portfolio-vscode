import { fileIcons } from '../../assets/icons/files_types/fileIcons'

export function FileIcon({ fileType = 'defaultIcon' }) {
  return <img src={fileIcons[fileType]} className="w-6 h-6 mr-2" alt="" />
}
