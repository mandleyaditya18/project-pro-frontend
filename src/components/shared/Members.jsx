import Avatar from '../ui/Avatar'

const Members = ({ members = [], max }) => {
  if (max && max < members.length) {
    return (
      <div>
        {members.slice(0, max).map((member) => (
          <Avatar
            key={member.id}
            size="2"
            radius="full"
            fallback={member.name.slice(0, 2).toUpperCase()}
            className="-ml-1"
          />
        ))}
        <Avatar
          key="extra-members-count"
          size="2"
          radius="full"
          fallback={`+${members.length - max}`}
          className="-ml-1"
        />
      </div>
    )
  }
  return (
    <div>
      {members.map((member) => (
        <Avatar
          key={member.id}
          size="2"
          radius="full"
          fallback={member.name.slice(0, 2).toUpperCase()}
          className="-ml-1"
        />
      ))}
    </div>
  )
}

export default Members
