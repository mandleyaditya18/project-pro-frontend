import { Tabs, Flex } from '@radix-ui/themes'
import {
  DividerVerticalIcon,
  ViewVerticalIcon,
  ListBulletIcon,
  MixerHorizontalIcon,
} from '@radix-ui/react-icons'
import Layout from './components/layout/Layout'
import Members from './components/shared/Members'
import ProjectOverview from './components/shared/ProjectOverview'
import IssuesContainer from './components/shared/IssuesContainer'

const MEMBERS = [
  { id: 1, name: 'Peter Parker' },
  { id: 2, name: 'Tony Stark' },
  { id: 3, name: 'Steve Rogers' },
]

const App = () => {
  return (
    <Layout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-semibold text-2xl px-2">Project 1</h1>
        <Members members={MEMBERS} max={1} />
      </div>
      <div className="h-full">
        <Tabs.Root defaultValue="issues">
          <Tabs.List className="flex justify-between">
            <div className="flex">
              <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
              <Tabs.Trigger value="issues">Issues</Tabs.Trigger>
            </div>
            <div className="flex items-center gap-4 px-4">
              <span className="flex items-center gap-1">
                <MixerHorizontalIcon />
                Filter
              </span>
              <DividerVerticalIcon />
              <span className="flex items-center gap-1">
                <ViewVerticalIcon /> Board
              </span>
              <span className="flex items-center gap-1">
                <ListBulletIcon /> List
              </span>
            </div>
          </Tabs.List>

          <Flex direction="column" className="px-4 py-2 overflow-auto">
            <Tabs.Content value="overview" style={{ height: '100%' }}>
              <ProjectOverview />
            </Tabs.Content>

            <Tabs.Content value="issues" style={{ height: '100%' }}>
              <IssuesContainer />
            </Tabs.Content>
          </Flex>
        </Tabs.Root>
      </div>
    </Layout>
  )
}

export default App
