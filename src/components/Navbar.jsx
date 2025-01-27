import { TabBar } from './tabs/TabBar'

export function Navbar() {
  return (
    <div className="ml-1 md:ml-0 md:bg-inherit bg-dark-600">
      <div className="flex">
        <TabBar />
      </div>
    </div>
  )
}
