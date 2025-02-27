import { Header } from '../Header'

export function TechnologyItem({ Icon, name }) {
  return (
    <div className="h-34 w-40 text-6xl text-white-75a flex flex-col gap-2 justify-center items-center bg-dark-400 p-4 scale-90 hover:scale-100 transition-all shadow-2xl rounded-sm">
      <Icon />
      <Header headingLevel="1" text={name} className="text-sm text-white-75a" />
    </div>
  )
}
