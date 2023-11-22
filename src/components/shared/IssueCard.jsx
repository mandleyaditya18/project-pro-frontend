import { Card, Text, Badge } from '@radix-ui/themes'
import { Link2Icon, ChatBubbleIcon } from '@radix-ui/react-icons'
import Avatar from '../ui/Avatar'

const IssueCard = () => {
  return (
    <Card className="w-72">
      <div className="flex justify-between items-center">
        <Text as="div" size="1" color="gray">
          PRO-1
        </Text>
        <Avatar size="1" radius="full" fallback="AM" />
      </div>
      <div className="mt-1 h-12">
        <Text as="div" size="2" trim="end" className="line-clamp-2">
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit, similique voluptatum accusantium accusamus, aliquam
          dolorem, pariatur quibusdam nemo iste alias quis nisi officiis? Vero
          impedit tempora, reiciendis quisquam a et.`}
        </Text>
      </div>
      <div className="flex justify-between items-center">
        <Badge color="orange">Frontend</Badge>
        <div className="flex gap-2">
          <span className="flex items-center text-sm">
            <Link2Icon className="mr-1" /> 2
          </span>
          <span className="flex items-center text-sm">
            <ChatBubbleIcon className="mr-1" /> 2
          </span>
        </div>
      </div>
    </Card>
  )
}

export default IssueCard
