import React, {lazy, Suspense} from 'react'
import AppLayout from '@/AppLayout/index'

// 1、解决页面刷新闪屏
// 2、Applayout 不使用懒加载
// 3、懒加载的组件，使用 Suspense 包裹
const Home = lazy(() => import(/* webpackChunkName:'home' */ '@/views/Home/index'))
const Car = lazy(() => import(/* webpackChunkName:'Car' */ '@/views/Car/index'))
const Money = lazy(() => import(/* webpackChunkName:'Money' */ '@/views/Money/index'))
const MemoCallBack = lazy(() => import(/* webpackChunkName:'MemoCallBack' */ '@/views/MemoCallBack/index'))
const About = lazy(() => import(/* webpackChunkName:'About' */ '@/views/About/index'))
const Refs = lazy(() => import(/* webpackChunkName:'Refs' */ '@/views/Refs/index'))
const UseHook = lazy(() => import(/* webpackChunkName:'UseHook' */ '@/views/UseHook/index'))
const Login = lazy(() => import(/* webpackChunkName:'Login' */ '@/views/Login/index'))
const PageDetail = lazy(() => import(/* webpackChunkName:'PageDetail' */ '@/views/PageDetail/index'))
const NoPage = lazy(() => import(/* webpackChunkName:'NoPage' */ '@/views/NoPage/index'))
const lazyLoad = (children) => {
  // 懒加载组件必须配合 Suspense 使用
  return (
    <Suspense fallback={<div>loading...</div>}>
      {children}
    </Suspense>
  ) 
}

const router = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: lazyLoad(<Home />)
      },
      {
        path: '/home',
        label: '主页',
        element: lazyLoad(<Home />),
        children: [
          {
            path: '/home/car',
            label: '车',
            element: lazyLoad(<Car />)
          },
          {
            path: '/home/money',
            label: '房',
            element: lazyLoad(<Money />)
          }
        ]
      },
      {path: '/memo-call-back', label: 'memoBack', element: lazyLoad(<MemoCallBack />)},
      {path: '/about', label: 'About', element: lazyLoad(<About />)},
      {path: '/refs', label: 'Refs', element: lazyLoad(<Refs />)},
      {path: '/use-hook', label: 'Hook', element: lazyLoad(<UseHook />)},
      {path: '/page-detail/:page', element: lazyLoad(<PageDetail />)}
    ]
  },
  {
    path: '/login',
    element: lazyLoad(<Login />)
  },
  {path: '*', element: lazyLoad(<NoPage />)}

]


export default router