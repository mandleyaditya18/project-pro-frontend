import { Separator } from '@radix-ui/themes'

import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div className="flex w-screen h-screen">
      <div className="flex w-full h-full">
        <Sidebar />
        <Separator orientation="vertical" size="4" />
        <div className="flex flex-col w-full h-full overflow-auto">
          <Header />
          <Separator orientation="horizontal" size="4" />
          <main className="p-4 h-full flex flex-col overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout
