import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import App from '@/App'
import One from '../components-tp/One'
import Two from '../components-tp/Two'
import Three from '../components-tp/Three'
import Four from '../components-tp/Four'
// import Setting from '../components-tp/setting'
// import SettingInfo from '../components-tp/setting/Info.vue'
// import SettingAuth from '../components-tp/setting/Auth'


Vue.use(Router)

export default new Router({
  // base:"/dist/",
  routes: [
    // {
    //   path: '/',
    //   name: 'One',
    //   component: One
    // },
    {
      path: '/',
      name: 'One',
      component: One
    },
    {
      path: '/two',
      name: 'Two',
      component: Two
    },
    // {
    //   path:'/setting',
    //   component:Setting,
      
    // },
    {
      path: '/three',
      name: 'Three',
      component: Three
    },
    {
      path: '/four',
      name: 'Four',
      component: Four
    }
  ]
})

