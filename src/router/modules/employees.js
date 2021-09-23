import Layout from '@/layout'
export default {
  path: '/employees',
  component: Layout,
  name: 'employees',
  children: [
    {
      path: '', // 默认子路由
      component: () => import('@/views/employees'),
      // 存储路由信息
      meta: {
        title: '员工', // 用来显示菜单标题
        icon: 'people' // 用来显示菜单图标
      }
    }
  ]
}