export function SocialPage({
  children,
  icon,
  title,
  subtitle,
  buttonTitle,
  buttonLink
}) {
  return (
    <div className="w-full h-full pt-6 animate-fade font-mono overflow-y-auto">
      <div className="h-full w-full px-20 flex flex-col">
        <div className="w-full flex border-b-2 border-white-10a pb-4 gap-4">
          <div className="w-20 bg-white rounded-xl p-2 flex justify-center items-center">
            {icon}
          </div>
          <div className="flex flex-col justify-between items-start gap-2">
            <div>
              <h2 className="text-2xl">{title}</h2>
              <p className="text-sm text-white-75a">{subtitle}</p>
            </div>
            <a
              className="text-xs py-1 px-2 bg-purple rounded-xs opacity-90 hover:opacity-100"
              href={buttonLink}
              target="_blank"
              rel="noreferrer"
            >
              {buttonTitle}
            </a>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
