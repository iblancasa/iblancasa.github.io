import Vue from 'vue'
import { Layout, Menu, Icon } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import Vuex from 'vuex'


import App from './App'

Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Vuex)

Vue.config.productionTip = false;


export const store = new Vuex.Store({
    state: {
      showMenu: false
    },
    mutations: {
      show (state) {
        state.showMenu = !state.showMenu;
      }
    }
  })

new Vue({
    store,
    render: h =>h(App),
}).$mount('#app');
