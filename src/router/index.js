import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
  import about_head from '@/components/abouts/about_head'
  import about_body from '@/components/abouts/about_body'
  import about_body2 from '@/components/abouts/about_body2'
  import about_footer from '@/components/abouts/about_footer'

Vue.use(Router);
Vue.prototype.$http = Axios;


export default new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: (resolve) => require(['@/components/home'], resolve)
    },
    {
      path: '/about',
      name: 'About',
      component: (resolve) => require(['@/components/about'], resolve),
      children:[
        {
          path: '/about/about_head',
          name: 'AboutHead',
          component: about_head
        },{
          path: '/about/about_body',
          name: 'AboutBody',
          component: about_body
        },{
          path: '/about/about_body2',
          name: 'AboutBody',
          component: about_body2
        },{
          path: '/about/about_footer',
          name: 'AboutFooter',
          component: about_footer
        },{
          path: '/',
          component: about_head
        }
      ]
    },
    {
      path: '/web',
      name: 'Web',
      component: (resolve) => require(['@/components/web'], resolve)
    },
    {
      path: '/python',
      name: 'Python',
      component: (resolve) => require(['@/components/python'], resolve)
    },
    {
      path: '/nodejs',
      name: 'Nodejs',
      component: (resolve) => require(['@/components/nodejs'], resolve)
    },
    {
      path: '/hobby',
      name: 'Hobby',
      component: (resolve) => require(['@/components/hobby'], resolve)
    },
    {
      path: '*',
      component: (resolve) => require(['@/components/home'], resolve)
    },
  ]
});
