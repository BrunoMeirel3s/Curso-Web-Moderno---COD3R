/**
 * Documento utilizado apenas para realização do import e configuração
 * do bootstrap no Vue, observe abaixo que realizamos o import de bootstrap.css,
 * bootstrap.vue.css. Após isso também importamos a instância de Vue e a instância
 *  de BootstrapVue e pedimos para o Vue usar o bootstrapvue atravé do comando
 * Vue.use(Bootstrapvue)
 */

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)