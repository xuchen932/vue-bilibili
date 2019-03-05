import Vue from 'vue'
import Router from 'vue-router'
import Bilinav from '../components/bilinav/Bilinav'
import Navmenu from '../components/navmenu/Navmenu'
import Headbanner from '../components/headbanner/Headbanner'

Vue.use(Router)

export default new Router({
  mode:"hash",
  base:__dirname,
  routes:[
      {path:'/',component:Navmenu},
      {path:'/Bilinav',component:Bilinav},
      {path:'/Headbanner',component:Headbanner},
  ]
})
