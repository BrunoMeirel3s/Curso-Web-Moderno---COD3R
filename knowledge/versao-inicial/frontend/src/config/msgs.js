/**
 * Documento utilizado para definição das mensagens que serão exibidas no frontEnd,
 * Mensagem essas de erro ou sucesso, para isso utilizamos o import do componentes 
 * Toasted em vue-toasted
 */

import Vue from 'vue'
import Toasted from 'vue-toasted'//componente que permite a criação de "pop-ups" com avisos

/**
 * utilizamos o vue.use passando como parâmetro a instância de Toasted
 * e o segundo parâmetro é a fonte de ícones junto com o tempo de duração que no exemplo
 * abaixo é de 3 segundos
 */
Vue.use(Toasted,{
    iconPack: 'fontawesome',
    duration: 3000
})

/**
 * Abaixo estamos registrando o evento defaultSuccess que será utilizado quando o evento
 * ocorrer com sucesso, observe que informamos o nome do evento "defaultSuccess", caso
 * não tenha sido informado a mensagem padrão durante a chamada do evento defaultSuccess utilizamos
 * a 'Operação realizada...' o payload em questão é justamente a mensagem, caso a mesma tenha sido
 * informada iremos exbi-la ali em payload.msg
 */
Vue.toasted.register(
    'defaultSuccess',
    payload => !payload.msg ? 'Operação realizada com sucesso!' : payload.msg,
    {type: 'success', icon: 'check'}//terceiro parametro informamos o tipo e o ícone que será utilizado
)

Vue.toasted.register(
    'defaultError',
    payload => !payload.msg ? 'Oops... Erro inesperado.' : payload.msg,
    {type: 'error', icon : 'times'}
)