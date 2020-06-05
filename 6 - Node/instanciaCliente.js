
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()
/**
 * ContadorA e contadorB compartilham o mesmo
 * endereço de memória, por conta disso caso
 * seja feito uma alteração em qualquer valor ambos
 * irão receber essa alteração
 */
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor ,contadorB.valor)

/**
 * ContadorC e contadorD não compartilham o mesmo
 * endereço de memória, por conta disso cada um possui
 * sua própria instancia dos valores recebidos no require
 */
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)