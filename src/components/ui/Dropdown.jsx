import { DropdownMenu } from '@radix-ui/themes'

const Dropdown = ({ trigger, options, onSelect }) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>{trigger}</DropdownMenu.Trigger>
      <DropdownMenu.Content>
        {options.map((option) => (
          <DropdownMenu.Item
            key={option.value}
            shortcut={option.shortcut}
            onSelect={() => onSelect && onSelect(option.value)}
          >
            {option.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

Dropdown.displayName = 'Dropdown'

export default Dropdown
