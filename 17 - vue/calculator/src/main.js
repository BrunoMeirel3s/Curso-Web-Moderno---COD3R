import Vue from 'vue'
import App from './App'

new Vue({
    //render abaixo é utilizado para renderizar App que é a a nossa aplicação em sí
    render: h => h(App)
}).$mount("#app")//mount está apontando para o elemento que irá receber a renderização no caso o index.html