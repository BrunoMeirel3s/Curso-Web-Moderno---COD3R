//Vuex nos permite criar métodos a serem utilizados para que um componente
//possa aplicar ações nos outros, ele armazena os métodos e os componentes acessam esses métodos
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isMenuVisible: true
    },
    //as mutations são os métodos que ficarão disponíveis para os componentes utilizarem
    mutations:{
        toggleMenu(state, isVisible){
            if(isVisible === undefined){
                state.isMenuVisible = !state.isMenuVisible
            } else{
                state.isMenuVisible = isVisible
            }

            console.log('toggleMenu = ' + state.isMenuVisible)
        }
    }
})