import { useState } from 'react'
import { MenuItem } from './MenuItem'
import { useTranslation } from 'react-i18next'
import { IoSettingsOutline } from 'react-icons/io5'
import { FaCheck } from 'react-icons/fa6'
import classNames from 'classnames'

function OptionButton({ selected, onClick, text }) {
  return (
    <button
      className="flex items-center gap-1 w-full px-2 py-2 rounded-md text-white-75a text-sm hover:bg-white-5a cursor-pointer font-sans text-left font-thin"
      onClick={onClick}
    >
      <FaCheck
        className={classNames('text-white-75a', {
          invisible: !selected
        })}
      />
      {text}
    </button>
  )
}

export function Settings() {
  const { i18n, t } = useTranslation()
  const [showSettings, setShowSettings] = useState(false)

  const currentLanguage = i18n.language

  return (
    <div className="w-full">
      {showSettings && (
        <div
          className="absolute w-screen h-screen top-0 bottom-0 right-0 left-0 z-90"
          onClick={() => setShowSettings(false)}
        />
      )}
      <MenuItem
        Icon={IoSettingsOutline}
        key="settings"
        iconClasses="z-100"
        selected={false}
        onClick={() => setShowSettings(!showSettings)}
      />
      <div
        data-settings-hidden={showSettings}
        className="flex flex-col w-50 rounded-md absolute left-[100%] bottom-1 z-100 bg-dark-600 data-[settings-hidden=false]:hidden shadow-2xl shadow-dark-700 py-2"
      >
        <div className="">
          <h3 className="text-white-75a text-sm font-thin py-2 px-4 font-sans">
            {t('settings.lng')}:
          </h3>
          <hr className="text-dark-500" />
        </div>
        <div className="flex flex-col px-2 pt-2">
          <OptionButton
            onClick={() => i18n.changeLanguage('pt')}
            text="Português"
            selected={currentLanguage === 'pt'}
          />
          <OptionButton
            onClick={() => i18n.changeLanguage('en')}
            text="English"
            selected={currentLanguage !== 'pt'}
          />
        </div>
      </div>
    </div>
  )
}
