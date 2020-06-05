/**
 * require(caminho)(Parametros a serem passados para
 * a função atribuida a module.exports)
 */
const saudacoes = require('./passandoParametros')('Ana', 'Lucas', 'João')
console.log(saudacoes)