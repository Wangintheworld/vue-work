import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',

    component: () => import('../views/Login.vue')
  }, {

    path: '/home',
    name: 'Home',
    redirect: '/index',
    meta: { title: '首页' },
    component: () => import('../views/Home/Home.vue'),
    children: [
      {
        path: '/index',
        name: 'Index',
        meta: { title: '首页' },
        component: () => import('../views/Home/Index/index.vue')
      },
      {
        path: '/wms',
        name: 'Wms',
        meta: { title: '信息管理' },
        component: () => import('../views/Home/wms/index.vue'),
        children: [
          {
            path: '/wms/list',
            name: 'wmsList',
            meta: { title: '选项一' },
            component: () => import('../views/Home/wms/list.vue')
          }, {
            path: '/wms/info',
            name: 'wmsInfo',
            meta: { title: '选项二' },
            component: () => import('../views/Home/wms/info.vue')
          }
        ]
      },
      {
        path: '/stats',
        name: 'Stats',
        meta: { title: '数据统计' },
        component: () => import('../views/Home/stats/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
//路由拦截
router.beforeEach(function (to, from, next) {
  if (!sessionStorage.getItem('username')) {
    if (to.path != '/login') {
      next('/login')
    }
  }
  next()
})
export default router
