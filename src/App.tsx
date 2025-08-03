import { useRoutes, Link } from 'react-router-dom'
import routes from './router'
import { Suspense } from 'react'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/my">我的音乐</Link>
        <Link to="/friend">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <Suspense fallback={<div>加载中...</div>}>{useRoutes(routes)}</Suspense>
    </div>
  )
}

export default App
