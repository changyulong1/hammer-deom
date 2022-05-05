import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/reset.css'
import '../assets/css/header.css'
import parts from '../components/parts'
import shouye from '../view/shouye'
import shouji from '../view/shouji'
import zuji from '../view/zuji'
import zhoubian from '../view/zhoubian'
import peijian from '../view/peijian'
import fuwu from '../view/fuwu'
import quan from '../view/quan'
import xiang from '../components/xiangqing'
import qingdan from '../components/qingdan'
import jiesuan from '../components/jiesuan'
import tijiao from '../view/tijiao'
import dingdan from '../view/dingdan'
import luyou1 from '../view/luyou/luyou1'
import luyou2 from '../view/luyou/luyou2'




Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: shouye },
    { path: '/parts', component: parts },
    { path: '/shouji', component: shouji },
    { path: '/zuji', component: zuji },
    { path: '/zhoubian', component: zhoubian },
    { path: '/peijian', component: peijian },
    { path: '/fuwu', component: fuwu },
    { path: '/quan', component: quan },
    { path: '/xiang', name: 'xiang', component: xiang },
    { path: '/qingdan', name: 'qingdan', component: qingdan },
    { path: '/jiesuan', component: jiesuan },
    { path: '/tijiao', name: 'tijiao', component: tijiao },
    {
      path: '/ding',
      component: dingdan,
      children: [
        {
          path: '',
          name: 'luyou1',
          component: luyou1
        },
        {
          path: '/luyou2',
          name: 'luyou2',
          component: luyou2
        }
      ]

    }
  ]
})
