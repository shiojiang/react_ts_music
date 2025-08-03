import type { ReactNode } from 'react'
import { memo, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Friend: FC<IProps> = () => {
  return <div>Friend</div>
}

export default memo(Friend)
