import {
  DashboardIcon,
  ViewVerticalIcon,
  GearIcon,
  DotFilledIcon,
} from '@radix-ui/react-icons'

const MENU = [
  { key: 'dashboard', label: 'Dashboard', path: '/', icon: <DashboardIcon /> },
  {
    key: 'my-issues',
    label: 'My Issues',
    path: '/',
    icon: <ViewVerticalIcon />,
  },
  { key: 'setting', label: 'Settings', path: '/', icon: <GearIcon /> },
]

const PROJECTS = [
  { key: 'project1', label: 'Project 1', path: '/', color: 'crimson' },
  { key: 'project2', label: 'Project 2', path: '/', color: 'green' },
  { key: 'project3', label: 'Project 3', path: '/', color: 'red' },
]

const Sidebar = () => {
  return (
    <aside className="h-full w-60 flex flex-col gap-12 p-4">
      <h1 className="font-semibold text-2xl px-2">ProjectPro</h1>
      <ul>
        {MENU.map(({ key, label, icon }) => (
          <li
            key={key}
            className="mb-4 last:mb-0 flex items-center gap-2 hover:bg-[#DDE7FE] rounded-md py-1 px-2 first:hover:text-[#3458C9]"
          >
            <span>{icon}</span>
            <span>{label}</span>
          </li>
        ))}
      </ul>
      <section>
        <h3 className="font-semibold uppercase text-sm mb-6 px-2">
          My Projects
        </h3>
        <ul>
          {PROJECTS.map(({ key, label, color }) => (
            <li
              key={key}
              className="mb-4 last:mb-0 flex items-center gap-2 hover:bg-[#DDE7FE] rounded-md py-1 px-2"
            >
              <DotFilledIcon color={color} />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}

export default Sidebar
