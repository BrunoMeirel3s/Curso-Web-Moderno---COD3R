/**
 *A constante _ está recebendo um require de lodash
 que é todas as classe e métodos disponíveis em
 node_modules
 */
const _ = require('lodash')
setInterval(() => console.log(_.random(1, 10)), 2000)
