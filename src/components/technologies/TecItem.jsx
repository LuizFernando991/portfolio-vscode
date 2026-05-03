const iconColors = {
  blue: 'text-blue',
  green: 'text-green',
  pink: 'text-pink',
  yellow: 'text-yellow',
  purple: 'text-purple',
  default: 'text-soft-blue'
}

export function TechnologyItem({ Icon, name, color = 'default' }) {
  const iconColor = iconColors[color] ?? iconColors.default

  return (
    <div className="flex items-center gap-2.5 px-2 py-1 rounded hover:bg-dark-400/40 transition-colors duration-100 cursor-default group">
      <Icon
        className={`text-sm shrink-0 ${iconColor} opacity-80 group-hover:opacity-100`}
      />
      <span className="text-xs font-mono text-white-50a group-hover:text-white-75a transition-colors duration-100">
        {name}
      </span>
    </div>
  )
}
