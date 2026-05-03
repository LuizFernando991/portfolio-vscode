const borderColors = {
  blue: 'hover:border-blue/60 hover:shadow-blue/10',
  green: 'hover:border-green/60 hover:shadow-green/10',
  pink: 'hover:border-pink/60 hover:shadow-pink/10',
  yellow: 'hover:border-yellow/60 hover:shadow-yellow/10',
  purple: 'hover:border-purple/60 hover:shadow-purple/10',
  default: 'hover:border-soft-blue/50 hover:shadow-soft-blue/10'
}

const textColors = {
  blue: 'group-hover:text-blue',
  green: 'group-hover:text-green',
  pink: 'group-hover:text-pink',
  yellow: 'group-hover:text-yellow',
  purple: 'group-hover:text-purple',
  default: 'group-hover:text-soft-blue'
}

export function TechnologyItem({ Icon, name, color = 'default' }) {
  const border = borderColors[color] ?? borderColors.default
  const text = textColors[color] ?? textColors.default

  return (
    <div
      className={`flex flex-col gap-2 justify-center items-center bg-dark-500/40 border border-dark-400/60 ${border} hover:bg-dark-400/40 hover:shadow-lg p-4 rounded transition-all duration-200 cursor-default group h-28 w-full`}
    >
      <span className={`text-5xl text-white-50a ${text} transition-colors duration-200`}>
        <Icon />
      </span>
      <span className={`text-xs text-white-50a ${text} transition-colors duration-200 font-mono`}>
        {name}
      </span>
    </div>
  )
}
