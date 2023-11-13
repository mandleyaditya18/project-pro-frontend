import { Button } from '@radix-ui/themes'
import Dropdown from '../ui/Dropdown'
import Avatar from '../ui/Avatar'

const OPTIONS = [
  { label: 'My Profile', value: 'profile' },
  { label: 'Logout', value: 'logout' },
]

const ProfileDropdownTrigger = (
  <Button variant="soft" radius="full" style={{ padding: 0 }}>
    <Avatar size="2" radius="full" fallback="AM" />
  </Button>
)

const ProfileDropdown = () => {
  return (
    <Dropdown
      options={OPTIONS}
      trigger={ProfileDropdownTrigger}
      // onSelect={(val) => console.log(val)}
    />
  )
}

export default ProfileDropdown
