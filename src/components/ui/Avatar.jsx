import { Avatar as RadixAvatar } from '@radix-ui/themes'
import cx from 'classnames'

const Avatar = (props) => {
  return (
    <RadixAvatar
      {...props}
      className={cx('border border-[#395BC7] bg-[#EDF2FE]', props.className)}
      style={{ position: 'relative' }}
    />
  )
}

export default Avatar
