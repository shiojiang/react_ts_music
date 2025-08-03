import type { ReactNode } from 'react'
import { memo, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Download: FC<IProps> = () => {
  return <div>Download</div>
}

export default memo(Download)
