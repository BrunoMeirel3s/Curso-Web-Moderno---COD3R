//Vuex nos permite criar métodos a serem utilizados para que um componente
//possa aplicar ações nos outros, ele armazena os métodos e os componentes acessam esses métodos
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        isMenuVisible: false,
        user:null
    },
    //as mutations são os métodos que ficarão disponíveis para os componentes utilizarem
    mutations:{
        toggleMenu(state, isVisible){
            if(!state.user){
                state.isMenuVisible = false
                return
            }
            if(isVisible === undefined){
                state.isMenuVisible = !state.isMenuVisible
            } else{
                state.isMenuVisible = isVisible
            }
        },
        setUser(state, user){
            state.user = user

            if(user){
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
                state.isMenuVisible = true
            } else{
                delete axios.defaults.headers.common['Authorization']
                state.isMenuVisible = false
            }
        }
    }
})