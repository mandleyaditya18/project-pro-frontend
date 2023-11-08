import { TextField } from '@radix-ui/themes'

const Input = ({ leftIcon, rightIcon, placeholder, value, onChange }) => {
  return (
    <TextField.Root>
      {leftIcon && <TextField.Slot>{leftIcon}</TextField.Slot>}
      <TextField.Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        radius="large"
      />
      {rightIcon && <TextField.Slot>{rightIcon}</TextField.Slot>}
    </TextField.Root>
  )
}

export default Input
