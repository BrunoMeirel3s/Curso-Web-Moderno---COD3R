import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//Temporário!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkJydW5vIE1laXJlbGVzIiwiZW1haWwiOiJicnVub21laXJlbGVzMjNAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYwMzEwNTU2NCwiZXhwIjoxNjAzMzY0NzY0fQ.m6UMTEr6rv-KLwGoFiNtHg8-sI3XN7XwDAmPdpEvfx4'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')