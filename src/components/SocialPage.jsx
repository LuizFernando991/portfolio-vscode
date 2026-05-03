export function SocialPage({
  children,
  icon,
  title,
  subtitle,
  buttonTitle,
  buttonLink
}) {
  return (
    <div className="px-4 md:px-10 py-6 max-w-3xl">
      <div className="flex items-center gap-5 pb-6 border-b border-dark-400/50 mb-8">
        <div className="w-16 h-16 flex-shrink-0 rounded-xl bg-dark-500/50 border border-dark-400/60 p-2 flex items-center justify-center">
          {icon}
        </div>
        <div className="flex flex-col gap-1 min-w-0">
          <h2 className="text-2xl font-semibold font-mono">{title}</h2>
          <p className="text-sm text-white-50a font-mono">{subtitle}</p>
        </div>
        <a
          className="ml-auto flex-shrink-0 flex items-center gap-2 px-4 py-1.5 border border-dark-300/60 hover:border-white/40 hover:bg-dark-400/40 rounded text-sm text-white-50a hover:text-white transition-all duration-200 font-mono"
          href={buttonLink}
          target="_blank"
          rel="noreferrer"
        >
          ↗ {buttonTitle}
        </a>
      </div>
      {children}
    </div>
  )
}
