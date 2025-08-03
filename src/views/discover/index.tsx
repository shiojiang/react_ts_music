import type { ReactNode } from 'react'
import { memo, FC, Suspense } from 'react'
import { Outlet, Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <div className="nav">
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/toplist">排行榜</Link>
        <Link to="/discover/playlist">歌单</Link>
      </div>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
