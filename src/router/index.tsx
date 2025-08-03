import { Navigate, RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Discover = lazy(() => import('@/views/discover'))
const Download = lazy(() => import('@/views/download'))
const Friend = lazy(() => import('@/views/friend'))
const My = lazy(() => import('@/views/my'))
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Toplist = lazy(() => import('@/views/discover/c-views/toplist'))
const Playlist = lazy(() => import('@/views/discover/c-views/playlist'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/toplist',
        element: <Toplist />
      },
      {
        path: '/discover/playlist',
        element: <Playlist />
      }
    ]
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/friend',
    element: <Friend />
  },
  {
    path: '/my',
    element: <My />
  }
]

export default routes
