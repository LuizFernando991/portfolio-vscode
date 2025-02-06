import { MenuItem } from './MenuItem'
import { useTranslation } from 'react-i18next'
import { CgProfile } from 'react-icons/cg'
import ptResume from '../../assets/resume/CurrículoLuiz.pdf'
import enResume from '../../assets/resume/ResumeLuiz.pdf'

export function ResumeButton() {
  const { i18n } = useTranslation()

  const resume = i18n.language === 'pt' ? ptResume : enResume

  return (
    <div className="w-full">
      <MenuItem
        Icon={CgProfile}
        as="a"
        href={resume}
        target="_blank"
        rel="noreferrer"
      />
    </div>
  )
}
