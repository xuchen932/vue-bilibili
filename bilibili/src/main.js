import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App";
import router from './router';
import VueResource from 'vue-resource'

Vue.use(ElementUI);
Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  el:"#app",
  router,
  components:{ App },
  template:'<App/>',
})