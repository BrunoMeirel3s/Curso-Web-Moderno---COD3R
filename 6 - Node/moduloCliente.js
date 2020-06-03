/**
 * O require é utilizado para requerer o código exportado
 * em outro módulo do node, no exemplo abaixo estamos
 * salvando em variáveis aquilo que foi exportado no moduloA
 * e no moduloB
 */
const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)