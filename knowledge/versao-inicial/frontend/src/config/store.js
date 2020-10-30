//Vuex nos permite criar métodos a serem utilizados para que um componente
//possa aplicar ações nos outros, ele armazena os métodos e os componentes acessam esses métodos
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/**
 * Vuex.Store permite a criação de métodos que podemos ser utilizados em outros documentos
 * dentro da aplicação, abaixo temos os métodos toggleMenu e SetUser que são utilizados
 * durante o login e dentro da aplicação para habilitar ou desabilitar o menu
 */
export default new Vuex.Store({
    state:{
        isMenuVisible: false,
        user:null
    },
    //as mutations são os métodos que ficarão disponíveis para os componentes utilizarem
    mutations:{
        /**
         * Toggle menu é utilizado para exibir ou não o menu da aplicação de acordo com o estado anterior
         * ao ser chamada a função toggleMenu recebe como parâmetro o status atual do menu
         */
        toggleMenu(state, isVisible){
            //se o usuário não estiver logado o isMenuVisible recebe false e o menu some
            if(!state.user){
                state.isMenuVisible = false
                return
            }
            //se não for informado o isVisible como parâmetro é alternado o valor do isMenuVisible
            //fazendo a variável ser uma hora true e depois false ao ser chamado o método novamente
            if(isVisible === undefined){
                state.isMenuVisible = !state.isMenuVisible
            } else{
                state.isMenuVisible = isVisible
            }
        },
        /**
         * Método setUser é utilizado para quando o usuário fizer login na aplicação,
         * é verificado se o usuário foi informado se sim é definido o cabeçalho 'Authorization' com o valor
         * do user.token, apos isso o menu é exbido
         */
        setUser(state, user){
            state.user = user

            if(user){
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
                state.isMenuVisible = true
            } else{
                //se o usuário não for informado para o setUser então é deletado o cabeçalho 'Authorization'
                //e o usuário terá que se logar novamente na aplicação
                delete axios.defaults.headers.common['Authorization']
                state.isMenuVisible = false
            }
        }
    }
})