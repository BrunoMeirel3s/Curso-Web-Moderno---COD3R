import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//Temporário!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkJydW5vIE1laXJlbGVzIiwiZW1haWwiOiJicnVub21laXJlbGVzMjNAZ21haWwuY29tIiwiYWRtaW4iOnRydWUsImlhdCI6MTYwMjMyMDIwOCwiZXhwIjoxNjAyNTc5NDA4fQ.Ty6cfdDaghuoJsg2NUf4ka4OiPPS3wnPTySTJqcrpu0'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')