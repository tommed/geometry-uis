import Vue from 'vue'
import VueKonva from 'vue-konva'
import App from './App.vue'
import router from './router'
import store from './store'
import Theme from './plugins/theme2'

// svg shapes
Vue.use(VueKonva)
Vue.use(Theme)

// buefy
import Buefy from 'buefy'
import './style/Buefy.scss'
Vue.use(Buefy)

// styles
import './style/Main.scss'

// components
import Imports from './components/_import'
Imports(Vue);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
