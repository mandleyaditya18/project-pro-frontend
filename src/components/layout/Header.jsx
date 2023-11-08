import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import ProfileDropdown from '../shared/ProfileDropdown'
import Input from '../ui/Input'

const Header = () => {
  return (
    <header className="h-12 w-full flex flex-row-reverse items-center justify-between px-4">
      <ProfileDropdown />
      <div className="md:min-w-[300px] sm:min-w-[200px]">
        <Input
          placeholder="Use ⌘/Ctrl + K to search"
          leftIcon={<MagnifyingGlassIcon height="16" width="16" />}
        />
      </div>
      <span></span>
    </header>
  )
}

export default Header
