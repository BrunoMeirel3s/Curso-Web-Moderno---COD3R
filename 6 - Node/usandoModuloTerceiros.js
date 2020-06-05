/**
 *A constante _ está recebendo um require de lodash
 *que é uma biblioteca baixada que possui diversos métodos
 *que podemos utilizar
 */
const _ = require('lodash')
setInterval(() => console.log(_.random(1, 10)), 2000)