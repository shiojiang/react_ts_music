import type { ReactNode } from 'react'
import { memo, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Playlist: FC<IProps> = () => {
  return <div>Playlist</div>
}

export default memo(Playlist)
