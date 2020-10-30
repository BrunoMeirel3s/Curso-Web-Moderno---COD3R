/**
 * Documento utilizado para definição dos breakpoints do site, que são os tamanhos que serão
 * utilizados como pequeno, médio, grande e extragrande
 */
import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
    breakpoints: {
        xs: 576,
        sm: 768,
        md: 960,
        lg: 1140,
        xl: Infinity
    }
})