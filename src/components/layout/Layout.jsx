import { Flex, Separator } from '@radix-ui/themes'

import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  return (
    <div className="flex w-screen h-screen">
      <Flex width="100%" direction="row" height="100%">
        <Sidebar />
        <Separator orientation="vertical" size="4" />
        <Flex direction="column" width="100%" height="100%">
          <Header />
          <Separator orientation="horizontal" size="4" />
          <main className="p-4">{children}</main>
        </Flex>
      </Flex>
    </div>
  )
}

export default Layout
