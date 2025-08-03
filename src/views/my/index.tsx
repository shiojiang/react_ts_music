import type { ReactNode } from 'react'
import { memo, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const My: FC<IProps> = () => {
  return <div>My</div>
}

export default memo(My)
